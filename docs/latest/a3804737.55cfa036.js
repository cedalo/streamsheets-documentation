(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{258:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return i}));var n=a(3),r=a(7),c=(a(0),a(376)),o={id:"array",title:"ARRAY",sidebar_label:"ARRAY"},b={unversionedId:"streamsheets/functions/streamsheet/array",id:"streamsheets/functions/streamsheet/array",isDocsHomePage:!1,title:"ARRAY",description:"This function can be used to efficiently add array items to a message.",source:"@site/docs\\streamsheets\\functions\\streamsheet\\array.md",slug:"/streamsheets/functions/streamsheet/array",permalink:"/latest/docs/streamsheets/functions/streamsheet/array",version:"current",sidebar_label:"ARRAY"},l=[],s={rightToc:l};function i(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"This function can be used to efficiently add array items to a message.\nCreates a JSON array entry using the given keys and values. If the\nrange has one row or column, one array entry for each cell is created.\nIf there are two columns or rows, a nested array (array containing a\nsubarray) will be created. Note that if both nest and flat parameters\nare set to true one can use range instead."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Syntax")),Object(c.b)("p",null,"=ARRAY(Range, ","[","Nest","]",", ","[","Flat","]",")"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Arguments")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Range"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Source Range to retrieve data from")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Nest"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional. Direction on how to nest items, if range has more than one row or column. FALSE to nest by column and TRUE to nest by row. Default is TRUE.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flat"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional. If this Argument is supplied (any value works!) the returned Array is always nested, even if only one row or column is specified. If Argument is missing than the returned array is only nested if there are more than one row or column.")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Return Value")),Object(c.b)("p",null,"Comma separated list of array items."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Example")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Function"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Result"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Comment"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"=WRITE(OUTBOXDATA(\u201cMessage\u201d, \u201cNewItem\u201d),",Object(c.b)("br",null),"  ARRAY(A2:B5, FALSE), \u201cArray\u201d) with the following cell content: ",Object(c.b)("br",null),"  ",Object(c.b)("img",{src:"/docs/streamsheets/_images/ARRAY1.PNG",alt:"ARRAY1",width:"50%"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("img",{src:"/docs/streamsheets/_images/ARRAY2.PNG",alt:"ARRAY2",width:"100%"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Appending an array to a message. ",Object(c.b)("br",null)," Since Nest is set to FALSE, the array items are created by columns ",Object(c.b)("br",null)," leading to two array entries. The two entries contain ",Object(c.b)("br",null)," the elements from the rows top to bottom. ",Object(c.b)("br",null)," The message content will look as follows")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"=WRITE(OUTBOXDATA(\u201cMessage\u201d,\u201dNewItem\u201d),",Object(c.b)("br",null)," ARRAY(A2:A5,FALSE),\u201dArray\u201d) ",Object(c.b)("br",null)," =WRITE(OUTBOXDATA(\u201cMessage\u201d,\u201dNewItem2\u201d),",Object(c.b)("br",null)," ARRAY(B2:B5,FALSE,TRUE),\u201dArray\u201d)",Object(c.b)("br",null),"  ",Object(c.b)("img",{src:"/docs/streamsheets/_images/nested.PNG",alt:"ARRAY3"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("img",{src:"/docs/streamsheets/_images/nestedout.PNG",alt:"ARRAY4"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Example usage of the nested parameter.")))),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},'If you want to create an Outbox array step by step, you can use "-1" as\nlast outboxdata path to automatically add a new array element to the\nexisting outbox message. ',Object(c.b)("inlineCode",{parentName:"p"},'=WRITE(OUTBOXDATA("Message";"data";-1);JSON(B1:C5);)')))))}i.isMDXComponent=!0},376:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),i=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},m=function(e){var t=i(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=i(a),p=n,O=m["".concat(o,".").concat(p)]||m[p]||u[p]||c;return a?r.a.createElement(O,b(b({ref:t},s),{},{components:a})):r.a.createElement(O,b({ref:t},s))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=p;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var s=2;s<c;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);