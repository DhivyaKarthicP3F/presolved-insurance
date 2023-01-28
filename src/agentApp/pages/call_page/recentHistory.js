import { PlusOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table, Typography } from 'antd';
import React, { useState } from 'react';



const RecentHistory = ({ recentHistory }) => {

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
            <div style={{ flex: 1, display: 'flex', marginBottom: 16, justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
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
};

export default RecentHistory;