(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[70100],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),u=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),f=u(r),m=a,d=f["".concat(p,".").concat(m)]||f[m]||c[m]||o;return r?n.createElement(d,i(i({ref:e},s),{},{components:r})):n.createElement(d,i({ref:e},s))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},24937:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i={id:"httpput",title:"HTTP.PUT",sidebar_label:"HTTP.PUT"},l={unversionedId:"functions/http/httpput",id:"version-2.4/functions/http/httpput",isDocsHomePage:!1,title:"HTTP.PUT",description:"Create an HTTP PUT request.",source:"@site/streamsheets_versioned_docs/version-2.4/functions/http/httpput.md",sourceDirName:"functions/http",slug:"/functions/http/httpput",permalink:"/streamsheets/2.4/functions/http/httpput",version:"2.4",sidebar_label:"HTTP.PUT",frontMatter:{id:"httpput",title:"HTTP.PUT",sidebar_label:"HTTP.PUT"},sidebar:"version-2.4/someSidebar",previous:{title:"HTTP.POST",permalink:"/streamsheets/2.4/functions/http/httppost"},next:{title:"HTTP.REQUEST2",permalink:"/streamsheets/2.4/functions/http/httprequest2"}},p=[],u={toc:p};function s(t){var e=t.components,r=(0,a.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create an HTTP PUT request."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Syntax")),(0,o.kt)("p",null,"=HTTP.PUT(URL, ","[","Body","]",", ","[","Headers","]",", ","[","Config","]",", ","[","target","]",")"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"URL"),(0,o.kt)("td",{parentName:"tr",align:null},"The URL to request.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Body"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. Data to use as the body of the HTTP request.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Headers"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. Headers of the HTTP request.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Config"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. Configuration for the HTTP request.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Return Value")),(0,o.kt)("p",null,"The function HTTP.PUT() always returns a unique random request ID,\nwhich is automatically generated when the service is called. Otherwise an ",(0,o.kt)("a",{parentName:"p",href:"../../other#error-codes"},"error")," is displayed."))}s.isMDXComponent=!0}}]);