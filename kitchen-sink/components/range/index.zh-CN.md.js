webpackJsonp([102,162],{639:function(n,t){n.exports={content:["article",["p","\u5141\u8bb8\u7528\u6237\u5728\u4e00\u4e2a\u533a\u95f4\u4e2d\u9009\u62e9\u7279\u5b9a\u503c\uff0ceg\uff1a\u63a7\u5236\u5c4f\u5e55\u7684\u663e\u793a\u4eae\u5ea6\u3002"],["h3","\u89c4\u5219"],["ul",["li",["p","\u9ed8\u8ba4\u72b6\u6001\u4e0b\uff0c\u5de6\u8fb9\u4e3a\u6700\u5c0f\u503c\uff0c\u53f3\u8fb9\u4e3a\u6700\u5927\u503c\u3002"]],["li",["p","\u4e00\u822c\u6c34\u5e73\u653e\u7f6e\u3002"]]],["h2","Common API"],["p","\u9002\u7528\u5e73\u53f0\uff1aWEB\u3001React-Native"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","min"],["td","Number"],["td","0"],["td","\u6700\u5c0f\u503c"]],["tr",["td","max"],["td","Number"],["td","100"],["td","\u6700\u5927\u503c"]],["tr",["td","step"],["td","Number or null"],["td","1"],["td","\u6b65\u957f\uff0c\u53d6\u503c\u5fc5\u987b\u5927\u4e8e 0\uff0c\u5e76\u4e14\u53ef\u88ab (max - min) \u6574\u9664\u3002\u5f53 ",["code","marks"]," \u4e0d\u4e3a\u7a7a\u5bf9\u8c61\u65f6\uff0c\u53ef\u4ee5\u8bbe\u7f6e ",["code","step"]," \u4e3a ",["code","null"],"\uff0c\u6b64\u65f6 Slider \u7684\u53ef\u9009\u503c\u4ec5\u6709 marks \u6807\u51fa\u6765\u7684\u90e8\u5206\u3002"]],["tr",["td","value"],["td",["span","Number, Number"]],["td"],["td","\u8bbe\u7f6e\u5f53\u524d\u53d6\u503c\u3002"]],["tr",["td","defaultValue"],["td",["span","Number, Number"]],["td",["span","0, 0"]],["td","\u8bbe\u7f6e\u521d\u59cb\u53d6\u503c\u3002"]],["tr",["td","disabled"],["td","Boolean"],["td","false"],["td","\u503c\u4e3a ",["code","true"]," \u65f6\uff0c\u6ed1\u5757\u4e3a\u7981\u7528\u72b6\u6001"]],["tr",["td","onChange"],["td","Function"],["td","Noop"],["td","\u5f53 Slider \u7684\u503c\u53d1\u751f\u6539\u53d8\u65f6\uff0c\u4f1a\u89e6\u53d1 onChange \u4e8b\u4ef6\uff0c\u5e76\u628a\u6539\u53d8\u540e\u7684\u503c\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u3002"]],["tr",["td","onAfterChange"],["td","Function"],["td","Noop"],["td","\u4e0e ",["code","ontouchend"]," \u89e6\u53d1\u65f6\u673a\u4e00\u81f4\uff0c\u628a\u5f53\u524d\u503c\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u3002"]],["tr",["td","marks (",["code","web only"],")"],["td","Object{Number:String}"],["td","{ }"],["td","\u523b\u5ea6\u6807\u8bb0\uff0ckey \u7684\u7c7b\u578b\u5fc5\u987b\u4e3a ",["code","Number"]," \u4e14\u53d6\u503c\u5728\u95ed\u533a\u95f4 ",["span","min, max"]," \u5185"]],["tr",["td","dots (",["code","web only"],")"],["td","Boolean"],["td","false"],["td","\u662f\u5426\u53ea\u80fd\u62d6\u62fd\u5230\u523b\u5ea6\u4e0a"]],["tr",["td","included (",["code","web only"],")"],["td","Boolean"],["td","true"],["td",["code","marks"]," \u4e0d\u4e3a\u7a7a\u5bf9\u8c61\u65f6\u6709\u6548\uff0c\u503c\u4e3a true \u65f6\u8868\u793a\u503c\u4e3a\u5305\u542b\u5173\u7cfb\uff0cfalse \u8868\u793a\u5e76\u5217"]],["tr",["td","count"],["td","number"],["td",["code","1"]],["td","Determine how many ranges to render, and multiple handles will be rendered (number + 1)."]],["tr",["td","allowCross"],["td","boolean"],["td",["code","true"]],["td",["code","allowCross"]," could be set as ",["code","true"]," to allow those handles to cross."]],["tr",["td","pushable"],["td","boolean or number"],["td",["code","true"]],["td",["code","pushable"]," could be set as ",["code","true"]," to allow pushing of surrounding handles when moving an handle. When set to a number, the number will be the minimum ensured distance between handles. Example: ",["img",{title:null,src:"http://i.giphy.com/l46Cs36c9HrHMExoc.gif",alt:null}]]],["tr",["td","handleStyle(",["code","web"],")"],["td","Array",["span","Object"]],["td"],["td","\u6ed1\u5757\u7684\u6837\u5f0f\uff0c\u6309\u6570\u7ec4\u987a\u5e8f\u5e94\u7528\u5230\u591a\u6ed1\u5757"]],["tr",["td","trackStyle(",["code","web"],")"],["td","Array",["span","Object"]],["td"],["td","\u9009\u4e2d\u90e8\u5206\u6ed1\u52a8\u6761\u7684\u6837\u5f0f\uff0c\u6309\u6570\u7ec4\u987a\u5e8f\u5e94\u7528\u5230\u6ed1\u52a8\u6761\u7684\u591a\u533a\u95f4"]],["tr",["td","railStyle(",["code","web"],")"],["td","Object"],["td"],["td","\u672a\u9009\u4e2d\u90e8\u5206"]]]],["h2","ToolTip(Web Only)"],["p","\u6ce8\uff1a1.0.x \u4e4b\u540e\u5c06\u539f\u5148\u7684",["code","Slider"],"\u62c6\u5206\u6210\u4e86",["code","Slider"],", ",["code","Range"],", ",["code","creatToolTip"],", \u4ee5\u4fbf\u7528\u6237\u6309\u9700\u52a0\u8f7d\u76f8\u5e94\u7684\u529f\u80fd\u4f7f\u7528, \u4f8b\u5982\u5e26 ",["code","tooltip"]," \u7684 ",["code","slider"]," \u4f7f\u7528\u65b9\u5f0f\u5982\u4e0b:"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Range<span class="token punctuation">,</span> WingBlank<span class="token punctuation">,</span> WhiteSpace<span class="token punctuation">,</span> createTooltip <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> RangeWithTooltip <span class="token operator">=</span> <span class="token function">createTooltip</span><span class="token punctuation">(</span>Range<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// High Order Component</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RangeWithTooltip</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span> <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">30</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>'},["code","import { Range, WingBlank, WhiteSpace, createTooltip } from 'antd-mobile';\n\nconst RangeWithTooltip = createTooltip(Range); // High Order Component\n<RangeWithTooltip defaultValue={[4, 16]} min={0} max={30} />"]]],meta:{category:"Components",type:"Data Entry",title:"Range",subtitle:"\u533a\u57df\u9009\u62e9",filename:"components/range/index.zh-CN.md"}}}});