
import React, { useEffect, useRef } from 'react'
import { Alert, Breadcrumb, Button, Col, Empty, Layout, Menu, Radio, Result, Row, Space, Spin, theme, Typography } from 'antd';
const { Header, Content, Footer } = Layout;
import * as AWS from '@aws-sdk/client-connect'
import { Auth } from 'aws-amplify'
import '../../aws-streams/connect-streams'
import 'antd/dist/reset.css';
import './connect.less'
const connectUrl = "https://p3fusion-qa.my.connect.aws/connect/ccp-v2/";
import CustomCCP from './api';

const AWSSDK = () => {
  let ccp =null;
  const container = useRef(null);
  const [state, setState] = React.useState({
    ccpError: null,
    initiated: false,
    agentInfo: null,
  })


  useEffect(() => initiateCCP(), [])

  const initiateCCP = () => {
    ccp = new CustomCCP(connect)
    ccp.initiateCCP(container.current).then((res) => {
      setState({ ...state, initiated: true })
    }).catch((err) => {
      console.error({ initiateCCP: err })
      setState({ ...state, initiated: true, ccpError: err })
    })
  }
  const { token: { colorBgContainer }, } = theme.useToken();




  return (
    <Layout>
      <Header
        style={{
          justifyContent: 'space-between',
          display: 'flex',
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
        }}
      >
        <div className='logo'><Typography.Title style={{ color: '#fff' }} level={4}>Custom CCP</Typography.Title></div>
        <Menu
          style={{ flex: 1 }}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(3).fill(null).map((_, index) => ({
            key: String(index + 1),
            label: `nav ${index + 1}`,
          }))}
        />
      </Header>
      <Content
        className="site-layout-main"
        style={{
          padding: '0 50px',
        }}
      >   <div className="custom-ccp" ref={container}></div>
        <Breadcrumb style={{ margin: '16px 0', }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>

        <div
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Row gutter={[16, 16]}>
            <Col span={6} className="inner-sidebar padding">
              <Button type='primary' shape='round'>Get States</Button>
            </Col>
            <Col span={18} className="inner-content padding">
              {
                !state.initiated ?
                  <Alert description={<Typography.Text>Please wait while we connect to the AWS CCP</Typography.Text>
                  } type='info' message='connecting' banner icon={<Spin />} />

                  :
                  state.ccpError ?
                    <Result
                      title="Failed to initiate CCP"
                      subTitle={state.ccpError}
                      status="error"
                    />
                    :
                    <Alert description='CCP initiated successfully' type='success' message='Connected' banner />

              }




            </Col>
          </Row>

        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>




  )
}

export default AWSSDK

