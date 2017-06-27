---
order: 0
title:
  zh-CN: 导航栏
  en-US: YyBar
---

````jsx
import { YyBar, Icon } from 'antd-mobile';

ReactDOM.render(
  <div>
    <YyBar leftContent="back"
      mode="light"
      onLeftClick={() => console.log('onLeftClick')}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
    >NavBar</YyBar>
  </div>
, mountNode);
````
