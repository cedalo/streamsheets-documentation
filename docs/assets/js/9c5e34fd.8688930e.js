"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[93413],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91873:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>d,default:()=>b,frontMatter:()=>m,metadata:()=>f,toc:()=>g});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&p(e,r,t[r]);return e};const m={id:"opcuawrite",title:"OPCUA.WRITE",sidebar_label:"OPCUA.WRITE"},d=void 0,f={unversionedId:"functions/streams/opcuawrite",id:"version-2.3/functions/streams/opcuawrite",title:"OPCUA.WRITE",description:"star This is a [Eclipse Streamsheets",source:"@site/streamsheets_versioned_docs/version-2.3/functions/streams/opcuawrite.md",sourceDirName:"functions/streams",slug:"/functions/streams/opcuawrite",permalink:"/streamsheets/2.3/functions/streams/opcuawrite",draft:!1,tags:[],version:"2.3",frontMatter:{id:"opcuawrite",title:"OPCUA.WRITE",sidebar_label:"OPCUA.WRITE"},sidebar:"version-2.3/someSidebar",previous:{title:"OPCUA.VARIABLES",permalink:"/streamsheets/2.3/functions/streams/opcuavariables"},next:{title:"PRODUCE",permalink:"/streamsheets/2.3/functions/streams/produce"}},y={},g=[],h={toc:g};function b(e){var t,a=e,{components:p}=a,m=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(a,["components"]);return(0,n.kt)("wrapper",(t=c(c({},h),m),o(t,i({components:p,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"star",src:r(54377).Z,width:"24",height:"24"})," This is a ",(0,n.kt)("a",c({parentName:"p"},{href:"https://cedalo.com/get-started-with-cedalo-real-time-platform/"}),"Eclipse Streamsheets\nPremium")," feature."),(0,n.kt)("p",null,"Sends a write request of a value to an OPC UA Server. The Server will\nrespond, if the write was successful or not. You can use the\nFunction Wizard for this function. Click\nhere for a more detailed tutorial on opcua functions."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Syntax")),(0,n.kt)("p",null,"=OPCUA.WRITE(Producer, Node, ValueJSON, Target","[",",ResultKeys,\nTimeout","]",")"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Producer"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Producer to use for publishing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Node"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Path of the node to write to or node id.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"ValueJSON"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),'JSON with a "value" and a "dataType" field containing the value to write and the data type of the value.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Target"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),'INBOX(), OUTBOX("MsgID") or a cell range where the result will be placed. Make sure the cell range is big enough or not everything is displayed.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"ResultKeys"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Optional. Limit the result to the specified JSON Keys")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Timeout"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Optional. The time to wait for an answer. When left empty a 20 second timeout is being used.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Return Value")),(0,n.kt)("p",null,"The function OPCUA.WRITE always returns a unique random request ID,\nwhich can be used with requestinfo to check the state of the request, if no ",(0,n.kt)("a",c({parentName:"p"},{href:"../../other#error-codes"}),"error"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Examples")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Function"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Comment"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"=OPCUA.WRITE(","|","OPCUA Producer,\u201d/Objects/1:Machines/1:H1mrblX0X/name\u201d,JSON(A2:B3), INBOX()) ",(0,n.kt)("br",null)," ",(0,n.kt)("img",{src:r(96154).Z,width:"50%"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"TRUE"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Sends the message with id ",(0,n.kt)("em",{parentName:"td"},"Message")," from the outbox to an OPCUA Service using the ",(0,n.kt)("em",{parentName:"td"},"requestId")," in B1")))))}b.isMDXComponent=!0},96154:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/OPCUA.WRITE-900d8a48ab3c839729a67b28c640a921.png"},54377:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTExLjk5IDJDNi40NyAyIDIgNi40OCAyIDEyczQuNDcgMTAgOS45OSAxMEMxNy41MiAyMiAyMiAxNy41MiAyMiAxMlMxNy41MiAyIDExLjk5IDJ6bTQuMjQgMTZMMTIgMTUuNDUgNy43NyAxOGwxLjEyLTQuODEtMy43My0zLjIzIDQuOTItLjQyTDEyIDVsMS45MiA0LjUzIDQuOTIuNDItMy43MyAzLjIzTDE2LjIzIDE4eiIvPjwvc3ZnPg=="}}]);