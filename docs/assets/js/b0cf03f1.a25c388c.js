"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[55633],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),d=a,N=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(N,o(o({ref:t},u),{},{components:n})):r.createElement(N,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9024:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"opcuarespond",title:"OPCUA.RESPOND",sidebar_label:"OPCUA.RESPOND"},p=void 0,l={unversionedId:"functions/streams/opcuarespond",id:"version-2.4/functions/streams/opcuarespond",title:"OPCUA.RESPOND",description:"star This is a premium feature.",source:"@site/streamsheets_versioned_docs/version-2.4/functions/streams/opcuarespond.md",sourceDirName:"functions/streams",slug:"/functions/streams/opcuarespond",permalink:"/streamsheets/2.4/functions/streams/opcuarespond",tags:[],version:"2.4",frontMatter:{id:"opcuarespond",title:"OPCUA.RESPOND",sidebar_label:"OPCUA.RESPOND"},sidebar:"version-2.4/someSidebar",previous:{title:"OPCUA.READ",permalink:"/streamsheets/2.4/functions/streams/opcuaread"},next:{title:"OPCUA.VARIABLES",permalink:"/streamsheets/2.4/functions/streams/opcuavariables"}},u=[],m={toc:u};function c(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"star",src:n(48721).Z,width:"24",height:"24"})," This is a ",(0,i.kt)("a",{parentName:"p",href:"https://cedalo.com/pricing/streamsheets/"},"premium")," feature."),(0,i.kt)("p",null,"Sends a response directly, i.e. without any Consumer, to an OPC UA\nservice. The data to be send can be either arbitrary JSON data or a\nmessage from the outbox or inbox. Usually this function is used to\nrespond to a previously received ",(0,i.kt)("em",{parentName:"p"},"request"),"-message. "),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"A ",(0,i.kt)("em",{parentName:"p"},"request"),"-message must provide a requestId property within its\n",(0,i.kt)("em",{parentName:"p"},"Metadata")," object."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("p",null,"=OPCUA.RESPOND(requestId, MessageOrJSON)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"requestId"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("em",{parentName:"td"},"requestId")," as provided by a previously received ",(0,i.kt)("em",{parentName:"td"},"request"),"-message")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MessageOrJSON"),(0,i.kt)("td",{parentName:"tr",align:null},"Data to send as response.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return Value")),(0,i.kt)("p",null,"Color switch to blue on success. Otherwise to red with an\n",(0,i.kt)("a",{parentName:"p",href:"../../other#error-codes"},"error")," code."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"We assume that a ",(0,i.kt)("em",{parentName:"p"},"request"),"-message was received and that it provides a\n",(0,i.kt)("em",{parentName:"p"},"requestId")," which we store to cell B1 by using the read function as\nfollows: ",(0,i.kt)("inlineCode",{parentName:"p"},' READ(INBOXMETADATA(,,"requestId"), B1, "String")')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Function"),(0,i.kt)("th",{parentName:"tr",align:null},"Result"),(0,i.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},'=OPCUA.RESPOND(B1, OUTBOX("Message"))'),(0,i.kt)("td",{parentName:"tr",align:null},"TRUE"),(0,i.kt)("td",{parentName:"tr",align:null},"Sends the message with id ",(0,i.kt)("em",{parentName:"td"},"Message")," from the outbox to an OPCUA Service using the ",(0,i.kt)("em",{parentName:"td"},"requestId")," in B1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"=OPCUA.RESPOND(B1, DICTIONARY(A3:C5))"),(0,i.kt)("td",{parentName:"tr",align:null},"TRUE"),(0,i.kt)("td",{parentName:"tr",align:null},"Sends the JSON data provided by the Dictionary function to an OPCUA Service using the ",(0,i.kt)("em",{parentName:"td"},"requestId")," in B1")))))}c.isMDXComponent=!0},48721:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTExLjk5IDJDNi40NyAyIDIgNi40OCAyIDEyczQuNDcgMTAgOS45OSAxMEMxNy41MiAyMiAyMiAxNy41MiAyMiAxMlMxNy41MiAyIDExLjk5IDJ6bTQuMjQgMTZMMTIgMTUuNDUgNy43NyAxOGwxLjEyLTQuODEtMy43My0zLjIzIDQuOTItLjQyTDEyIDVsMS45MiA0LjUzIDQuOTIuNDItMy43MyAzLjIzTDE2LjIzIDE4eiIvPjwvc3ZnPg=="}}]);