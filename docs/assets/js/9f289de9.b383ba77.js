(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[15439],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),h=a,f=m["".concat(s,".").concat(h)]||m[h]||u[h]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},57168:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s},default:function(){return c}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),l={id:"cryptohash",title:"CRYPTO.HASH",sidebar_label:"CRYPTO.HASH"},i={unversionedId:"functions/crypto/cryptohash",id:"version-2.4/functions/crypto/cryptohash",isDocsHomePage:!1,title:"CRYPTO.HASH",description:"Creates an hash value for given text. The used hash algorithm can be",source:"@site/streamsheets_versioned_docs/version-2.4/functions/crypto/cryptohash.md",sourceDirName:"functions/crypto",slug:"/functions/crypto/cryptohash",permalink:"/streamsheets/2.4/functions/crypto/cryptohash",version:"2.4",sidebar_label:"CRYPTO.HASH",frontMatter:{id:"cryptohash",title:"CRYPTO.HASH",sidebar_label:"CRYPTO.HASH"},sidebar:"version-2.4/someSidebar",previous:{title:"SERIESTIME",permalink:"/streamsheets/2.4/functions/chart/seriestime"},next:{title:"CRYPTO.HMAC",permalink:"/streamsheets/2.4/functions/crypto/cryptohmac"}},s=[],p={toc:s};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Creates an hash value for given text. The used hash algorithm can be\noptionally specified. For a list of supported hash algorithms please\nrefer to ",(0,o.kt)("a",{parentName:"p",href:"../../other#hash-algorithms"},"Hash Algorithms"),".\nThe used hash algorithms are from the OpenSSL Library. See their ",(0,o.kt)("a",{parentName:"p",href:"https://www.openssl.org/docs/"},"docs")," for more details. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Syntax")),(0,o.kt)("p",null,"=CRYPTO.HASH(Text ","[",", Algorithm","]",")"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Text"),(0,o.kt)("td",{parentName:"tr",align:null},"A text to create hash value for.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Algorithm"),(0,o.kt)("td",{parentName:"tr",align:null},'Optional. The hash algorithm to use. Defaults to "sha256"')))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Return Value")),(0,o.kt)("p",null,"The hash value or an ",(0,o.kt)("a",{parentName:"p",href:"../../other#error-codes"},"Error Code")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Function"),(0,o.kt)("th",{parentName:"tr",align:null},"Result"),(0,o.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'=CRYPTO.HASH("hello")'),(0,o.kt)("td",{parentName:"tr",align:null},"2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824"),(0,o.kt)("td",{parentName:"tr",align:null},'By default "sha256" is used.')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'=CRYPTO.HASH("hello","md5")'),(0,o.kt)("td",{parentName:"tr",align:null},"5d41402abc4b2a76b9719d911017c592"),(0,o.kt)("td",{parentName:"tr",align:null},'Same text as before but creates an hash using "md5" algorithm.')))))}c.isMDXComponent=!0}}]);