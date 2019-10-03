import { Card } from 'antd';
import React from 'react';
export default class CardStyle extends React.Component{
    render(){
        return(
            <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
        )
    }
}