webpackJsonp([33,147],{8:function(n,a,s){"use strict";s(13),s(12)},12:function(n,a){},13:function(n,a){},16:function(n,a,s){"use strict";s(18)},18:function(n,a){},21:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(6),p=t(e),o=s(2),c=t(o),l=s(4),u=t(l),i=s(3),r=t(i),k="/Users/cisen/Desktop/develop/ant-mobile/ant-design-mobile-master/components/white-space/index.web.tsx",d=s(1),m=t(d),f=s(7),g=t(f),v=function(n){function a(){return(0,c["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.size,e=a.className,o=a.style,c=a.onClick,l=(0,g["default"])((n={},(0,p["default"])(n,""+s,!0),(0,p["default"])(n,s+"-"+t,!0),(0,p["default"])(n,e,!!e),n));return m["default"].createElement("div",{className:l,style:o,onClick:c,__source:{fileName:k,lineNumber:11}})},a}(m["default"].Component);a["default"]=v,v.defaultProps={prefixCls:"am-whitespace",size:"md"},n.exports=a["default"]},22:function(n,a,s){"use strict";s(8),s(25)},25:function(n,a){},30:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(6),p=t(e),o=s(2),c=t(o),l=s(4),u=t(l),i=s(3),r=t(i),k="/Users/cisen/Desktop/develop/ant-mobile/ant-design-mobile-master/components/wing-blank/index.web.tsx",d=s(1),m=t(d),f=s(7),g=t(f),v=function(n){function a(){return(0,c["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.size,e=a.className,o=a.children,c=a.style,l=(0,g["default"])((n={},(0,p["default"])(n,""+s,!0),(0,p["default"])(n,s+"-"+t,!0),(0,p["default"])(n,e,!!e),n));return m["default"].createElement("div",{className:l,style:c,__source:{fileName:k,lineNumber:11}},o)},a}(m["default"].Component);a["default"]=v,v.defaultProps={prefixCls:"am-wingblank",size:"lg"},n.exports=a["default"]},31:function(n,a,s){"use strict";s(8),s(41)},33:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){return"string"==typeof n}function p(n){return e(n.type)&&O(n.props.children)?y["default"].cloneElement(n,{},n.props.children.split("").join(" ")):e(n)?(O(n)&&(n=n.split("").join(" ")),y["default"].createElement("span",{__source:{fileName:g,lineNumber:28}},n)):n}Object.defineProperty(a,"__esModule",{value:!0});var o=s(5),c=t(o),l=s(6),u=t(l),i=s(2),r=t(i),k=s(4),d=t(k),m=s(3),f=t(m),g="/Users/cisen/Desktop/develop/ant-mobile/ant-design-mobile-master/components/button/index.web.tsx",v=s(1),y=t(v),b=s(7),N=t(b),h=s(23),x=t(h),_=s(40),w=t(_),E=function(n,a){var s={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&a.indexOf(t)<0&&(s[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,t=Object.getOwnPropertySymbols(n);e<t.length;e++)a.indexOf(t[e])<0&&(s[t[e]]=n[t[e]]);return s},C=/^[\u4e00-\u9fa5]{2}$/,O=C.test.bind(C),j=function(n){function a(){return(0,r["default"])(this,a),(0,d["default"])(this,n.apply(this,arguments))}return(0,f["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.children,t=a.className,e=a.prefixCls,o=a.type,l=a.size,i=a.inline,r=a.across,k=a.disabled,d=a.icon,m=a.loading,f=a.activeStyle,v=a.onClick,b=a.delayPressIn,h=a.delayPressOut,_=E(a,["children","className","prefixCls","type","size","inline","across","disabled","icon","loading","activeStyle","onClick","delayPressIn","delayPressOut"]),C=(n={},(0,u["default"])(n,t,t),(0,u["default"])(n,e,!0),(0,u["default"])(n,e+"-primary","primary"===o),(0,u["default"])(n,e+"-ghost","ghost"===o),(0,u["default"])(n,e+"-warning","warning"===o),(0,u["default"])(n,e+"-small","small"===l),(0,u["default"])(n,e+"-inline",i),(0,u["default"])(n,e+"-across",r),(0,u["default"])(n,e+"-disabled",k),(0,u["default"])(n,e+"-loading",m),n),O=m?"loading":d,j=y["default"].Children.map(s,p);O&&(C[e+"-icon"]=!0);var P={};return b&&(P.delayPressIn=b),h&&(P.delayPressOut=h),y["default"].createElement(w["default"],(0,c["default"])({activeClassName:f?e+"-active":void 0,disabled:k,activeStyle:f},P,{__source:{fileName:g,lineNumber:60}}),y["default"].createElement("a",(0,c["default"])({role:"button",className:(0,N["default"])(C)},_,{onClick:k?void 0:v,"aria-disabled":k,__source:{fileName:g,lineNumber:61}}),O?y["default"].createElement(x["default"],{"aria-hidden":"true",type:O,size:"small"===l?"xxs":"md",__source:{fileName:g,lineNumber:62}}):null,j))},a}(y["default"].Component);j.defaultProps={prefixCls:"am-button",size:"large",inline:!1,across:!1,disabled:!1,loading:!1,activeStyle:{}},a["default"]=j,n.exports=a["default"]},34:function(n,a,s){"use strict";s(8),s(16),s(43)},41:function(n,a){},43:function(n,a){},301:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(6),p=t(e),o=s(2),c=t(o),l=s(4),u=t(l),i=s(3),r=t(i),k="/Users/cisen/Desktop/develop/ant-mobile/ant-design-mobile-master/components/activity-indicator/index.web.tsx",d=s(1),m=t(d),f=s(7),g=t(f),v=function(n){function a(){return(0,c["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a,s=this.props,t=s.prefixCls,e=s.className,o=s.animating,c=s.toast,l=s.size,u=s.text,i=(0,g["default"])((n={},(0,p["default"])(n,""+t,!0),(0,p["default"])(n,t+"-lg","large"===l),(0,p["default"])(n,t+"-sm","small"===l),(0,p["default"])(n,e,!!e),(0,p["default"])(n,t+"-toast",!!c),n)),r=(0,g["default"])((a={},(0,p["default"])(a,t+"-spinner",!0),(0,p["default"])(a,t+"-spinner-lg",!!c||"large"===l),a));return o?c?m["default"].createElement("div",{className:i,__source:{fileName:k,lineNumber:20}},u?m["default"].createElement("div",{className:t+"-content",__source:{fileName:k,lineNumber:21}},m["default"].createElement("span",{className:r,"aria-hidden":"true",__source:{fileName:k,lineNumber:22}}),m["default"].createElement("span",{className:t+"-toast",__source:{fileName:k,lineNumber:23}},u)):m["default"].createElement("div",{className:t+"-content",__source:{fileName:k,lineNumber:24}},m["default"].createElement("span",{className:r,"aria-label":"Loading",__source:{fileName:k,lineNumber:25}}))):u?m["default"].createElement("div",{className:i,__source:{fileName:k,lineNumber:30}},m["default"].createElement("span",{className:r,"aria-hidden":"true",__source:{fileName:k,lineNumber:31}}),m["default"].createElement("span",{className:t+"-tip",__source:{fileName:k,lineNumber:32}},u)):m["default"].createElement("div",{className:i,__source:{fileName:k,lineNumber:33}},m["default"].createElement("span",{className:r,"aria-label":"loading",__source:{fileName:k,lineNumber:34}})):null},a}(m["default"].Component);a["default"]=v,v.defaultProps={prefixCls:"am-activity-indicator",animating:!0,size:"small",panelColor:"rgba(34,34,34,0.6)",toast:!1},n.exports=a["default"]},302:function(n,a,s){"use strict";s(8),s(346)},346:function(n,a){},485:function(n,a,s){n.exports={content:[["p","\u57fa\u672c\u7684\u6d3b\u52a8\u6307\u793a\u5668\u3002"]],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/activity-indicator/demo/basic.md",id:"components-activity-indicator-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ActivityIndicator<span class="token punctuation">,</span> WingBlank<span class="token punctuation">,</span> WhiteSpace<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      animating<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">clearTimeout</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>closeTimer<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  showToast <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> animating<span class="token punctuation">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>animating <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>closeTimer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> animating<span class="token punctuation">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>animating <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>loading-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>icon\u65e0\u6587\u6848<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>loading-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ActivityIndicator</span> <span class="token attr-name">animating</span> <span class="token punctuation">/></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>xl<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>icon\u5e26\u6587\u6848<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>loading-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ActivityIndicator</span>\n                <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u52a0\u8f7d\u4e2d...<span class="token punctuation">"</span></span>\n              <span class="token punctuation">/></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>xl<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u5927\u53f7icon\uff0c\u81ea\u5b9a\u4e49\u6587\u6848\u6837\u5f0f<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>loading-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>align<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ActivityIndicator</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">8</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u52a0\u8f7d\u4e2d<span class="token operator">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>toast-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>xl<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>showToast<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u70b9\u51fb\u663e\u793a Toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>toast-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ActivityIndicator</span>\n                <span class="token attr-name">toast</span>\n                <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6b63\u5728\u52a0\u8f7d<span class="token punctuation">"</span></span>\n                <span class="token attr-name">animating</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>animating<span class="token punctuation">}</span></span>\n              <span class="token punctuation">/></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}function a(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var e=s[t],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function t(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function e(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function p(n,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function, not "+typeof s);n.prototype=Object.create(s&&s.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(n,s):a(n,s))}var o=s(1),c=(s(9),s(31),s(30)),l=n(c),u=(s(34),s(33)),i=n(u),r=(s(22),s(21)),k=n(r),d=(s(302),s(301)),m=n(d),f=function(n){function a(s){t(this,a);var p=e(this,n.call(this,s));return p.showToast=function(){p.setState({animating:!p.state.animating}),p.closeTimer=setTimeout(function(){p.setState({animating:!p.state.animating})},1e3)},p.state={animating:!1},p}return p(a,n),a.prototype.componentWillUnmount=function(){clearTimeout(this.closeTimer)},a.prototype.render=function(){return o.createElement("div",null,o.createElement(l["default"],null,o.createElement("div",{className:"loading-container"},o.createElement("p",{className:"sub-title"},"icon\u65e0\u6587\u6848"),o.createElement("div",{className:"loading-example"},o.createElement(m["default"],{animating:!0})),o.createElement(k["default"],{size:"xl"}),o.createElement("p",{className:"sub-title"},"icon\u5e26\u6587\u6848"),o.createElement("div",{className:"loading-example"},o.createElement(m["default"],{text:"\u52a0\u8f7d\u4e2d..."})),o.createElement(k["default"],{size:"xl"}),o.createElement("p",{className:"sub-title"},"\u5927\u53f7icon\uff0c\u81ea\u5b9a\u4e49\u6587\u6848\u6837\u5f0f"),o.createElement("div",{className:"loading-example"},o.createElement("div",{className:"align"},o.createElement(m["default"],{size:"large"}),o.createElement("span",{style:{marginTop:8}},"\u52a0\u8f7d\u4e2d...")))),o.createElement("div",{className:"toast-container"},o.createElement(k["default"],{size:"xl"}),o.createElement(i["default"],{onClick:this.showToast},"\u70b9\u51fb\u663e\u793a Toast"),o.createElement("div",{className:"toast-example"},o.createElement(m["default"],{toast:!0,text:"\u6b63\u5728\u52a0\u8f7d",animating:this.state.animating})))))},a}(o.Component);return o.createElement(f,null)},style:".loading-example {\n  display: flex;\n  justify-content: flex-start;\n}\n.align {\n  display: flex;\n  flex-direction: column;\n}\n.sub-title {\n  color: #888;\n  font-size: .28rem;\n  padding: 30px 0 18px 0;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.loading-example</span> </span><span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.align</span> </span><span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.sub-title</span> </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#888</span><span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">.28</span>rem<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">30</span>px <span class="token number">0</span> <span class="token number">18</span>px <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},705:function(n,a,s){n.exports={basic:s(485)}}});