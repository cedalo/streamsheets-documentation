(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{241:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),l=(n(0),n(375)),c={id:"dsum",title:"DSUM",sidebar_label:"DSUM"},o={unversionedId:"streamsheets/functions/lookup/dsum",id:"streamsheets/functions/lookup/dsum",isDocsHomePage:!1,title:"DSUM",description:"Returns the sum of all values in a column of the cell range which",source:"@site/docs\\streamsheets\\functions\\lookup\\dsum.md",slug:"/streamsheets/functions/lookup/dsum",permalink:"/latest/docs/streamsheets/functions/lookup/dsum",version:"current",sidebar_label:"DSUM",sidebar:"someSidebar",previous:{title:"DRAW.STREAMCHART",permalink:"/latest/docs/streamsheets/functions/chart/drawstreamchart"},next:{title:"EDGE.DETECT",permalink:"/latest/docs/streamsheets/functions/streamsheet/edgedetect"}},b=[],i={rightToc:b};function u(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},i,c,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Returns the sum of all values in a column of the cell range which\nmatches the specified criteria."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Syntax")),Object(l.b)("p",null,"=DSUM(DataRange, ColumnIndex, CriteriaRange)"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Arguments")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DataRange"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Cell range, that containes the data to evaluate. The range must include the field labels.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ColumnIndex"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Column label or index to calculate the sum for.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"CriteriaRange"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Specifies the conditions a row in cell range must fulfill. Must define at least one column with a label and a cell below which specifies the condition.")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Return Value")),Object(l.b)("p",null,"The sum of all values of the matching column."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Function"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Result"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Comment"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"=DSUM(A5:C9,2,A2:C3)  ",Object(l.b)("br",null)," ",Object(l.b)("img",{src:n(381).default,width:"50%"})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"43"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'Evaluates the sum of all ages in "Berlin".')))))}u.isMDXComponent=!0},375:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,d=s["".concat(c,".").concat(m)]||s[m]||p[m]||l;return n?r.a.createElement(d,o(o({ref:t},i),{},{components:n})):r.a.createElement(d,o({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=m;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var i=2;i<l;i++)c[i]=n[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},381:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/DSUM-3a3b61010b9d3bc711bf1c88873e5dc9.png"}}]);