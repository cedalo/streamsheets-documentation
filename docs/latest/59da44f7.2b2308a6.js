(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(377)),c={id:"onmousedown",title:"ONMOUSEDOWN",sidebar_label:"ONMOUSEDOWN"},l={unversionedId:"streamsheets/functions/events/onmousedown",id:"streamsheets/functions/events/onmousedown",isDocsHomePage:!1,title:"ONMOUSEDOWN",description:"Assign a function, that will be executed, if the user presses the mouse",source:"@site/docs\\streamsheets\\functions\\events\\onmousedown.md",slug:"/streamsheets/functions/events/onmousedown",permalink:"/latest/docs/streamsheets/functions/events/onmousedown",version:"current",sidebar_label:"ONMOUSEDOWN"},b=[],i={rightToc:b};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Assign a function, that will be executed, if the user presses the mouse\ndown on a drawing item. The event handling is only active, if the\nprocess is running."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Syntax")),Object(o.b)("p",null,"ONMOUSEDOWN(Function)"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Arguments")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Function"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Function to execute.")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Return Value")),Object(o.b)("p",null,"TRUE."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Function"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Comment"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'DRAW.RECTANGLE("ID1", "", "Rect1", 1000, 1000, 3000, 3000,,,, EVENTS(ONMOUSEDOWN(DELETECELLS(A1:C1)))'),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"If the user clicks on the rectangle the cell range A1:C1 will be deleted.")))))}u.isMDXComponent=!0},377:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),s=u(n),O=r,m=s["".concat(c,".").concat(O)]||s[O]||p[O]||o;return n?a.a.createElement(m,l(l({ref:t},i),{},{components:n})):a.a.createElement(m,l({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=O;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);