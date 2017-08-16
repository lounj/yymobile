import React from 'react';
import classNames from 'classnames';
import assign from 'object-assign';

export default class Progress extends React.Component {
  static defaultProps = {
    prefixCls: 'yy-progress',
    percent: 0,
    position: 'fixed',
    unfilled: 'show',
    appearTransition: false,
    showDot: true
  };
  constructor(props) {
    super(props);
    this.noAppearTransition = false;
  }
  componentWillReceiveProps() {
    this.noAppearTransition = true;
  }
  componentDidMount() {
    if (this.props.appearTransition) {
      setTimeout(() => {
        this.refs.bar.style.width = `${this.props.percent}%`;
      }, 10);
    }
  }
  render() {
    const { className, prefixCls, position, unfilled, style = {}, wrapStyle = {}, showDot } = this.props;
    const percentStyle = {
      width: this.noAppearTransition || !this.props.appearTransition ? `${this.props.percent}%` : 0,
      height: 0,
    };
    const spotStyle = {
      left: `${this.props.percent}%`
    }

    const wrapCls = classNames({
      [className + '']: className,
      [`${prefixCls}-outer`]: true,
      [`${prefixCls}-fixed-outer`]: position === 'fixed',
      [`${prefixCls}-hide-outer`]: unfilled === 'hide',
    });
    // TODO 2.0 整理 style， api 变更 style, barStyle, remove wrapStyle(不添入文档， for tiny)
    return (
      <div
        style={wrapStyle}
        className={wrapCls}
        role="progressbar"
        aria-valuenow={this.props.percent}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div ref="bar" className={`${prefixCls}-bar`} style={assign({}, style, percentStyle)}>
          {showDot && <div className={`${prefixCls}-dot`}/>}
        </div>
      </div>
    );
  }
}
