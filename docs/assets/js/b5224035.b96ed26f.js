"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[74037],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,y=u["".concat(s,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},39524:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>f,default:()=>k,frontMatter:()=>u,metadata:()=>y,toc:()=>g});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&c(e,r,t[r]);return e};const u={id:"parseyaml",title:"PARSE.YAML",sidebar_label:"PARSE.YAML"},f=void 0,y={unversionedId:"functions/dataformats/parseyaml",id:"version-2.5/functions/dataformats/parseyaml",title:"PARSE.YAML",description:"star This is a premium feature.",source:"@site/streamsheets_versioned_docs/version-2.5/functions/dataformats/parseyaml.md",sourceDirName:"functions/dataformats",slug:"/functions/dataformats/parseyaml",permalink:"/streamsheets/2.5/functions/dataformats/parseyaml",draft:!1,tags:[],version:"2.5",frontMatter:{id:"parseyaml",title:"PARSE.YAML",sidebar_label:"PARSE.YAML"},sidebar:"version-2.5/someSidebar",previous:{title:"PARSE.XML",permalink:"/streamsheets/2.5/functions/dataformats/parsexml"},next:{title:"PROTOBUF.DECODE",permalink:"/streamsheets/2.5/functions/dataformats/protobufdecode"}},d={},g=[],b={toc:g};function k(e){var t,a=e,{components:c}=a,u=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},b),u),o(t,i({components:c,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"star",src:r(95865).Z,width:"24",height:"24"})," This is a ",(0,n.kt)("a",m({parentName:"p"},{href:"https://cedalo.com/pricing/streamsheets/"}),"premium")," feature."),(0,n.kt)("admonition",m({},{type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"This function is experimental and subject to change or review.")),(0,n.kt)("p",null,"Parses a string to YAML"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Syntax")),(0,n.kt)("p",null,"=PARSE.YAML(String)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"The string containing the YAML code.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Return")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Examples")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Formula"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Comment"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))))))}k.isMDXComponent=!0},95865:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTExLjk5IDJDNi40NyAyIDIgNi40OCAyIDEyczQuNDcgMTAgOS45OSAxMEMxNy41MiAyMiAyMiAxNy41MiAyMiAxMlMxNy41MiAyIDExLjk5IDJ6bTQuMjQgMTZMMTIgMTUuNDUgNy43NyAxOGwxLjEyLTQuODEtMy43My0zLjIzIDQuOTItLjQyTDEyIDVsMS45MiA0LjUzIDQuOTIuNDItMy43MyAzLjIzTDE2LjIzIDE4eiIvPjwvc3ZnPg=="}}]);