(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[63294],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36734:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s},default:function(){return p}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),o={id:"mstoserial",title:"MSTOSERIAL",sidebar_label:"MSTOSERIAL"},i={unversionedId:"functionss/date/mstoserial",id:"version-2.5/functionss/date/mstoserial",isDocsHomePage:!1,title:"MSTOSERIAL",description:"Converts the given elapsed milliseconds, since UNIX epoch time, to a serial number. A serial number is recognized as a date by Streamsheets.",source:"@site/streamsheets_versioned_docs/version-2.5/functionss/date/mstoserial.md",sourceDirName:"functionss/date",slug:"/functionss/date/mstoserial",permalink:"/streamsheets/2.5/functionss/date/mstoserial",version:"2.5",sidebar_label:"MSTOSERIAL",frontMatter:{id:"mstoserial",title:"MSTOSERIAL",sidebar_label:"MSTOSERIAL"}},s=[],u={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Converts the given elapsed milliseconds, since UNIX epoch time, to a serial number. A serial number is recognized as a date by Streamsheets."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("p",null,"=MSTOSERIAL(TimeValue, UTC)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TimeValue"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"Milliseconds since UNIX epoch time (1st of January 1970).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UTC"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies, if conversion should respect locale timezone, i.e. local timezone offset is added. Defaults to FALSE.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return")),(0,l.kt)("p",null,"Date value deducted from milliseconds."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Formula"),(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("pre",null,(0,l.kt)("code",null,"${formula}"))),(0,l.kt)("td",{parentName:"tr",align:null},"37386.97157"),(0,l.kt)("td",{parentName:"tr",align:null},"The given value represents the 10th of May, 2002, 23:19.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("pre",null,(0,l.kt)("code",null,"${formula}"))),(0,l.kt)("td",{parentName:"tr",align:null},"37386.97157"),(0,l.kt)("td",{parentName:"tr",align:null},"Same result as before but converts from UTC milliseconds to local german time.")))))}p.isMDXComponent=!0}}]);