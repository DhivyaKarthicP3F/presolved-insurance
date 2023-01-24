import { Alert, Card, Col, Empty, Result, Row, Space, Typography } from 'antd'
import React from 'react'
import { RecentHistory } from '.'
import '../../assets/stylesheet/callMainPage.less'
import { recentHistory } from '../../mock/customerProfiles'
const CallMainPage = ({ activeProducts, recentHistory }) => {
    return (
        <section className='call-main-page'>

            <section className='products-and-offers'>
                <Row gutter={[16, 16]}>
                    <Col span={12}>
                        <Card title="Products">

                            {
                                activeProducts.map((product, index) => {
                                    return (
                                        <div key={index} className='product-container'>
                                            <div className='flex-box' >
                                                <div className='box-items'>
                                                    <Typography.Text>Policy Name</Typography.Text>
                                                    <Typography.Text strong>{product.policy_name}</Typography.Text>
                                                </div>
                                                <div className='box-items'>
                                                    <Typography.Text>Policy Number</Typography.Text>
                                                    <Typography.Text strong>{product.policy_number}</Typography.Text>

                                                </div>
                                                <div className='box-items'>
                                                    <Typography.Text>Policy Expiry Date</Typography.Text>
                                                    <Typography.Text strong>{product.expiration_date}</Typography.Text>

                                                </div>
                                            </div>

                                        </div>
                                    )
                                })
                            }

                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title="Offers">
                            <Result icon={<Empty />} />
                        </Card>
                    </Col>
                </Row>
            </section>
            <section className='call-recent-history'>
                <RecentHistory recentHistory={recentHistory} />
            </section>

        </section>
    )
}

export default CallMainPage