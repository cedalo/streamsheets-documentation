"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[51558],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(r),f=a,b=c["".concat(p,".").concat(f)]||c[f]||m[f]||l;return r?n.createElement(b,o(o({ref:t},u),{},{components:r})):n.createElement(b,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},52493:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>f,default:()=>y,frontMatter:()=>c,metadata:()=>b,toc:()=>g});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&u(e,r,t[r]);return e};const c={id:"log",title:"LOG",sidebar_label:"LOG"},f=void 0,b={unversionedId:"functions/math/log",id:"version-2.3/functions/math/log",title:"LOG",description:"Returns the logarithm of given number to a specified base.",source:"@site/streamsheets_versioned_docs/version-2.3/functions/math/log.md",sourceDirName:"functions/math",slug:"/functions/math/log",permalink:"/streamsheets/2.3/functions/math/log",draft:!1,tags:[],version:"2.3",frontMatter:{id:"log",title:"LOG",sidebar_label:"LOG"},sidebar:"version-2.3/someSidebar",previous:{title:"INT",permalink:"/streamsheets/2.3/functions/math/int"},next:{title:"MOD",permalink:"/streamsheets/2.3/functions/math/mod"}},d={},g=[],h={toc:g};function y(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},h),u),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Returns the logarithm of given number to a specified base."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Syntax")),(0,n.kt)("p",null,"=LOG(Number, Base)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"The number for which the logarithm should be calculated.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Base"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Optional. The base of the logarithm. Defaults to 10.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Return Value")),(0,n.kt)("p",null,"The logarithm of given number."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Function"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Comment"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"=LOG(10)"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"1"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No base specified so 10 is used and hence it must be raised only one time.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"=LOG(8, 2)"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"3"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"The base value must be raised three times.")))))}y.isMDXComponent=!0}}]);