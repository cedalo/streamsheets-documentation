(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[99324],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return s},kt:function(){return g}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function A(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),u=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):A(A({},e),t)),n},s=function(t){var e=u(t.components);return a.createElement(l.Provider,{value:e},t.children)},b={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=u(n),g=r,c=m["".concat(l,".").concat(g)]||m[g]||b[g]||o;return n?a.createElement(c,A(A({ref:e},s),{},{components:n})):a.createElement(c,A({ref:e},s))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,A=new Array(o);A[0]=m;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:r,A[1]=i;for(var u=2;u<o;u++)A[u]=n[u];return a.createElement.apply(null,A)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40787:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return A},metadata:function(){return i},toc:function(){return l},default:function(){return s}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),A={id:"offset",title:"OFFSET",sidebar_label:"OFFSET"},i={unversionedId:"functions/lookup/offset",id:"version-2.3/functions/lookup/offset",isDocsHomePage:!1,title:"OFFSET",description:"Returns a cell range that is defined by specified number of rows and",source:"@site/streamsheets_versioned_docs/version-2.3/functions/lookup/offset.md",sourceDirName:"functions/lookup",slug:"/functions/lookup/offset",permalink:"/streamsheets/2.3/functions/lookup/offset",version:"2.3",sidebar_label:"OFFSET",frontMatter:{id:"offset",title:"OFFSET",sidebar_label:"OFFSET"},sidebar:"version-2.3/someSidebar",previous:{title:"MATCH",permalink:"/streamsheets/2.3/functions/lookup/match"},next:{title:"VLOOKUP",permalink:"/streamsheets/2.3/functions/lookup/vlookup"}},l=[],u={toc:l};function s(t){var e=t.components,A=(0,r.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},u,A,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Returns a cell range that is defined by specified number of rows and\ncolumns from an initial range."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Syntax")),(0,o.kt)("p",null,"=OFFSET(Range, RowOffset, ColumnOffset ","[",", Height, Width","]",")"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Range"),(0,o.kt)("td",{parentName:"tr",align:null},"A cell or cell range which defines the base of returned cell range.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RowOffset"),(0,o.kt)("td",{parentName:"tr",align:null},"Row offset from top left position of Range, might be positive or negative.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ColumnOffset"),(0,o.kt)("td",{parentName:"tr",align:null},"Column offset from top left position of Range, might be positive or negative.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Height"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. Number of rows for result range. Height must be greater than zero. If not given the height of specified base cell range is used.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Width"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. Number of columns for result range. Width must be greater than zero. If not given the width of specified base cell range is used.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Return Value")),(0,o.kt)("p",null,"If height and width define a cell: Value of cell",(0,o.kt)("br",{parentName:"p"}),"\n","If height and width define a cell range: ","#","VALUE"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Function"),(0,o.kt)("th",{parentName:"tr",align:null},"Result"),(0,o.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",null,"1.")," =OFFSET(",(0,o.kt)("span",{class:"blue"},"A2"),", 2, 1, 1, 1)",(0,o.kt)("br",null)," ",(0,o.kt)("strong",null,"2.")," =SUM(OFFSET(",(0,o.kt)("span",{class:"blue"},"A2"),", 1, 1, 2, 1))",(0,o.kt)("br",null)," ",(0,o.kt)("img",{src:n(98844).Z,width:"70%"})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",null,"1.")," 6",(0,o.kt)("br",null)," ",(0,o.kt)("strong",null,"2.")," 10"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",null,"1.")," B4 has an offset of 2 rows and 1 column from A1. The cell value is 6.",(0,o.kt)("br",null)," ",(0,o.kt)("strong",null,"2.")," B3 has an offset of 1 row and 1 column from A1. The SUM of the range defined through height and width is 10.")))))}s.isMDXComponent=!0},98844:function(t,e){"use strict";e.Z="data:image/png;base64,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"}}]);