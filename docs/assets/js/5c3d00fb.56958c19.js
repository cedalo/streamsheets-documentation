"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[33328],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,d=m["".concat(p,".").concat(c)]||m[c]||f[c]||l;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45554:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>h,frontMatter:()=>m,metadata:()=>d,toc:()=>k});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&s(e,n,t[n]);return e};const m={id:"offset",title:"OFFSET",hide_title:!0},c=void 0,d={unversionedId:"functions/lookup/offset",id:"version-3.0/functions/lookup/offset",title:"OFFSET",description:"OFFSET",source:"@site/streamsheets_versioned_docs/version-3.0/functions/lookup/offset.md",sourceDirName:"functions/lookup",slug:"/functions/lookup/offset",permalink:"/streamsheets/functions/lookup/offset",draft:!1,tags:[],version:"3.0",frontMatter:{id:"offset",title:"OFFSET",hide_title:!0},sidebar:"someSidebar",previous:{title:"MATCH",permalink:"/streamsheets/functions/lookup/match"},next:{title:"ROW",permalink:"/streamsheets/functions/lookup/row"}},g={},k=[],b={toc:k};function h(e){var t,n=e,{components:a}=n,s=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},b),s),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",null,"OFFSET"),(0,r.kt)("p",null,"Returns a cell range that is defined by specified number of rows and columns from an initial range."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("p",null,"=OFFSET(Range, RowOffset, ColumnOffset, ","[","Height","]",", ","[","Width","]",")"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",f({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",f({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Range"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Range"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"A cell or cell range which defines the base of returned cell range.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"RowOffset"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Row offset from top left position of Range, might be positive or negative.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"ColumnOffset"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Column offset from top left position of Range, might be positive or negative.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Height (optional)"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Number of rows for result range. Height must be greater than zero. If not given the height of specified base cell range is used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Width (optional)"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Number of columns for result range. Width must be greater than zero. If not given the width of specified base cell range is used.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",f({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"If height and width define a cell: Value of cell   If height and width define a cell range: #VALUE")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null}),"Formula"),(0,r.kt)("th",f({parentName:"tr"},{align:null}),"Result"),(0,r.kt)("th",f({parentName:"tr"},{align:null}),"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("pre",null,(0,r.kt)("code",null,"=OFFSET(A2, 2, 1, 1, 1)"))),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"6"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"B4 has an offset of 2 rows and 1 column from A1. The cell value is 6.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("pre",null,(0,r.kt)("code",null,"=SUM(OFFSET(A2, 1, 1, 2, 1))"))),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"10"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"B3 has an offset of 1 row and 1 column from A1. The SUM of the range defined through height and width is 10.")))))}h.isMDXComponent=!0}}]);