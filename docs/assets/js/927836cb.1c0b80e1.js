"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[88125],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),b=a,f=m["".concat(c,".").concat(b)]||m[b]||u[b]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5171:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>b,default:()=>k,frontMatter:()=>m,metadata:()=>f,toc:()=>g});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&s(e,r,t[r]);return e};const m={id:"oct2bin",title:"OCT2BIN",sidebar_label:"OCT2BIN"},b=void 0,f={unversionedId:"functions/engineering/oct2bin",id:"version-2.5/functions/engineering/oct2bin",title:"OCT2BIN",description:"Converts an octal number to binary.",source:"@site/streamsheets_versioned_docs/version-2.5/functions/engineering/oct2bin.md",sourceDirName:"functions/engineering",slug:"/functions/engineering/oct2bin",permalink:"/streamsheets/functions/engineering/oct2bin",draft:!1,tags:[],version:"2.5",frontMatter:{id:"oct2bin",title:"OCT2BIN",sidebar_label:"OCT2BIN"},sidebar:"version-2.5/someSidebar",previous:{title:"HEX2OCT",permalink:"/streamsheets/functions/engineering/hex2oct"},next:{title:"OCT2DEC",permalink:"/streamsheets/functions/engineering/oct2dec"}},d={},g=[],y={toc:g};function k(e){var t,r=e,{components:a}=r,s=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},y),s),o(t,l({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Converts an octal number to binary."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Syntax")),(0,n.kt)("p",null,"=OCT2BIN(Number, ","[","Places","]",")"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"The octal number to convert.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Places (optional)"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"The number of characters to use for returned value. If value has less characters then it is padded with leading zeros.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Return")),(0,n.kt)("p",null,"The binary number or a #NUM! ",(0,n.kt)("a",u({parentName:"p"},{href:"../../other#error-codes"}),"error")," if given number is not a valid octal number. The #VALUE! ",(0,n.kt)("a",u({parentName:"p"},{href:"../../other#error-codes"}),"error")," is returned if specified places is not numeric or negative."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Examples")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Formula"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Comment"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("pre",null,(0,n.kt)("code",null,"=OCT2BIN(3)"))),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"11"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"converts octal 3 to binary")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("pre",null,(0,n.kt)("code",null,"=OCT2BIN(3, 4)"))),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"0011"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"converts octal 3 to binary with 4 characters")))))}k.isMDXComponent=!0}}]);