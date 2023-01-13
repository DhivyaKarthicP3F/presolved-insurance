import React from 'react'
import { AmazonOutlined, LaptopOutlined, NotificationOutlined, UserOutlined, SearchOutlined, BellOutlined, QuestionOutlined, PoweroffOutlined } from '@ant-design/icons';
import { Avatar, Badge, Breadcrumb, Button, Layout, Tabs, Space, theme, Typography } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import logo from '../assets/images/logo.svg'


const DashboardIndexPage = () => {
    const { token: { colorBgContainer }, } = theme.useToken();

    const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
        const key = String(index + 1);
        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,
            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    });
    return (
        <Layout className='master'>
            <Header className="main" style={{ background: colorBgContainer }}>
                <div className='primary-items'>
                    <div className="logo" ><img width={132} src={logo} alt="logo" /></div>
                    <div className='dialer-status'>
                        <Space size={24}>
                            <Button shape='round' type='default' icon={<PoweroffOutlined color='red' />} >01:25:00</Button>
                            <Button shape='round' type='default' icon={<AmazonOutlined />} >Connected</Button>

                        </Space>
                    </div>
                </div>
                <div className='secondary-items'>
                    <Space>
                        <Button icon={<SearchOutlined />} type='text' />
                        <Button icon={<QuestionOutlined />} type='text' />
                        <Badge count={5}>
                            <Button icon={<BellOutlined />} type='text' />
                        </Badge>
                        <Space>
                            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                            <Typography.Text strong>John Doe</Typography.Text>
                        </Space>
                    </Space>
                </div>

            </Header>


            <Layout style={{ padding: '24px 0', margin: '24px',background: colorBgContainer, }}>
                <Content
                    style={{
                        padding: '0 24px',
                        minHeight: 280,
                    }}
                >
                    Content
                </Content>
            </Layout>
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

export default DashboardIndexPage