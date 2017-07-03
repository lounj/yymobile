webpackJsonp([45,147],{8:function(n,a,s){"use strict";s(13),s(12)},12:function(n,a){},13:function(n,a){},16:function(n,a,s){"use strict";s(18)},18:function(n,a){},328:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(5),p=t(e),o=s(6),c=t(o),l=s(2),u=t(l),i=s(4),r=t(i),k=s(3),f=t(k),m="/Users/cisen/Desktop/ircloud/yymobile/components/yy-bar/index.web.tsx",d=s(1),g=t(d),y=s(7),N=t(y),b=s(23),h=t(b),v=function(n,a){var s={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&a.indexOf(t)<0&&(s[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,t=Object.getOwnPropertySymbols(n);e<t.length;e++)a.indexOf(t[e])<0&&(s[t[e]]=n[t[e]]);return s},C=function(n){function a(){return(0,u["default"])(this,a),(0,r["default"])(this,n.apply(this,arguments))}return(0,f["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.className,e=a.children,o=a.mode,l=a.iconName,u=a.leftContent,i=a.rightContent,r=a.onLeftClick,k=v(a,["prefixCls","className","children","mode","iconName","leftContent","rightContent","onLeftClick"]),f=(0,N["default"])((n={},(0,c["default"])(n,t,t),(0,c["default"])(n,s,!0),(0,c["default"])(n,s+"-"+o,!0),n));return g["default"].createElement("div",(0,p["default"])({},k,{className:f,__source:{fileName:m,lineNumber:22}}),g["default"].createElement("div",{className:s+"-left",role:"button",onClick:r,__source:{fileName:m,lineNumber:23}},l&&g["default"].createElement("span",{className:s+"-left-icon","aria-hidden":"true",__source:{fileName:m,lineNumber:24}},g["default"].createElement(h["default"],{type:l,__source:{fileName:m,lineNumber:25}})),g["default"].createElement("span",{className:s+"-left-content",__source:{fileName:m,lineNumber:27}},u)),g["default"].createElement("div",{className:s+"-title",__source:{fileName:m,lineNumber:29}},e),g["default"].createElement("div",{className:s+"-right",__source:{fileName:m,lineNumber:30}},i))},a}(g["default"].Component);a["default"]=C,C.defaultProps={prefixCls:"am-navbar",mode:"dark",iconName:"left",onLeftClick:function(){}},n.exports=a["default"]},329:function(n,a,s){"use strict";s(8),s(16),s(355)},355:function(n,a){},641:function(n,a,s){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u5bfc\u822a\u680f","en-US":"YyBar"},filename:"components/yy-bar/demo/basic.md",id:"components-yy-bar-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> YyBar<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>YyBar</span> <span class="token attr-name">leftContent</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>back<span class="token punctuation">"</span></span>\n      <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>light<span class="token punctuation">"</span></span>\n      <span class="token attr-name">onLeftClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onLeftClick\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">rightContent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>\n        <span class="token operator">&lt;</span>Icon key<span class="token operator">=</span><span class="token string">"0"</span> type<span class="token operator">=</span><span class="token string">"search"</span> style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginRight<span class="token punctuation">:</span> <span class="token string">\'0.32rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ellipsis<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">}</span>\n    <span class="token operator">></span>NavBar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>YyBar</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}var a=s(1),t=(s(9),s(329),s(328)),e=n(t),p=(s(16),s(23)),o=n(p);return a.createElement("div",null,a.createElement(e["default"],{leftContent:"back",mode:"light",onLeftClick:function(){return console.log("onLeftClick")},rightContent:[a.createElement(o["default"],{key:"0",type:"search",style:{marginRight:"0.32rem"}}),a.createElement(o["default"],{key:"1",type:"ellipsis"})]},"NavBar"))}}},750:function(n,a,s){n.exports={basic:s(641)}}});