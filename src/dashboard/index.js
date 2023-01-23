import React, { useEffect } from 'react'
import { Router } from '@gatsbyjs/reach-router';
import { ConfigProvider, Layout } from 'antd';
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

const defaultThemeData = { borderRadius: 6, colorPrimary: '#00ae42', fontFamily: 'Poppins', fontSize: 15, }
const componentSize = 'medium'

const AppIndexPage = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  useEffect(() => checkLogin(), [])

  const checkLogin = () => {
    Auth.currentAuthenticatedUser().then((login) =>
      dispatch(updateUser({ ...login }))
    ).catch((err) => {
      console.error(err);
    })
  }


  return (
    <ConfigProvider prefixCls='presolved' theme={{ token: defaultThemeData }} componentSize={componentSize} >
      <Layout className='master'>
        <AgentMainHeader />
        <Router >
          <AgentHomePage path="/*" />
          <AgentSAMLPage path="/login/*" />
        </Router>
        <ConnectCCP user={user} />
      </Layout>
    </ConfigProvider>
  )
}

export default AppIndexPage

