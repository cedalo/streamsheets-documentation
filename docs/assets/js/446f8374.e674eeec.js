"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[29523],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return r?n.createElement(f,o(o({ref:e},u),{},{components:r})):n.createElement(f,o({ref:e},u))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},69753:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>b,contentTitle:()=>d,default:()=>y,frontMatter:()=>m,metadata:()=>f,toc:()=>k});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(t,e,r)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,s=(t,e)=>{for(var r in e||(e={}))p.call(e,r)&&u(t,r,e[r]);if(i)for(var r of i(e))c.call(e,r)&&u(t,r,e[r]);return t};const m={id:"cellchart",title:"CELLCHART",sidebar_label:"CELLCHART"},d=void 0,f={unversionedId:"functions/chart/cellchart",id:"version-2.3/functions/chart/cellchart",title:"CELLCHART",description:"Draw a chart inside a cell.",source:"@site/streamsheets_versioned_docs/version-2.3/functions/chart/cellchart.md",sourceDirName:"functions/chart",slug:"/functions/chart/cellchart",permalink:"/streamsheets/2.3/functions/chart/cellchart",draft:!1,tags:[],version:"2.3",frontMatter:{id:"cellchart",title:"CELLCHART",sidebar_label:"CELLCHART"},sidebar:"version-2.3/someSidebar",previous:{title:"AXIS",permalink:"/streamsheets/2.3/functions/chart/axis"},next:{title:"DRAW.STREAMCHART",permalink:"/streamsheets/2.3/functions/chart/drawstreamchart"}},b={},k=[],h={toc:k};function y(t){var e,r=t,{components:a}=r,u=((t,e)=>{var r={};for(var n in t)p.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&i)for(var n of i(t))e.indexOf(n)<0&&c.call(t,n)&&(r[n]=t[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(e=s(s({},h),u),l(e,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Draw a chart inside a cell."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Syntax")),(0,n.kt)("p",null,"=CELLCHART(DataRange, ChartType, LineColor, FillColor, Marker, Minimum,\nMaximum)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"DataRange"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Cell Range to retrieve the data for the chart from")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"CharrType"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Optional. Valid Chart Type. Default is line. Valid values are : line, column, bar, pie, doughnut, bubble, scatter, area.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"LineColor"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Optional. Line Color to use for first series")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"FillColor"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Optional. Fill Color to use for first series")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Minimum"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Value Axis Minimum")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Maximum"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Value Axis Maximum")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Return Value")),(0,n.kt)("p",null,"TRUE or an ",(0,n.kt)("a",s({parentName:"p"},{href:"../../other#error-codes"}),"Error Code")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Function"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Comment"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),'=CELLCHART(B2:B5, "pie")'),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"TRUE"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Draw a chart in the current cell.")))))}y.isMDXComponent=!0}}]);