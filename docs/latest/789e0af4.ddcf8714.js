(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{202:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return i}));var r=n(3),a=n(7),o=(n(0),n(375)),l={id:"jsonvalue",title:"JSON.VALUE",sidebar_label:"JSON.VALUE"},c={unversionedId:"streamsheets/functions/streamsheet/jsonvalue",id:"streamsheets/functions/streamsheet/jsonvalue",isDocsHomePage:!1,title:"JSON.VALUE",description:"Returns a value from a JSON object. The value to return corresponds to",source:"@site/docs\\streamsheets\\functions\\streamsheet\\jsonvalue.md",slug:"/streamsheets/functions/streamsheet/jsonvalue",permalink:"/latest/docs/streamsheets/functions/streamsheet/jsonvalue",version:"current",sidebar_label:"JSON.VALUE",sidebar:"someSidebar",previous:{title:"JSON.TO.XML",permalink:"/latest/docs/streamsheets/functions/streamsheet/jsontoxml"},next:{title:"KAFKA.COMMAND",permalink:"/latest/docs/streamsheets/functions/streams/kafkacommand"}},b=[],s={rightToc:b};function i(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Returns a value from a JSON object. The value to return corresponds to\nthe path specified by given keys. Please refer to\nJSON.RANGE for writing the complete data of a JSON object\nto the sheet."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Syntax")),Object(o.b)("p",null,"=JSON.VALUE(JSON, Key1, Key2, ...)"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Arguments")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"JSON"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"A JSON object to read value from.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Key1...KeyN"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"A list of keys which build up a path within given JSON object.")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Return Value")),Object(o.b)("p",null,"The value at specified path or an error if no JSON object is passed or\npath is invalid."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example"),' Below examples assumes following text in A1: {"Customer":\n{"Name": "Peter", "Kids": ',"[",'"Paul", "Mary"',"]","}}"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Function"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Result"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Comment"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'=JSON.VALUE(JSON(A1),"Customer","Name")'),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Peter"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Value at Customer.Name")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'=JSON.VALUE(JSON(A1),"Customer","Kids", 1)'),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Mary"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Value at Customer.Kids","[","1","]")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'=JSON.VALUE(JSON(A1),"Customer","Kids", "Name")'),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"#","NA"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Invalid json path")))))}i.isMDXComponent=!0},375:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),i=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=i(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),u=i(n),O=r,m=u["".concat(l,".").concat(O)]||u[O]||p[O]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=O;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);