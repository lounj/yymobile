import React from 'react';
import classNames from 'classnames';

export default class Badge extends React.Component<any> {
  static defaultProps = {
    prefixCls: 'yy-badge',
    size: 'small',
    overflowCount: 99,
    dot: false,
    corner: false,
  };

  render() {
    let {
      className, prefixCls,
      children, text, size, overflowCount, dot, corner, hot
    } = this.props;
    // overflowCount = overflowCount as number;
    text = typeof text === 'number' && text > overflowCount ? `${overflowCount}...` : text;

    // dot mode don't need text
    if (dot) {
      text = '';
    }

    const scrollNumberCls = classNames({
      [`${prefixCls}-dot`]: dot,
      [`${prefixCls}-dot-large`]: dot && (size === 'large'),
      [`${prefixCls}-text`]: !dot && !corner,
      [`${prefixCls}-corner`]: corner,
      [`${prefixCls}-corner-large`]: corner && (size === 'large'),
    });

    const badgeCls = classNames({
      [className + '']: !!className,
      [prefixCls + '']: true,
      [`${prefixCls}-not-a-wrapper`]: !children,
      [`${prefixCls}-corner-wrapper`]: corner,
      [`${prefixCls}-hot`]: !!hot,
      [`${prefixCls}-corner-wrapper-large`]: corner && (size === 'large'),
    });

    return (
      <span className={badgeCls}>
        {children}
        {(text || dot) && <sup className={scrollNumberCls}>{text}</sup>}
      </span>
    );
  }
}
