import React from 'react';
import { Layout, Button, Icon } from 'antd';
const { Content } = Layout;

import Table from '../Table/index'
import { columns, data } from '../../containers/HomePage/data'

export default class ContentStyle extends React.Component {
  render() {
    return (
      <Content style={{ margin: '24px 16px 0' }}>
        {this.props.children}
      </Content>
    )
  }
}

