import React from 'react'
import { Card,  Row, Col, Statistic } from 'antd';
import { RenderCustomer360 } from '../call_page';
import { customer360 } from '../../mock/customerProfiles';
const AgentDashboard = () => {
    return (
        <section className='agent_dashboard'>
            <Row gutter={[16, 16]}>
                <Col span={8}>
                    <Card title="Total Calls" bordered={false} style={{ width: 300 }}>
                        <Statistic title="Total Calls" value={112893} />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Total Calls" bordered={false} style={{ width: 300 }}>
                        <Statistic title="Total Calls" value={112893} />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Total Calls" bordered={false} style={{ width: 300 }}>
                        <Statistic title="Total Calls" value={112893} />
                    </Card>
                </Col>
            </Row>
            <Row className='cu360'>
                <Col span={24}>
                    <RenderCustomer360 customer360={customer360()} />
                </Col>
            </Row>
        </section>
    )
}

export default AgentDashboard