(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return i}));var r=n(3),a=n(7),l=(n(0),n(375)),c={id:"range",title:"RANGE",sidebar_label:"RANGE"},o={unversionedId:"streamsheets/functions/streamsheet/range",id:"streamsheets/functions/streamsheet/range",isDocsHomePage:!1,title:"RANGE",description:"Creates a nested JSON array from specified cell range. Basically this",source:"@site/docs\\streamsheets\\functions\\streamsheet\\range.md",slug:"/streamsheets/functions/streamsheet/range",permalink:"/latest/docs/streamsheets/functions/streamsheet/range",version:"current",sidebar_label:"RANGE",sidebar:"someSidebar",previous:{title:"RANDID",permalink:"/latest/docs/streamsheets/functions/text/randid"},next:{title:"READ",permalink:"/latest/docs/streamsheets/functions/streamsheet/read"}},b=[],s={rightToc:b};function i(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Creates a nested JSON array from specified cell range. Basically this\nis the same as using array with nested and flat parameter set to true."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Syntax")),Object(l.b)("p",null,"=RANGE(Cellrange)"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Arguments")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Cellrange"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Source Range to retrieve data from.")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Return Value")),Object(l.b)("p",null,"A nested list of cell values."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Function"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Result"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Comment"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"=RANGE(A1:A1)"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"[","[","42","]","]"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Range defines only one cell, so returned list contains one list with one value.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"=RANGE(A1:C1)"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"[","[","42, 23, 13","]","]"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Range defines 3 values over 1 row, so returned list contains a list with 3 values.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"=RANGE(A1:B2)"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"[","[","42, 23","]",", ","[","13, 17","]","]"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Range defines 4 values over 2 rows, so returned list contains 2 lists with 2 values each.")))))}i.isMDXComponent=!0},375:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),i=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),u=i(n),m=r,O=u["".concat(c,".").concat(m)]||u[m]||p[m]||l;return n?a.a.createElement(O,o(o({ref:t},s),{},{components:n})):a.a.createElement(O,o({ref:t},s))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=m;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<l;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);