import React, { Component } from 'react';
import Layout from '../../components/Layout/index';
import sf from '../../services/serviceFactory';

export default class UserList extends Component {

  async componentDidMount() {
    let users = await sf.getService('UserServices').getUsers();
    console.log("USERS", users)
  }

  render() {
    return (
      <Layout>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <p>USER WORK !</p>
        </div>
      </Layout>
    );
  }
}