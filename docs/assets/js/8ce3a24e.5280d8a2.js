(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[12493],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},74889:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s},default:function(){return u}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),l={id:"timescaleshow_tables",title:"TIMESCALE.SHOW_TABLES",sidebar_label:"TIMESCALE.SHOW_TABLES"},o={unversionedId:"functionss/databases/timescaleshow_tables",id:"version-2.5/functionss/databases/timescaleshow_tables",isDocsHomePage:!1,title:"TIMESCALE.SHOW_TABLES",description:"star This is a premium feature.",source:"@site/streamsheets_versioned_docs/version-2.5/functionss/databases/timescaleshow_tables.md",sourceDirName:"functionss/databases",slug:"/functionss/databases/timescaleshow_tables",permalink:"/streamsheets/2.5/functionss/databases/timescaleshow_tables",version:"2.5",sidebar_label:"TIMESCALE.SHOW_TABLES",frontMatter:{id:"timescaleshow_tables",title:"TIMESCALE.SHOW_TABLES",sidebar_label:"TIMESCALE.SHOW_TABLES"}},s=[],c={toc:s};function u(e){var t=e.components,l=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"star",src:n(65298).Z})," This is a ",(0,i.kt)("a",{parentName:"p",href:"https://cedalo.com/pricing/streamsheets/"},"premium")," feature."),(0,i.kt)("p",null,"Shows all table in the timescaledb.  "),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"}," As of right now, the timescale functions work with the internal timescaledb. Leave the Stream parameter empty and the connection is automatically set up. We are working on allowing further timescale connections. "))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("p",null,"=TIMESCALE.SHOW_TABLES(Stream, Target)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Stream"),(0,i.kt)("td",{parentName:"tr",align:null},"Stream to use for querying. The database name is configured in the affiliated Connector.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Target"),(0,i.kt)("td",{parentName:"tr",align:null},'INBOX(), OUTBOX("MsgID") or a cell range where the result will be placed. Make sure the cell range is big enough or not everything is displayed.')))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return")),(0,i.kt)("p",null,"TRUE, if successful."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Formula"),(0,i.kt)("th",{parentName:"tr",align:null},"Result"),(0,i.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("pre",null,(0,i.kt)("code",null,"${formula}"))),(0,i.kt)("td",{parentName:"tr",align:null},"TRUE"),(0,i.kt)("td",{parentName:"tr",align:null},"The response of the query will be shown in the inbox of the Streamsheet.")))),(0,i.kt)("p",null,"For more examples see our ",(0,i.kt)("a",{parentName:"p",href:"../../tutorials/tut-streams#timescaledb"},"timescale tutorial"),"."))}u.isMDXComponent=!0},65298:function(e,t){"use strict";t.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTExLjk5IDJDNi40NyAyIDIgNi40OCAyIDEyczQuNDcgMTAgOS45OSAxMEMxNy41MiAyMiAyMiAxNy41MiAyMiAxMlMxNy41MiAyIDExLjk5IDJ6bTQuMjQgMTZMMTIgMTUuNDUgNy43NyAxOGwxLjEyLTQuODEtMy43My0zLjIzIDQuOTItLjQyTDEyIDVsMS45MiA0LjUzIDQuOTIuNDItMy43MyAzLjIzTDE2LjIzIDE4eiIvPjwvc3ZnPg=="}}]);