import React, { Component } from 'react';
import Layout from '../../components/Layout/index';
import sf from '../../services/serviceFactory';
import {users} from './users'
import Table from "../../components/Table/index";
import { Col, Row } from 'antd';
import { columns} from './data';
export default class UserList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users:[],
            loading: true
        }
    }

    render() {
        
          
        console.log('ALOOOOOO', this.state)
        return (
            <Layout>
                <Table data = { this.state.users }  loading = { this.state.loading } columns = {columns}/>
            </Layout>
        );
    }

    async componentDidMount() {
        let userArr = await sf.getService('UserServices').getUsers();
        console.log("USERS", userArr.data)
        this.setState({ users : userArr.data, loading : false })
        console.log('LOADING',this.state)
    }
}