"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[71008],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,y=m["".concat(o,".").concat(d)]||m[d]||p[d]||l;return r?a.createElement(y,i(i({ref:t},u),{},{components:r})):a.createElement(y,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},10675:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>d,default:()=>h,frontMatter:()=>m,metadata:()=>y,toc:()=>g});var a=r(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&u(e,r,t[r]);if(s)for(var r of s(t))c.call(t,r)&&u(e,r,t[r]);return e};const m={id:"timescaleselect",title:"TIMESCALE.SELECT",sidebar_label:"TIMESCALE.SELECT"},d=void 0,y={unversionedId:"functions/timeseries/timescaleselect",id:"version-2.5/functions/timeseries/timescaleselect",title:"TIMESCALE.SELECT",description:"star This is a premium feature.",source:"@site/streamsheets_versioned_docs/version-2.5/functions/timeseries/timescaleselect.md",sourceDirName:"functions/timeseries",slug:"/functions/timeseries/timescaleselect",permalink:"/streamsheets/functions/timeseries/timescaleselect",draft:!1,tags:[],version:"2.5",frontMatter:{id:"timescaleselect",title:"TIMESCALE.SELECT",sidebar_label:"TIMESCALE.SELECT"},sidebar:"version-2.5/someSidebar",previous:{title:"TIMESCALE.INSERT",permalink:"/streamsheets/functions/timeseries/timescaleinsert"},next:{title:"TIMESCALE.SHOW_TABLES",permalink:"/streamsheets/functions/timeseries/timescaleshow_tables"}},f={},g=[],b={toc:g};function h(e){var t,n=e,{components:u}=n,m=((e,t)=>{var r={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r})(n,["components"]);return(0,a.kt)("wrapper",(t=p(p({},b),m),l(t,i({components:u,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"star",src:r(95865).Z,width:"24",height:"24"})," This is a ",(0,a.kt)("a",p({parentName:"p"},{href:"https://cedalo.com/pricing/streamsheets/"}),"premium")," feature."),(0,a.kt)("p",null,"Performs a SELECT query on your timescale database.  "),(0,a.kt)("admonition",p({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"}," As of right now, the timescale functions work with the internal timescaledb. Leave the Stream parameter empty and the connection is automatically set up. We are working on allowing further timescale connections. ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("p",null,"=TIMESCALE.SELECT(Stream, SelectJSON, ","[","Target","]",", ","[","XValue","]",")"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Stream"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Stream to use for querying. The database name is configured in the affiliated Connector.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"SelectJSON"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Defines a query using a JSON cell range, which contains all clauses to build the SELECT query.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Target (optional)"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),'INBOX(), OUTBOX("MsgID") or a cell range where the result will be placed. Make sure the cell range is big enough or not everything is displayed. You don\xb4t need a target area , if you only want to display charts. You can directly reference the cell with the query. (make sure you Xvalue parameter is set right)')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"XValue (optional)"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),'Name of the value which should be used for the x-axis if result is visualized by a chart. Defaults to "time".')))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return")),(0,a.kt)("p",null,"TRUE, if successful."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"TSA",src:r(76360).Z,width:"899",height:"443"}),"   "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Formula"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Result"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Comment"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("pre",null,(0,a.kt)("code",null,"=TIMESCALE.SELECT(, JSON(E17:F19), B17:E41)"))),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"TRUE"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),'This query returns all values stored in the table "TimescaleDbtable", with a limit of 10.')))),(0,a.kt)("p",null,"For more examples see our ",(0,a.kt)("a",p({parentName:"p"},{href:"../../tutorials/tut-streams#timescaledb"}),"timescale tutorial"),"."))}h.isMDXComponent=!0},76360:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/TSA-d1c9fde362fa9b15ea611b27a5fb685a.png"},95865:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTExLjk5IDJDNi40NyAyIDIgNi40OCAyIDEyczQuNDcgMTAgOS45OSAxMEMxNy41MiAyMiAyMiAxNy41MiAyMiAxMlMxNy41MiAyIDExLjk5IDJ6bTQuMjQgMTZMMTIgMTUuNDUgNy43NyAxOGwxLjEyLTQuODEtMy43My0zLjIzIDQuOTItLjQyTDEyIDVsMS45MiA0LjUzIDQuOTIuNDItMy43MyAzLjIzTDE2LjIzIDE4eiIvPjwvc3ZnPg=="}}]);