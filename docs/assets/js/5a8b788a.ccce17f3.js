"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[17349],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,l(l({ref:e},c),{},{components:n})):r.createElement(f,l({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95966:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>b,contentTitle:()=>d,default:()=>k,frontMatter:()=>m,metadata:()=>f,toc:()=>y});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(t,e,n)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,u=(t,e)=>{for(var n in e||(e={}))p.call(e,n)&&c(t,n,e[n]);if(i)for(var n of i(e))s.call(e,n)&&c(t,n,e[n]);return t};const m={id:"classifypoint",title:"CLASSIFYPOINT",hide_title:!0},d=void 0,f={unversionedId:"functions/shape/classifypoint",id:"version-3.0/functions/shape/classifypoint",title:"CLASSIFYPOINT",description:"CLASSIFYPOINT",source:"@site/streamsheets_versioned_docs/version-3.0/functions/shape/classifypoint.md",sourceDirName:"functions/shape",slug:"/functions/shape/classifypoint",permalink:"/streamsheets/functions/shape/classifypoint",draft:!1,tags:[],version:"3.0",frontMatter:{id:"classifypoint",title:"CLASSIFYPOINT",hide_title:!0},sidebar:"someSidebar",previous:{title:"BAR",permalink:"/streamsheets/functions/shape/bar"},next:{title:"COLPOS",permalink:"/streamsheets/functions/shape/colpos"}},b={},y=[],g={toc:y};function k(t){var e,a=t,{components:c}=a,m=((t,e)=>{var n={};for(var r in t)p.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&i)for(var r of i(t))e.indexOf(r)<0&&s.call(t,r)&&(n[r]=t[r]);return n})(a,["components"]);return(0,r.kt)("wrapper",(e=u(u({},g),m),o(e,l({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("h1",null,"CLASSIFYPOINT"),(0,r.kt)("p",null,"This function determines whether a given X, Y coordinate is inside or outside or on the border of a given polygon defined by the points given."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("p",null,"=CLASSIFYPOINT(X, Y, PolygonPointsRange)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"X coordinate of the point to test")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Y"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Y coordinate of the point to test")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"PolygonPointsRange"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Range"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"A vertical range with 2 columns and N rows where the first column contains the X and the second column contains the Y coordinates of a (closed) Polygon")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"-1: Point is outside of polygon   0: Point is on polygon border   1: Point is inside polygon")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Formula"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Result"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("pre",null,(0,r.kt)("code",null,"=CLASSIFYPOINT(500, 500, A2:B5)"))),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"1"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Where B5 looks as ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," ",(0,r.kt)("img",{src:n(91444).Z,width:"50%"}))))))}k.isMDXComponent=!0},91444:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/CLASSIFYPOINT-76110c8ae83b96b3a2b8e0d82a51147b.png"}}]);