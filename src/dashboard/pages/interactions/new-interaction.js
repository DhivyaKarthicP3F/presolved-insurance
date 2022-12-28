import { CheckCircleOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Card, Col, Collapse, Dropdown, Form, Input, Menu, notification, Result, Row, Select, Space, Tabs, Typography, Modal } from 'antd';
import { filter, find } from 'lodash';
import React, { useState } from 'react';
import { SlBasket, SlCallEnd, SlPlus } from 'react-icons/sl';
import { useSelector } from 'react-redux';
import SearchCustomer from './search-customer';
import * as mutations from '../../../graphql/mutations'
import { FaSave } from 'react-icons/fa';
import { API } from 'aws-amplify';
const { Panel } = Collapse;


const NewInteractionForm = (props) => {

    const config = useSelector((state) => state.config);
    const settings = useSelector((state) => state.settings);
    const [form] = Form.useForm();
    const [tab, activeTab] = useState("searchCustomer")
    const [state, setState] = useState({
        settings,
        showAddTask: false,
        isTemplatesLoaded: false,
        tasks: [],
        showWrapButton: false,
        channel: props.settings?.channel || {
            "id": props.settings?.channel?.id || null,
            "contactID": props.settings?.channel?.contactID || null,
            "channelType": props.settings?.channel?.type || null,
            "tasks": {
                "items": [],
                "nextToken": null
            },
        },
    })
    const saveTask = (taskData) => {
        /* {id,assignTo,channelID,contactID,channelType,Name,taskAttributes,status} */
        let agent = state.settings.username
        const newtask = {
            assignTo: agent,
            contactID: taskData.contactID,
            channelID: taskData.channelID,
            channelType: state.settings.activeTask.type,
            Name: taskData.name,
            status: 'pending',
            taskAttributes: JSON.stringify(taskData.attributes)
        }
        console.log({ newtask })

        API.graphql({ query: mutations.createTask, variables: { input: newtask } }).then((result) => {
            console.log({ id: newtask.channelID, result });
        }).catch((error) => {
            console.error({ mutationscreateChannel: error })
        })

    }

    const addTask = (id) => {
        let { tasks } = state
        let findtask = find(config.templates.data, { id })
        let isAdded = filter(state.tasks, { id })
        if (isAdded.length > 0) {
            notification.warning({
                message: "You have already added the task " + findtask.name
            })
        } else {

            let parseFields = JSON.parse(findtask.attributes)
            let newformat = parseFields.map((itm) => {
                return {
                    ...itm,
                    name: itm.name.replaceAll(" ", "_")
                }
            })
            let rawtaskItem = {
                ...findtask,
                attributes: newformat
            }
            //let taskItem = formatTemplateAttributes(rawtaskItem)
            tasks.push(rawtaskItem)
            activeTab(tasks[tasks.length-1].id)
            setState({ ...state, tasks })
            
        }


    }

    const onFinishFailed = (e) => {
        console.log({ e });
    }

    const onFinish = (e) => {
        let { task } = e.case
        console.log({ form: e });
        Modal.confirm({
            title: 'Are you sure want to Wrap the call',
            icon: <CheckCircleOutlined />,
            content: 'This will complete the call / Chat',
            okText: 'Yes, Wrap the call',
            cancelText: 'No, Ignore it',
            onOk: () => {
                for (var i = 0; i < task.length; i++) {
                    let tsk = task[i]
                    saveTask(tsk)
                }

            }
        });

    }

    let id = state.settings.activeTask?.contactID

    return (
        <Form onFinishFailed={onFinishFailed} form={form} name="case" layout="vertical" onFinish={onFinish}
            initialValues={{ case: { interactionID: id, task: { interactionID: id, attributes: { Building_Number: 25 } } } }}>
            <section className='task-section'>
                <div className='add-task-button'>
                    <Space size={15} className="act-button">
                        <Dropdown overlay={
                            <Menu items={
                                config.templates.data.map((tasks) => {
                                    return {
                                        "key": tasks.id,
                                        "label": tasks.name
                                    }
                                })
                            } onClick={({ key }) => addTask(key)}
                            />}
                            placement="bottomLeft" arrow>
                            <Button type='primary' shape='round' size='large' icon={<SlBasket />} > &nbsp; Add Task</Button>
                        </Dropdown>
                        {/* <Button shape='round' onClick={() => form.submit()} type='primary' size='large' icon={<FaSave />} > &nbsp; Wrap Call </Button> */}
                        <Button shape='round' onClick={() => activeTab("completeCall")} type='primary' size='large' icon={<FaSave />} > &nbsp; Wrap Call </Button>
                    </Space>
                </div>
                <Tabs
                    defaultActiveKey="searchCustomer"
                    activeKey={tab}
                    onChange={(e) => activeTab(e)}
                    items={[
                        {
                            "label": "Search Customer",
                            "key": "searchCustomer",
                            "children": <SearchCustomer />
                        },
                        ...state.tasks.map((task, index) => {
                            
                            return {
                                "label": task.name,
                                "key": task.id,
                                "children": <RenderTaskItems onFinish={onFinish} form={form} name={task.name.replaceAll(" ", "-")} state={state} settings={state.settings} setState={setState} task={task} index={index} />,
                            }

                        }),
                        {
                            "label": "Complete Call",
                            "key": "completeCall",
                            "children": <Space size={20} style={{ width: 600 }} direction="vertical">
                                <Form.Item label=" Notes">
                                    <Input.TextArea rows={10} />
                                </Form.Item>
                                <Button onClick={() => form.submit()} block type='primary' danger shape='round' size='large' icon={<SlCallEnd />} >&nbsp; Complete</Button>
                            </Space>



                        },
                    ]}
                />
            </section>
        </Form>

    )
}

const RenderTaskItems = ({ name, task, index, state }) => {

    return (
        <section className='task-item'>
            <Row style={{ marginTop: 30 }}>
                <Col span={24}>

                    {/* Hidden Field*/}
                    <Form.Item initialValue={state.channel.id} label={null} name={['case', 'channel', 'ID']} style={{ display: 'none' }}>
                        <Input type='hidden' />
                    </Form.Item>
                    {/* Hidden Field*/}
                    {/* Hidden Field*/}
                    <Form.Item initialValue={task.name} label={null} name={['case', 'task', index, 'name']} style={{ display: 'none' }}>
                        <Input type='hidden' />
                    </Form.Item>
                    <Form.Item initialValue={state.settings.activeTask.contactId} label={null} name={['case', 'task', index, 'contactID']} style={{ display: 'none' }}>
                        <Input type='hidden' />
                    </Form.Item>
                    <Form.Item initialValue={state.channel.id} label={null} name={['case', 'task', index, 'channelID']} style={{ display: 'none' }}>
                        <Input type='hidden' />
                    </Form.Item>
                    {/* Hidden Field*/}

                    <Typography.Title level={5}>{task.description}</Typography.Title>
                    <Row gutter={[16, 16]}>
                        {task.attributes.map((field, findex) =>
                            <IRenderField taskName={name} key={findex} data={field} index={findex} taskIndex={index} />
                        )}
                        <Col span={24}>
                            <Form.Item wrapperCol={{ span: 8 }} label="Assign Task to" name={["case", "task", index, "assignTo"]}>
                                <Select  >
                                    <option value="p3fusion">p3fusion</option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section >

    )
}

export default NewInteractionForm




export const IRenderField = ({ taskName, data, index, taskIndex }) => {
    if (data.type === 'text') {
        return <Col span={24} key={index}>
            <Form.Item
                rules={
                    [{
                        required: data.required | false,
                        message: data.description,
                    }]
                }
                help={data.description}
                label={data.name}
                name={["case", "task", taskIndex, 'attributes', index, data.name]}>
                <Input />
            </Form.Item>
        </Col>
    }
    if (data.type === 'textarea') {
        return <Col span={24} key={index}>
            <Form.Item
                rules={
                    [{
                        required: data.required | false,
                        message: data.description,
                    }]
                }
                help={data.description}
                label={data.name}
                name={["case", "task", taskIndex, 'attributes', index, data.name]}>
                <Input.TextArea rows={data.rows} />
            </Form.Item>
        </Col>
    }
    if (data.type === 'date') {
        return <Col span={24} key={index}>
            <Form.Item
                rules={
                    [{
                        required: data.required | false,
                        message: data.description,
                    }]
                }
                help={data.description}
                label={data.name}
                name={["case", "task", taskIndex, 'attributes', index, data.name]}>
                <DatePicker format="MM/DD/YYYY" allowClear
                    defaultValue={moment(moment().subtract(data?.defaultValue.split("days")[0] || 7, 'days'), 'MM/DD/YYYYY')} />
            </Form.Item>
        </Col>
    }
    if (data.type === 'select') {
        return <Col span={24} key={index}>
            <Form.Item
                rules={
                    [{
                        required: data.required | false,
                        message: data.description,
                    }]
                }
                help={data.description}
                label={data.name}
                name={["case", "task", taskIndex, 'attributes', index, data.name]}>
                <Select defaultValue={[data.defaultValue]} options={data.options.map((rec) => { return { value: rec } })} />
            </Form.Item>
        </Col>
    }
    return (<></>)
}