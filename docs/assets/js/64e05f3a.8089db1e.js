"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[57127],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,y=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return a?r.createElement(y,i(i({ref:t},u),{},{components:a})):r.createElement(y,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},23049:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>d,default:()=>h,frontMatter:()=>m,metadata:()=>y,toc:()=>g});var r=a(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&u(e,a,t[a]);if(o)for(var a of o(t))p.call(t,a)&&u(e,a,t[a]);return e};const m={id:"timescaleupdate",title:"TIMESCALE.UPDATE",sidebar_label:"TIMESCALE.UPDATE"},d=void 0,y={unversionedId:"functionss/databases/timescaleupdate",id:"version-2.5/functionss/databases/timescaleupdate",title:"TIMESCALE.UPDATE",description:"star This is a premium feature.",source:"@site/streamsheets_versioned_docs/version-2.5/functionss/databases/timescaleupdate.md",sourceDirName:"functionss/databases",slug:"/functionss/databases/timescaleupdate",permalink:"/streamsheets/2.5/functionss/databases/timescaleupdate",draft:!1,tags:[],version:"2.5",frontMatter:{id:"timescaleupdate",title:"TIMESCALE.UPDATE",sidebar_label:"TIMESCALE.UPDATE"}},f={},g=[],b={toc:g};function h(e){var t,n=e,{components:u}=n,m=((e,t)=>{var a={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&p.call(e,r)&&(a[r]=e[r]);return a})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},b),m),l(t,i({components:u,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"star",src:a(95865).Z,width:"24",height:"24"})," This is a ",(0,r.kt)("a",c({parentName:"p"},{href:"https://cedalo.com/pricing/streamsheets/"}),"premium")," feature."),(0,r.kt)("p",null,"Performs an UPDATE query on your timescale database.  "),(0,r.kt)("admonition",c({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"}," As of right now, the timescale functions work with the internal timescaledb. Leave the Stream parameter empty and the connection is automatically set up. We are working on allowing further timescale connections. ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("p",null,"=TIMESCALE.UPDATE(Stream, UpdateJSON)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Stream"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Stream to use for querying. The database name is configured in the affiliated Connector.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"UpdateJSON"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Defines a query using a JSON cell range, which contains all clauses to build the UPDATE query.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return")),(0,r.kt)("p",null,"TRUE, if successful."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",null," ",(0,r.kt)("img",{alt:"WritePayload",src:a(47606).Z,width:"633",height:"123"})," "),(0,r.kt)("p",null,'These are two ways to enter the update syntax. Either use one long string for the "set" command or divide the command in multiple rows.  '),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Formula"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Result"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("pre",null,(0,r.kt)("code",null,"${formula}"))),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"TRUE"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Assuming passed JSON looks like ",(0,r.kt)("inlineCode",{parentName:"td"},"{ update: 'tableName', set: '\"SensorA\"=42', where: '\"SensorB\">50' }")," this will update column SensorA at all rows in which column SensorB has a value greater 50")))),(0,r.kt)("p",null,"For more examples see our ",(0,r.kt)("a",c({parentName:"p"},{href:"../../tutorials/tut-streams#timescaledb"}),"timescale tutorial"),"."))}h.isMDXComponent=!0},47606:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/TSupdate-4885d3b385ae0a74a3131aac75841dfd.png"},95865:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTExLjk5IDJDNi40NyAyIDIgNi40OCAyIDEyczQuNDcgMTAgOS45OSAxMEMxNy41MiAyMiAyMiAxNy41MiAyMiAxMlMxNy41MiAyIDExLjk5IDJ6bTQuMjQgMTZMMTIgMTUuNDUgNy43NyAxOGwxLjEyLTQuODEtMy43My0zLjIzIDQuOTItLjQyTDEyIDVsMS45MiA0LjUzIDQuOTIuNDItMy43MyAzLjIzTDE2LjIzIDE4eiIvPjwvc3ZnPg=="}}]);