import React from 'react';
import MListView from 'rmc-list-view';
import handleProps from './handleProps';
const IndexedList = MListView.IndexedList;

export default class MIndexedList extends React.Component {
  static defaultProps = {
    prefixCls: 'yy-indexed-list',
    listPrefixCls: 'yy-list',
    listViewPrefixCls: 'yy-list-view',
  };
  render() {
    const { prefixCls, listPrefixCls } = this.props;
    const { restProps, extraProps } = handleProps(this.props, true);
    return (
      <IndexedList
        ref="indexedList"
        sectionHeaderClassName={`${prefixCls}-section-header ${listPrefixCls}-body`}
        sectionBodyClassName={`${prefixCls}-section-body ${listPrefixCls}-body`}
        {...restProps}
        {...extraProps}
      >
        {this.props.children}
      </IndexedList>
    );
  }
}
