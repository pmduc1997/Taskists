import React from 'react';
import { Layout } from 'antd';
const { Header } = Layout;

export default class HeaderStyle extends React.Component{
    render(){
        return(
      <Header style={{ background: '#fff', padding: 0 }} />
        )
    }
}
