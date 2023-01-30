import { Button, Space } from 'antd'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { CustomCCPWidgetContext } from './connect'

const DialerApp = () => {

    const { agent, contact, CCPInitiated, userLoggedIn, user,  } = useContext(CustomCCPWidgetContext)
    const [state, setState] = useState({
        isDialerInitiated: false,
    })
    useEffect(() => {
        if (CCPInitiated) {
            setState({ ...state, isDialerInitiated: true })
        }
    }, [CCPInitiated, contact])


    const accept = () => {

        connect.contact((contact) => {
            contact.accept()
        })

    }
    const end = () => {

        connect.agent(async function (agent) {
            if (contact) {
                var initialConnection = contact.getInitialConnection();
                console.log({ initialConnection });
                if (initialConnection) {
                    initialConnection.destroy();
                    contact.clear();
                }
            }
        });

    }

    const muteCall = () => {
        agent.mute()
    }



    return (
        <section>

            <div>DialerApp</div>
            {state.isDialerInitiated &&
                <section>
                    <h1>Initiated</h1>
                    <Space>

                        <Button type='primary' onClick={() => accept()}>Accept</Button>
                        <Button type='primary' danger onClick={() => end()}>Reject</Button>
                        <Button type='primary' onClick={() => muteCall()}>Mute</Button>

                    </Space>
                </section>
            }
        </section>

    )
}

export default DialerApp