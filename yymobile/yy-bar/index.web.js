var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import classNames from 'classnames';
import Icon from '../icon';
export default class YyBar extends React.Component {
    render() {
        const _a = this.props, { prefixCls, className, children, mode, iconName, leftContent, rightContent, onLeftClick } = _a, restProps = __rest(_a, ["prefixCls", "className", "children", "mode", "iconName", "leftContent", "rightContent", "onLeftClick"]);
        const wrapCls = classNames({
            [className]: className,
            [prefixCls]: true,
            [`${prefixCls}-${mode}`]: true,
        });
        return (<div {...restProps} className={wrapCls}>
        <div className={`${prefixCls}-left`} role="button" onClick={onLeftClick}>
          {iconName && (<span className={`${prefixCls}-left-icon`} aria-hidden="true">
                <Icon type={iconName}/>
              </span>)}
          <span className={`${prefixCls}-left-content`}>{leftContent}</span>
        </div>
        <div className={`${prefixCls}-title`}>{children}</div>
        <div className={`${prefixCls}-right`}>
          {rightContent}
        </div>
      </div>);
    }
}
YyBar.defaultProps = {
    prefixCls: 'am-navbar',
    mode: 'dark',
    iconName: 'left',
    onLeftClick() {
    },
};
