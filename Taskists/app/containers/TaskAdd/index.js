/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { Component } from 'react';
import sf from '../../services/serviceFactory';

import { Button, Icon, Form, Input, Menu, Cascader } from 'antd';

class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false,
        users: [
            {
                username: 'pmdu',
            },
            {
                username: 'huygei',
            },
        ]
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };



    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        function onChange(value, selectedOptions) {
            console.log(value, selectedOptions);
        }

        function filter(inputValue, path) {
            return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
        }
        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="Task Name">
                    {getFieldDecorator('taskName', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your Task Name!',
                            },
                        ],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Description">
                    {getFieldDecorator('description', {
                        rules: [
                        ],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Assign to">
                    {getFieldDecorator('assignTo', {
                        rules: [
                        ],
                    })(
                        <Cascader
                            fieldNames={{ label: 'username', value: 'username' }}
                            options={this.state.users}
                            onChange={onChange}
                            placeholder="Please select"
                            showSearch={{ filter }}
                        />
                    )}
                </Form.Item>
                <Form.Item label="Estimate Time">
                    {getFieldDecorator('estimateHour', {
                        rules: [
                        ],
                    })(<Input />)}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Create your new Task
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

export default class TaskAdd extends Component {

    async componentDidMount() {
        let projects = await sf.getService('ProjectServices').getProjects();
        console.log("projects", projects)
    }

    render() {
        return (
            <WrappedRegistrationForm />
        );
    }
}
