(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),c=(n(0),n(377)),o={id:"feedinbox",title:"FEEDINBOX",sidebar_label:"FEEDINBOX"},b={unversionedId:"streamsheets/functions/streamsheet/feedinbox",id:"streamsheets/functions/streamsheet/feedinbox",isDocsHomePage:!1,title:"FEEDINBOX",description:"This function feeds the inbox of a Streamsheet within the same",source:"@site/docs\\streamsheets\\functions\\streamsheet\\feedinbox.md",slug:"/streamsheets/functions/streamsheet/feedinbox",permalink:"/latest/docs/streamsheets/functions/streamsheet/feedinbox",version:"current",sidebar_label:"FEEDINBOX"},i=[],l={rightToc:i};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,'This function feeds the inbox of a Streamsheet within the same\nApp. The Streamsheet Settings must be set to "On Data Arrival", to\ntrigger the calculation. This way a dependent Streamsheet can be\ntriggered in two different ways. Either using the FEEDINBOX() function,\nwhich leads to an "asynchronous" call, since the message is just added\nto the inbox and waits for the next step. Or using EXECUTE(), which\nwill lead to a direct execution (synchronous).'),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Syntax")),Object(c.b)("p",null,"=FEEDINBOX(JSON, Target)"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Arguments")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"JSON"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"A key to a json object, defined by JSON, DICTIONARY, READ, SUBTREE, INBOX or OUTBOX.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Target"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"A location sheet name where the JSON will be placed in the inbox.")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Return Value")),Object(c.b)("p",null,"TRUE, if successful."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Example")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Function"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Result"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"=FEEDINBOX(DICTIONARY(A2:B5), \u201cS1\u201d) ",Object(c.b)("br",null),"  ",Object(c.b)("img",{src:"/docs/streamsheets/_images/FEEDINBOX1.PNG",alt:"FEEDINBOX1",width:"50%"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Appending an object to a message. The message content will look as follows ",Object(c.b)("br",null),"  ",Object(c.b)("img",{src:"/docs/streamsheets/_images/FEEDINBOX2.PNG",alt:"FEEDINBOX2",width:"60%"}))))))}s.isMDXComponent=!0},377:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(n),O=r,m=u["".concat(o,".").concat(O)]||u[O]||p[O]||c;return n?a.a.createElement(m,b(b({ref:t},l),{},{components:n})):a.a.createElement(m,b({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=O;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:r,o[1]=b;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);