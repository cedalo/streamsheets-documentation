"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[22196],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},34468:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],s={id:"httpput",title:"HTTP.PUT",sidebar_label:"HTTP.PUT"},i=void 0,p={unversionedId:"functionss/http/httpput",id:"version-2.5/functionss/http/httpput",title:"HTTP.PUT",description:"Create an HTTP PUT request. The HTTP PUT method is used to update an existing resource on the server, while the POST method creates or adds a resource on the server.",source:"@site/streamsheets_versioned_docs/version-2.5/functionss/http/httpput.md",sourceDirName:"functionss/http",slug:"/functionss/http/httpput",permalink:"/streamsheets/2.5/functionss/http/httpput",tags:[],version:"2.5",frontMatter:{id:"httpput",title:"HTTP.PUT",sidebar_label:"HTTP.PUT"}},u=[],c={toc:u};function d(e){var t=e.components,s=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create an HTTP PUT request. The HTTP PUT method is used to update an existing resource on the server, while the POST method creates or adds a resource on the server."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Syntax")),(0,o.kt)("p",null,"=HTTP.PUT(URL, ","[","Body","]",", ","[","HeadersJSON","]",", ","[","ConfigJSON","]",", ","[","Target","]",")"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"URL"),(0,o.kt)("td",{parentName:"tr",align:null},"The URL to request.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Body (optional)"),(0,o.kt)("td",{parentName:"tr",align:null},"The body of the request.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"HeadersJSON (optional)"),(0,o.kt)("td",{parentName:"tr",align:null},"Headers of the HTTP request.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ConfigJSON (optional)"),(0,o.kt)("td",{parentName:"tr",align:null},"A JSON configuration for the HTTP request. Possible configurations are: \"baseURL\",\"timeout\",\"auth: { username: 'secret', password: 'tops3cret' }\",\"proxy: {protocol: 'https',host: '127.0.0.1',port: 9000, auth: {username: 'secret', password: 'tops3cret'  }   \"")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Target (optional)"),(0,o.kt)("td",{parentName:"tr",align:null},'INBOX(), OUTBOX("MsgID") or a cell range where the result will be placed. Make sure the cell range is big enough or not everything is displayed.')))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Return")),(0,o.kt)("p",null,"The function HTTP.OPTIONS() always returns a unique random request ID. Otherwise an ",(0,o.kt)("a",{parentName:"p",href:"../../other#error-codes"},"error")," is displayed."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Select",src:r(47447).Z,width:"690",height:"215"})," "),(0,o.kt)("p",null,"Examples for using the config and header parameter. Use a JSON() function around the cell range."))}d.isMDXComponent=!0},47447:function(e,t,r){t.Z=r.p+"assets/images/HTTPConfigHeader-94f8898ecae9e60f07f1c6b2c19452d8.png"}}]);