import { Input, List, Avatar, Icon } from 'antd';
import React from 'react'
export default class ProjectDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {}
        };
    }
    //chuyển task từ pending sang in progress
    beginTask = (item) => {
        item.status = 'inProgress';
        this.props.onBegin(item);
    }

    //chuyển task từ in progress sang resolved
    resolveTask = (item) => {
        item.status = 'resolved';
        this.props.onResolve(item);
    }

    //chuyển task từ in progress sang resolved
    closeTask = (item) => {
        item.status = 'closed';
        this.props.onClose(item);
    }

    //edit task
    _doEditTask = (item) => {

    }

    //---------modal start----------
    showModal = () => {
        this.setState({
            titleModal: 'Create Task',
            showModal: true
        })
    }
    hideModal = () => this.setState({ showModal: false });
    //----------modal end-----------

    render() {
        const { taskData } = this.props
        return (
            <List
                itemLayout="horizontal"
                dataSource={taskData}
                renderItem={item => (
                    <List.Item actions={
                        [<a key="list-loadmore-edit" onClick={this.beginTask.bind(this, item)}>edit</a>,
                        this.props.onBegin ? <a onClick={this.beginTask.bind(this, item)} key="list-loadmore-more">begin</a>
                            : this.props.onResolve ? <a onClick={this.resolveTask.bind(this, item)} key="list-loadmore-more">resolve</a>
                                : this.props.onClose ? <a onClick={this.closeTask.bind(this, item)} key="list-loadmore-more">close</a>
                                    : <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
                        ]}>
                        <List.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<a href="https://ant.design">{item.taskName}</a>}
                            description={item.description}
                        />
                    </List.Item>
                )}
            />
        )
    }
}
