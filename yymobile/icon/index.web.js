import React from 'react';
import classNames from 'classnames';

export default class Icon extends React.Component {
  static defaultProps = {
    size: 'md',
  };

  renderSvg = () => {
    let svg;
    try {
      svg = require(`./style/assets/${this.props.type}.svg`);
      console.log('svg', svg)
    } catch (e) {

    } finally {
      return svg;
    }
  }
  render() {
    const { type, className, style, size, ...restProps } = this.props;

    let xlinkHref = this.renderSvg();
    console.log('this.render', xlinkHref)
    let outerIcon;
    if (!xlinkHref) {
      outerIcon = true;
      xlinkHref = type;
    } else {
      xlinkHref = `#${type}`;
    }
    const iconClassName = classNames({
      'am-icon': true,
      [`am-icon-${outerIcon ? type.substr(1) : type}`]: true,
      [`am-icon-${size}`]: true,
      [className + '']: !!className,
    });
    return <svg className={iconClassName} style={style} {...restProps}>
      <use xlinkHref={xlinkHref} />
    </svg>;
  }
}
