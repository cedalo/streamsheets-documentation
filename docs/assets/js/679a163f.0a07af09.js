"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[95839],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=l(t),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||c;return t?o.createElement(f,i(i({ref:n},p),{},{components:t})):o.createElement(f,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var l=2;l<c;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},58567:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>y,frontMatter:()=>m,metadata:()=>f,toc:()=>v});var o=t(3905),r=Object.defineProperty,c=Object.defineProperties,i=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&p(e,t,n[t]);if(a)for(var t of a(n))l.call(n,t)&&p(e,t,n[t]);return e};const m={id:"mc-connections",title:"Connections"},d=void 0,f={unversionedId:"mc-connections",id:"version-2.5/mc-connections",title:"Connections",description:"Connections Overview",source:"@site/management-center_versioned_docs/version-2.5/connections.md",sourceDirName:".",slug:"/mc-connections",permalink:"/management-center/mc-connections",draft:!1,tags:[],version:"2.5",frontMatter:{id:"mc-connections",title:"Connections"},sidebar:"someSidebar",previous:{title:"Terminal Commands",permalink:"/management-center/mc-terminal"},next:{title:"Connections REST API \u2b50",permalink:"/management-center/mc-connections-rest-api"}},h={},v=[{value:"Connections Overview",id:"connections-overview",level:2},{value:"Create connections",id:"create-connections",level:2},{value:"Delete connections",id:"delete-connections",level:2}],b={toc:v};function y(e){var n,r=e,{components:p}=r,m=((e,n)=>{var t={};for(var o in e)s.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&a)for(var o of a(e))n.indexOf(o)<0&&l.call(e,o)&&(t[o]=e[o]);return t})(r,["components"]);return(0,o.kt)("wrapper",(n=u(u({},b),m),c(n,i({components:p,mdxType:"MDXLayout"}))),(0,o.kt)("h2",u({},{id:"connections-overview"}),"Connections Overview"),(0,o.kt)("p",null,"The connections show the details and availability of the set broker instances."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:t(59770).Z,width:"2880",height:"1800"})),(0,o.kt)("p",null,'You can disable and enable connections using the switch.\nTo edit extisting connections open them up and click "edit". '),(0,o.kt)("h2",u({},{id:"create-connections"}),"Create connections"),(0,o.kt)("p",null,'To create a new connection, just click on the "New Connection" button on the overview page, which leads you to the following page:'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:t(65021).Z,width:"2880",height:"1800"})),(0,o.kt)("p",null,'Fill in the values for the connection and click "Save" button to create the connection.'),(0,o.kt)("admonition",u({},{type:"info"}),(0,o.kt)("p",{parentName:"admonition"},'You can use the "Test Connection" to verify whether the Management Center can establish the connection to the broker instance.')),(0,o.kt)("p",null,"If everything worked correctly the new connection should appear in the overview page:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:t(25183).Z,width:"2880",height:"1800"})),(0,o.kt)("h2",u({},{id:"delete-connections"}),"Delete connections"),(0,o.kt)("p",null,"In order to delete a connection you first need to make sure that the Management Center is disconnected from the corresponding broker. To disconnect, just use the switch next to the connection entry. Then to delete the connection, click on the trash symbol next to the connection entry."))}y.isMDXComponent=!0},59770:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/connections-001_overview-c63b0cb5a7413dfae50f376971a2308a.png"},65021:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/connections-002_create-3a9e8b7ab3634069a2dc56bb3cff86f7.png"},25183:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/connections-003_created-dc2e68f72e577c4217c238c71224f550.png"}}]);