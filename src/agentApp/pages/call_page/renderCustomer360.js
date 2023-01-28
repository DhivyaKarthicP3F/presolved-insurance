import { Card, Col, Form, Input, Row, Typography } from 'antd';
import React from 'react';



 const RenderCustomer360 = ({ customer360 }) => {

    // const json to antd form fields   
    const jsonToFormFields = (json) => {
        const fields = [];
        for (const [key, value] of Object.entries(json)) {
            fields.push({
                name: key,
                value: value
            });
        }
        return fields;
    };
    const [form, useForm] = Form.useForm();
    const renderAsForm = () => {
        form.setFieldsValue({
            "c360": {
                ...customer360
            }
        });
        return (
            <Form form={form} layout='vertical' name='customer360'>
                <Row gutter={[16, 16]}>
                    {jsonToFormFields(customer360).map((field, index) => {
                        return (
                            <Col span={8} key={index}>
                                <Form.Item name={['c360', field.name]} label={field.name.toLocaleUpperCase().replace("_", " ")}>
                                    <Input />
                                </Form.Item>
                            </Col>
                        );
                    })}
                </Row>
            </Form>
        );
    };
    return (

        <section className='customer_360_section'>
            <Card bordered title={null}>
                <table>
                    <tbody>
                        {jsonToFormFields(customer360).map((field, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <Typography.Text>
                                            {field.name.toLocaleUpperCase().replace("_", " ")}
                                        </Typography.Text>
                                    </td>
                                    <td>
                                        <Typography.Text strong ellipsis={{ tooltip: true }}>
                                            {field.value}
                                        </Typography.Text>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Card>
        </section>

    );

};


export default  RenderCustomer360