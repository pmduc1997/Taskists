
import React from 'react';
// import {columns,data} from './data'
import { columns, data } from "./dataUser";
import { Table, Divider, Tag, Input } from 'antd';

function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}

export default class TableStyle extends React.Component {
  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'User Name',
        dataIndex: 'userName'
      },
      {
        title: 'Email',
        dataIndex: 'email'
      },
      {
        title: 'Password',
        dataIndex: 'password',
        render: text => <Input.Password value={text}/>
      },
      {
        title: 'Role',
        dataIndex: 'role'
      },
      {
        title: 'Created At',
        dataIndex: 'createdAt'
      },
      {
        title: 'Created By',
        dataIndex: 'createdBy'
      },
      {
        title: 'Status',
        dataIndex: 'status',
      },
    ];

    const data = [
      {
        name: 'Duc',
        userName: 'PMDU the freelancer',
        email: 'pmduc@gmail.com',
        description: 'HAHA',
        status: 'active',
        password: 'aaaaaaaaaaaaaaaaa'
      },
      {
        name: 'Khanh',
        userName: 'Khanh maldoo',
        description: 'HOH',
        status: 'active',
      },
      {
        name: 'HuyMini',
        userName: 'Captun cua Nam Anh',
        description: 'Gay',
        status: 'active',
      },
      {
        name: 'NamAnh',
        userName: 'NamAnh of Capgay',
        description: 'BD',
        status: 'active',
      },
      {
        name: 'HuyDD',
        userName: 'Huy DD anh toi',
        description: 'HOH',
        status: 'active',
      },
      {
        name: 'Long',
        userName: 'LongIN',
        description: 'HOH',
        status: 'active',
      },
      {
        name: 'Duong',
        userName: 'DuongGEPONXI',
        description: 'HOH',
        status: 'active',
      },
      {
        name: 'Long',
        userName: 'LongIN',
        description: 'HOH',
        status: 'active',
      },
      {
        name: 'Duong',
        userName: 'DuongGEPONXI',
        description: 'HOH',
        status: 'active',
      },
      {
        name: 'Long',
        userName: 'LongIN',
        description: 'HOH',
        status: 'active',
      },
      {
        name: 'Duong',
        userName: 'DuongGEPONXI',
        description: 'HOH',
        status: 'active',
      }
    ];
    return (
      <Table columns={columns} dataSource={data} />
    )
  }
}