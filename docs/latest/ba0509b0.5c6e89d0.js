(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{303:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),c=(n(0),n(376)),i={id:"axis",title:"AXIS",sidebar_label:"AXIS"},l={unversionedId:"streamsheets/functions/chart/axis",id:"streamsheets/functions/chart/axis",isDocsHomePage:!1,title:"AXIS",description:"Define axis settings of a chart axis.",source:"@site/docs\\streamsheets\\functions\\chart\\axis.md",slug:"/streamsheets/functions/chart/axis",permalink:"/latest/docs/streamsheets/functions/chart/axis",version:"current",sidebar_label:"AXIS"},b=[],o={rightToc:b};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Define axis settings of a chart axis."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Syntax")),Object(c.b)("p",null,"=AXIS(Min, Max, Step, TimeStep, ZoomMin, ZoomMax)"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Arguments")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Min"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Minumum axis Value.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Max"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Maximum axis value")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Step"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Step for axis ticks or grid lines. For time axis the step will increment the time step.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Time Step"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Step type for time units. Allow values are 'year', 'quarter', 'month', 'day', 'hour', 'minute', 'second' or 'millisecond'.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ZoomMin"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Axis minumum to use, if chart is zoomed. This value will be filled automatically, if axis is zoomed using the mouse.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ZoomMax"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Axis maximum to use, if chart is zoomed. This value will be filled automatically, if axis is zoomed using the mouse.")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Return Value")),Object(c.b)("p",null,"TRUE."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Example")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Function"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Result"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Comment"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"=AXIS(0, 200, 50)"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"TRUE"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Scales the axis from 0 to 200 using a step of 50 units.")))))}u.isMDXComponent=!0},376:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),u=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,O=s["".concat(i,".").concat(m)]||s[m]||p[m]||c;return n?r.a.createElement(O,l(l({ref:t},o),{},{components:n})):r.a.createElement(O,l({ref:t},o))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=m;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var o=2;o<c;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);