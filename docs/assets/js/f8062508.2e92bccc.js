"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[56182],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(f,o(o({ref:e},p),{},{components:n})):r.createElement(f,o({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1961:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={id:"json",title:"JSON",sidebar_label:"JSON"},s=void 0,u={unversionedId:"functions/streamsheet/json",id:"version-2.4/functions/streamsheet/json",title:"JSON",description:"A Streamsheet has the possibility to process, generate and accumulate",source:"@site/streamsheets_versioned_docs/version-2.4/functions/streamsheet/json.md",sourceDirName:"functions/streamsheet",slug:"/functions/streamsheet/json",permalink:"/streamsheets/2.4/functions/streamsheet/json",tags:[],version:"2.4",frontMatter:{id:"json",title:"JSON",sidebar_label:"JSON"},sidebar:"version-2.4/someSidebar",previous:{title:"INBOXMETADATA",permalink:"/streamsheets/2.4/functions/streamsheet/inboxmetadata"},next:{title:"JSON.PROCESS",permalink:"/streamsheets/2.4/functions/streamsheet/jsonprocess"}},p=[],c={toc:p};function m(t){var e=t.components,i=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,'A Streamsheet has the possibility to process, generate and accumulate\ndata. Before sending this data, the cells from a data range have to be\nstructured, in order for an App to interpret them correctly. JSON() is\nparing two columns together to a key and value pair using the JSON\nSyntax. Alternatively it is possible to specify a text which will be\nparsed to JSON or use one of the various INBOX/OUTBOX functions to\nreference an element from a message stored in inbox or outbox\nrespectively. The optional second parameter can be used to convert the\nresulting JSON object to a textual representation. This function is\nmostly used within publish functions like: MQTTPUBLISH. The JSON\nstructure supports quotes "". eg. {"Key":"value"}'),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("p",null,"=JSON(DataRangeOrTextOrInboxOutboxFunction,ResultAsText)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DataRangeOrTextOrInboxOutboxFunction"),(0,l.kt)("td",{parentName:"tr",align:null},"A data range over at least two columns, only interpreting the first and last column into the JSON object. Or a text which will be evaluated to JSON. Or an INBOX/OUTBOX function to reference an element of a message.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ResultAsText"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Set to TRUE to return a textual representation of resulting JSON object. Defaults to FALSE.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return Value")),(0,l.kt)("p",null,"{ JSON } as a placeholder for JSON object or a textual representation,\nif successful."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Function"),(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"=JSON(B6:C8)"),(0,l.kt)("td",{parentName:"tr",align:null},"{ JSON }"),(0,l.kt)("td",{parentName:"tr",align:null},"This is the representation of a cell filled with JSON data.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"=JSON(B6:C8, TRUE)"),(0,l.kt)("td",{parentName:"tr",align:null},'{"values":{"temperature":16918,"CO2":49}}'),(0,l.kt)("td",{parentName:"tr",align:null},"The textual representation of resulting JSON data.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'=JSON(C4) with following text in C4: {"values":{"temperature":16918,"CO2":49}}'),(0,l.kt)("td",{parentName:"tr",align:null},"{ JSON }"),(0,l.kt)("td",{parentName:"tr",align:null},"This is the representation of a cell filled with JSON data.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'=JSON(OUTBOXDATA("MessageId","Customer"))'),(0,l.kt)("td",{parentName:"tr",align:null},"{ JSON }"),(0,l.kt)("td",{parentName:"tr",align:null},'This is the representation of a cell filled with JSON data. Internally the cell has a JSON object which represents the "Customer" value from specified outbox message.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'=FEEDINBOX(B11,"S1") with B11 JSON(B6:C8)'),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{alt:"JSON",src:n(25606).Z,width:"458",height:"400"})),(0,l.kt)("td",{parentName:"tr",align:null},"In Streamsheet S1 the Inbox will be  filled with the JSON gathered by B11")))))}m.isMDXComponent=!0},25606:function(t,e,n){e.Z=n.p+"assets/images/JSON-e6b30192fa1ec871b726a118122382e0.PNG"}}]);