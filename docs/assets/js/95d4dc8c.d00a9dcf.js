"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[36882],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),b=a,f=m["".concat(p,".").concat(b)]||m[b]||s[b]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>b,default:()=>k,frontMatter:()=>m,metadata:()=>f,toc:()=>y});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&u(e,n,t[n]);return e};const m={id:"bin2dec",title:"BIN2DEC",sidebar_label:"BIN2DEC"},b=void 0,f={unversionedId:"functions/engineering/bin2dec",id:"version-2.4/functions/engineering/bin2dec",title:"BIN2DEC",description:"Converts a binary number to decimal.",source:"@site/streamsheets_versioned_docs/version-2.4/functions/engineering/bin2dec.md",sourceDirName:"functions/engineering",slug:"/functions/engineering/bin2dec",permalink:"/streamsheets/2.4/functions/engineering/bin2dec",draft:!1,tags:[],version:"2.4",frontMatter:{id:"bin2dec",title:"BIN2DEC",sidebar_label:"BIN2DEC"},sidebar:"version-2.4/someSidebar",previous:{title:"YEAR",permalink:"/streamsheets/2.4/functions/date/year"},next:{title:"BIN2FLOAT",permalink:"/streamsheets/2.4/functions/engineering/bin2float"}},d={},y=[],g={toc:y};function k(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},g),u),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Converts a binary number to decimal."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("p",null,"=BIN2DEC(Number)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The binary number to convert.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Value")),(0,r.kt)("p",null,"The decimal number or a ","#","NUM! ",(0,r.kt)("a",s({parentName:"p"},{href:"../../other#error-codes"}),"error")," if given number is not a valid\nbinary number."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Function"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Result"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"=BIN2DEC(1100100)"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"100"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"converts binary 1100100 to decimal")))))}k.isMDXComponent=!0}}]);