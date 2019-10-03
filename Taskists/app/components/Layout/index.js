import React from 'react';
import { Layout } from 'antd';
import Sider from '../../components/Sider/index'
import Header from '../../components/Header/index'
import Content from '../../components/Content/index'
import Footer from '../../components/Footer/index'

export default class LayoutStyle extends React.Component {
  render() {
    return (
      <Layout>
        <Sider>
        </Sider>
        <Layout>
          <Header />
          <Content /> 
          <Footer />
        </Layout>
      </Layout>
    )
  }
}
