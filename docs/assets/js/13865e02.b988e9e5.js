"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[37851],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3838:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>d,default:()=>k,frontMatter:()=>m,metadata:()=>f,toc:()=>y});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&c(e,r,t[r]);return e};const m={id:"unichar",title:"UNICHAR",sidebar_label:"UNICHAR"},d=void 0,f={unversionedId:"functions/text/unichar",id:"version-2.3/functions/text/unichar",title:"UNICHAR",description:"Returns the character represented by given unicode number.",source:"@site/streamsheets_versioned_docs/version-2.3/functions/text/unichar.md",sourceDirName:"functions/text",slug:"/functions/text/unichar",permalink:"/streamsheets/2.3/functions/text/unichar",draft:!1,tags:[],version:"2.3",frontMatter:{id:"unichar",title:"UNICHAR",sidebar_label:"UNICHAR"},sidebar:"version-2.3/someSidebar",previous:{title:"TEXT",permalink:"/streamsheets/2.3/functions/text/"},next:{title:"UNICODE",permalink:"/streamsheets/2.3/functions/text/unicode"}},b={},y=[],h={toc:y};function k(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},h),c),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Returns the character represented by given unicode number."),(0,n.kt)("admonition",s({},{type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"Unicodes UTF-8 & UTF-16 are supported, so the provided number must be\nwithin 0 - 65535.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Syntax")),(0,n.kt)("p",null,"=UNICHAR(Number)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"An unicode number within 0-65535 which specifies the character to return.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Return Value")),(0,n.kt)("p",null,"The character as specified by given unicode number."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Function"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Result"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"=UNICHAR(65)"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"A")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"=UNICHAR(8364)"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u20ac")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"=UNICHAR(0)"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"#VALUE!")))))}k.isMDXComponent=!0}}]);