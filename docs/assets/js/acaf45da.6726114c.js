(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[1866],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,f=s["".concat(u,".").concat(d)]||s[d]||m[d]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},27660:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return u},default:function(){return p}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),i={id:"dmin",title:"DMIN",sidebar_label:"DMIN"},o={unversionedId:"functions/lookup/dmin",id:"functions/lookup/dmin",isDocsHomePage:!1,title:"DMIN",description:"Returns the smallest number in a column of cell range which matches the",source:"@site/streamsheets/functions/lookup/dmin.md",sourceDirName:"functions/lookup",slug:"/functions/lookup/dmin",permalink:"/streamsheets/2.3/functions/lookup/dmin",version:"current",sidebar_label:"DMIN",frontMatter:{id:"dmin",title:"DMIN",sidebar_label:"DMIN"},sidebar:"someSidebar",previous:{title:"DMAX",permalink:"/streamsheets/2.3/functions/lookup/dmax"},next:{title:"DSUM",permalink:"/streamsheets/2.3/functions/lookup/dsum"}},u=[],c={toc:u};function p(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Returns the smallest number in a column of cell range which matches the\nspecified criteria."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("p",null,"=DMIN(DataRange, ColumnIndex, CriteriaRange)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DataRange"),(0,l.kt)("td",{parentName:"tr",align:null},"Cell range, that containes the data to evaluate. The range must include the field labels.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ColumnIndex"),(0,l.kt)("td",{parentName:"tr",align:null},"Column label or index to find the minimum value in.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CriteriaRange"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the conditions a row in cell range must fulfill. Must define at least one column with a label and a cell below which specifies the condition.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return Value")),(0,l.kt)("p",null,"The minimum value of the matching column."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Function"),(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"=DMIN(A5:C9,2,A2:C3) ",(0,l.kt)("br",null)," ",(0,l.kt)("img",{src:n(78301).Z,width:"50%"})),(0,l.kt)("td",{parentName:"tr",align:null},"19"),(0,l.kt)("td",{parentName:"tr",align:null},'Evaluates the minimum of valid age entries in "Berlin".')))))}p.isMDXComponent=!0},78301:function(e,t,n){"use strict";t.Z=n.p+"assets/images/DSUM-3a3b61010b9d3bc711bf1c88873e5dc9.png"}}]);