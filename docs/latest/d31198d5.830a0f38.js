(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{321:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),c=(n(0),n(376)),b={id:"bin2oct",title:"BIN2OCT",sidebar_label:"BIN2OCT"},o={unversionedId:"streamsheets/functions/engineering/bin2oct",id:"streamsheets/functions/engineering/bin2oct",isDocsHomePage:!1,title:"BIN2OCT",description:"Converts a binary number to octal.",source:"@site/docs\\streamsheets\\functions\\engineering\\bin2oct.md",slug:"/streamsheets/functions/engineering/bin2oct",permalink:"/latest/docs/streamsheets/functions/engineering/bin2oct",version:"current",sidebar_label:"BIN2OCT"},l=[],i={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Converts a binary number to octal."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Syntax")),Object(c.b)("p",null,"=BIN2OCT(Number, ","[","Places","]",")"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Arguments")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Number"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The binary number to convert.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Places"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Optional. The number of characters to use for returned value. If value has less characters then it is padded with leading zeros.")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Return Value")),Object(c.b)("p",null,"The octal number or a ","#","NUM! error if given number is not a valid binary\nnumber. The ","#","VALUE! error is returned if specified places is nonnumeric\nor negative."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Example")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Function"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Result"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Comment"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"=BIN2OCT(1100100)"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"144"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"converts binary 1100100 to octal")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"=BIN2OCT(1100100, 4)"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0144"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"converts binary 1100100 to octal with 4 characters")))))}u.isMDXComponent=!0},376:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=u(n),O=r,m=p["".concat(b,".").concat(O)]||p[O]||s[O]||c;return n?a.a.createElement(m,o(o({ref:t},i),{},{components:n})):a.a.createElement(m,o({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,b=new Array(c);b[0]=O;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,b[1]=o;for(var i=2;i<c;i++)b[i]=n[i];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);