(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{167:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),c=(a(0),a(376)),b={id:"opcuawrite",title:"OPCUA.WRITE",sidebar_label:"OPCUA.WRITE"},o={unversionedId:"streamsheets/functions/streams/opcuawrite",id:"streamsheets/functions/streams/opcuawrite",isDocsHomePage:!1,title:"OPCUA.WRITE",description:"star This is a [Streamsheets",source:"@site/docs\\streamsheets\\functions\\streams\\opcuawrite.md",slug:"/streamsheets/functions/streams/opcuawrite",permalink:"/latest/docs/streamsheets/functions/streams/opcuawrite",version:"current",sidebar_label:"OPCUA.WRITE"},i=[],l={rightToc:i};function u(e){var t=e.components,b=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,b,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("img",{alt:"star",src:a(377).default})," This is a ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://cedalo.com/download/"}),"Streamsheets\nPremium")," feature."),Object(c.b)("p",null,"Sends a write request of a value to an OPC UA Server. The Server will\nrespond, if the write was successful or not. You can use the\nFunction Wizard for this function. Click\nhere for a more detailed tutorial on opcua functions."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Syntax")),Object(c.b)("p",null,"=OPCUA.WRITE(Producer, Node, ValueJSON, Target","[",",ResultKeys,\nTimeout","]",")"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Arguments")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Producer"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Producer to use for publishing.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Node"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Path of the node to write to or node id.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ValueJSON"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'JSON with a "value" and a "dataType" field containing the value to write and the data type of the value.')),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Target"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'Target of the result of the write operation. Can be either INBOX(), OUTBOX("MsgID") or a cell range.')),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ResultKeys"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional. Limit the result to the specified JSON Keys")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Timeout"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional. The time to wait for an answer. When left empty a 20 second timeout is being used.")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Return Value")),Object(c.b)("p",null,"The function OPCUA.WRITE always returns a unique random request ID,\nwhich can be used with requestinfo to check the state of the request."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Examples")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Function"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Result"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Comment"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"=OPCUA.WRITE(\u201cOPCUA Producer\u201d,\u201d/Objects/1:Machines/1:H1mrblX0X/name\u201d,JSON(A2:B3), INBOX()) ",Object(c.b)("br",null),"   ",Object(c.b)("img",{src:"/docs/streamsheets/_images/REST.RESPOND.PNG",alt:"OPCUA.WRITE",width:"60%"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TRUE"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sends the message with id ",Object(c.b)("em",{parentName:"td"},"Message")," from the outbox to an OPCUA Service using the ",Object(c.b)("em",{parentName:"td"},"requestId")," in B1")))))}u.isMDXComponent=!0},376:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=u(a),p=n,m=s["".concat(b,".").concat(p)]||s[p]||O[p]||c;return a?r.a.createElement(m,o(o({ref:t},l),{},{components:a})):r.a.createElement(m,o({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,b=new Array(c);b[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,b[1]=o;for(var l=2;l<c;l++)b[l]=a[l];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},377:function(e,t,a){"use strict";a.r(t),t.default="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTExLjk5IDJDNi40NyAyIDIgNi40OCAyIDEyczQuNDcgMTAgOS45OSAxMEMxNy41MiAyMiAyMiAxNy41MiAyMiAxMlMxNy41MiAyIDExLjk5IDJ6bTQuMjQgMTZMMTIgMTUuNDUgNy43NyAxOGwxLjEyLTQuODEtMy43My0zLjIzIDQuOTItLjQyTDEyIDVsMS45MiA0LjUzIDQuOTIuNDItMy43MyAzLjIzTDE2LjIzIDE4eiIvPjwvc3ZnPg=="}}]);