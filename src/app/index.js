import React from 'react'
import { store } from './store';
import { Provider } from 'react-redux';
import { Router } from '@gatsbyjs/reach-router';
import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';

import './assets/styles/index.less'
const DashboardIndexPage = React.lazy(() => import('./pages'))
const defaultThemeData = { borderRadius: 6, colorPrimary: '#00ae42', fontFamily:'Source Sans Pro' };
const componentSize = 'large'
const NewAppMainPage = () => {
  return (
    <Provider store={store}>
      <ConfigProvider prefixCls='presolved' theme={{ token: defaultThemeData }} componentSize={componentSize} >
        <Router >
          <DashboardIndexPage path="/*" />
        </Router>
      </ConfigProvider>
    </Provider>
  )
}

export default NewAppMainPage