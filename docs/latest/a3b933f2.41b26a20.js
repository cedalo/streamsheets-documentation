(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{259:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),c=(n(0),n(375)),l={id:"second",title:"SECOND",sidebar_label:"SECOND"},o={unversionedId:"streamsheets/functions/date/second",id:"streamsheets/functions/date/second",isDocsHomePage:!1,title:"SECOND",description:"Returns the second of the date value.",source:"@site/docs\\streamsheets\\functions\\date\\second.md",slug:"/streamsheets/functions/date/second",permalink:"/latest/docs/streamsheets/functions/date/second",version:"current",sidebar_label:"SECOND",sidebar:"someSidebar",previous:{title:"SEARCH",permalink:"/latest/docs/streamsheets/functions/text/search"},next:{title:"SELECT",permalink:"/latest/docs/streamsheets/functions/streamsheet/select"}},b=[],i={rightToc:b};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Returns the second of the date value."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Syntax")),Object(c.b)("p",null,"=SECOND(DateValue","[",",Round","]",")"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Arguments")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DateValue"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Insert a valid timestamp format or a cell reference to a timestamp. A timestamp consists out of two numbers. The number to the left of the decimal define the days since 01.01.1900. The number to the right of the decimal define the fraction of the day.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Round"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optional. Defines if value should be rounded. Default is true.")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Return Value")),Object(c.b)("p",null,"Second evaluated from date value."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Example")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Function"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Result"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Comment"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"=SECOND(43238.5)"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The given date value represents the 18th of May, 2018, 12:00")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"=SECOND(43930.999999, true)"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Rounded to 0")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"=SECOND(43930.999999, false)"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"59"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Same as before but prevent rounding")))))}u.isMDXComponent=!0},375:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,O=s["".concat(l,".").concat(d)]||s[d]||p[d]||c;return n?r.a.createElement(O,o(o({ref:t},i),{},{components:n})):r.a.createElement(O,o({ref:t},i))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var i=2;i<c;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);