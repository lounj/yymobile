import React from 'react';
import { Checkbox as _Checkbox } from 'antd-mobile';
import CheckboxItem from './CheckboxItem.web'
import AgreeItem from './AgreeItem.web'

export default class Checkbox extends React.Component {

  static defaultProps = {
    prefixCls: 'yy-checkbox',
    multiSelect: false
  };

  render() {
    let { prefixCls, className, multiSelect } = this.props
    if (multiSelect) {
      className = className + 'yy-checkbox-multi'
    }
    console.log(prefixCls)
    return (
      <_Checkbox {...this.props} className={className} >
      </_Checkbox>);
  }
}
Checkbox.CheckboxItem = CheckboxItem
Checkbox.AgreeItem = AgreeItem
