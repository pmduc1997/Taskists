import { Input, Button } from "antd";

export const columns = [
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
    key: 'status'
  }
];

export const data = [
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
    status: 'active',
    password: 'aaaaaaaaaaaaaaaaa'
  },
  {
    name: 'NamAnh',
    userName: 'NamAnh of Capgay',
    key: '4',
    description: 'BD',
    status: 'active',
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
    status: 'active',
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
    status: 'active',
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

export default {
  columns, data
}