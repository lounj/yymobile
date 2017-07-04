webpackJsonp([43,147],{8:function(n,a,s){"use strict";s(13),s(12)},12:function(n,a){},13:function(n,a){},16:function(n,a,s){"use strict";s(18)},18:function(n,a){},189:function(n,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=function(n){return Object.keys(n).reduce(function(a,s){return"aria-"!==s.substr(0,5)&&"data-"!==s.substr(0,5)&&"role"!==s||(a[s]=n[s]),a},{})},n.exports=a["default"]},623:function(n,a,s){n.exports={content:{"zh-CN":[["p","Tag \u5206\u4e3a\u4e24\u79cd\u7c7b\u578b\uff1a",["code","selectable"]," / ",["code","readonly"],", \u540e\u8005\u662f\u65e0\u4ea4\u4e92\u7684\uff0c\u5c3a\u5bf8\u66f4\u5c0f\uff0c\u901a\u5e38\u7528\u4e8e\u5185\u5bb9\u5c55\u793a\u3002"]],"en-US":[["p","There are two kinds of Tag, selectable and readonly type, the latter is a smaller tag without interactive behavior, which is typically used for display content."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/tag/demo/basic.md",id:"components-tag-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Tag <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span>selected<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`tag selected: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>selected<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>tag-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">data-seed</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>logId<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Basic<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">selected</span><span class="token punctuation">></span></span>Selected<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>Disabled<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Callback<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">closable</span>\n      <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onClose\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">afterClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'afterClose\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span>\n      Closable\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">small</span><span class="token punctuation">></span></span>Small and Readonly<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}function a(n){console.log("tag selected: "+n)}var t=s(1),e=(s(9),s(693),s(692)),p=n(e);return t.createElement("div",{className:"tag-container"},t.createElement(p["default"],{"data-seed":"logId"},"Basic"),t.createElement(p["default"],{selected:!0},"Selected"),t.createElement(p["default"],{disabled:!0},"Disabled"),t.createElement(p["default"],{onChange:a},"Callback"),t.createElement(p["default"],{closable:!0,onClose:function(){console.log("onClose")},afterClose:function(){console.log("afterClose")}},"Closable"),t.createElement(p["default"],{small:!0},"Small and Readonly"))},style:".tag-container{\n  display: flex;\n  padding-top: 0.18rem;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.tag-container > div {\n  margin-left: 0.18rem;\n  margin-bottom: 0.18rem;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.tag-container</span></span><span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">padding-top</span><span class="token punctuation">:</span> <span class="token number">0.18</span>rem<span class="token punctuation">;</span>\n  <span class="token property">flex-direction</span><span class="token punctuation">:</span> row<span class="token punctuation">;</span>\n  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.tag-container</span> > div </span><span class="token punctuation">{</span>\n  <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token number">0.18</span>rem<span class="token punctuation">;</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">0.18</span>rem<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},692:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(5),p=t(e),o=s(6),c=t(o),l=s(2),u=t(l),i=s(4),r=t(i),k=s(3),d=t(k),g="/Users/cisen/Desktop/ircloud/yymobile/components/tag/index.web.tsx",f=s(1),m=t(f),b=s(7),h=t(b),C=s(23),y=t(C),v=s(189),T=t(v),x=function(n){function a(s){(0,u["default"])(this,a);var t=(0,r["default"])(this,n.call(this,s));return t.onClick=function(){var n=t.props,a=n.disabled,s=n.onChange;if(!a){var e=t.state.selected;t.setState({selected:!e},function(){s&&s(!e)})}},t.onTagClose=function(){t.props.onClose&&t.props.onClose(),t.setState({closed:!0},t.props.afterClose)},t.state={selected:s.selected,closed:!1},t}return(0,d["default"])(a,n),a.prototype.componentWillReceiveProps=function(n){this.props.selected!==n.selected&&this.setState({selected:n.selected})},a.prototype.render=function(){var n,a=this.props,s=a.children,t=a.className,e=a.prefixCls,o=a.disabled,l=a.closable,u=a.small,i=a.style,r=(0,h["default"])((n={},(0,c["default"])(n,t,!!t),(0,c["default"])(n,""+e,!0),(0,c["default"])(n,e+"-normal",!o&&(!this.state.selected||u||l)),(0,c["default"])(n,e+"-small",u),(0,c["default"])(n,e+"-active",this.state.selected&&!o&&!u&&!l),(0,c["default"])(n,e+"-disabled",o),(0,c["default"])(n,e+"-closable",l),n)),k=!l||o||u?null:m["default"].createElement("div",{className:e+"-close",role:"button",onClick:this.onTagClose,"aria-label":"remove tag",__source:{fileName:g,lineNumber:53}},m["default"].createElement(y["default"],{type:"cross-circle",size:"xs","aria-hidden":"true",__source:{fileName:g,lineNumber:54}}));return this.state.closed?null:m["default"].createElement("div",(0,p["default"])({},(0,T["default"])(this.props),{className:r,onClick:this.onClick,style:i,__source:{fileName:g,lineNumber:56}}),m["default"].createElement("div",{className:e+"-text",__source:{fileName:g,lineNumber:57}},s),k)},a}(m["default"].Component);a["default"]=x,x.defaultProps={prefixCls:"am-tag",disabled:!1,selected:!1,closable:!1,small:!1,onChange:function(){},onClose:function(){},afterClose:function(){}},n.exports=a["default"]},693:function(n,a,s){"use strict";s(8),s(16),s(822)},743:function(n,a,s){n.exports={basic:s(623)}},822:function(n,a){}});