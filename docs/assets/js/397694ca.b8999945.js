(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[9813],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),u=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),c=u(n),d=a,h=c["".concat(i,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(h,o(o({ref:e},p),{},{components:n})):r.createElement(h,o({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=c;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:a,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},78870:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return i},default:function(){return p}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),o={id:"httprequest",title:"HTTP.REQUEST",sidebar_label:"HTTP.REQUEST"},s={unversionedId:"functions/streams/httprequest",id:"functions/streams/httprequest",isDocsHomePage:!1,title:"HTTP.REQUEST",description:"Create an https request. The result, of the request, if any, will be",source:"@site/streamsheets/functions/streams/httprequest.md",sourceDirName:"functions/streams",slug:"/functions/streams/httprequest",permalink:"/streamsheets/2.3/functions/streams/httprequest",version:"current",sidebar_label:"HTTP.REQUEST",frontMatter:{id:"httprequest",title:"HTTP.REQUEST",sidebar_label:"HTTP.REQUEST"},sidebar:"someSidebar",previous:{title:"FILE.WRITE",permalink:"/streamsheets/2.3/functions/streams/filewrite"},next:{title:"HTTP.RESPOND",permalink:"/streamsheets/2.3/functions/streams/httprespond"}},i=[],u={toc:i};function p(t){var e=t.components,o=(0,a.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Create an https request. The result, of the request, if any, will be\nadded to the inbox of the given target sheet. You can\nuse the Function Wizard for this function."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("p",null,"=HTTP.REQUEST(Producer, Path, Method, Target, ","[","ResultKeys","]",",\n","[","Body","]",", ","[","Headers","]",", ","[","Timeout","]",")"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Producer"),(0,l.kt)("td",{parentName:"tr",align:null},"Producer to use for submitting the HTTP.request.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Path"),(0,l.kt)("td",{parentName:"tr",align:null},"Path extending the base URL of the connector.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Method"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP method of the request.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Target"),(0,l.kt)("td",{parentName:"tr",align:null},'INBOX(), OUTBOX("MsgID") or a cell range where the result will be placed. Make sure the cell range is big enough or not everything is displayed.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ResultKeys"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Limit the result to the specified JSON Keys")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Body"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Data to use as the body of the HTTP request.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Headers"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Headers of the HTTP request.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Number of ms after the request times out and an error is returned.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return Value")),(0,l.kt)("p",null,"The function HTTP.REQUEST() always returns a unique random request ID,\nwhich is automatically generated when the service is called."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Function"),(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"=HTTP.REQUEST(","|","Rest, \u201c/path\u201d, \u201cGET\u201d, INBOX())"),(0,l.kt)("td",{parentName:"tr",align:null},"generated Request id"),(0,l.kt)("td",{parentName:"tr",align:null},"This makes a GET request to \u201c${ConnectorBaseURL}/path\u201d and writes the response to the Inbox.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"=HTTP.REQUEST(","|","Rest, \u201c/path\u201d, \u201cPOST\u201d, INBOX(\u201cS2\u201d),, \u201chello\u201d,A2:B3) ",(0,l.kt)("br",null)," ",(0,l.kt)("img",{src:n(8538).Z,width:"100%"})),(0,l.kt)("td",{parentName:"tr",align:null},"generated Request id"),(0,l.kt)("td",{parentName:"tr",align:null},"This makes a POST request to \u201c${ConnectorBaseURL}/path\u201d with \u201chello\u201d as body and \u201cContent-Type: text/plain\u201d and \u201cCustom-Header: example\u201d as headers. The response is placed in the Inbox of S2")))))}p.isMDXComponent=!0},8538:function(t,e,n){"use strict";e.Z=n.p+"assets/images/REST.REQUEST-bac22e8c4ca9a490e3e092d131467d68.png"}}]);