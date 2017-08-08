import React from 'react';
import { Checkbox as _Checkbox } from 'antd-mobile';
import CheckboxItem from './CheckboxItem.web'
import AgreeItem from './AgreeItem.web'

export default class Checkbox extends React.Component {

  static defaultProps = {
    prefixCls: 'yy-checkbox'
  };

  render() {
    const { prefixCls } = this.props
    console.log(prefixCls)
    return (
      <_Checkbox {...this.props}>
      </_Checkbox>);
  }
}
Checkbox.CheckboxItem = CheckboxItem
Checkbox.AgreeItem = AgreeItem
