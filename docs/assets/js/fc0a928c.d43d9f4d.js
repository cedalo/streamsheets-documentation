"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[70497],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>d});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),u=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},m=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),s=u(r),d=a,f=s["".concat(p,".").concat(d)]||s[d]||c[d]||l;return r?n.createElement(f,o(o({ref:e},m),{},{components:r})):n.createElement(f,o({ref:e},m))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},35831:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>k,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>f,toc:()=>b});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(t,e,r)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,c=(t,e)=>{for(var r in e||(e={}))p.call(e,r)&&m(t,r,e[r]);if(i)for(var r of i(e))u.call(e,r)&&m(t,r,e[r]);return t};const s={id:"floor",title:"FLOOR",hide_title:!0},d=void 0,f={unversionedId:"functions/math/floor",id:"version-3.0/functions/math/floor",title:"FLOOR",description:"FLOOR",source:"@site/streamsheets_versioned_docs/version-3.0/functions/math/floor.md",sourceDirName:"functions/math",slug:"/functions/math/floor",permalink:"/streamsheets/functions/math/floor",draft:!1,tags:[],version:"3.0",frontMatter:{id:"floor",title:"FLOOR",hide_title:!0},sidebar:"someSidebar",previous:{title:"EVEN",permalink:"/streamsheets/functions/math/even"},next:{title:"FRAC",permalink:"/streamsheets/functions/math/frac"}},k={},b=[],g={toc:b};function h(t){var e,r=t,{components:a}=r,m=((t,e)=>{var r={};for(var n in t)p.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&i)for(var n of i(t))e.indexOf(n)<0&&u.call(t,n)&&(r[n]=t[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(e=c(c({},g),m),l(e,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",null,"FLOOR"),(0,n.kt)("p",null,"Returns a given number rounded down to the nearest multiple of specified significance. The multiple to use for rounding is provided as the significance argument. If the number is already an exact multiple, no rounding occurs and the original number is returned. To round up use ",(0,n.kt)("a",c({parentName:"p"},{href:"../../functions/math/ceiling"}),"CEILING()"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Syntax")),(0,n.kt)("p",null,"=FLOOR(Number, Significance)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The number to round")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Significance"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The multiple to which should be rounded")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Return")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The rounded number or an ",(0,n.kt)("a",c({parentName:"td"},{href:"../../other/errorcodes"}),"error")," value.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Examples")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Formula"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Comment"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("pre",null,(0,n.kt)("code",null,"=FLOOR(4.32, 0.05)"))),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"4.3"),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("pre",null,(0,n.kt)("code",null,"=FLOOR(-45.67, 2"))),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"-46"),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("pre",null,(0,n.kt)("code",null,"=FLOOR(-45.67, -2)"))),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"-44"),(0,n.kt)("td",c({parentName:"tr"},{align:null}))))))}h.isMDXComponent=!0}}]);