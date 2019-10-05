import React from 'react'

export const columns = [
    {
        title: 'id',
        dataIndex: 'id',
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        sorter: (a, b) => a.id.length - b.id.length,
        sortDirections: ['descend', 'ascend'],
        render: text => <a>{text}</a>,
    },
    {
        title: 'Project Name',
        dataIndex: 'projectName',
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        sorter: (a, b) => a.projectName.length - b.projectName.length,
        sortDirections: ['descend', 'ascend'],
        render: text => <a>{text}</a>,
    },
    {
        title: 'Description',
        dataIndex: 'description',
        sorter: (a, b) => a.description.length - b.description.length,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Status',
        dataIndex: 'status',
        sorter: (a, b) => a.status.length - b.status.length,
        sortDirections: ['descend', 'ascend'],
    },
];

export const data = [
    {
        id: '1',
        projectName: 'MOCK PROJECT',
        description: 'THIS IS THE BASIC PROJECT',
        status: 'active',
    },
    {
        id: '2',
        projectName: 'BURN CMC PROJECT',
        description: 'ONLY 4 THE MAN',
        status: 'active',
    },
];