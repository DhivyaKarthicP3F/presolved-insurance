import React, { useEffect } from 'react'
import { navigate, Router } from '@gatsbyjs/reach-router';
import { Button, ConfigProvider, Layout, Modal, notification, theme } from 'antd';
import 'antd/dist/reset.css';
import './assets/stylesheet/index.less'
import AgentMainHeader from './layout/header';
import { useSelector } from 'react-redux';
import { Auth } from 'aws-amplify';
import { useDispatch } from 'react-redux';
import { updateUser } from './store/reducers/user';
import ConnectCCP from './pages/connect';

const AgentHomePage = React.lazy(() => import('./pages/agent_home'))
const AgentSAMLPage = React.lazy(() => import('./pages/login'))

const defaultThemeData = { borderRadius: 6, colorPrimary: '#407db5', fontFamily: 'Poppins', fontSize: 14, }
const componentSize = 'medium'

const AppIndexPage = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const [state, setState] = React.useState({
    authenticated: false,
  })

  useEffect(() => {
    window.addEventListener('beforeunload', alertUser)
    window.addEventListener('unload', clearSession)
    return () => {
      window.removeEventListener('beforeunload', alertUser)
      window.removeEventListener('unload', clearSession)
    }
  })


  useEffect(() => checkLogin(), [user])

  const checkLogin = () => {
    if (!user.isLoggedin) {
      Auth.currentAuthenticatedUser()
        .then((user) => {
          //setState({ authenticated: true })
          dispatch(updateUser(user))
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      setState({ authenticated: true })

    }
  }


  return (
    <ConfigProvider prefixCls='presolved' theme={{ token: defaultThemeData }} componentSize={componentSize} >
      {!state.authenticated ?
        <AgentSAMLPage path="/*" />
        :
        <Layout className='master'>
          
          <AgentMainHeader />
          <Router >
            <AgentHomePage path="/*" />
            <AgentSAMLPage path="/login/*" />
          </Router>

          <ConnectCCP user={user} />
        </Layout>
      }
    </ConfigProvider>
  )
}

export default AppIndexPage

const alertUser = (event) => {
  event.preventDefault()
  event.returnValue = ''
  return ""
}


const generateAlphaNueric = (length) => {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  navigate("/app/" + result);
}



const clearSession = () => {
  console.log("Clearing session");
  Auth.signOut().then(data => navigate('/login')).catch(err => console.log(err));
}

