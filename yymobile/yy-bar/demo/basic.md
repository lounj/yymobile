---
order: 0
title:
  zh-CN: 测试
  en-US: YyBar
---

````jsx
import { Icon } from 'antd-mobile';
import { YyBar } from 'yymobile';

ReactDOM.render(
  <div>
    <YyBar leftContent="back"
      mode="light"
      onLeftClick={() => console.log('onLeftClick')}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
    >YyBar</YyBar>
  </div>
, mountNode);
````
