(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{264:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),c=(n(0),n(377)),o={id:"getcycle",title:"GETCYCLE",sidebar_label:"GETCYCLE"},i={unversionedId:"streamsheets/functions/streamsheet/getcycle",id:"streamsheets/functions/streamsheet/getcycle",isDocsHomePage:!1,title:"GETCYCLE",description:"Returns the Streamsheet steps done in repeat-calculation mode.",source:"@site/docs\\streamsheets\\functions\\streamsheet\\getcycle.md",slug:"/streamsheets/functions/streamsheet/getcycle",permalink:"/latest/docs/streamsheets/functions/streamsheet/getcycle",version:"current",sidebar_label:"GETCYCLE"},s=[],l={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Returns the Streamsheet steps done in repeat-calculation mode."),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"This function is only valid for Streamsheets which settings are defined\nto calculate repeatedly. If this is not the case this function always\nreturns 1."))),Object(c.b)("p",null,"To get the number of times a Streamsheet was processed refer to\ngetstep and to get the steps for a Streamsheet which was repeatedly\ntriggered by execute refer to repeatindex"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Syntax")),Object(c.b)("p",null,"=GETCYCLE()"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Arguments")),Object(c.b)("p",null,"None."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Return Value")),Object(c.b)("p",null,"Steps done in repeat-calculation mode or 1 if Streamsheet mode is\ndifferent."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Example")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Function"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Result"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"=GETCYCLE()"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2")))))}b.isMDXComponent=!0},377:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),m=r,d=p["".concat(o,".").concat(m)]||p[m]||u[m]||c;return n?a.a.createElement(d,i(i({ref:t},l),{},{components:n})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);