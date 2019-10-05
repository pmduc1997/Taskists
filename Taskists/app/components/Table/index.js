
import React from 'react';
import { Table, Button, Tag, Input } from 'antd';

export default class TableStyle extends React.Component {
  render() {
    const { columns, data, loading } = this.props
    return (
      <Table columns={columns} dataSource={data} loading={loading} rowKey="id" />
    )
  }
}