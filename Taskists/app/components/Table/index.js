
import React from 'react';
// import {columns,data} from './data'
// import { columns, data } from "./dataUser";
import { Table, Button, Tag, Input } from 'antd';

export default class TableStyle extends React.Component {
  constructor(props) {
    super(props);
    this._sttOn = this._sttOn.bind(this)
  };
  _sttOn(text) {
    console.log('TEXT',text)
  }
  render() {

    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        render: text => <a>{text}</a>,
        key: 'name'
      },
      {
        title: 'User Name',
        dataIndex: 'userName',
        key: 'username'
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email'
      },
      {
        title: 'Password',
        dataIndex: 'password',
        render: text => <Input.Password value={text} />,
        key: 'password'
      },
      {
        title: 'Role',
        dataIndex: 'role',
        key: 'role'
      },
      {
        title: 'Created At',
        dataIndex: 'createdAt',
        key: 'createdAt'
      },
      {
        title: 'Created By',
        dataIndex: 'createdBy',
        key: 'createdBy'
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: text => {
          if (text == 'active') return <Button onClick={() => this._sttOn(text)} type="primary">active</Button>
          else if (text == 'deactive') return <Button type="danger">deactive</Button>
        }
      }
    ];

    const data = [
      {
        name: 'Duc',
        userName: 'PMDU the freelancer',
        email: 'pmduc@gmail.com',
        description: 'HAHA',
        status: 'active',
        password: 'aaaaaaaaaaaaaaaaa',
        role: 'admin',
        key: '1'
      },
      {
        name: 'Khanh',
        userName: 'Khanh maldoo',
        description: 'HOH',
        status: 'active',
        key: '2',
        password: 'aaaaaaaaaaaaaaaaa',
        role: 'user'
      },
      {
        name: 'HuyMini',
        userName: 'Captun cua Nam Anh',
        description: 'Gay',
        key: '3',
        status: 'deactive',
        password: 'aaaaaaaaaaaaaaaaa'
      },
      {
        name: 'NamAnh',
        userName: 'NamAnh of Capgay',
        key: '4',
        description: 'BD',
        status: 'deactive',
        password: 'aaaaaaaaaaaaaaaaa'
      },
      {
        name: 'HuyDD',
        key: '5',
        userName: 'Huy DD anh toi',
        description: 'HOH',
        status: 'active',
        password: 'aaaaaaaaaaaaaaaaa'
      },
      {
        name: 'Long',
        userName: 'LongIN',
        description: 'HOH',
        key: '6',
        status: 'deactive',
        password: 'aaaaaaaaaaaaaaaaa'
      },
      {
        name: 'Duong',
        userName: 'DuongGEPONXI',
        key: '7',
        description: 'HOH',
        status: 'active',
        password: 'aaaaaaaaaaaaaaaaa'
      },
      {
        name: 'Long',
        userName: 'LongIN',
        key: '8',
        description: 'HOH',
        status: 'active',
        password: 'aaaaaaaaaaaaaaaaa'
      },
      {
        name: 'Duong',
        userName: 'DuongGEPONXI',
        key: '9',
        description: 'HOH',
        status: 'deactive',
        password: 'aaaaaaaaaaaaaaaaa'
      },
      {
        name: 'Long',
        userName: 'LongIN',
        key: '10',
        description: 'HOH',
        status: 'active',
        password: 'aaaaaaaaaaaaaaaaa'
      },
      {
        name: 'Duong',
        key: '11',
        userName: 'DuongGEPONXI',
        description: 'HOH',
        status: 'active',
        password: 'aaaaaaaaaaaaaaaaa'
      }
    ];
    return (
      <Table columns={columns} dataSource={data} />
    )
  }
}