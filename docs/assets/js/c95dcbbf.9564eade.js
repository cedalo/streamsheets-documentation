(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[14259],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=m(a),d=r,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||l;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},41651:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return s},default:function(){return c}});var n=a(22122),r=a(19756),l=(a(67294),a(3905)),i={id:"timescalecreate_table",title:"TIMESCALE.CREATE_TABLE",sidebar_label:"TIMESCALE.CREATE_TABLE"},o={unversionedId:"functions/streams/timescalecreate_table",id:"version-2.3/functions/streams/timescalecreate_table",isDocsHomePage:!1,title:"TIMESCALE.CREATE_TABLE",description:"star This is a [Streamsheets",source:"@site/streamsheets_versioned_docs/version-2.3/functions/streams/timescalecreate_table.md",sourceDirName:"functions/streams",slug:"/functions/streams/timescalecreate_table",permalink:"/streamsheets/2.3/functions/streams/timescalecreate_table",version:"2.3",sidebar_label:"TIMESCALE.CREATE_TABLE",frontMatter:{id:"timescalecreate_table",title:"TIMESCALE.CREATE_TABLE",sidebar_label:"TIMESCALE.CREATE_TABLE"},sidebar:"version-2.3/someSidebar",previous:{title:"MONGO.STORE",permalink:"/streamsheets/2.3/functions/streams/mongostore"},next:{title:"TIMESCALE.DROP_TABLE",permalink:"/streamsheets/2.3/functions/streams/timescaledrop_table"}},s=[],m={toc:s};function c(e){var t=e.components,i=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"star",src:a(93069).Z})," This is a ","[Streamsheets\nPremium]",(0,l.kt)("a",{parentName:"p",href:"https://cedalo.com/get-started-with-cedalo-real-time-platform/"},"https://cedalo.com/get-started-with-cedalo-real-time-platform/"),") feature."),(0,l.kt)("p",null,"Creates a table in the timescaledb and sets up its schema. "),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"As of right now, the timescale functions work with the internal\ntimescaledb. Leave the Stream parameter empty and the connection is automatically\nset up. We are working on allowing further timescale connections."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("p",null,"=TIMESCALE.CREATE","_","TABLE(Stream, TableName, SchemaJSON)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Stream"),(0,l.kt)("td",{parentName:"tr",align:null},"Stream to use for querying. The database name is configured in the affiliated Connector.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TableName"),(0,l.kt)("td",{parentName:"tr",align:null},"Defines which table to create.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SchemaJSON"),(0,l.kt)("td",{parentName:"tr",align:null},"The timescale enforces the usage of a schema. Enter a JSON Range to setup the schema. Supported schema values can be NUMERIC, TEXT, TIMESTAMP,, TIMESTAMPTZ, DATE, INTEGER etc. See ",(0,l.kt)("a",{parentName:"td",href:"https://www.postgresql.org/docs/9.5/datatype.html"},"here")," for detailed explanation.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return Value")),(0,l.kt)("p",null,"TRUE, if successful."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Function"),(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"=TIMESCALE.CREATE","_",'TABLE(, "Table1",JSON(A1:B3))'),(0,l.kt)("td",{parentName:"tr",align:null},"TRUE"),(0,l.kt)("td",{parentName:"tr",align:null},'Creates the table "Table1". In the Range A1:B3 you have to provide the schema for the key value pairs. E.g. Value1: TEXT; Value2: NUMERIC; Value3: TIMESTAMP')))),(0,l.kt)("p",null,"For more examples see our ",(0,l.kt)("a",{parentName:"p",href:"../../tutorials/tut-streams#timescaledb"},"timescale tutorial"),"."))}c.isMDXComponent=!0},93069:function(e,t){"use strict";t.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTExLjk5IDJDNi40NyAyIDIgNi40OCAyIDEyczQuNDcgMTAgOS45OSAxMEMxNy41MiAyMiAyMiAxNy41MiAyMiAxMlMxNy41MiAyIDExLjk5IDJ6bTQuMjQgMTZMMTIgMTUuNDUgNy43NyAxOGwxLjEyLTQuODEtMy43My0zLjIzIDQuOTItLjQyTDEyIDVsMS45MiA0LjUzIDQuOTIuNDItMy43MyAzLjIzTDE2LjIzIDE4eiIvPjwvc3ZnPg=="}}]);