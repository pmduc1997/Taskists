import React, { Component } from 'react';
import Layout from '../../components/Layout/index';
import sf from '../../services/serviceFactory';
import {users} from './users'
import Table from "../../components/Table/index";
import { Col, Row } from 'antd';
export default class UserList extends Component {

    async componentDidMount() {
        let users = await sf.getService('UserServices').getUsers();
        console.log("USERS", users)
    }

    render() {
        const user = users
        this.arr = user.map((item, key) =>
            {

            }
        );
        return (
            <Layout>
                <Table />
            </Layout>
        );
    }
}