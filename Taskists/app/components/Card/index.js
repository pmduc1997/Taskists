import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;

import React from 'react';
export default class CardStyle extends React.Component {
    render() {
        const cardStyle = {
            width: 300, margin: 20
        }
        const {_avatar, _name, _rank} = this.props;
        return (
            <Card
                style={cardStyle}
                cover={
                    <img
                        alt="example"
                        src={_avatar}
                        style={{height: 220}}
                    />
                }
                actions={[
                    <Icon type="setting" key="setting" />,
                    <Icon type="edit" key="edit" />,
                    <Icon type="ellipsis" key="ellipsis" />,
                ]}
            >
                <Meta
                    avatar={<Avatar src={_avatar} />}
                    title={_name}
                    description="This is the description"
                />
            </Card>
        )
    }
}