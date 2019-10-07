
import React from 'react';
import {columns,data} from './data'
function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}
import { Table, Button, Tag, Input } from 'antd';

export default class TableStyle extends React.Component {
  render() {
    const { columns, data, loading } = this.props
    return (
      <Table columns={columns} dataSource={data} onChange={onChange} loading={loading} rowKey="id"/>
      // <Table columns={columns} dataSource={data} loading={loading} rowKey="id" />
    )
  }
}