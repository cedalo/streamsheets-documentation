"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[71729],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=p(n),d=a,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(g,o(o({ref:e},u),{},{components:n})):r.createElement(g,o({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},21600:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>N,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>g,toc:()=>y});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(t,e,n)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,m=(t,e)=>{for(var n in e||(e={}))s.call(e,n)&&u(t,n,e[n]);if(i)for(var n of i(e))p.call(e,n)&&u(t,n,e[n]);return t};const c={id:"sms77send",title:"SMS77.SEND",sidebar_label:"SMS77.SEND"},d=void 0,g={unversionedId:"functions/integrations/sms77send",id:"version-2.5/functions/integrations/sms77send",title:"SMS77.SEND",description:"star This is a premium feature.",source:"@site/streamsheets_versioned_docs/version-2.5/functions/integrations/sms77send.md",sourceDirName:"functions/integrations",slug:"/functions/integrations/sms77send",permalink:"/streamsheets/2.5/functions/integrations/sms77send",draft:!1,tags:[],version:"2.5",frontMatter:{id:"sms77send",title:"SMS77.SEND",sidebar_label:"SMS77.SEND"},sidebar:"version-2.5/someSidebar",previous:{title:"SLACK.CHANNEL.MESSAGE",permalink:"/streamsheets/2.5/functions/integrations/slackchannelmessage"},next:{title:"TWILIO.EMAIL.SEND",permalink:"/streamsheets/2.5/functions/integrations/twilioemailsend"}},N={},y=[],k={toc:y};function f(t){var e,a=t,{components:u}=a,c=((t,e)=>{var n={};for(var r in t)s.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&i)for(var r of i(t))e.indexOf(r)<0&&p.call(t,r)&&(n[r]=t[r]);return n})(a,["components"]);return(0,r.kt)("wrapper",(e=m(m({},k),c),l(e,o({components:u,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"star",src:n(95865).Z,width:"24",height:"24"})," This is a ",(0,r.kt)("a",m({parentName:"p"},{href:"https://cedalo.com/pricing/streamsheets/"}),"premium")," feature."),(0,r.kt)("p",null,"Sends an SMS message to specified contact. In its simplest form only text and recipient number are required. But for more advanced settings it is also possible to pass a JSON object containing additional parameters. Please refer to ",(0,r.kt)("a",m({parentName:"p"},{href:"https://www.sms77.io/en/docs/gateway/http-api"}),"https://www.sms77.io/en/docs/gateway/http-api")," for more information about available and supported options (as of 2021-05-17)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("p",null,"=SMS77.SEND(APIKey, TextOrJSON, ","[","ToContact","]",", ","[","ResponseTarget","]",")"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"APIKey"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"An API key to authorize against SMS77 service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"TextOrJSON"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"The text to send or a JSON which contains the text and additional required or optional parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"ToContact (optional)"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"The recipient number or name to send message to. Not required if specified within passed JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"ResponseTarget (optional)"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Specify inbox, outbox, cell or cell-range to write any response to")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return")),(0,r.kt)("p",null,"A unique random request ID which can be used with ",(0,r.kt)("a",m({parentName:"p"},{href:"../streams/requestinfo"}),"REQUESTINFO")," to check the state of the request. In case of an error the corresponding ",(0,r.kt)("a",m({parentName:"p"},{href:"../../other#error-codes"}),"error-code")," is returned."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"A"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"B"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"1"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"to"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Mr. Doe")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"2"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"text"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"hello")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"3"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"ttl"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"60")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Formula"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Result"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("pre",null,(0,r.kt)("code",null,'=SMS77.SEND("123key","hello","Mr. Doe")'))),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null}),'Sends "hello" to Mr. Doe')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("pre",null,(0,r.kt)("code",null,'=SMS77.SEND("123key",JSON(A1:B3))'))),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Same as before but using JSON to specify required information and set optional ttl value to 1h")))))}f.isMDXComponent=!0},95865:(t,e,n)=>{n.d(e,{Z:()=>r});const r="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTExLjk5IDJDNi40NyAyIDIgNi40OCAyIDEyczQuNDcgMTAgOS45OSAxMEMxNy41MiAyMiAyMiAxNy41MiAyMiAxMlMxNy41MiAyIDExLjk5IDJ6bTQuMjQgMTZMMTIgMTUuNDUgNy43NyAxOGwxLjEyLTQuODEtMy43My0zLjIzIDQuOTItLjQyTDEyIDVsMS45MiA0LjUzIDQuOTIuNDItMy43MyAzLjIzTDE2LjIzIDE4eiIvPjwvc3ZnPg=="}}]);