(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[74911],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),c=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(d,l(l({ref:e},u),{},{components:r})):n.createElement(d,l({ref:e},u))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},79908:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s},default:function(){return u}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),l={id:"search",title:"SEARCH",sidebar_label:"SEARCH"},i={unversionedId:"functions/text/search",id:"version-2.4/functions/text/search",isDocsHomePage:!1,title:"SEARCH",description:"Return the index of the search text within the text. The search starts",source:"@site/streamsheets_versioned_docs/version-2.4/functions/text/search.md",sourceDirName:"functions/text",slug:"/functions/text/search",permalink:"/streamsheets/2.4/functions/text/search",version:"2.4",sidebar_label:"SEARCH",frontMatter:{id:"search",title:"SEARCH",sidebar_label:"SEARCH"},sidebar:"version-2.4/someSidebar",previous:{title:"RIGHT",permalink:"/streamsheets/2.4/functions/text/right"},next:{title:"SPLIT",permalink:"/streamsheets/2.4/functions/text/split"}},s=[],c={toc:s};function u(t){var e=t.components,r=(0,a.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Return the index of the search text within the text. The search starts\nat index."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Syntax")),(0,o.kt)("p",null,"=SEARCH(TextToSearch, Text ","[",", StartAt","]",")"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"TextToSearch"),(0,o.kt)("td",{parentName:"tr",align:null},"Text to search for. ",(0,o.kt)("strong",{parentName:"td"},"Note:")," wildcards like ","*"," or ? are supported.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Text"),(0,o.kt)("td",{parentName:"tr",align:null},"Text to search inside.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"StartAt"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. Character index to start search at. Default is 1.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Return Value")),(0,o.kt)("p",null,"Position, where the text is found, otherwise ","#","VALUE."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Function"),(0,o.kt)("th",{parentName:"tr",align:null},"Result"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'=SEARCH("me", "Search me now")'),(0,o.kt)("td",{parentName:"tr",align:null},"8")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'=SEARCH("a',"*",'c", "abc")'),(0,o.kt)("td",{parentName:"tr",align:null},"1")))))}u.isMDXComponent=!0}}]);