(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{215:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),l=(a(0),a(375)),c={id:"average",title:"AVERAGE",sidebar_label:"AVERAGE"},o={unversionedId:"streamsheets/functions/statistical/average",id:"streamsheets/functions/statistical/average",isDocsHomePage:!1,title:"AVERAGE",description:"Returns the average of specified cell values. Values which do not",source:"@site/docs\\streamsheets\\functions\\statistical\\average.md",slug:"/streamsheets/functions/statistical/average",permalink:"/latest/docs/streamsheets/functions/statistical/average",version:"current",sidebar_label:"AVERAGE",sidebar:"someSidebar",previous:{title:"ATTRIBUTES",permalink:"/latest/docs/streamsheets/functions/shape/attributes"},next:{title:"AVERAGEIF",permalink:"/latest/docs/streamsheets/functions/statistical/averageif"}},i=[],b={rightToc:i};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Returns the average of specified cell values. Values which do not\nrepresent a number are ignored."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Syntax")),Object(l.b)("p",null,"=AVERAGE(Value1, ","[","Value2","]",", ...)"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Arguments")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Value1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cell or cell-range to calculate average for.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Value2, ..."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional. Additional Cells or cell-ranges to calculate average for.")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Return Value")),Object(l.b)("p",null,"The average over all specified cell values."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Function"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Result"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Comment"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"=AVERAGE(4, 5, 6, 7)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5.5"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Average is 5.5")))))}s.isMDXComponent=!0},375:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=s(a),O=n,m=u["".concat(c,".").concat(O)]||u[O]||p[O]||l;return a?r.a.createElement(m,o(o({ref:t},b),{},{components:a})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=O;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var b=2;b<l;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);