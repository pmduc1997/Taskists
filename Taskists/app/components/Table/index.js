import { Table } from 'antd';
import React from 'react';
import {columns,data} from './data'
function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}
export default class TableStyle extends React.Component {
  render() {
    //const { columns,data } = this.props;
    return (
      <Table columns={columns} dataSource={data} onChange={onChange} rowKey="id"/>
    )
  }
}