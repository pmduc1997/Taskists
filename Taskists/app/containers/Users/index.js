import React, { Component } from 'react';
import { any } from 'prop-types';
import { Row, Col } from 'antd';
import Card from '../../components/Card/index'
import { users } from './userList'

const { Meta } = Card;
const arr = []

export default class UserPage extends Component {
    render() {
        const user = users
        this.arr = user.map((item, key) =>
            <Col span={6}>
                <Card _avatar={item.url} _name={item.name} />
            </Col>
        );

        return (
            <div>
                <Row>
                    {this.arr}
                </Row>
            </div>);
    }
}

