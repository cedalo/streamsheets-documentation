"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[2532],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>d});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=u(n),d=r,k=c["".concat(p,".").concat(d)]||c[d]||s[d]||l;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},86901:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>g,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>k,toc:()=>f});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,s=(t,e)=>{for(var n in e||(e={}))p.call(e,n)&&m(t,n,e[n]);if(o)for(var n of o(e))u.call(e,n)&&m(t,n,e[n]);return t};const c={id:"sumif",title:"SUMIF",hide_title:!0},d=void 0,k={unversionedId:"functions/math/sumif",id:"version-3.0/functions/math/sumif",title:"SUMIF",description:"SUMIF",source:"@site/streamsheets_versioned_docs/version-3.0/functions/math/sumif.md",sourceDirName:"functions/math",slug:"/functions/math/sumif",permalink:"/streamsheets/functions/math/sumif",draft:!1,tags:[],version:"3.0",frontMatter:{id:"sumif",title:"SUMIF",hide_title:!0},sidebar:"someSidebar",previous:{title:"SUM",permalink:"/streamsheets/functions/math/sum"},next:{title:"SUMIFS",permalink:"/streamsheets/functions/math/sumifs"}},g={},f=[],N={toc:f};function h(t){var e,n=t,{components:r}=n,m=((t,e)=>{var n={};for(var a in t)p.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&o)for(var a of o(t))e.indexOf(a)<0&&u.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=s(s({},N),m),l(e,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",null,"SUMIF"),(0,a.kt)("p",null,"Returns the sum of all cell values in a cell-range which meet a given criterion. To specify multiple criteria please use ",(0,a.kt)("a",s({parentName:"p"},{href:"../math/sumifs"}),"SUMIFS"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("p",null,"=SUMIF(DataRange, Criterion, ","[","SumRange","]",")"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"DataRange"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Range"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Cell-range to calculate sum for.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Criterion"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The criterion each cell has to fulfill.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"SumRange (optional)"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Range"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"If given these cells are used to calculate total sum. If omitted DataRange is used.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The sum of all cell values which meet criterion.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"A"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"B"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"1"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"100000"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"200")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"2"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"200000"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"400")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"3"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"300000"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"400")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"4"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"North"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"600")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"5"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"East"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"800")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"6"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"South"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"1000")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Formula"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Result"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Comment"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("pre",null,(0,a.kt)("code",null,'=SUMIF(A1:A3, "250000")'))),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"300000"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Only cells A1 and A2 match given criterion.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("pre",null,(0,a.kt)("code",null,'=SUMIF(A1:A6, "=*th", B1:B6)'))),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"1600"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),'Take cells from column A which end with "th" and average corresponding values from column B.')))))}h.isMDXComponent=!0}}]);