"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[60286],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},34575:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={id:"opcuaread",title:"OPCUA.READ",sidebar_label:"OPCUA.READ"},u=void 0,s={unversionedId:"functions/streams/opcuaread",id:"version-2.4/functions/streams/opcuaread",title:"OPCUA.READ",description:"star This is a premium feature.",source:"@site/streamsheets_versioned_docs/version-2.4/functions/streams/opcuaread.md",sourceDirName:"functions/streams",slug:"/functions/streams/opcuaread",permalink:"/streamsheets/2.4/functions/streams/opcuaread",tags:[],version:"2.4",frontMatter:{id:"opcuaread",title:"OPCUA.READ",sidebar_label:"OPCUA.READ"},sidebar:"version-2.4/someSidebar",previous:{title:"MQTT.PUBLISH",permalink:"/streamsheets/2.4/functions/streams/mqttpublish"},next:{title:"OPCUA.RESPOND",permalink:"/streamsheets/2.4/functions/streams/opcuarespond"}},p=[],c={toc:p};function m(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"star",src:r(95138).Z,width:"24",height:"24"})," This is a ",(0,i.kt)("a",{parentName:"p",href:"https://cedalo.com/pricing/streamsheets/"},"premium")," feature."),(0,i.kt)("p",null,"Reads a value from an OPC UA Server.You can use the Function Wizard for this function."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("p",null,"=OPCUA.READ(Producer, Node, Target","[",",ResultKeys, Timeout","]",")"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Producer"),(0,i.kt)("td",{parentName:"tr",align:null},"Producer to use for publishing.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Node"),(0,i.kt)("td",{parentName:"tr",align:null},"Path of the node to read or node id.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Target"),(0,i.kt)("td",{parentName:"tr",align:null},'INBOX(), OUTBOX("MsgID") or a cell range where the result will be placed. Make sure the cell range is big enough or not everything is displayed.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ResultKeys"),(0,i.kt)("td",{parentName:"tr",align:null},"Optional. Limit the result to the specified JSON Keys.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Timeout"),(0,i.kt)("td",{parentName:"tr",align:null},"Optional. The time to wait for an answer. When left empty a 20 second timeout is being used.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return Value")),(0,i.kt)("p",null,"The function OPCUA.READ always returns a unique random request ID, which\ncan be used with requestinfo to check the state of the request, if no ",(0,i.kt)("a",{parentName:"p",href:"../../other#error-codes"},"error"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples")),(0,i.kt)("p",null," ",(0,i.kt)("img",{alt:"READPayload",src:r(69929).Z,width:"469",height:"245"})),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Function"),(0,i.kt)("th",{parentName:"tr",align:null},"Result"),(0,i.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"=OPCUA.READ(","|","OPCUA Producer, A5,INBOX())"),(0,i.kt)("td",{parentName:"tr",align:null},"The request ID"),(0,i.kt)("td",{parentName:"tr",align:null},"This reads the node and places the result into the inbox.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"=OPCUA.READ(","|",'OPCUA Producer, "/Objects/1:Machines/1:H1mrblX0X/name",C5:G9)'),(0,i.kt)("td",{parentName:"tr",align:null},"The request ID"),(0,i.kt)("td",{parentName:"tr",align:null},'This reads the name of the app with the id "H1mrblX0X" and places the result into the inbox.')))))}m.isMDXComponent=!0},69929:function(e,t,r){t.Z=r.p+"assets/images/OPCUAPayloadRead-fa41990009c36da472e06d5492fe0237.png"},95138:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTExLjk5IDJDNi40NyAyIDIgNi40OCAyIDEyczQuNDcgMTAgOS45OSAxMEMxNy41MiAyMiAyMiAxNy41MiAyMiAxMlMxNy41MiAyIDExLjk5IDJ6bTQuMjQgMTZMMTIgMTUuNDUgNy43NyAxOGwxLjEyLTQuODEtMy43My0zLjIzIDQuOTItLjQyTDEyIDVsMS45MiA0LjUzIDQuOTIuNDItMy43MyAzLjIzTDE2LjIzIDE4eiIvPjwvc3ZnPg=="}}]);