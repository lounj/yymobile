import React from 'react';
import { Checkbox as _Checkbox } from 'antd-mobile';

export default class CheckboxItem extends React.Component {

  static defaultProps = {
    prefixCls: 'yy-checkbox'
  };

  render() {
    let { prefixCls, checkboxProps} = this.props
    // 将 'yy-checkbox'传入item里面，这里需要特殊处理
    if (!checkboxProps) {
      checkboxProps = {
        prefixCls: ''
      }
    }
    checkboxProps.prefixCls = 'yy-checkbox';
    return (
      <_Checkbox.CheckboxItem {...this.props} checkboxProps={checkboxProps}>
      </_Checkbox.CheckboxItem>);
  }
}
