---
order: 0
title:
  zh-CN: '类型、尺寸'
  en-US: 'Type, Size'
---

badge

````jsx
import { List } from 'antd-mobile';
import { Badge } from 'yymobile';

const BadgeDemo = () => (
  <List>
    <List.Item extra="Extra content" arrow="horizontal">
      <Badge dot>
        <span style={{ width: '0.52rem', height: '0.52rem', background: '#ddd', display: 'inline-block' }} />
      </Badge>
      <span style={{ marginLeft: 12 }}>Dot Badge</span>
    </List.Item>
    <List.Item
      thumb="https://zos.alipayobjects.com/rmsportal/faMhXAxhCzLvveJ.png"
      extra={<Badge text={100} overflowCount={23} />}
      arrow="horizontal"
    >
      Content
    </List.Item>
    <List.Item><Badge text={'促'} corner>
      <div className="corner-badge">Use corner prop</div>
    </Badge></List.Item>
    <List.Item className="special-badge" extra={<Badge text={'促'} />}>
      Custom corner
    </List.Item>
    <List.Item extra="Extra" arrow="horizontal">
      <Badge text={0} style={{ marginLeft: 12 }}>text number 0</Badge>
      <Badge text={'new'} style={{ marginLeft: 12 }} />
    </List.Item>
    <List.Item>
      Marketing:
      <Badge text="减" hot style={{ marginLeft: 12 }} />
      <Badge text="惠" hot style={{ marginLeft: 12 }} />
      <Badge text="免" hot style={{ marginLeft: 12 }} />
      <Badge text="反" hot style={{ marginLeft: 12 }} />
      <Badge text="HOT" hot style={{ marginLeft: 12 }} />
    </List.Item>
    <List.Item>
      Customize
      <Badge text="券" style={{ marginLeft: 12, padding: '0 0.06rem', backgroundColor: '#f19736', borderRadius: 2 }} />
      <Badge text="NEW" style={{ marginLeft: 12, padding: '0 0.06rem', backgroundColor: '#21b68a', borderRadius: 2 }} />
      <Badge text="自动缴费"
        style={{
          marginLeft: 12,
          padding: '0 0.06rem',
          backgroundColor: '#fff',
          borderRadius: 2,
          color: '#f19736',
          border: '1px solid #f19736',
        }}
      />
    </List.Item>
  </List>
);

ReactDOM.render(<BadgeDemo />, mountNode);
````

````css
.corner-badge {
  height: 100px;
  width: 400px;
}
.special-badge .am-list-line {
  padding-right: 0;
}
.special-badge .am-list-line .am-list-extra {
  padding: 0;
  height: 100%;
}
.special-badge .yy-badge {
  transform: rotate(45deg);
  transform-origin: right bottom;
  right: 0;
  top: 0.26rem;
  width: 1rem;
}
.special-badge .yy-badge-text {
  border-radius: 0.02rem;
}
````
