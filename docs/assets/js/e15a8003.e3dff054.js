(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[46653],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},71275:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return i},default:function(){return u}});var n=r(22122),a=r(19756),l=(r(67294),r(3905)),o={id:"httpdelete",title:"HTTP.DELETE",sidebar_label:"HTTP.DELETE"},s={unversionedId:"functions/http/httpdelete",id:"version-2.5/functions/http/httpdelete",isDocsHomePage:!1,title:"HTTP.DELETE",description:"Create an HTTP DELETE request. Delete a resource from the server. May change server status. The DELETE method is defined to be idempotent, which means that sending the same HTTP DELETE request multiple times will have the same effect on the server and will not additionally affect the state or cause additional side effects.",source:"@site/streamsheets_versioned_docs/version-2.5/functions/http/httpdelete.md",sourceDirName:"functions/http",slug:"/functions/http/httpdelete",permalink:"/streamsheets/2.5/functions/http/httpdelete",version:"2.5",sidebar_label:"HTTP.DELETE",frontMatter:{id:"httpdelete",title:"HTTP.DELETE",sidebar_label:"HTTP.DELETE"},sidebar:"version-2.5/someSidebar",previous:{title:"SHOWVALUES",permalink:"/streamsheets/2.5/functions/events/showvalues"},next:{title:"HTTP.GET",permalink:"/streamsheets/2.5/functions/http/httpget"}},i=[],p={toc:i};function u(e){var t=e.components,o=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Create an HTTP DELETE request. Delete a resource from the server. May change server status. The DELETE method is defined to be idempotent, which means that sending the same HTTP DELETE request multiple times will have the same effect on the server and will not additionally affect the state or cause additional side effects."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("p",null,"=HTTP.DELETE(URL, ","[","HeadersJSON","]",", ","[","ConfigJSON","]",", ","[","Target","]",")"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"URL"),(0,l.kt)("td",{parentName:"tr",align:null},"The URL to request.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HeadersJSON (optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"Headers of the HTTP request.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ConfigJSON (optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"A JSON configuration for the HTTP request. Possible configurations are: \"baseURL\",\"timeout\",\"auth: { username: 'secret', password: 'tops3cret' }\",\"proxy: {protocol: 'https',host: '127.0.0.1',port: 9000, auth: {username: 'secret', password: 'tops3cret'  }   \"")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Target (optional)"),(0,l.kt)("td",{parentName:"tr",align:null},'INBOX(), OUTBOX("MsgID") or a cell range where the result will be placed. Make sure the cell range is big enough or not everything is displayed.')))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return")),(0,l.kt)("p",null,"The function HTTP.DELETE() always returns a unique random request ID. Otherwise an ",(0,l.kt)("a",{parentName:"p",href:"../../other#error-codes"},"error")," is displayed."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Select",src:r(1207).Z})," "),(0,l.kt)("p",null,"Examples for using the config and header parameter. Use a JSON() function around the cell range.  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Formula"),(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("pre",null,(0,l.kt)("code",null,'=HTTP.DELETE("',(0,l.kt)("a",{parentName:"td",href:"http://www.example.api%22,,,INBOX()"},'www.example.api",,,INBOX()'),")"))),(0,l.kt)("td",{parentName:"tr",align:null},"Request to the API"),(0,l.kt)("td",{parentName:"tr",align:null},"A request has been made and put the response into the inbox.")))))}u.isMDXComponent=!0},1207:function(e,t,r){"use strict";t.Z=r.p+"assets/images/HTTPConfigHeader-94f8898ecae9e60f07f1c6b2c19452d8.png"}}]);