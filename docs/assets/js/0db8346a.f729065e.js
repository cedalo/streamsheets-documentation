(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[57436],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var u=n.createContext({}),i=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},p=function(t){var e=i(t.components);return n.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,u=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),m=i(r),f=o,d=m["".concat(u,".").concat(f)]||m[f]||s[f]||a;return r?n.createElement(d,l(l({ref:e},p),{},{components:r})):n.createElement(d,l({ref:e},p))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,l=new Array(a);l[0]=m;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:o,l[1]=c;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},97812:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),l={id:"colorconvert",title:"COLOR.CONVERT",sidebar_label:"COLOR.CONVERT"},c={unversionedId:"functionss/streamsheet/colorconvert",id:"version-2.5/functionss/streamsheet/colorconvert",isDocsHomePage:!1,title:"COLOR.CONVERT",description:"Converts a given color value to another color format. Currently following color formats are supported: CMYK, HEX, HSL, HSV and RGB.",source:"@site/streamsheets_versioned_docs/version-2.5/functionss/streamsheet/colorconvert.md",sourceDirName:"functionss/streamsheet",slug:"/functionss/streamsheet/colorconvert",permalink:"/streamsheets/2.5/functionss/streamsheet/colorconvert",version:"2.5",sidebar_label:"COLOR.CONVERT",frontMatter:{id:"colorconvert",title:"COLOR.CONVERT",sidebar_label:"COLOR.CONVERT"}},u=[],i={toc:u};function p(t){var e=t.components,r=(0,o.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Converts a given color value to another color format. Currently following color formats are supported: CMYK, HEX, HSL, HSV and RGB."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("p",null,"=COLOR.CONVERT(Color, FromColor, ToColor)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Color"),(0,a.kt)("td",{parentName:"tr",align:null},"A string specifying the color value to convert.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FromColor"),(0,a.kt)("td",{parentName:"tr",align:null},"A color format string which matches given color value. One of CMYK, HEX, HSL, HSV or RGB.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ToColor"),(0,a.kt)("td",{parentName:"tr",align:null},"A color format string which defines resulting color value. One of CMYK, HEX, HSL, HSV or RGB.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return")),(0,a.kt)("p",null,"String, the converted color value."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Formula"),(0,a.kt)("th",{parentName:"tr",align:null},"Result"),(0,a.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("pre",null,(0,a.kt)("code",null,"${formula}"))),(0,a.kt)("td",{parentName:"tr",align:null},'"0,0,0,50"'),(0,a.kt)("td",{parentName:"tr",align:null},"CMYK color value")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("pre",null,(0,a.kt)("code",null,"${formula}"))),(0,a.kt)("td",{parentName:"tr",align:null},'"129,95,94"'),(0,a.kt)("td",{parentName:"tr",align:null},"HSV color value")))))}p.isMDXComponent=!0}}]);