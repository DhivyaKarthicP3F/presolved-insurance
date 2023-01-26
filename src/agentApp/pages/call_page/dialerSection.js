import React, { useState } from 'react'
import { PhoneOutlined } from '@ant-design/icons';
import { Avatar, Space, Typography, Statistic, Button, Drawer } from 'antd';
import '../../assets/stylesheet/dialer.less'
import { RxArrowRight } from 'react-icons/rx';
import { RenderCustomer360 } from '.';



const DialerSection = ({ activeCall }) => {
    const [visible, setVisible] = useState(false)
    return (
        <div className="agent-main-dialer-section">

            <div className='userinfo'>
                <Space size={10}>
                    <Avatar size={54} src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' />
                    <Space direction='vertical' size={0}>
                        <Typography.Paragraph style={{ margin: 0 }} strong ellipsis={{ rows: 1, tooltip: true }}>{activeCall?.userProfile?.customerProfile?.first_name} {activeCall?.userProfile?.customerProfile?.last_name}</Typography.Paragraph>
                        <Typography.Paragraph style={{ margin: 0 }} ellipsis={{ rows: 1, tooltip: true }}>{activeCall?.userProfile?.customerProfile?.email}</Typography.Paragraph>
                    </Space>
                </Space>
            </div>

            <div className='dialercontainer'>
            </div>

            <div className='contact-attributes'>
                <Space direction='vertical' size={20}>
                    <Space direction='vertical'>
                        <Typography.Text>Contact Information</Typography.Text>
                        <Typography.Text strong>{activeCall.type}</Typography.Text>
                    </Space>
                    <Space direction='vertical'>
                        <Typography.Text>Account Number</Typography.Text>
                        <Typography.Text strong>{activeCall.userProfile.customer360.account_numner}</Typography.Text>
                    </Space>
                    <Space direction='vertical'>
                        <Typography.Text>Phone Number</Typography.Text>
                        <Typography.Text strong>{activeCall.userProfile.customer360.phone_number}</Typography.Text>
                    </Space>
                    <Space direction='vertical'>
                        <Typography.Text>Industry</Typography.Text>
                        <Typography.Text strong>{activeCall.userProfile.customer360.industry}</Typography.Text>
                    </Space>
                    <Space direction='vertical'>
                        <Typography.Text>Status</Typography.Text>
                        <Typography.Text strong>{activeCall.userProfile.customer360.Status}</Typography.Text>
                    </Space>
                    <Button onClick={()=>setVisible(true)} type='link' >Know More &nbsp;<RxArrowRight style={{ verticalAlign: 'middle' }} /></Button>
                </Space>
                <Drawer className='customer-360-drawer' open={visible} title="Customer Details" onClose={() => setVisible(false)} placement='right' width={640}>
                    <RenderCustomer360 customer360={activeCall.userProfile.customer360} />
                </Drawer>
            </div>

        </div>
    )
}

export default DialerSection