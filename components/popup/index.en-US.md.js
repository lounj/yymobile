webpackJsonp([113,168],{576:function(e,o){e.exports={content:["section",["p","A modal box pops up from the top or bottom (will interrupt the user operation)"]],meta:{category:"Components",type:"Feedback",title:"Popup",filename:"components/popup/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p","Support WEB, React-Native."],["h4","static show(content: React.Element, options: Object):"],["p",["code","options"],":"],["ul",["li",["p","animationType (string) - Animation type, choose one of ",["code","slide-down"],"(default) and ",["code","slide-up"]]],["li",["p","transitionName (string) (",["code","web only"],") - Customize the transform animation used to show and hide"]],["li",["p","maskTransitionName (string) (",["code","web only"],") - Customize the transform animation used to the mask"]],["li",["p","onMaskClose (function) - The callback when the mask is closed, support ",["code","Promise"]]],["li",["p","maskClosable (bool) - Whether it's allowed to close when you click the mask (default true)"]]],["p","For ",["code","web"]," platform, you can set ",["code","prefixCls"],"/",["code","className"],"/",["code","wrapClassName"],"/",["code","maskStyle"]," and so on, ref ",["a",{title:null,href:"https://github.com/react-component/dialog#rc-dialogweb"},"rc-dialog"],"."],["h4","static hide(): close Popup"],["h4","static newInstance() (",["code","web only"],")"],["p","In some cases, the page needs multiple popups, For example, Popup in the Popup."],["p","This function returns the Popup instance object, which includes:"],["ul",["li",["p","show (function) - same as ",["code","static show"]]],["li",["p","hide (function) - same as ",["code","static hide"]]]]]}}});