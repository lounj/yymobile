webpackJsonp([145,162],{561:function(t,e){t.exports={content:["section",["p","Used to select a date or time."],["h3","Rules"],["ul",["li",["p","A maximum of five independent rollers are shown, each of which represents a different value."]]]],meta:{category:"Components",type:"Data Entry",title:"DatePicker",filename:"components/date-picker/index.en-US.md"},api:["section",["h2","API"],["p","Support WEB, React-Native."],["table",["thead",["tr",["th","Properties"],["th","Descrition"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","mode"],["td","mode value, can be a ",["code","date"]," or ",["code","time"]," or ",["code","datetime"]," or ",["code","year"]," or ",["code","month"]],["td","String"],["td",["code","date"]]],["tr",["td","value"],["td","the currently selected value, corresponding mode under the format are: ",["code","YYYY-MM-DD"]," or ",["code","HH:mm"]," or ",["code","YYYY-MM-DD HH:mm"]],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"]],["tr",["td","minDate"],["td","minimum date, the format is the same as value"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"]],["tr",["td","maxDate"],["td","maximum date, the format is the same as value"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"]],["tr",["td","onChange"],["td","change handler"],["td","(date: Object): void"],["td","-"]],["tr",["td","locale"],["td","international, can override the configuration of the global ",["code","[LocaleProvider](https://mobile.ant.design/components/locale-provider)"]],["td","Object: {DatePickerLocale: {year, month, day, hour, minute}, okText, dismissText}"],["td","-"]],["tr",["td","title"],["td","title"],["td","string/React.ReactElement"],["td","-"]],["tr",["td","format"],["td","format the selected value"],["td","(value:moment) => string/string"],["td",["code","(val) => { return val; }"]]],["tr",["td","extra"],["td","DatePicker's children is best to ",["code","List.Item"],", if not, need to be a custom component (the ",["code","onClick"],"/",["code","extra"]," props need to be handled in the component)"],["td","String"],["td",["code","\u8bf7\u9009\u62e9"]]],["tr",["td","disabled"],["td","set disabled"],["td","Boolean"],["td","false"]],["tr",["td","prefixCls (",["code","WEB only"],")"],["td","prefix class"],["td","string"],["td",["code","am-picker"]]],["tr",["td","className (",["code","WEB only"],")"],["td","\u6837\u5f0f\u7c7b\u540d"],["td","string"],["td","-"]],["tr",["td","minuteStep"],["td","The amount of time, in minutes, between each minute item."],["td","Number"],["td","1"]]]],["p","More reference: ",["a",{title:null,href:"https://github.com/react-component/m-date-picker"},"https://github.com/react-component/m-date-picker"]]]}}});