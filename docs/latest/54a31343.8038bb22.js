(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{169:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),b=(a(0),a(375)),l={id:"inboxdata",title:"INBOXDATA",sidebar_label:"INBOXDATA"},c={unversionedId:"streamsheets/functions/streamsheet/inboxdata",id:"streamsheets/functions/streamsheet/inboxdata",isDocsHomePage:!1,title:"INBOXDATA",description:"Creates a JSON key from the given values or range to retrieve data",source:"@site/docs\\streamsheets\\functions\\streamsheet\\inboxdata.md",slug:"/streamsheets/functions/streamsheet/inboxdata",permalink:"/latest/docs/streamsheets/functions/streamsheet/inboxdata",version:"current",sidebar_label:"INBOXDATA",sidebar:"someSidebar",previous:{title:"INBOX",permalink:"/latest/docs/streamsheets/functions/streamsheet/inbox"},next:{title:"INBOXMETADATA",permalink:"/latest/docs/streamsheets/functions/streamsheet/inboxmetadata"}},o=[],i={rightToc:o};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Creates a JSON key from the given values or range to retrieve data\nfrom within a message. This function is normally used in the READ\nfunction. INBOXDATA retrieves values from the Data section of a message."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Syntax")),Object(b.b)("p",null,"=INBOXDATA(Streamsheet, Message, ValuesOrRange)"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Arguments")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Streamsheet"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Define the Streamsheet to retrieve inbox data from.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Message"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Message to retrieve data from. If left empty, the current message in the inbox is used.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ValuesOrRange"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A list of values or a range of cells describing the path to the element path within a JSON structure.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Return Value")),Object(b.b)("p",null,"A string key to provide a path within a message."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Example")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Function"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Result"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Comment"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'=INBOXDATA(,, "Customer", "Name")'),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[","P1","]","[","]","[","Customer","]","[","Name","]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Returns an identifier that can be used in other Streamsheet functions like READ. As Streamsheet and Message are left empty, the current Streamsheet and inbox Message is used.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"=INBOXDATA(,, B1:B2)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[","P1","]","[","]","[","Customer","]","[","Name","]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'Here the values within the cell range B1:B2 ("Customer", "Name") will be used to concatenate the JSON path.')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'=READ(INBOXDATA(,, "Customer", "Name"), C7, "String")'),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The READ function return the last part of the JSON Path. The value of the Message at the given Path will be pushed into cell C7.")))))}s.isMDXComponent=!0},375:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),s=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=s(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=s(a),p=n,O=u["".concat(l,".").concat(p)]||u[p]||m[p]||b;return a?r.a.createElement(O,c(c({ref:t},i),{},{components:a})):r.a.createElement(O,c({ref:t},i))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var i=2;i<b;i++)l[i]=a[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);