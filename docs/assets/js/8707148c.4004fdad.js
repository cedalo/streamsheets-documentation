"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[64923],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(i,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},30114:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>v,frontMatter:()=>m,metadata:()=>d,toc:()=>b});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&p(e,r,t[r]);return e};const m={id:"return",title:"RETURN",sidebar_label:"RETURN"},f=void 0,d={unversionedId:"functions/streamsheet/return",id:"version-2.5/functions/streamsheet/return",title:"RETURN",description:"Interrupts the recalculation cycle. This is of special interest, if a Streamsheet starts to evaluate on process start and is set to evaluate endlessly. Using RETURN, you can stop this endless recalculation.",source:"@site/streamsheets_versioned_docs/version-2.5/functions/streamsheet/return.md",sourceDirName:"functions/streamsheet",slug:"/functions/streamsheet/return",permalink:"/streamsheets/functions/streamsheet/return",draft:!1,tags:[],version:"2.5",frontMatter:{id:"return",title:"RETURN",sidebar_label:"RETURN"},sidebar:"version-2.5/someSidebar",previous:{title:"REPEATINDEX",permalink:"/streamsheets/functions/streamsheet/repeatindex"},next:{title:"SELECT",permalink:"/streamsheets/functions/streamsheet/select"}},y={},b=[],h={toc:b};function v(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},h),p),o(t,s({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Interrupts the recalculation cycle. This is of special interest, if a Streamsheet starts to evaluate on process start and is set to evaluate endlessly. Using RETURN, you can stop this endless recalculation."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Syntax")),(0,n.kt)("p",null,"=RETURN()"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments")),(0,n.kt)("p",null,"None"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Return")),(0,n.kt)("p",null,"TRUE or ",(0,n.kt)("a",u({parentName:"p"},{href:"../../other#error-codes"}),"error")," value."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Examples")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Formula"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Comment"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("pre",null,(0,n.kt)("code",null,"=RETURN()"))),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"TRUE"),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))))}v.isMDXComponent=!0}}]);