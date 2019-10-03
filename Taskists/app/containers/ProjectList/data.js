export const columns = [
    {
        title: 'Project Name',
        dataIndex: 'projectName',
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        sorter: (a, b) => a.projectName - b.projectName,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Description',
        dataIndex: 'description',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.description - b.description,
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
        key: '1',
        projectName: 'MOCK PROJECT',
        description: 'THIS IS THE BASIC PROJECT',
        status: 'active',
    },
    {
        key: '2',
        projectName: 'BURN CMC PROJECT',
        description: 'ONLY 4 THE MAN',
        status: 'active',
    },
];