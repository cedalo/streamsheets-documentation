(window.webpackJsonp=window.webpackJsonp||[]).push([[304],{372:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return i}));var a=n(3),r=n(7),l=(n(0),n(375)),o={id:"month",title:"MONTH",sidebar_label:"MONTH"},c={unversionedId:"streamsheets/functions/date/month",id:"streamsheets/functions/date/month",isDocsHomePage:!1,title:"MONTH",description:"Returns the month of the date value.",source:"@site/docs\\streamsheets\\functions\\date\\month.md",slug:"/streamsheets/functions/date/month",permalink:"/latest/docs/streamsheets/functions/date/month",version:"current",sidebar_label:"MONTH",sidebar:"someSidebar",previous:{title:"MONGO.STORE",permalink:"/latest/docs/streamsheets/functions/streams/mongostore"},next:{title:"MOVEVALUES",permalink:"/latest/docs/streamsheets/functions/streamsheet/movevalues"}},b=[],u={rightToc:b};function i(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Returns the month of the date value."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Syntax")),Object(l.b)("p",null,"=MONTH(DateValue","[",",Round","]",")"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Arguments")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DateValue"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Insert a valid timestamp format or a cell referenz to a timestamp. A timestamp consists out of two numbers. The number to the left of the decimal define the days since 01.01.1900. The number to the right of the decimal define the fraction of the day.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Round"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optional. Defines if value should be rounded. Default is true.")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Return Value")),Object(l.b)("p",null,"=Month evaluated from date value."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Function"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Result"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Comment"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"=MONTH(43238)"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The given date value represents the 18th of May, 2018")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"=MONTH(39447.99999422, true)"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Rounded to 1")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"=MONTH(39447.99999422, false)"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"12"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Same input value as before but no rounding applied")))))}i.isMDXComponent=!0},375:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),i=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=i(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=b(e,["components","mdxType","originalType","parentName"]),p=i(n),m=a,O=p["".concat(o,".").concat(m)]||p[m]||s[m]||l;return n?r.a.createElement(O,c(c({ref:t},u),{},{components:n})):r.a.createElement(O,c({ref:t},u))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<l;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);