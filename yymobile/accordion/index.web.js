import React from 'react';
import { Accordion as _Accordion } from 'antd-mobile';

export default class Accordion extends React.Component {
    render() {
        return (
          <_Accordion {...this.props}>
          </_Accordion>);
    }
}
Accordion.Panel = _Accordion.Panel
Accordion.defaultProps = {
    prefixCls: 'yy-accordion',
};
