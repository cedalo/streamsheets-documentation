(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{173:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return b})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return i}));var n=r(3),a=r(7),c=(r(0),r(377)),l={id:"replace",title:"REPLACE",sidebar_label:"REPLACE"},b={unversionedId:"streamsheets/functions/text/replace",id:"streamsheets/functions/text/replace",isDocsHomePage:!1,title:"REPLACE",description:"Replaces part of a string value, based on the number of specified",source:"@site/docs\\streamsheets\\functions\\text\\replace.md",slug:"/streamsheets/functions/text/replace",permalink:"/latest/docs/streamsheets/functions/text/replace",version:"current",sidebar_label:"REPLACE"},o=[],p={rightToc:o};function i(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Replaces part of a string value, based on the number of specified\ncharacters, with a different text."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Syntax")),Object(c.b)("p",null,"=REPLACE(OldText, StartPos, NumChars, NewText)"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Arguments")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OldText"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String in which to replace characters.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"StartAt"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Character position in OldText at which replace starts.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NumChars"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number of characters from StartAt to be replaced by NewText.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NewText"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The text which will replace specified characters in OldText.")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Return Value")),Object(c.b)("p",null,"The replaced Text."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Example")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Function"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Result"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'=REPLACE("Replace me now", 12, 3, "later")'),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"Replace me later"')))))}i.isMDXComponent=!0},377:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),i=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},u=function(e){var t=i(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=i(r),O=n,m=u["".concat(l,".").concat(O)]||u[O]||s[O]||c;return r?a.a.createElement(m,b(b({ref:t},p),{},{components:r})):a.a.createElement(m,b({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,l=new Array(c);l[0]=O;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var p=2;p<c;p++)l[p]=r[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);