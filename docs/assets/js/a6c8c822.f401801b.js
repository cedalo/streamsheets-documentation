(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[18825],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||l;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},67683:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s},default:function(){return c}});var n=r(22122),a=r(19756),l=(r(67294),r(3905)),o={id:"average",title:"AVERAGE",sidebar_label:"AVERAGE"},i={unversionedId:"functions/statistical/average",id:"version-2.5/functions/statistical/average",isDocsHomePage:!1,title:"AVERAGE",description:"Returns the average of specified cell values. Values which do not represent a number are ignored.",source:"@site/streamsheets_versioned_docs/version-2.5/functions/statistical/average.md",sourceDirName:"functions/statistical",slug:"/functions/statistical/average",permalink:"/streamsheets/2.5/functions/statistical/average",version:"2.5",sidebar_label:"AVERAGE",frontMatter:{id:"average",title:"AVERAGE",sidebar_label:"AVERAGE"},sidebar:"version-2.5/someSidebar",previous:{title:"STACKUPSERT",permalink:"/streamsheets/2.5/functions/stack/stackupsert"},next:{title:"AVERAGEIF",permalink:"/streamsheets/2.5/functions/statistical/averageif"}},s=[],u={toc:s};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Returns the average of specified cell values. Values which do not represent a number are ignored."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("p",null,"=AVERAGE(Value1, ","[","Value2, ...","]",")"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Value1"),(0,l.kt)("td",{parentName:"tr",align:null},"Cell or cell-range to calculate average for.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Value2, ... (optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"Additional Cells or cell-ranges to calculate average for.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return")),(0,l.kt)("p",null,"The average over all specified cell values."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Formula"),(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("pre",null,(0,l.kt)("code",null,"=AVERAGE(4, 5, 6, 7)"))),(0,l.kt)("td",{parentName:"tr",align:null},"5.5"),(0,l.kt)("td",{parentName:"tr",align:null},"Average is 5.5")))))}c.isMDXComponent=!0}}]);