"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[15439],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=p(r),h=a,f=m["".concat(s,".").concat(h)]||m[h]||c[h]||o;return r?n.createElement(f,l(l({ref:e},u),{},{components:r})):n.createElement(f,l({ref:e},u))}));function h(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13515:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],i={id:"cryptohash",title:"CRYPTO.HASH",sidebar_label:"CRYPTO.HASH"},s=void 0,p={unversionedId:"functions/crypto/cryptohash",id:"version-2.4/functions/crypto/cryptohash",title:"CRYPTO.HASH",description:"Creates an hash value for given text. The used hash algorithm can be",source:"@site/streamsheets_versioned_docs/version-2.4/functions/crypto/cryptohash.md",sourceDirName:"functions/crypto",slug:"/functions/crypto/cryptohash",permalink:"/streamsheets/2.4/functions/crypto/cryptohash",tags:[],version:"2.4",frontMatter:{id:"cryptohash",title:"CRYPTO.HASH",sidebar_label:"CRYPTO.HASH"},sidebar:"version-2.4/someSidebar",previous:{title:"SERIESTIME",permalink:"/streamsheets/2.4/functions/chart/seriestime"},next:{title:"CRYPTO.HMAC",permalink:"/streamsheets/2.4/functions/crypto/cryptohmac"}},u=[],c={toc:u};function m(t){var e=t.components,r=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Creates an hash value for given text. The used hash algorithm can be\noptionally specified. For a list of supported hash algorithms please\nrefer to ",(0,o.kt)("a",{parentName:"p",href:"../../other#hash-algorithms"},"Hash Algorithms"),".\nThe used hash algorithms are from the OpenSSL Library. See their ",(0,o.kt)("a",{parentName:"p",href:"https://www.openssl.org/docs/"},"docs")," for more details. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Syntax")),(0,o.kt)("p",null,"=CRYPTO.HASH(Text ","[",", Algorithm","]",")"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Text"),(0,o.kt)("td",{parentName:"tr",align:null},"A text to create hash value for.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Algorithm"),(0,o.kt)("td",{parentName:"tr",align:null},'Optional. The hash algorithm to use. Defaults to "sha256"')))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Return Value")),(0,o.kt)("p",null,"The hash value or an ",(0,o.kt)("a",{parentName:"p",href:"../../other#error-codes"},"Error Code")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Function"),(0,o.kt)("th",{parentName:"tr",align:null},"Result"),(0,o.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'=CRYPTO.HASH("hello")'),(0,o.kt)("td",{parentName:"tr",align:null},"2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824"),(0,o.kt)("td",{parentName:"tr",align:null},'By default "sha256" is used.')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'=CRYPTO.HASH("hello","md5")'),(0,o.kt)("td",{parentName:"tr",align:null},"5d41402abc4b2a76b9719d911017c592"),(0,o.kt)("td",{parentName:"tr",align:null},'Same text as before but creates an hash using "md5" algorithm.')))))}m.isMDXComponent=!0}}]);