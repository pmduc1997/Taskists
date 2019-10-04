/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { Component } from 'react';
import Layout from '../../components/Layout/index';
import sf from '../../services/serviceFactory';

import Table from '../../components/Table/index'
import { Button, Icon } from 'antd';
import {
    Form,
    Input,
    Tooltip,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    AutoComplete,
} from 'antd';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ProjectList from '../ProjectList/index'


const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const residences = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];

class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false,
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

        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="Project Name">
                    {getFieldDecorator('projectName', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your Project Name!',
                            },
                        ],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Description" hasFeedback>
                    {getFieldDecorator('description', {
                        rules: [
                        ],
                    })(<Input.Password />)}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Create your new Project
            </Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

export default class ProjectAdd extends Component {

    async componentDidMount() {
        let projects = await sf.getService('ProjectServices').getProjects();
        console.log("projects", projects)
    }

    render() {
        return (
            <Layout>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    <Switch>
                        <Link to="/projectList"><Button>Go back</Button></Link>
                        <Route exact path="/projectList" component={ProjectList} />
                    </Switch>
                    <WrappedRegistrationForm />
                </div>
            </Layout>
        );
    }
}
