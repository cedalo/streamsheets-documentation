(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{200:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return i}));var r=n(3),a=n(7),c=(n(0),n(375)),l={id:"jsonprocess",title:"JSON.PROCESS",sidebar_label:"JSON.PROCESS"},o={unversionedId:"streamsheets/functions/streamsheet/jsonprocess",id:"streamsheets/functions/streamsheet/jsonprocess",isDocsHomePage:!1,title:"JSON.PROCESS",description:"star This is a Streamsheets Premium feature.",source:"@site/docs\\streamsheets\\functions\\streamsheet\\jsonprocess.md",slug:"/streamsheets/functions/streamsheet/jsonprocess",permalink:"/latest/docs/streamsheets/functions/streamsheet/jsonprocess",version:"current",sidebar_label:"JSON.PROCESS",sidebar:"someSidebar",previous:{title:"JSON2EXCELTIME",permalink:"/latest/docs/streamsheets/functions/date/json2exceltime"},next:{title:"JSON.RANGE",permalink:"/latest/docs/streamsheets/functions/streamsheet/jsonrange"}},s=[],b={rightToc:s};function i(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,l,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("img",{alt:"star",src:n(376).default})," This is a ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://cedalo.com/download/"}),"Streamsheets Premium")," feature."),Object(c.b)("p",null,"Traverses given JSON object and processes each cell in specified cell-range. Before the cell-range is processed the\ncurrent JSON value is written to defined value cell, whereas the corresponding key is returned from the function itself.\nA nested JSON can be completely traversed by setting the optional recursive parameter to TRUE. To immediately stop the\nJSON traversal use ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"./break.md"}),Object(c.b)("inlineCode",{parentName:"a"},"BREAK()"))," in processed cell-range."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Syntax")),Object(c.b)("p",null,"=JSON.PROCESS(JSON, ValueCell, CellRange, ","[",", Recursive","]",")"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Arguments")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"JSON"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"A JSON object to process.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ValueCell"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Cell-reference to write current JSON value to.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"CellRange"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Cell-range to process for each JSON value.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Recursive"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Optional. Specify TRUE to completely traverse a nested JSON object. Defaults to FALSE.")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Return Value")),Object(c.b)("p",null,"Currently processed JSON key or an error value."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Examples")," "),Object(c.b)("p",null,"Traverse simple JSON and process specified cell-range:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'A1: {"name": "foo", "age": 42 }\nA2: =CONCAT(A2, A4, "-")\nA3: =CONCAT(A3, B3, "-")\n')),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Function"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Result"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Comment"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"=JSON.PROCESS(JSON(A1), B3, A2:A3)"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"age"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Processes given cell-range for each JSON key-value pair. When finished A2 contains all the keys (",Object(c.b)("inlineCode",{parentName:"td"},"-name-age-"),") and  A3 all the corresponding values (",Object(c.b)("inlineCode",{parentName:"td"},"-foo-42-"),")")))))}i.isMDXComponent=!0},375:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),i=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=i(n),O=r,m=p["".concat(l,".").concat(O)]||p[O]||u[O]||c;return n?a.a.createElement(m,o(o({ref:t},b),{},{components:n})):a.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=O;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var b=2;b<c;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},376:function(e,t,n){"use strict";n.r(t),t.default="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTExLjk5IDJDNi40NyAyIDIgNi40OCAyIDEyczQuNDcgMTAgOS45OSAxMEMxNy41MiAyMiAyMiAxNy41MiAyMiAxMlMxNy41MiAyIDExLjk5IDJ6bTQuMjQgMTZMMTIgMTUuNDUgNy43NyAxOGwxLjEyLTQuODEtMy43My0zLjIzIDQuOTItLjQyTDEyIDVsMS45MiA0LjUzIDQuOTIuNDItMy43MyAzLjIzTDE2LjIzIDE4eiIvPjwvc3ZnPg=="}}]);