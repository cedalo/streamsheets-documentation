"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[26160],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81450:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],s={id:"jsonprocess",title:"JSON.PROCESS",sidebar_label:"JSON.PROCESS"},i=void 0,p={unversionedId:"functions/streamsheet/jsonprocess",id:"version-2.4/functions/streamsheet/jsonprocess",title:"JSON.PROCESS",description:"star This is a premium feature.",source:"@site/streamsheets_versioned_docs/version-2.4/functions/streamsheet/jsonprocess.md",sourceDirName:"functions/streamsheet",slug:"/functions/streamsheet/jsonprocess",permalink:"/streamsheets/2.4/functions/streamsheet/jsonprocess",tags:[],version:"2.4",frontMatter:{id:"jsonprocess",title:"JSON.PROCESS",sidebar_label:"JSON.PROCESS"},sidebar:"version-2.4/someSidebar",previous:{title:"JSON",permalink:"/streamsheets/2.4/functions/streamsheet/json"},next:{title:"JSON.RANGE",permalink:"/streamsheets/2.4/functions/streamsheet/jsonrange"}},c=[],u={toc:c};function m(e){var t=e.components,s=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"star",src:n(48721).Z,width:"24",height:"24"})," This is a ",(0,l.kt)("a",{parentName:"p",href:"https://cedalo.com/pricing/streamsheets/"},"premium")," feature."),(0,l.kt)("p",null,"Traverses given JSON object and processes each cell in specified cell-range. Before the cell-range is processed the\ncurrent JSON value is written to defined value cell, whereas the corresponding key is returned from the function itself.\nA nested JSON can be completely traversed by setting the optional recursive parameter to TRUE. To immediately stop the\nJSON traversal use ",(0,l.kt)("a",{parentName:"p",href:"/streamsheets/2.4/functions/streamsheet/break"},(0,l.kt)("inlineCode",{parentName:"a"},"BREAK()"))," in processed cell-range."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("p",null,"=JSON.PROCESS(JSON, ValueCell, CellRange, ","[",", Recursive","]",")"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JSON"),(0,l.kt)("td",{parentName:"tr",align:null},"A JSON object to process.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ValueCell"),(0,l.kt)("td",{parentName:"tr",align:null},"Cell-reference to write current JSON value to.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CellRange"),(0,l.kt)("td",{parentName:"tr",align:null},"Cell-range to process for each JSON value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Recursive"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Specify TRUE to completely traverse a nested JSON object. Defaults to FALSE.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return Value")),(0,l.kt)("p",null,"Currently processed JSON key or an ",(0,l.kt)("a",{parentName:"p",href:"../../other#error-codes"},"error")," value."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")," "),(0,l.kt)("p",null,"Traverse simple JSON and process specified cell-range:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'A1: {"name": "foo", "age": 42 }\nA2: =CONCAT(A2, A4, "-")\nA3: =CONCAT(A3, B3, "-")\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Function"),(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"=JSON.PROCESS(JSON(A1), B3, A2:A3)"),(0,l.kt)("td",{parentName:"tr",align:null},"age"),(0,l.kt)("td",{parentName:"tr",align:null},"Processes given cell-range for each JSON key-value pair. When finished A2 contains all the keys (",(0,l.kt)("inlineCode",{parentName:"td"},"-name-age-"),") and  A3 all the corresponding values (",(0,l.kt)("inlineCode",{parentName:"td"},"-foo-42-"),")")))))}m.isMDXComponent=!0},48721:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTExLjk5IDJDNi40NyAyIDIgNi40OCAyIDEyczQuNDcgMTAgOS45OSAxMEMxNy41MiAyMiAyMiAxNy41MiAyMiAxMlMxNy41MiAyIDExLjk5IDJ6bTQuMjQgMTZMMTIgMTUuNDUgNy43NyAxOGwxLjEyLTQuODEtMy43My0zLjIzIDQuOTItLjQyTDEyIDVsMS45MiA0LjUzIDQuOTIuNDItMy43MyAzLjIzTDE2LjIzIDE4eiIvPjwvc3ZnPg=="}}]);