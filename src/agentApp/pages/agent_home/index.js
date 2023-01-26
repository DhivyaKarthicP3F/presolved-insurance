import React, { useEffect, useState } from 'react'
import { Layout, Tabs, Space, Typography } from 'antd';
const { Content } = Layout;
import { HomeOutlined, PhoneOutlined } from '@ant-design/icons';
import AgentDashboard from './dashboard';
import { useSelector } from 'react-redux';
import ActiveCallPage from '../call_page';

const AgentHomePage = (props) => {

  const activeCall = useSelector((state) => state.activeCall);
  const [state, setState] = useState({
    isActive: false,
    activeKey: 'home',
    items: [{
      label: <Space size={1}><HomeOutlined /> <Typography.Text>Home</Typography.Text></Space>,
      children: <AgentDashboard />,
      key: 'home',
    }],
  })


  useEffect(() => {
    if (activeCall.isActive) {
      let items = [
        ...state.items,
        {
          label: <Space size={1}><PhoneOutlined /> <Typography.Text>New {activeCall.type}</Typography.Text></Space>,
          children: <ActiveCallPage props={activeCall} />,
          key: 'newcall',
        }
      ]
      setState({ ...activeCall, items, activeKey: 'newcall' })
    }
  }, [activeCall])



  return (
    <Content style={{ margin: '24px 0' }} >
      <Tabs type="editable-card" items={state.items} activeKey={state.activeKey} />
    </Content>
  )
}

export default AgentHomePage
