"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[78041],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},69043:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>d,default:()=>k,frontMatter:()=>u,metadata:()=>f,toc:()=>b});var a=r(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))p.call(t,r)&&c(e,r,t[r]);return e};const u={id:"timescaledrop_table",title:"TIMESCALE.DROP_TABLE",sidebar_label:"TIMESCALE.DROP_TABLE"},d=void 0,f={unversionedId:"functions/streams/timescaledrop_table",id:"version-2.5/functions/streams/timescaledrop_table",title:"TIMESCALE.DROP_TABLE",description:"star This is a premium feature.",source:"@site/streamsheets_versioned_docs/version-2.5/functions/streams/timescaledrop_table.md",sourceDirName:"functions/streams",slug:"/functions/streams/timescaledrop_table",permalink:"/streamsheets/functions/streams/timescaledrop_table",draft:!1,tags:[],version:"2.5",frontMatter:{id:"timescaledrop_table",title:"TIMESCALE.DROP_TABLE",sidebar_label:"TIMESCALE.DROP_TABLE"},sidebar:"version-2.5/someSidebar",previous:{title:"TIMESCALE.CREATE_TABLE",permalink:"/streamsheets/functions/streams/timescalecreate_table"},next:{title:"TIMESCALE.EXPORT",permalink:"/streamsheets/functions/streams/timescaleexport"}},y={},b=[],g={toc:b};function k(e){var t,n=e,{components:c}=n,u=((e,t)=>{var r={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},g),u),l(t,i({components:c,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"star",src:r(95865).Z,width:"24",height:"24"})," This is a ",(0,a.kt)("a",m({parentName:"p"},{href:"https://cedalo.com/pricing/streamsheets/"}),"premium")," feature."),(0,a.kt)("p",null,"Drops a table from the timescaledb.  "),(0,a.kt)("admonition",m({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"As of right now, the timescale functions work with the internal timescaledb. Leave the Stream parameter empty and the connection is automatically set up. We are working on allowing further timescale connections. ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("p",null,"=TIMESCALE.DROP_TABLE(Stream, TableName)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Stream"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Stream to use for querying. The database name is configured in the affiliated Connector.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"TableName"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Defines which table to drop.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return")),(0,a.kt)("p",null,"TRUE, if successful."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Formula"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Result"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Comment"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("pre",null,(0,a.kt)("code",null,'=TIMESCALE.DROP_TABLE(, "Table1",)'))),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"TRUE"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),'Drops the table "Table1".')))),(0,a.kt)("p",null,"For more examples see our ",(0,a.kt)("a",m({parentName:"p"},{href:"../../tutorials/tut-streams#timescaledb"}),"timescale tutorial"),"."))}k.isMDXComponent=!0},95865:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTExLjk5IDJDNi40NyAyIDIgNi40OCAyIDEyczQuNDcgMTAgOS45OSAxMEMxNy41MiAyMiAyMiAxNy41MiAyMiAxMlMxNy41MiAyIDExLjk5IDJ6bTQuMjQgMTZMMTIgMTUuNDUgNy43NyAxOGwxLjEyLTQuODEtMy43My0zLjIzIDQuOTItLjQyTDEyIDVsMS45MiA0LjUzIDQuOTIuNDItMy43MyAzLjIzTDE2LjIzIDE4eiIvPjwvc3ZnPg=="}}]);