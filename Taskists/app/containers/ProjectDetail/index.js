import { Button, Card, Col, Row, Form, Input, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import React from 'react'
import ProjectList from '../ProjectList/index'
import Layout from '../../components/Layout/index';
const { TextArea } = Input;

export default class ProjectDetail extends React.Component {
    render() {
        return (
            <Layout>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    <Switch>
                        <Link to="/projectList"><Button>Go back</Button></Link>
                        <Route exact path="/projectList" component={ProjectList} />
                    </Switch>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card title="Pending" >
                                <WrappedDynamicFieldSet />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="In progress">
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Done">
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Layout>
        )
    }
}



let id = 0;

class DynamicFieldSet extends React.Component {
    remove = k => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        // We need at least one passenger
        if (keys.length === 1) {
            return;
        }

        // can use data-binding to set
        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    };

    add = () => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(id++);
        // can use data-binding to set
        // important! notify form to detect changes
        form.setFieldsValue({
            keys: nextKeys,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const { keys, names } = values;
                console.log('Received values of form: ', values);
                console.log('Merged values:', keys.map(key => names[key]));
            }
        });
    };

    render() {
        const { getFieldDecorator, getFieldValue } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
            },
        };
        const formItemLayoutWithOutLabel = {
            wrapperCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 20, offset: 4 },
            },
        };
        getFieldDecorator('keys', { initialValue: [] });
        const keys = getFieldValue('keys');
        const formItems = keys.map((k, index) => (
            <Form.Item
                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                label={index === 0 ? 'Task' : ''}
                required={false}
                key={k}
            >
                {getFieldDecorator(`names[${k}]`, {
                    validateTrigger: ['onChange', 'onBlur'],
                    rules: [
                        {
                            required: true,
                            whitespace: true,
                            message: "Please input passenger's name or delete this field.",
                        },
                    ],
                })(<TextArea rows={3} placeholder="What needs to be done ?" style={{ width: '80%', marginRight: 8 }} />)}
                {keys.length > 1 ? (
                    <Icon
                        className="dynamic-delete-button"
                        type="minus-circle-o"
                        onClick={() => this.remove(k)}
                    />
                ) : null}
                {
                    <Icon className="dynamic-delete-button"
                        type="arrow-right"
                        onClick={() => this.remove(k)}
                    />
                }
            </Form.Item>
        ));
        return (
            <Form onSubmit={this.handleSubmit}>
                {formItems}
                <Form.Item {...formItemLayoutWithOutLabel}>
                    <Button type="dashed" onClick={this.add} style={{ width: '80%' }}>
                        <Icon type="plus" /> Create Task
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedDynamicFieldSet = Form.create({ name: 'dynamic_form_item' })(DynamicFieldSet);