(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{303:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),c=(n(0),n(377)),l={id:"match",title:"MATCH",sidebar_label:"MATCH"},b={unversionedId:"streamsheets/functions/lookup/match",id:"streamsheets/functions/lookup/match",isDocsHomePage:!1,title:"MATCH",description:"Returns a relative position number of a matching cell inside a specified",source:"@site/docs\\streamsheets\\functions\\lookup\\match.mdx",slug:"/streamsheets/functions/lookup/match",permalink:"/latest/docs/streamsheets/functions/lookup/match",version:"current",sidebar_label:"MATCH"},o=[],i={rightToc:o};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Returns a relative position number of a matching cell inside a specified\ncell range."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Syntax")),Object(c.b)("p",null,"=MATCH(Value, SearchRange ","[",", Type","]",")"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Arguments")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"value"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Value to search for.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"SearchRange"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"A cell range to search in.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Optional. Search type with the following options: ",Object(c.b)("br",null)," ",Object(c.b)("inlineCode",{parentName:"td"},"1"),": (Default) Find the largest value in cell range which is less than or equal to specified value. Table must be in ascending order. ",Object(c.b)("br",null),Object(c.b)("inlineCode",{parentName:"td"},"0"),": Find the first value which match exactly specified value. Here the wildcards ? and * are supported. ",Object(c.b)("br",null)," ",Object(c.b)("inlineCode",{parentName:"td"},"-1"),": Find the smallest value in cell range which is greater or equal to specified value. Table must be in descending order.")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Return Value")),Object(c.b)("p",null,"Returns relative position of in cell-range for given value or\n#NA if no match is found."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Example")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Function"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Result"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Comment"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"1.")," =MATCH(4,B2:B4, 0) ",Object(c.b)("br",null)," ",Object(c.b)("strong",{parentName:"td"},"2.")," =MATCH(2,A2:B2, 0)",Object(c.b)("br",null)," ",Object(c.b)("br",null)," ",Object(c.b)("img",{src:"/docs/streamsheets/_images/MATCH.PNG",alt:"MATCH",width:"50%"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"1.")," 2  ",Object(c.b)("br",null)," ",Object(c.b)("strong",{parentName:"td"},"2.")," 1  ",Object(c.b)("br",null)),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The index of the cell with the searched value is returned.")))))}u.isMDXComponent=!0},377:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,O=p["".concat(l,".").concat(m)]||p[m]||s[m]||c;return n?a.a.createElement(O,b(b({ref:t},i),{},{components:n})):a.a.createElement(O,b({ref:t},i))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=m;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:r,l[1]=b;for(var i=2;i<c;i++)l[i]=n[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);