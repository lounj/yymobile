webpackJsonp([20,168],{631:function(n,s){n.exports={content:{"zh-CN":[["p","\u53d7\u63a7\u7ec4\u4ef6\u5efa\u8bae\u4f7f\u7528(",["a",{title:null,href:"https://github.com/react-component/form"},"rc-form "],")"]],"en-US":[["p","Recommended use of ",["a",{title:null,href:"https://github.com/react-component/form"},"rc-form "]," for controlled component."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/textarea-item/demo/basic.md",id:"components-textarea-item-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> List<span class="token punctuation">,</span> TextareaItem<span class="token punctuation">,</span> WhiteSpace <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> createForm <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'rc-form\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">TextareaItemExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    focused<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> getFieldProps <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>form<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'Customize to focus\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextareaItem</span>\n            <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6807\u9898<span class="token punctuation">"</span></span>\n            <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>auto</span> <span class="token attr-name">focus</span> <span class="token attr-name">in</span> <span class="token attr-name">Alipay</span> <span class="token attr-name">client"</span>\n            <span class="token attr-name">data-seed</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>logId<span class="token punctuation">"</span></span>\n            <span class="token attr-name">autoFocus</span>\n            <span class="token attr-name">autoHeight</span>\n          <span class="token punctuation">/></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextareaItem</span>\n            <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6807\u9898<span class="token punctuation">"</span></span>\n            <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>click</span> <span class="token attr-name">the</span> <span class="token attr-name">button</span> <span class="token attr-name">below</span> <span class="token attr-name">to</span> <span class="token attr-name">focus"</span>\n            <span class="token attr-name">data-seed</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>logId<span class="token punctuation">"</span></span>\n            <span class="token attr-name">autoHeight</span>\n            <span class="token attr-name">focused</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>focused<span class="token punctuation">}</span></span>\n            <span class="token attr-name">onFocus</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n              <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n                focused<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span></span><span class="token attr-name">}</span>\n          <span class="token punctuation">/></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>\n              <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'#108ee9\'</span><span class="token punctuation">,</span> textAlign<span class="token punctuation">:</span> <span class="token string">\'center\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n              <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n                  focused<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n              <span class="token punctuation">}</span></span><span class="token attr-name">}</span>\n            <span class="token punctuation">></span></span>\n              click to focus\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'Whether is controlled\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token operator">&lt;</span>TextareaItem\n            <span class="token punctuation">{</span><span class="token operator">...</span><span class="token function">getFieldProps</span><span class="token punctuation">(</span><span class="token string">\'control\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n            title<span class="token operator">=</span><span class="token string">"\u53d7\u63a7\u7ec4\u4ef6"</span>\n            placeholder<span class="token operator">=</span><span class="token string">"Hello World"</span>\n          <span class="token operator">/</span><span class="token operator">></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextareaItem</span>\n            <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u975e\u53d7\u63a7\u7ec4\u4ef6<span class="token punctuation">"</span></span>\n            <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>please</span> <span class="token attr-name">input</span> <span class="token attr-name">content"</span>\n          <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'Auto / Fixed height\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token operator">&lt;</span>TextareaItem\n            <span class="token punctuation">{</span><span class="token operator">...</span><span class="token function">getFieldProps</span><span class="token punctuation">(</span><span class="token string">\'note3\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n            title<span class="token operator">=</span><span class="token string">"\u9ad8\u5ea6\u81ea\u9002\u5e94"</span>\n            autoHeight\n            labelNumber<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span>\n          <span class="token operator">/</span><span class="token operator">></span>\n          <span class="token operator">&lt;</span>TextareaItem\n            <span class="token punctuation">{</span><span class="token operator">...</span><span class="token function">getFieldProps</span><span class="token punctuation">(</span><span class="token string">\'note1\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n            rows<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span>\n            placeholder<span class="token operator">=</span><span class="token string">"fixed number of lines"</span>\n          <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'Show clear icon\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token operator">&lt;</span>TextareaItem\n            <span class="token punctuation">{</span><span class="token operator">...</span><span class="token function">getFieldProps</span><span class="token punctuation">(</span><span class="token string">\'clear1\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n            clear\n            title<span class="token operator">=</span><span class="token string">"\u6807\u9898"</span>\n            placeholder<span class="token operator">=</span><span class="token string">"displayed clear icon while typing"</span>\n          <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'Custom title\uff08text / image / empty\uff09\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token operator">&lt;</span>TextareaItem\n            <span class="token punctuation">{</span><span class="token operator">...</span><span class="token function">getFieldProps</span><span class="token punctuation">(</span><span class="token string">\'title3\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n            title<span class="token operator">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'0.56rem\'</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token string">\'0.56rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n            placeholder<span class="token operator">=</span><span class="token string">"title can be customized"</span>\n          <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'Limited value length\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token operator">&lt;</span>TextareaItem\n            <span class="token punctuation">{</span><span class="token operator">...</span><span class="token function">getFieldProps</span><span class="token punctuation">(</span><span class="token string">\'note4\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n            placeholder<span class="token operator">=</span><span class="token string">"can enter up to 10 characters"</span>\n            count<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span>\n          <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'Count\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token operator">&lt;</span>TextareaItem\n            <span class="token punctuation">{</span><span class="token operator">...</span><span class="token function">getFieldProps</span><span class="token punctuation">(</span><span class="token string">\'count\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n              initialValue<span class="token punctuation">:</span> <span class="token string">\'\u8ba1\u6570\u529f\u80fd,\u6211\u7684\u610f\u89c1\u662f...\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n            rows<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span>\n            count<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">}</span>\n          <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'Not editable / Disabled\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token operator">&lt;</span>TextareaItem\n            <span class="token punctuation">{</span><span class="token operator">...</span><span class="token function">getFieldProps</span><span class="token punctuation">(</span><span class="token string">\'note6\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n              initialValue<span class="token punctuation">:</span> <span class="token string">\'not editable\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n            title<span class="token operator">=</span><span class="token string">"\u59d3\u540d"</span>\n            editable<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span>\n          <span class="token operator">/</span><span class="token operator">></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextareaItem</span>\n            <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>disabled</span> <span class="token attr-name">style"</span>\n            <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u59d3\u540d<span class="token punctuation">"</span></span>\n            <span class="token attr-name">disabled</span>\n          <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> TextareaItemExampleWrapper <span class="token operator">=</span> <span class="token function">createForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>TextareaItemExample<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextareaItemExampleWrapper</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],style:".demoTitle:before,\n.demoTitle:after {\n  border-bottom: none;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.demoTitle</span><span class="token pseudo-element">:before</span>,\n<span class="token class">.demoTitle</span><span class="token pseudo-element">:after</span> </span><span class="token punctuation">{</span>\n  <span class="token property">border-bottom</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},717:function(n,s,a){n.exports={basic:a(631)}}});