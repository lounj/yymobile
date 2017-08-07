import React from 'react';
import { Button as _Button } from 'antd-mobile';

export default class Button extends React.Component {
    render() {
        return (
          <_Button {...this.props}>
          </_Button>);
    }
}
Button.defaultProps = {
    prefixCls: 'yy-button',
};
