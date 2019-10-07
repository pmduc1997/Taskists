import React from 'react';
import {Input,Button} from 'antd'

export const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        render: text => <a>{text}</a>
    },
    {
        title: 'Email',
        dataIndex: 'email'
    },
    {
        title: 'Password',
        dataIndex: 'password',
        render: text => <Input.Password value={text} />
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
        render: text => {
            if (text == 'active') return <Button onClick={() => this._sttOn(text)} type="primary">active</Button>
            else if (text == 'deactive') return <Button type="danger">deactive</Button>
        }
    }
]