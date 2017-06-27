// import React from 'react';

interface YyBarProps {
  prefixCls?: string;
  className?: string;
  children?: any;
  mode?: 'dark' | 'light';
  iconName?: string | boolean | null;
  leftContent?: any;
  rightContent?: any;
  onLeftClick?: () => void;
}

export default YyBarProps;