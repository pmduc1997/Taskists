
import React, { Component } from 'react';
import Layout from '../../components/Layout/index';
import sf from '../../services/serviceFactory';
import Form from "../../components/Form/index";
import { Col, Row } from 'antd';
export default class UserList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      users: [],
      loading: true
    }
  }

  render() {


    console.log('ALOOOOOO', this.state)
    return (

      <Layout>
        <Row type="flex" justify="start">
          <Col span={3}>
          </Col>
          <Col span={12}>
            <Form />
          </Col>
          <Col span={6}>
          </Col>
        </Row>
      </Layout>
    );
  }
}