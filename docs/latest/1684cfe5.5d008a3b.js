(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{375:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),i=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=i(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=i(n),m=a,O=u["".concat(l,".").concat(m)]||u[m]||p[m]||c;return n?r.a.createElement(O,b(b({ref:t},s),{},{components:n})):r.a.createElement(O,b({ref:t},s))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=m;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var s=2;s<c;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},432:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/SWAPVALUES1-6fed3cc111897b35d8b6c5813b208f4f.png"},433:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/SWAPVALUES2-769be2c6e7b93b06fa02b0ec2603228f.png"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return i}));var a=n(3),r=n(7),c=(n(0),n(375)),l={id:"swapvalues",title:"SWAPVALUES",sidebar_label:"SWAPVALUES"},b={unversionedId:"streamsheets/functions/streamsheet/swapvalues",id:"streamsheets/functions/streamsheet/swapvalues",isDocsHomePage:!1,title:"SWAPVALUES",description:"Copies the values from the given source range to the target range and",source:"@site/docs\\streamsheets\\functions\\streamsheet\\swapvalues.md",slug:"/streamsheets/functions/streamsheet/swapvalues",permalink:"/latest/docs/streamsheets/functions/streamsheet/swapvalues",version:"current",sidebar_label:"SWAPVALUES",sidebar:"someSidebar",previous:{title:"SUMIFS",permalink:"/latest/docs/streamsheets/functions/math/sumifs"},next:{title:"SWITCH",permalink:"/latest/docs/streamsheets/functions/logical/switch"}},o=[],s={rightToc:o};function i(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,l,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Copies the values from the given source range to the target range and\nvice versa. Beware that only the values are copied and not formulas. If\nthe target range is a multiple of the source range, the target range is\nfilled repeatedly with the source values."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Syntax")),Object(c.b)("p",null,"=SWAPVALUES(SourceRange, TargetRange)"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Arguments")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Range1"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Range to exchange")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Range2"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Range to exchange")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Return Value")),Object(c.b)("p",null,"TRUE, if successful."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Example")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Function"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Result"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Comment"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("br",null)," ",Object(c.b)("img",{src:n(432).default,width:"90%"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"TRUE"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"<",Object(c.b)("br",null)," ",Object(c.b)("img",{src:n(433).default,width:"90%"}))))),Object(c.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Only the values will be moved. Formulas will be removed."))))}i.isMDXComponent=!0}}]);