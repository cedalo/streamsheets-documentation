"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[62102],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9975:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>O,contentTitle:()=>f,default:()=>g,frontMatter:()=>m,metadata:()=>d,toc:()=>v});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&s(e,r,t[r]);return e};const m={id:"colorconvert",title:"COLOR.CONVERT",sidebar_label:"COLOR.CONVERT"},f=void 0,d={unversionedId:"functions/streamsheet/colorconvert",id:"version-2.4/functions/streamsheet/colorconvert",title:"COLOR.CONVERT",description:"Converts a given color value to another color format. Currently",source:"@site/streamsheets_versioned_docs/version-2.4/functions/streamsheet/colorconvert.md",sourceDirName:"functions/streamsheet",slug:"/functions/streamsheet/colorconvert",permalink:"/streamsheets/2.4/functions/streamsheet/colorconvert",draft:!1,tags:[],version:"2.4",frontMatter:{id:"colorconvert",title:"COLOR.CONVERT",sidebar_label:"COLOR.CONVERT"},sidebar:"version-2.4/someSidebar",previous:{title:"CALC",permalink:"/streamsheets/2.4/functions/streamsheet/calc"},next:{title:"CONTINUE",permalink:"/streamsheets/2.4/functions/streamsheet/continue"}},O={},v=[],b={toc:v};function g(e){var t,r=e,{components:a}=r,s=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},b),s),o(t,l({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Converts a given color value to another color format. Currently\nfollowing color formats are supported: CMYK, HEX, HSL, HSV and RGB."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Syntax")),(0,n.kt)("p",null,"=COLOR.CONVERT(Color, FromColor, ToColor)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Color"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"A string specifying the color value to convert.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"FromColor"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"A color format string which matchs given color value. One of CMYK, HEX, HSL, HSV or RGB.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"ToColor"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"A color format string which defines resulting color value. One of CMYK, HEX, HSL, HSV or RGB.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Return Value")),(0,n.kt)("p",null,"String, the converted color value."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Function"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Comment"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),'=COLOR.CONVERT("128,128,128", "RGB", "CMYK")'),(0,n.kt)("td",u({parentName:"tr"},{align:null}),'"0,0,0,50"'),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"CMYK color value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),'=COLOR.CONVERT("0CF030", "HEX", "HSV")'),(0,n.kt)("td",u({parentName:"tr"},{align:null}),'"129,95,94"'),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"HSV color value")))))}g.isMDXComponent=!0}}]);