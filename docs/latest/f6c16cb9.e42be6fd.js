(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{363:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),l=(n(0),n(375)),c={id:"year",title:"YEAR",sidebar_label:"YEAR"},b={unversionedId:"streamsheets/functions/date/year",id:"streamsheets/functions/date/year",isDocsHomePage:!1,title:"YEAR",description:"Returns the year of the date value.",source:"@site/docs\\streamsheets\\functions\\date\\year.md",slug:"/streamsheets/functions/date/year",permalink:"/latest/docs/streamsheets/functions/date/year",version:"current",sidebar_label:"YEAR",sidebar:"someSidebar",previous:{title:"WRITE",permalink:"/latest/docs/streamsheets/functions/streamsheet/write"},next:{title:"ABS",permalink:"/latest/docs/streamsheets/functions/math/abs"}},o=[],i={rightToc:o};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Returns the year of the date value."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Syntax")),Object(l.b)("p",null,"=YEAR(DateValue","[",",Round","]",")"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Arguments")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DateValue"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Insert a valid timestamp format or a cell referenz to a timestamp. A timestamp consists out of two numbers. The number to the left of the decimal define the days since 01.01.1900. The number to the right of the decimal define the fraction of the day.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Round"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optional. Defines if value should be rounded. Default is true.")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Return Value")),Object(l.b)("p",null,"Year evaluated from date value."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Function"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Result"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Comment"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"=YEAR(43238)"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2018"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The given date value represents the 18th of May, 2018")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"=YEAR(39447.99999422, true)"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2008"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Rounded to 2008")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"=YEAR(39447.99999422, false)"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2007"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Same input value as before but no rounding applied")))))}u.isMDXComponent=!0},375:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,d=p["".concat(c,".").concat(m)]||p[m]||s[m]||l;return n?r.a.createElement(d,b(b({ref:t},i),{},{components:n})):r.a.createElement(d,b({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=m;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,c[1]=b;for(var i=2;i<l;i++)c[i]=n[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);