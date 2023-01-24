import React, { useEffect, useState } from 'react'
import { PlusOutlined } from '@ant-design/icons';
import { Table, Button, Tabs, Space, Typography, Row, Col, Input, Result, Form, Card } from 'antd';
import DialerSection from './dialerSection';
import '../../assets/stylesheet/customer360.less'
import CallMainPage from './mainPage';
import { useSelector } from 'react-redux';

const ActiveCallPage = (props) => {

    const activeCall =  useSelector((state) => state.activeCall) //props
    const { userProfile } = activeCall;

    const [state, setState] = useState({
        isActive: false,
    })
    const items = [
        {
            key: '1',
            label: `Customer 360`,
            children: <CallMainPage 
            recentHistory={activeCall.userProfile.recentHistory} 
            activeProducts={activeCall.userProfile.activeProducts}
            />,
        },
        {
            key: '2',
            label: `History`,
            children: <RenderCustomer360 recentHistory={activeCall.userProfile.recentHistory} customer360={activeCall.userProfile.customer360} />,
        },
        {
            key: '3',
            label: `Active Policy Details`,
            children: <RenderCustomer360 recentHistory={activeCall.userProfile.recentHistory} customer360={activeCall.userProfile.customer360} />,
        },
        {
            key: '4',
            label: `Activities`,
            children: <RenderCustomer360 recentHistory={activeCall.userProfile.recentHistory} customer360={activeCall.userProfile.customer360} />,
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
                        <DialerSection activeCall={activeCall} />
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


export const RecentHistory = ({ recentHistory }) => {

    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});

    const columns = [
        {
            title: 'Task Name',
            dataIndex: 'task_name',
            key: 'task_name',
        },
        {
            title: 'Status',
            dataIndex: 'task_status',
            key: 'task_status',

        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',

        },
        {
            title: 'Assignee',
            dataIndex: 'assigned_to',
            key: 'assigned_to',
        },
        {
            title: 'Date',
            dataIndex: 'due_date',
            key: 'due_date',
        },
        {
            title: 'Duration',
            dataIndex: 'duration',
            key: 'duration',
        },
    ];

    return (
        <section style={{ margin: '30px 0' }}>
            <div style={{ margin: '10px 0' }}><Typography.Text strong>Recent History</Typography.Text></div>
            <div style={{ flex: 1, display: 'flex', marginBottom: 16, justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }} >
                <Space>
                    <Input.Search placeholder='Search' style={{ width: 300 }} />
                </Space>
                <Space>
                    <Button type='primary' icon={<PlusOutlined />}>Add New Task</Button>
                </Space>
            </div>
            <Table columns={columns} dataSource={recentHistory} />
        </section>
    );
}

export const RenderCustomer360 = ({ customer360, recentHistory }) => {

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
    const renderAsForm = () => {
        form.setFieldsValue({
            "c360": {
                ...customer360
            }
        })
        return (
            <Form form={form} layout='vertical' name='customer360' >
                <Row gutter={[16, 16]}>
                    {
                        jsonToFormFields(customer360).map((field, index) => {
                            return (
                                <Col span={8} key={index}>
                                    <Form.Item name={['c360', field.name]} label={field.name.toLocaleUpperCase().replace("_", " ")} >
                                        <Input />
                                    </Form.Item>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Form>
        )
    }
    return (
     
            <section className='customer_360_section'>
                <Card bordered title={null}>
                    <table>
                        <tbody >
                            {
                                jsonToFormFields(customer360).map((field, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <Typography.Text>
                                                    {field.name.toLocaleUpperCase().replace("_", " ")}
                                                </Typography.Text>
                                            </td>
                                            <td>
                                                <Typography.Text strong ellipsis={{tooltip:true}}>
                                                    {field.value}
                                                </Typography.Text>
                                            </td>
                                        </tr>
                                )
                                })
                            }
                        </tbody>
                    </table>
                </Card>
            </section>            
       
    )

}