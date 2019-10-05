import { Button, Card, Col, Row, Form, Input, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import React from 'react'
import ProjectList from '../ProjectList/index'
import Layout from '../../components/Layout/index';
const { TextArea } = Input;
import Modal from '../../components/Modal/index'
import TaskAdd from '../TaskAdd/index'
import TaskList from '../TaskList/index'
import { taskData } from "./data";
var pendingTask, inProgressTask, resolvedTask, closedTask
export default class ProjectDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //modal related
            titleModal: '',
            showModal: false,
            //task list related
            pendingTask: [],
            inProgressTask: [],
            resolvedTask: [],
            closedTask: [],
        };
    }

    componentDidMount() {
        this.filterTaskData()
    }

    filterTaskData() {
        pendingTask = taskData.filter(task => task.status == 'pending');
        inProgressTask = taskData.filter(task => task.status == 'inProgress');
        resolvedTask = taskData.filter(task => task.status == 'resolved');
        closedTask = taskData.filter(task => task.status == 'closed');
        this.setState({
            pendingTask: pendingTask,
            inProgressTask: inProgressTask,
            resolvedTask: resolvedTask,
            closedTask: closedTask,
        })
    }

    _doBeginTask(task) {
        //khai báo biến
        let { pendingTask, inProgressTask, } = this.state;
        //thực hiện thay đổi mảng
        if (pendingTask.indexOf(task) !== -1) {
            //xóa phần tử khỏi pending
            pendingTask.splice(pendingTask.indexOf(task), 1);
            //thêm phần tử vào in progress
            inProgressTask.push(task);
            //render lại
            this.setState({
                pendingTask: pendingTask,
                inProgressTask: inProgressTask
            })
        }
    }

    _doResolveTask(task) {
        //khai báo biến
        let { inProgressTask, resolvedTask, } = this.state;
        //thực hiện thay đổi mảng
        if (inProgressTask.indexOf(task) !== -1) {
            //xóa phần tử khỏi inProgress
            inProgressTask.splice(inProgressTask.indexOf(task), 1);
            //thêm phần tử vào Resolved
            resolvedTask.push(task);
            //render lại
            this.setState({
                inProgressTask: inProgressTask,
                resolvedTask: resolvedTask
            })
        }
    }

    _doCloseTask(task) {
        //khai báo biến
        let { resolvedTask, closedTask, } = this.state;
        //thực hiện thay đổi mảng
        if (resolvedTask.indexOf(task) !== -1) {
            //xóa phần tử khỏi resolved
            resolvedTask.splice(resolvedTask.indexOf(task), 1);
            //thêm phần tử vào closed
            closedTask.push(task);
            //render lại
            this.setState({
                resolvedTask: resolvedTask,
                closedTask: closedTask
            })
        }
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
        return (
            <Layout>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    <Switch>
                        <Link to="/projectList"><Button>Go back</Button></Link>
                        <Route exact path="/projectList" component={ProjectList} />
                    </Switch>
                    <Row gutter={16}>
                        <Col span={6}>
                            <Card title="Pending" >
                                <Modal title={this.state.title} visible={this.state.showModal} onClose={this.hideModal}><TaskAdd /></Modal>
                                <TaskList taskData={pendingTask} onBegin={this._doBeginTask.bind(this)} />
                                <Button type="dashed" style={{ width: '100%' }} onClick={this.showModal}>
                                    <Icon type="plus" /> Create Task
                                </Button>
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card title="In progress">
                                <TaskList taskData={inProgressTask} onResolve={this._doResolveTask.bind(this)} />
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card title="Resolved">
                                <TaskList taskData={resolvedTask} onClose={this._doCloseTask.bind(this)} ></TaskList>
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card title="Closed">
                                <TaskList taskData={closedTask}></TaskList>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Layout>
        )
    }
}
