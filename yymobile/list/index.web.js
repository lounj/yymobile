/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import { List as _List} from 'antd-mobile'
import classNames from 'classnames';

export default class List extends React.Component {
  static Item = _List.Item;

  static defaultProps = {
    prefixCls: 'am-list',
  };

  render() {
    let { prefixCls, children, className, style, renderHeader, renderFooter, ...restProps } = this.props;
    const wrapCls = classNames({
      [prefixCls + '']: true,
      [className + '']: className,
    });

    return (
      <div className={wrapCls} style={style} {...restProps}>
        {renderHeader ? (<div className={`${prefixCls}-header`}>
          {typeof renderHeader === 'function' ? renderHeader() : renderHeader}
        </div>) : null}
        {children ? (<div className={`${prefixCls}-body`}>{children}</div>) : null}
        {renderFooter ? (<div className={`${prefixCls}-footer`}>
          {typeof renderFooter === 'function' ? renderFooter() : renderFooter}
        </div>) : null}
      </div>
    );
  }
}
