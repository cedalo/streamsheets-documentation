(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{187:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),c=(r(0),r(376)),b={id:"request",title:"REQUEST",sidebar_label:"REQUEST"},l={unversionedId:"streamsheets/functions/streams/request",id:"streamsheets/functions/streams/request",isDocsHomePage:!1,title:"REQUEST",description:"Create an https request. The request parameters are defined by creating",source:"@site/docs\\streamsheets\\functions\\streams\\request.md",slug:"/streamsheets/functions/streams/request",permalink:"/latest/docs/streamsheets/functions/streams/request",version:"current",sidebar_label:"REQUEST"},o=[],u={rightToc:o};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Create an https request. The request parameters are defined by creating\na message. The parameter definition can be derived from:\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/request/request#requestoptions-callback"}),"https://github.com/request/request#requestoptions-callback")," . The\nresult, of the request, if any, will be added to the inbox of the\ngiven target sheet."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Syntax")),Object(c.b)("p",null,"=REQUEST(Producer, ParameterJSON, Target","[",",ResultKeys, Timeout","]",")"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Arguments")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Producer"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Producer to use for submitting the request.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ParameterJSON"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Message with JSON Structure defining the request parameters.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Target"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'INBOX(), OUTBOX("MsgID") or a cell range where the result will be placed.')),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ResultKeys"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional. Limit the result to the specified JSON Keys")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Timeout"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional. Number of ms after the request times out and an error is returned.")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Return Value")),Object(c.b)("p",null,"The function REQUEST() always returns a unique random request ID, which\nis automatically generated when the service is called."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Example")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Function"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Result"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Comment"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'=REQUEST("Rest", OUTBOX("Message"), INBOX("S2"))'),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"generated Request id"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The message must exist before calling REQUEST. It is created like a normal message, which you would like to publish, using the WRITE formula.")))))}s.isMDXComponent=!0},376:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),i=s(r),m=n,O=i["".concat(b,".").concat(m)]||i[m]||p[m]||c;return r?a.a.createElement(O,l(l({ref:t},u),{},{components:r})):a.a.createElement(O,l({ref:t},u))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,b=new Array(c);b[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,b[1]=l;for(var u=2;u<c;u++)b[u]=r[u];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);