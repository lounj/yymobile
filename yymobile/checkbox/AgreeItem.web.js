import React from 'react';
import { Checkbox as _Checkbox } from 'antd-mobile';

export default class AgreeItem extends React.Component {

  static defaultProps = {
    prefixCls: 'yy-checkbox'
  };

  render() {
    const { prefixCls } = this.props
    console.log(prefixCls)
    return (
      <_Checkbox.AgreeItem {...this.props}>
      </_Checkbox.AgreeItem>);
  }
}
