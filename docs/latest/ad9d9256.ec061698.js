(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{272:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),l=(n(0),n(375)),c={id:"index",title:"INDEX",sidebar_label:"INDEX"},o={unversionedId:"streamsheets/functions/lookup/index",id:"streamsheets/functions/lookup/index",isDocsHomePage:!1,title:"INDEX",description:"Returns a cell within the range using the row and column offset.",source:"@site/docs\\streamsheets\\functions\\lookup\\index.md",slug:"/streamsheets/functions/lookup/index",permalink:"/latest/docs/streamsheets/functions/lookup/index",version:"current",sidebar_label:"INDEX",sidebar:"someSidebar",previous:{title:"INBOXMETADATA",permalink:"/latest/docs/streamsheets/functions/streamsheet/inboxmetadata"},next:{title:"INDIRECT",permalink:"/latest/docs/streamsheets/functions/lookup/indirect"}},b=[],i={rightToc:b};function u(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,c,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Returns a cell within the range using the row and column offset."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Syntax")),Object(l.b)("p",null,"=INDEX(Range,Row,Column)"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Arguments")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Range"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Range of cells to search in.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Row"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Row index or offset starting with 1.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Column"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Column index offset starting with 1.")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Return Value")),Object(l.b)("p",null,"Cell value of the cell within the range with an offset of row and\ncolumn."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Function"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Result"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Comment"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"=INDEX(A2:B4,2,1)  ",Object(l.b)("br",null)," ",Object(l.b)("img",{src:n(536).default,width:"50%"})),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"8"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The value of cell A2 is returned.")))))}u.isMDXComponent=!0},375:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,O=s["".concat(c,".").concat(m)]||s[m]||p[m]||l;return n?a.a.createElement(O,o(o({ref:t},i),{},{components:n})):a.a.createElement(O,o({ref:t},i))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=m;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var i=2;i<l;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},536:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/INDEX-3b8f81a803e0df6eb6994a21fd8173ed.png"}}]);