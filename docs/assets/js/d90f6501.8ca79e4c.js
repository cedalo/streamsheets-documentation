"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[93266],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(n),f=a,d=c["".concat(s,".").concat(f)]||c[f]||p[f]||o;return n?r.createElement(d,l(l({ref:t},m),{},{components:n})):r.createElement(d,l({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},92156:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return m},default:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={id:"inboxmetadata",title:"INBOXMETADATA",sidebar_label:"INBOXMETADATA"},s=void 0,u={unversionedId:"functionss/streamsheet/inboxmetadata",id:"version-2.5/functionss/streamsheet/inboxmetadata",title:"INBOXMETADATA",description:"Creates a JSON key from the given values or range to retrieve metadata from within a message. This function is normally used in the READ function. INBOXMETADATA retrieves values from the Metadata section of a message.",source:"@site/streamsheets_versioned_docs/version-2.5/functionss/streamsheet/inboxmetadata.md",sourceDirName:"functionss/streamsheet",slug:"/functionss/streamsheet/inboxmetadata",permalink:"/streamsheets/2.5/functionss/streamsheet/inboxmetadata",tags:[],version:"2.5",frontMatter:{id:"inboxmetadata",title:"INBOXMETADATA",sidebar_label:"INBOXMETADATA"}},m=[],p={toc:m};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Creates a JSON key from the given values or range to retrieve metadata from within a message. This function is normally used in the READ function. INBOXMETADATA retrieves values from the Metadata section of a message."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Syntax")),(0,o.kt)("p",null,"=INBOXMETADATA(","[","Streamsheet","]",", ","[","Message","]",", ","[","ValuesOrRange","]",")"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Streamsheet (optional)"),(0,o.kt)("td",{parentName:"tr",align:null},"Streamsheet, where to look for inbox.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Message (optional)"),(0,o.kt)("td",{parentName:"tr",align:null},"Message to retrieve data from. If left empty, the current message in the inbox is used.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ValuesOrRange (optional)"),(0,o.kt)("td",{parentName:"tr",align:null},"A list of values or a range of cells describing the path to the element path within a JSON structure.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Return")),(0,o.kt)("p",null,"A string key to retrieve data from a message."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Formula"),(0,o.kt)("th",{parentName:"tr",align:null},"Result"),(0,o.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("pre",null,(0,o.kt)("code",null,"${formula}"))),(0,o.kt)("td",{parentName:"tr",align:null},"[S1][]","[arrivalTime]"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns an identifier that can be used in other Streamsheet functions like READ. As Streamsheet and Message are left empty, the current Streamsheet and inbox Message is used.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("pre",null,(0,o.kt)("code",null,"${formula}"))),(0,o.kt)("td",{parentName:"tr",align:null},"arrivalTime"),(0,o.kt)("td",{parentName:"tr",align:null},"The READ function return the last part of the JSON Path. The value of the Message at the given Path will be pushed into cell C11. Here we retrieve the arrival time of a message, which is a default Metadata field added to each message.")))))}c.isMDXComponent=!0}}]);