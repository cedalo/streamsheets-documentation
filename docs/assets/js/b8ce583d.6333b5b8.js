"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[27978],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},44678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>d,default:()=>y,frontMatter:()=>c,metadata:()=>f,toc:()=>b});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&u(e,n,t[n]);return e};const c={id:"drawellipse",title:"DRAW.ELLIPSE",sidebar_label:"DRAW.ELLIPSE"},d=void 0,f={unversionedId:"functions/shape/drawellipse",id:"version-2.4/functions/shape/drawellipse",title:"DRAW.ELLIPSE",description:"Define an ellipse on a given drawing.",source:"@site/streamsheets_versioned_docs/version-2.4/functions/shape/drawellipse.md",sourceDirName:"functions/shape",slug:"/functions/shape/drawellipse",permalink:"/streamsheets/2.4/functions/shape/drawellipse",draft:!1,tags:[],version:"2.4",frontMatter:{id:"drawellipse",title:"DRAW.ELLIPSE",sidebar_label:"DRAW.ELLIPSE"},sidebar:"version-2.4/someSidebar",previous:{title:"DRAW.CHECKBOX",permalink:"/streamsheets/2.4/functions/shape/drawcheckbox"},next:{title:"DRAW.KNOB",permalink:"/streamsheets/2.4/functions/shape/drawknob"}},k={},b=[],g={toc:b};function y(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},g),u),l(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Define an ellipse on a given drawing."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("p",null,"=DRAW.ELLIPSE(X, Y, Width, Height, LineColor, FillColor, Angle)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"X Coordinate in 1/100th mm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Y"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Y Coordinate in 1/100th mm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Width"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Width in 1/100th mm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Height"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Height in 1/100th mm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LineColor"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Optional. Options: ",(0,r.kt)("br",null)," - ",(0,r.kt)("inlineCode",{parentName:"td"},"None")," for no line ",(0,r.kt)("br",null)," - Hexadecimal color value (",(0,r.kt)("inlineCode",{parentName:"td"},"#FF0000")," for Red)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"FillColor"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Optional. Hexadecimal color value (",(0,r.kt)("inlineCode",{parentName:"td"},"#FF0000")," for Red)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Angle"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Optional. Angle in radians.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Value")),(0,r.kt)("p",null,"TRUE, if ellipse could be created."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Function"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Result"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"=DRAW.ELLIPSE(23607,22663,20055,A1)"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"TRUE"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Ellipse with the height depending on A1")))))}y.isMDXComponent=!0}}]);