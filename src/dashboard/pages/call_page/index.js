import React, { useEffect, useState } from 'react'
import { AmazonOutlined, HomeOutlined, PlusOutlined, PhoneOutlined, UserOutlined, SearchOutlined, BellOutlined, QuestionOutlined, PoweroffOutlined } from '@ant-design/icons';
import { Avatar, Badge, Table, Button, Layout, Tabs, Space, theme, Typography, Row, Col, Input, Statistic, Result, Form } from 'antd';
import { useSelector } from 'react-redux';


const ActiveCallPage = (props) => {
    const activeCall = useSelector((state) => state.activeCall)
    const { userProfile } = activeCall;

    const [state, setState] = useState({
        isActive: false,
    })
    const items = [
        {
            key: '1',
            label: `Customer 360`,
            children: <RenderCustomer360 customer360={activeCall.userProfile.customer360} />,
        },
        {
            key: '2',
            label: `History`,
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
    useEffect(() => {
        setState({ isActive: true })
    }, [activeCall.isActive])

    return (
        <section>
            {
                state.isActive ?
                    <section className='main-content'>
                        <div className="dialer-section">

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
                                <Statistic title="Call Type" value="Inbound" />
                                <Statistic title="Account Number" value="123456789" />
                                <Statistic title="Phone Number" value="+1 123-456-7890" />
                                <Statistic title="Status" value="Active" suffix={<PhoneOutlined />} />
                            </div>

                        </div>
                        <div className='content-section'>
                            <Tabs size='small' defaultActiveKey="1" items={items} />
                        </div>
                    </section>
                    :
                    <Result title="Please wait loading . . ." />
            }
        </section>
    )
}


export default ActiveCallPage


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
                    {/*    <Button onClick={setAgeSort}>Sort age</Button>
                    <Button onClick={clearFilters}>Clear filters</Button>
                    <Button onClick={clearAll}>Clear filters and sorters</Button> */}
                </Space>
                <Space>
                    <Button onClick={() => recordScreen()} type='primary' icon={<PlusOutlined />}>Add New Task</Button>
                    <Button onClick={() => recordScreen()} type='primary' icon={<PlusOutlined />}>Close Task</Button>
                </Space>
            </div>
            <Table columns={columns} dataSource={data} onChange={handleChange} />
        </section>
    );
}


export const RenderCustomer360 = ({ customer360 }) => {
    console.log({ customer360 });
    // const json to antd form fields   
    const jsonToFormFields = (json) => {
        const fields = [];
        for (const [key, value] of Object.entries(json)) {
            fields.push({
                name: key,
                value: value
            })
        }
        return fields;
    }
    const [form, useForm] = Form.useForm();
    form.setFieldsValue({
        "c360":{
        ...customer360
        }
    })

    return (
        <Col span={24}>

            <Form form={form} layout='vertical' name='customer360' >
                <Row gutter={[16, 16]}>
                    {
                        jsonToFormFields(customer360).map((field, index) => {
                            return (
                                <Col span={8} key={index}>
                                    <Form.Item name={['c360',field.name]}  label={field.name.toLocaleUpperCase().replace("_", " ")} >
                                        <Input  />
                                    </Form.Item>
                                </Col>
                            )
                        })
                    }

                </Row>
            </Form>

        </Col>
    )

}