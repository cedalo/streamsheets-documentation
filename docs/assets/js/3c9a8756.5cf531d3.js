"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[22196],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=i(r),f=a,m=d["".concat(p,".").concat(f)]||d[f]||c[f]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13141:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>f,default:()=>T,frontMatter:()=>d,metadata:()=>m,toc:()=>g});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(s)for(var r of s(t))i.call(t,r)&&u(e,r,t[r]);return e};const d={id:"httpput",title:"HTTP.PUT",sidebar_label:"HTTP.PUT"},f=void 0,m={unversionedId:"functionss/http/httpput",id:"version-2.5/functionss/http/httpput",title:"HTTP.PUT",description:"Create an HTTP PUT request. The HTTP PUT method is used to update an existing resource on the server, while the POST method creates or adds a resource on the server.",source:"@site/streamsheets_versioned_docs/version-2.5/functionss/http/httpput.md",sourceDirName:"functionss/http",slug:"/functionss/http/httpput",permalink:"/streamsheets/functionss/http/httpput",draft:!1,tags:[],version:"2.5",frontMatter:{id:"httpput",title:"HTTP.PUT",sidebar_label:"HTTP.PUT"}},h={},g=[],y={toc:g};function T(e){var t,a=e,{components:u}=a,d=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&i.call(e,n)&&(r[n]=e[n]);return r})(a,["components"]);return(0,n.kt)("wrapper",(t=c(c({},y),d),o(t,l({components:u,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Create an HTTP PUT request. The HTTP PUT method is used to update an existing resource on the server, while the POST method creates or adds a resource on the server."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Syntax")),(0,n.kt)("p",null,"=HTTP.PUT(URL, ","[","Body","]",", ","[","HeadersJSON","]",", ","[","ConfigJSON","]",", ","[","Target","]",")"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"URL"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The URL to request.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Body (optional)"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The body of the request.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"HeadersJSON (optional)"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Headers of the HTTP request.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"ConfigJSON (optional)"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"A JSON configuration for the HTTP request. Possible configurations are: \"baseURL\",\"timeout\",\"auth: { username: 'secret', password: 'tops3cret' }\",\"proxy: {protocol: 'https',host: '127.0.0.1',port: 9000, auth: {username: 'secret', password: 'tops3cret'  }   \"")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Target (optional)"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),'INBOX(), OUTBOX("MsgID") or a cell range where the result will be placed. Make sure the cell range is big enough or not everything is displayed.')))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Return")),(0,n.kt)("p",null,"The function HTTP.OPTIONS() always returns a unique random request ID. Otherwise an ",(0,n.kt)("a",c({parentName:"p"},{href:"../../other#error-codes"}),"error")," is displayed."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Examples")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Select",src:r(13170).Z,width:"690",height:"215"})," "),(0,n.kt)("p",null,"Examples for using the config and header parameter. Use a JSON() function around the cell range."))}T.isMDXComponent=!0},13170:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/HTTPConfigHeader-94f8898ecae9e60f07f1c6b2c19452d8.png"}}]);