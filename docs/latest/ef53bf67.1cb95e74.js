(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{355:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(376)),c={id:"lineformat",title:"LINEFORMAT",sidebar_label:"LINEFORMAT"},i={unversionedId:"streamsheets/functions/shape/lineformat",id:"streamsheets/functions/shape/lineformat",isDocsHomePage:!1,title:"LINEFORMAT",description:"Create a line format description from the given arguments.",source:"@site/docs\\streamsheets\\functions\\shape\\lineformat.md",slug:"/streamsheets/functions/shape/lineformat",permalink:"/latest/docs/streamsheets/functions/shape/lineformat",version:"current",sidebar_label:"LINEFORMAT"},l=[],u={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Create a line format description from the given arguments."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Syntax")),Object(o.b)("p",null,"LINEFORMAT(Color ","[",", Style, Width, ArrowStart, ArrowEnd","]",")"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Arguments")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Return Value")),Object(o.b)("p",null,"JSON String, which defines the line format and can be used in drawing\nfunctions."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Function"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Result"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Comment"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'LINEFORMAT("',"#",'FF0000", 1, 3)'),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'{"color":"',"#",'FF0000", "style":1,"width":3}'),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Draw a solid red line using a line width of 3 Pixel.")))))}p.isMDXComponent=!0},376:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,f=b["".concat(c,".").concat(m)]||b[m]||s[m]||o;return n?a.a.createElement(f,i(i({ref:t},u),{},{components:n})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);