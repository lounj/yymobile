webpackJsonp([144,147],{483:function(e,t){e.exports={content:["section",["p","The modal box pops up from the bottom, providing more than two actions related to the current scene, and also support provide the title and description. Built-in fixed display style, does not support particularly flexible changes."],["h3","Rules"],["ul",["li",["p","Provide a clear exit button."]],["li",["p",'Can highlight the destructive operation, e.g. "delete" use red text.']],["li",["p","Do not place too much content to avoid vertical roll of the panel."]]]],meta:{category:"Components",type:"Feedback",title:"ActionSheet",filename:"components/action-sheet/index.en-US.md"},api:["section",["h2","API"],["p","Support WEB, React-Native."],["h4","static showActionSheetWithOptions(options: Object, callback: Function)"],["p","Display a action sheet. The ",["code","options"]," object must contain one or more of:"],["ul",["li",["p","options (array of strings) - a list of button titles (required)"]],["li",["p","cancelButtonIndex (int) - index of cancel button in ",["code","options"]]],["li",["p","destructiveButtonIndex (int) - index of destructive button in ",["code","options"]]],["li",["p","title (string) - a title to show above the action sheet"]],["li",["p","message (string/React.element) - a message to show below the title"]],["li",["p","maskClosable (bool)(",["code","web only"],") - Whether it's allowed to close when you click the mask (default true)"]]],["p","The ",["code","callback"]," function support returns Promise (",["code","web only"],")"],["h4","static showShareActionSheetWithOptions(options: Object, callback: Function)"],["p","Display shareable action sheet. The ",["code","options"]," object must contain one or more of:"],["ul",["li",["p","options (array of ",["code","{icon:React.node, iconName:string, title:string}"],") - a list of share buttons (required)"],["ul",["li",["p","Note: ",["code","iconName"]," is one type value of the ",["a",{title:null,href:"https://mobile.ant.design/components/icon"},"Icon Component"],", it will override the ",["code","icon"]," property setting (The ",["code","icon"]," property is used to set the custom content)"]],["li",["p","It can be a two-dimensional array, can display multi-line buttons, e.g. ",["code","[[{icon,title},{icon,title}], [{icon,title},{icon,title}]]"]," means two rows and two columns. In this case there are two parameters on ",["code","callback"],", the first for the ",["code","column"]," sequence, the second for the ",["code","line"],"."]]]],["li",["p","cancelButtonText (string)(",["code","web only"],") - the text of cancel button, default ",["code","\u53d6\u6d88"]]],["li",["p","title (string) - a title to show above the action sheet"]],["li",["p","message (string/React.element) - a message to show below the title"]],["li",["p","maskClosable (bool)(",["code","web only"],") - Whether it's allowed to close when you click the mask (default true)"]]],["p","The ",["code","callback"]," function support returns Promise (",["code","web only"],")"],["h4","static close() - (web\u3001android only) programmatically close."]]}}});