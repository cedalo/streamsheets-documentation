"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[2364],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=u(n),f=a,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||l;return n?r.createElement(d,i(i({ref:e},c),{},{components:n})):r.createElement(d,i({ref:e},c))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78029:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>k,contentTitle:()=>f,default:()=>N,frontMatter:()=>m,metadata:()=>d,toc:()=>g});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(t,e,n)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,s=(t,e)=>{for(var n in e||(e={}))p.call(e,n)&&c(t,n,e[n]);if(o)for(var n of o(e))u.call(e,n)&&c(t,n,e[n]);return t};const m={id:"countif",title:"COUNTIF",sidebar_label:"COUNTIF"},f=void 0,d={unversionedId:"functionss/statistical/countif",id:"version-2.5/functionss/statistical/countif",title:"COUNTIF",description:"Returns the number of cells in a cell-range which meet a given criterion. To specify multiple criteria please use COUNTIFS.",source:"@site/streamsheets_versioned_docs/version-2.5/functionss/statistical/countif.md",sourceDirName:"functionss/statistical",slug:"/functionss/statistical/countif",permalink:"/streamsheets/functionss/statistical/countif",draft:!1,tags:[],version:"2.5",frontMatter:{id:"countif",title:"COUNTIF",sidebar_label:"COUNTIF"}},k={},g=[],b={toc:g};function N(t){var e,n=t,{components:a}=n,c=((t,e)=>{var n={};for(var r in t)p.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&o)for(var r of o(t))e.indexOf(r)<0&&u.call(t,r)&&(n[r]=t[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(e=s(s({},b),c),l(e,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Returns the number of cells in a cell-range which meet a given criterion. To specify multiple criteria please use COUNTIFS."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("p",null,"=COUNTIF(CellRange, Criterion)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"CellRange"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The range of cells to count.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Criterion"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The criterion a cell has to fulfill in order to be counted.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return")),(0,r.kt)("p",null,"The number of cells which meet criterion."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"A"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"B"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"1"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"apples"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"32")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"2"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"oranges"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"54")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"3"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"peaches"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"75")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"4"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"apples"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"86")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Formula"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Result"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("pre",null,(0,r.kt)("code",null,"${formula}"))),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"2"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Counts all apples.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("pre",null,(0,r.kt)("code",null,"${formula}"))),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"2"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Counts all cells which values is greater than 55.")))))}N.isMDXComponent=!0}}]);