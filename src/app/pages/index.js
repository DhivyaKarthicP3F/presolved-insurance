import React, { useState } from 'react'
import { AmazonOutlined, HomeOutlined, PlusOutlined, PhoneOutlined, UserOutlined, SearchOutlined, BellOutlined, QuestionOutlined, PoweroffOutlined } from '@ant-design/icons';
import { Avatar, Badge, Table, Button, Layout, Tabs, Space, theme, Typography, Row, Col, Input, Statistic } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import logo from '../assets/images/logo.svg'


const DashboardIndexPage = () => {
    const { token: { colorBgContainer }, } = theme.useToken();
    const initialItems = [
        {
            label: <Space size={1}><HomeOutlined /> <Typography.Text>Home</Typography.Text></Space>,
            children: <MainContent />,
            key: '1',
        },
        {
            label: <Space size={1}><PhoneOutlined /> <Typography.Text>Phone Call</Typography.Text></Space>,
            children: <MainContent />,
            key: '3',
            closable: false,
        },
    ];
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
            <Content style={{ margin: '24px 0' }} >
                <Tabs type="editable-card" items={initialItems} />
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Presolved Iinsurance ©2023
            </Footer>
        </Layout>
    )
}


const MainContent = () => {
    const items = [
        {
            key: '1',
            label: `History`,
            children: <TableComponent />,
        },
        {
            key: '2',
            label: `General Assistance`,
            children: <TableComponent />,
        },
        {
            key: '3',
            label: `Active Policy Details`,
            children: <TableComponent />,
        },
        {
            key: '4',
            label: `Activities`,
            children: <TableComponent />,
        },
    ];
    return (
        <section className='main-content'>
            <div className="dialer-section">

                <div className='userinfo'>
                    <Space size={10}>
                        <Avatar size={54} src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' />
                        <Space direction='vertical' size={0}>
                            <Typography.Text strong>John Doe</Typography.Text>
                            <Typography.Text>Policy Number: 123456789</Typography.Text>
                        </Space>
                    </Space>
                </div>
                
                <div className='dialercontainer'>

                </div>

                <div className='contact-attributes'>
                    <Statistic title="Call Type" value="Inbound" />
                    <Statistic title="Account Number" value="123456789" />
                    <Statistic title="Phone Number" value="+1 123-456-7890" />
                    <Statistic title="Status" value="Active" suffix={<PhoneOutlined/>} />
                </div>

            </div>
            <div className='content-section'>
                <Tabs size='small' defaultActiveKey="1" items={items} />
            </div>
        </section>
    )
}



const TableComponent = () => {
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        },
        {
            key: '4',
            name: 'Jim Red',
            age: 32,
            address: 'London No. 2 Lake Park',
        },
    ];
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});
    const handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };
    const clearFilters = () => {
        setFilteredInfo({});
    };
    const clearAll = () => {
        setFilteredInfo({});
        setSortedInfo({});
    };
    const setAgeSort = () => {
        setSortedInfo({
            order: 'descend',
            columnKey: 'age',
        });
    };
    const columns = [
        {
            title: 'Task Name',
            dataIndex: 'name',
            key: 'name',
            filters: [
                {
                    text: 'Joe',
                    value: 'Joe',
                },
                {
                    text: 'Jim',
                    value: 'Jim',
                },
            ],
            filteredValue: filteredInfo.name || null,
            onFilter: (value, record) => record.name.includes(value),
            sorter: (a, b) => a.name.length - b.name.length,
            sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            sorter: (a, b) => a.age - b.age,
            sortOrder: sortedInfo.columnKey === 'age' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            filters: [
                {
                    text: 'London',
                    value: 'London',
                },
                {
                    text: 'New York',
                    value: 'New York',
                },
            ],
            filteredValue: filteredInfo.address || null,
            onFilter: (value, record) => record.address.includes(value),
            sorter: (a, b) => a.address.length - b.address.length,
            sortOrder: sortedInfo.columnKey === 'address' ? sortedInfo.order : null,
            ellipsis: true,
        },
    ];

    return (
        <section style={{ margin: '30px 0' }}>
            <div style={{ flex: 1, display: 'flex', marginBottom: 16, justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }} >


                <Space>
                    <Input.Search placeholder='Search' style={{ width: 300 }} />
                    <Button onClick={setAgeSort}>Sort age</Button>
                    <Button onClick={clearFilters}>Clear filters</Button>
                    <Button onClick={clearAll}>Clear filters and sorters</Button>
                </Space>
                <Space>
                    <Button type='primary' icon={<PlusOutlined />}>Add New Task</Button>
                </Space>
            </div>
            <Table columns={columns} dataSource={data} onChange={handleChange} />
        </section>
    );
}

export default DashboardIndexPage