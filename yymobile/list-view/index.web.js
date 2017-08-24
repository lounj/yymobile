import React from 'react';
import MListView from 'rmc-list-view';
import handleProps from './handleProps';
import IndexedList from './Indexed.web';

export default class ListView extends React.Component {
  static defaultProps = {
    prefixCls: 'yy-list-view',
    listPrefixCls: 'yy-list',
  };
  static DataSource = MListView.DataSource;
  static IndexedList = IndexedList;

  scrollTo = (...args) => (this.refs.listview).scrollTo(...args);

  render() {
    const { restProps, extraProps } = handleProps(this.props, false);
    let { useZscroller, refreshControl } = this.props;
    if (refreshControl) {
      useZscroller = true;
    }
    return <MListView ref="listview" {...restProps} {...extraProps} useZscroller={useZscroller} />;
  }
}
