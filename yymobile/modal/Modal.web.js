import React from 'react';
import { Modal as _Modal } from 'antd-mobile';

export default class Modal extends React.Component {
    render() {
        return (
          <_Modal {...this.props}>
          </_Modal>);
    }
}

Modal.defaultProps = {
    prefixCls: 'yy-modal',
};
