import React from 'react';
import { Switch as _Switch } from 'antd-mobile';

export default class Switch extends React.Component {
    render() {
        return (
          <_Switch {...this.props}>
          </_Switch>);
    }
}
Switch.defaultProps = {
    prefixCls: 'yy-switch',
};
