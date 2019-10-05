import { Modal, Button } from 'antd';
import React from 'react'
export default class ModalStyle extends React.Component {
  state = { visible: false };

  handleOk = e => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    this.props.onClose();
  };
  render() {
    const {title} = this.props
    return (
        <Modal
          title={title}
          visible={this.props.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {this.props.children}
        </Modal>
    );
  }
}
