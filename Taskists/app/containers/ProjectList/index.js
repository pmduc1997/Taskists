/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { Component } from 'react';
import Layout from '../../components/Layout/index';
import sf from '../../services/serviceFactory';

export default class ProjectList extends Component {

  async componentDidMount() {
    let projects = await sf.getService('ProjectServices').getProjects();
    console.log("projects", projects)
  }

  render() {
    return (
      <Layout>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          {/* <Button>Add Project</Button> */}
          {/* <Table /> */}
        </div>
      </Layout>
    );
  }
}
