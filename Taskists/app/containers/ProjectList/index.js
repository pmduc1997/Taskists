/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { Component } from 'react';
import Layout from '../../components/Layout/index';
import sf from '../../services/serviceFactory';

import Table from '../../components/Table/index'
import { Button, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ProjectAdd from '../ProjectAdd'
import ProjectDetail from '../ProjectDetail'
export default class ProjectList extends Component {

  async componentDidMount() {
    let projects = await sf.getService('ProjectServices').getProjects();
    console.log("projects", projects)
  }

  render() {
    return (
      <Layout>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <Router>
            <Link to="/projectAdd"><Button>Add Project</Button></Link>
            <Link to="/projectDetail"><Button>Detail Project</Button></Link>
          </Router>
          <Table />
        </div>
      </Layout>
    );
  }
}
