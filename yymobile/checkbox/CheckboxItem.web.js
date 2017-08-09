import React from 'react';
import { Checkbox as _Checkbox } from 'antd-mobile';

export default class CheckboxItem extends React.Component {

  static defaultProps = {
    prefixCls: 'yy-checkbox',
    multiSelect: false
  };

  render() {
    let { prefixCls, checkboxProps, multiSelect} = this.props
    // 将 'yy-checkbox'传入item里面，这里需要特殊处理
    if (!checkboxProps) {
      checkboxProps = {
        prefixCls: 'yy-checkbox',
        className: multiSelect ? 'yy-checkbox-multi' : ''
      }
    }
    checkboxProps.prefixCls = 'yy-checkbox';
    if (multiSelect) checkboxProps.className = 'yy-checkbox-multi';
    return (
      <_Checkbox.CheckboxItem {...this.props} checkboxProps={checkboxProps}>
      </_Checkbox.CheckboxItem>);
  }
}
