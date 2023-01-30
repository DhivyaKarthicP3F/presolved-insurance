import { Avatar, Space, Typography, Button, Drawer, Spin, Popover, Popconfirm, Modal, FloatButton, notification } from 'antd'

import React, { useRef, useState, } from 'react'
import { useEffect } from 'react'

import { updateUser, } from '../../store/reducers/user'
import { changeAgentAvailibility, updateSettings } from '../../store/reducers/settings'
import { addNewChannel } from '../../store/reducers/channels'
import { useDispatch, useSelector } from 'react-redux'

import { navigate } from '@gatsbyjs/reach-router'
import ccpOperations from './ccpOperations'
import { createChannel } from './api'
import '../../../aws-streams/connect-streams'
import '../../../aws-streams/amazon-connect-customer-profiles'
import '../../../aws-streams/amazon-connect-task'
import { activeProducts, customer360, userProfilesMock, policyDetails, recentHistory } from '../../mock/customerProfiles'
import { updateCalls } from '../../store/reducers/activeCalls'
const connectUrl = "https://p3fusion-qa.my.connect.aws/ccp-v2";


const ConnectCCP = (props) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user);
  const ccp = useRef(null);
  let acceptedCtx = new Map();
  const [state, setState] = useState({
    channel: null,    
  })

  useEffect(() => initiateCCP(), [])

  const initiateCCP = () => {

    if (user.isLoggedin && ccp.current) {
      connect.agentApp.initCCP(ccp.current, {
        ccpUrl: connectUrl, // REQUIRED
        region: "us-east-1", // REQUIRED for `CHAT`, optional otherwise
        softphone: {
          // optional, defaults below apply if not provided
          allowFramedSoftphone: true, // optional, defaults to false
          disableRingtone: false, // optional, defaults to false
          ringtoneUrl: "./ringtone.mp3" // optional, defaults to CCP’s default ringtone if a falsy value is set
        },
        // optional, defaults to connect.getLog()
        ccpAckTimeout: 5000, //optional, defaults to 3000 (ms)
        ccpSynTimeout: 3000, //optional, defaults to 1000 (ms)
        ccpLoadTimeout: 10000 //optional, defaults to 5000 (ms)
      });

      const cp = new ccpOperations(connect);
      cp.getLoginStatus().then((agentInfo) => {
        dispatch(updateUser({ ...agentInfo }))
        dispatch(changeAgentAvailibility(agentInfo.status))
        dispatch(updateSettings({ ccpInitiated: true }))
        listenIncomingActivities()
      });
    }
  }



  const listenIncomingActivities = () => {

    connect.contact(function (contact) {
      setState({...state,contacts:contact})
      contact.onConnecting(function (ctx) {
        console.log("Presolved::connect::contact::onConnecting::", contact);
        var contactData = ctx._getData()
        var type = ctx.getType()
        console.log({ contactData });
        Modal.confirm({
          title: `Incoming ${type}`,
          content: `Do you want to accept this ${type} ${contactData.contactId} ?`,
          okText: 'Accept',
          cancelText: 'Reject',
          onOk() {
            console.log('OK');
            contact.accept((error, responseData) => {
              if (error) {
                console.error({ error });
              }
              console.log({ responseData });
            });
          },
          onCancel() {
            console.log('Cancel');
          },
        })


        setState({ ...state, showCallNotification: true })
        /*  let settings = {
             eventName: "onConnecting",
             activeTask: contactData,
             isConnected: false
         }
         dispatch(updateSettings(settings)) */
      })

      contact.onIncoming(function (ctx) {
        let contactAttributes = ctx._getData()
        console.log("Presolved::connect::contact::onRefresh::", contactAttributes);
      });

      contact.onRefresh(function (ctx) {
        let contactAttributes = ctx._getData()
        console.log("Presolved::connect::contact::onRefresh::", contactAttributes);
        dispatch(updateSettings({ contactDuration: contactAttributes.contactDuration }))
      });

      contact.onAccepted(function (ctx) {
        let contactAttributes = ctx._getData()

        delete contactAttributes.connections
        delete contactAttributes.contactFeatures
        delete contactAttributes.queue

        const userProfile = getRandomObjectFromArray()

        let createChannel = {
          notes: "New call picked by " + user?.attributes?.email || "",
          assignTo: " ",
          contactID: contactAttributes.contactId,
          channelType: contactAttributes.type,
          contactAttributes: { ...contactAttributes, userProfile }
        }

        dispatch(updateCalls({ isActive: true, ...contactAttributes, userProfile, contact: contact }))
        setState({ ...state, channel: createChannel })


        /*
        let saveChannel = {
          ...createChannel,
          contactAttributes: JSON.stringify({ ...contactData, userProfile })
        }
        createChannel(saveChannel).then((channel) => {
 
         }).catch((err) => {
           console.error({ channelError: err })
         }) */

      });

      contact.onEnded(function () {
        console.log("Presolved::connect::contact::onEnded::", contact);
        var contactData = contact._getData()
        console.log({
          onEnded: contactData
        });
        let settings = {
          eventName: "onEnded",
          activeTask: null,
          isConnected: false
        }
        dispatch(updateSettings(settings))
      });

      contact.onConnected(function (ctx) {
        console.log("Presolved::connect::contact::onConnected::", ctx);
        let contactData = ctx._getData()
        /*  let userProfile = getRandomObjectFromArray()
 
         dispatch(updateCalls({ isActive: true, ...contactData, userProfile }))
         setState({ ...state, channel: contactData }) */

      });



    });

  }

  const getRandomObjectFromArray = () => {
    let array = userProfilesMock()
    let customerProfile = array[Math.floor(Math.random() * array.length)];
    return {
      customerProfile,
      recentHistory: recentHistory(),
      customer360: customer360(),
      activeProducts: activeProducts(),
      policyDetails: policyDetails(),

    }
  }

  const endCall = () => {

    connect.contact((contact) => {
      contact.getAgentConnection().destroy({
        success: function () {
          logInfoMsg("Disconnected contact via Streams");
        },
        failure: function () {
          logInfoMsg("Failed to disconnect contact via Streams");
        }
      });
    })

  }

  return (
    <section className='connect-widget'>
      <Button block danger onClick={() => endCall()} >End Call</Button>
      <div ref={ccp} style={{ height: 500, width: '100%', visibility: '' }}></div>

    </section>
  )
}

export default ConnectCCP