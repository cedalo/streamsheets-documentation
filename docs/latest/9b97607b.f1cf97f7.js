(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{248:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),c=(a(0),a(375)),i={id:"timescaleexport",title:"TIMESCALE.EXPORT",sidebar_label:"TIMESCALE.EXPORT"},l={unversionedId:"streamsheets/functions/streams/timescaleexport",id:"streamsheets/functions/streams/timescaleexport",isDocsHomePage:!1,title:"TIMESCALE.EXPORT",description:"star This is a [Streamsheets",source:"@site/docs\\streamsheets\\functions\\streams\\timescaleexport.md",slug:"/streamsheets/functions/streams/timescaleexport",permalink:"/latest/docs/streamsheets/functions/streams/timescaleexport",version:"current",sidebar_label:"TIMESCALE.EXPORT",sidebar:"someSidebar",previous:{title:"TIMESCALE.DROP_TABLE",permalink:"/latest/docs/streamsheets/functions/streams/timescaledrop_table"},next:{title:"TIMESCALE.INSERT",permalink:"/latest/docs/streamsheets/functions/streams/timescaleinsert"}},o=[],b={rightToc:o};function s(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,i,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("img",{alt:"star",src:a(376).default})," This is a ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://cedalo.com/download/"}),"Streamsheets\nPremium")," feature."),Object(c.b)("p",null,'Performs an EXPORT query on your Timescale database. This query works\nexactly like the queries from TIMESCALE.SELECT, but exports the result\ninto a file. This file can be accessed in the side menu of your App\nunder "App Files". '),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"}," As of right now, the timescale functions work with the internal timescaledb. Leave the Producer parameter empty and the connection is setup. We are working on allowing further timescale connections. "))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Syntax")),Object(c.b)("p",null,"=TIMESCALE.EXPORT(Stream, TableName, SelectJSON, Filename, ","[","Compres,\nDelimiter","]",")"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Arguments")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Stream"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Stream to use for querying. The database name is configured in the affiliated Connector.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TableName"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the table.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SelectJSON"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A SelectJSON to query your data to export.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Filename"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name the File.")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Return Value")),Object(c.b)("p",null,"TRUE, if successful."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Examples")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Function"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Result"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Comment"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'=TIMESCALE.EXPORT("Producer", "Table1", JSON(A1:B2), "Export1")'),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TRUE"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'Exports data from "Table1" to the file "Export1". The data to export is specified in A1:B2')))))}s.isMDXComponent=!0},375:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),m=s(a),u=n,O=m["".concat(i,".").concat(u)]||m[u]||p[u]||c;return a?r.a.createElement(O,l(l({ref:t},b),{},{components:a})):r.a.createElement(O,l({ref:t},b))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var b=2;b<c;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},376:function(e,t,a){"use strict";a.r(t),t.default="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTExLjk5IDJDNi40NyAyIDIgNi40OCAyIDEyczQuNDcgMTAgOS45OSAxMEMxNy41MiAyMiAyMiAxNy41MiAyMiAxMlMxNy41MiAyIDExLjk5IDJ6bTQuMjQgMTZMMTIgMTUuNDUgNy43NyAxOGwxLjEyLTQuODEtMy43My0zLjIzIDQuOTItLjQyTDEyIDVsMS45MiA0LjUzIDQuOTIuNDItMy43MyAzLjIzTDE2LjIzIDE4eiIvPjwvc3ZnPg=="}}]);