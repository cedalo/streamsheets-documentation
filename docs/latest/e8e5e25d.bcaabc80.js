(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{344:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return b})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),l=(r(0),r(376)),c={id:"cellchart",title:"CELLCHART",sidebar_label:"CELLCHART"},b={unversionedId:"streamsheets/functions/chart/cellchart",id:"streamsheets/functions/chart/cellchart",isDocsHomePage:!1,title:"CELLCHART",description:"Draw a chart inside a cell.",source:"@site/docs\\streamsheets\\functions\\chart\\cellchart.md",slug:"/streamsheets/functions/chart/cellchart",permalink:"/latest/docs/streamsheets/functions/chart/cellchart",version:"current",sidebar_label:"CELLCHART"},o=[],i={rightToc:o};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Draw a chart inside a cell."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Syntax")),Object(l.b)("p",null,"=CELLCHART(DataRange, ChartType, LineColor, FillColor, Marker, Minimum,\nMaximum)"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Arguments")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DataRange"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cell Range to retrieve the data for the chart from")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CharrType"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional. Valid Chart Type. Default is line. Valid values are : line, column, bar, pie, doughnut, bubble, scatter, area.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"LineColor"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional. Line Color to use for first series")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FillColor"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional. Fill Color to use for first series")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Minimum"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Value Axis Minimum")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Maximum"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Value Axis Maximum")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Return Value")),Object(l.b)("p",null,"TRUE, if chart could be created."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Function"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Result"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Comment"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'=CELLCHART(B2:B5, "pie")'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TRUE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Draw a chart in the current cell.")))))}u.isMDXComponent=!0},376:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,s=p["".concat(c,".").concat(m)]||p[m]||O[m]||l;return r?a.a.createElement(s,b(b({ref:t},i),{},{components:r})):a.a.createElement(s,b({ref:t},i))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,c=new Array(l);c[0]=m;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,c[1]=b;for(var i=2;i<l;i++)c[i]=r[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);