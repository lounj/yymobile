webpackJsonp([44,156],{8:function(n,s,a){"use strict";a(14),a(13)},13:function(n,s){},14:function(n,s){},17:function(n,s,a){"use strict";a(20)},20:function(n,s){},26:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){return"string"==typeof n}function p(n){return e(n.type)&&j(n.props.children)?h["default"].cloneElement(n,{},n.props.children.split("").join(" ")):e(n)?(j(n)&&(n=n.split("").join(" ")),h["default"].createElement("span",{__source:{fileName:g,lineNumber:28}},n)):n}Object.defineProperty(s,"__esModule",{value:!0});var o=a(5),c=t(o),l=a(7),u=t(l),i=a(2),r=t(i),k=a(4),d=t(k),f=a(3),m=t(f),g="/Users/cisen/Desktop/ircloud/yymobile/components/button/index.web.tsx",y=a(1),h=t(y),v=a(6),b=t(v),w=a(21),x=t(w),N=a(33),P=t(N),O=function(n,s){var a={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&s.indexOf(t)<0&&(a[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,t=Object.getOwnPropertySymbols(n);e<t.length;e++)s.indexOf(t[e])<0&&(a[t[e]]=n[t[e]]);return a},_=/^[\u4e00-\u9fa5]{2}$/,j=_.test.bind(_),E=function(n){function s(){return(0,r["default"])(this,s),(0,d["default"])(this,n.apply(this,arguments))}return(0,m["default"])(s,n),s.prototype.render=function(){var n,s=this.props,a=s.children,t=s.className,e=s.prefixCls,o=s.type,l=s.size,i=s.inline,r=s.across,k=s.disabled,d=s.icon,f=s.loading,m=s.activeStyle,y=s.onClick,v=s.delayPressIn,w=s.delayPressOut,N=O(s,["children","className","prefixCls","type","size","inline","across","disabled","icon","loading","activeStyle","onClick","delayPressIn","delayPressOut"]),_=(n={},(0,u["default"])(n,t,t),(0,u["default"])(n,e,!0),(0,u["default"])(n,e+"-primary","primary"===o),(0,u["default"])(n,e+"-ghost","ghost"===o),(0,u["default"])(n,e+"-warning","warning"===o),(0,u["default"])(n,e+"-small","small"===l),(0,u["default"])(n,e+"-inline",i),(0,u["default"])(n,e+"-across",r),(0,u["default"])(n,e+"-disabled",k),(0,u["default"])(n,e+"-loading",f),n),j=f?"loading":d,E=h["default"].Children.map(a,p);j&&(_[e+"-icon"]=!0);var C={};return v&&(C.delayPressIn=v),w&&(C.delayPressOut=w),h["default"].createElement(P["default"],(0,c["default"])({activeClassName:m?e+"-active":void 0,disabled:k,activeStyle:m},C,{__source:{fileName:g,lineNumber:60}}),h["default"].createElement("a",(0,c["default"])({role:"button",className:(0,b["default"])(_)},N,{onClick:k?void 0:y,"aria-disabled":k,__source:{fileName:g,lineNumber:61}}),j?h["default"].createElement(x["default"],{"aria-hidden":"true",type:j,size:"small"===l?"xxs":"md",__source:{fileName:g,lineNumber:62}}):null,E))},s}(h["default"].Component);E.defaultProps={prefixCls:"am-button",size:"large",inline:!1,across:!1,disabled:!1,loading:!1,activeStyle:{}},s["default"]=E,n.exports=s["default"]},35:function(n,s,a){"use strict";a(8),a(17),a(43)},43:function(n,s){},622:function(n,s,a){n.exports={content:[["p","\u57fa\u672c\u529f\u80fd\u5c55\u793a"]],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/progress/demo/basic.md",id:"components-progress-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Progress<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">MyProgress</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    percent<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  add <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>percent <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>percent <span class="token operator">>=</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      p <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> percent<span class="token punctuation">:</span> p <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> percent <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>progress-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Progress</span> <span class="token attr-name">percent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">30</span><span class="token punctuation">}</span></span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fixed<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token punctuation">:</span> <span class="token number">36</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Progress</span> <span class="token attr-name">percent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">40</span><span class="token punctuation">}</span></span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>normal<span class="token punctuation">"</span></span> <span class="token attr-name">unfilled</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>hide<span class="token punctuation">"</span></span> <span class="token attr-name">appearTransition</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>show-info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>progress<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Progress</span> <span class="token attr-name">percent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>percent<span class="token punctuation">}</span></span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>normal<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>percent<span class="token punctuation">}</span><span class="token operator">%</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">inline</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>add<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token operator">+</span><span class="token operator">-</span><span class="token punctuation">)</span><span class="token number">10</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyProgress</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}function s(n,s){for(var a=Object.getOwnPropertyNames(s),t=0;t<a.length;t++){var e=a[t],p=Object.getOwnPropertyDescriptor(s,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function t(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}function e(n,s){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!s||"object"!=typeof s&&"function"!=typeof s?n:s}function p(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):s(n,a))}var o=a(1),c=(a(10),a(35),a(26)),l=n(c),u=(a(976),a(975)),i=n(u),r=function(n){function s(){var a,p,o;t(this,s);for(var c=arguments.length,l=Array(c),u=0;u<c;u++)l[u]=arguments[u];return a=p=e(this,n.call.apply(n,[this].concat(l))),p.state={percent:50},p.add=function(){var n=p.state.percent+10;p.state.percent>=100&&(n=0),p.setState({percent:n})},o=a,e(p,o)}return p(s,n),s.prototype.render=function(){var n=this.state.percent;return o.createElement("div",{className:"progress-container"},o.createElement(i["default"],{percent:30,position:"fixed"}),o.createElement("div",{style:{height:36}}),o.createElement(i["default"],{percent:40,position:"normal",unfilled:"hide",appearTransition:!0}),o.createElement("div",{className:"show-info"},o.createElement("div",{className:"progress"},o.createElement(i["default"],{percent:n,position:"normal"})),o.createElement("div",{"aria-hidden":"true"},n,"%")),o.createElement(l["default"],{inline:!0,style:{marginTop:20},onClick:this.add},"(+-)10"))},s}(o.Component);return o.createElement(r,null)},style:".show-info {\n  margin-top: 0.36rem;\n  display: flex;\n  align-items: center;\n}\n.show-info .progress {\n  margin-right: 0.1rem;\n  width: 100%;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.show-info</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-top</span><span class="token punctuation">:</span> <span class="token number">0.36</span>rem<span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.show-info</span> <span class="token class">.progress</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token number">0.1</span>rem<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">100%</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},734:function(n,s,a){n.exports={basic:a(622)}},813:function(n,s){},975:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(s,"__esModule",{value:!0}),s["default"]=void 0;var e=a(7),p=t(e),o=a(2),c=t(o),l=a(4),u=t(l),i=a(3),r=t(i),k="/Users/cisen/Desktop/ircloud/yymobile/components/progress/index.web.tsx",d=a(1),f=t(d),m=a(6),g=t(m),y=a(29),h=t(y),v=function(n){function s(){return(0,c["default"])(this,s),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(s,n),s.prototype.componentWillReceiveProps=function(){this.noAppearTransition=!0},s.prototype.componentDidMount=function(){var n=this;this.props.appearTransition&&setTimeout(function(){n.refs.bar.style.width=n.props.percent+"%"},10)},s.prototype.render=function(){var n,s=this.props,a=s.className,t=s.prefixCls,e=s.position,o=s.unfilled,c=s.style,l=void 0===c?{}:c,u=s.wrapStyle,i=void 0===u?{}:u,r={width:this.noAppearTransition||!this.props.appearTransition?this.props.percent+"%":0,height:0},d=(0,g["default"])((n={},(0,p["default"])(n,a,a),(0,p["default"])(n,t+"-outer",!0),(0,p["default"])(n,t+"-fixed-outer","fixed"===e),(0,p["default"])(n,t+"-hide-outer","hide"===o),n));return f["default"].createElement("div",{style:i,className:d,role:"progressbar","aria-valuenow":this.props.percent,"aria-valuemin":"0","aria-valuemax":"100",__source:{fileName:k,lineNumber:28}},f["default"].createElement("div",{ref:"bar",className:t+"-bar",style:(0,h["default"])({},l,r),__source:{fileName:k,lineNumber:29}}))},s}(f["default"].Component);s["default"]=v,v.defaultProps={prefixCls:"am-progress",percent:0,position:"fixed",unfilled:"show",appearTransition:!1},n.exports=s["default"]},976:function(n,s,a){"use strict";a(8),a(813)}});