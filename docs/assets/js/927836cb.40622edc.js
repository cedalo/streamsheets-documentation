(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[88125],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,b=m["".concat(u,".").concat(f)]||m[f]||s[f]||o;return n?r.createElement(b,l(l({ref:t},p),{},{components:n})):r.createElement(b,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36619:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return u},default:function(){return p}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),l={id:"oct2bin",title:"OCT2BIN",sidebar_label:"OCT2BIN"},i={unversionedId:"functions/engineering/oct2bin",id:"version-2.5/functions/engineering/oct2bin",isDocsHomePage:!1,title:"OCT2BIN",description:"Converts an octal number to binary.",source:"@site/streamsheets_versioned_docs/version-2.5/functions/engineering/oct2bin.md",sourceDirName:"functions/engineering",slug:"/functions/engineering/oct2bin",permalink:"/streamsheets/2.5/functions/engineering/oct2bin",version:"2.5",sidebar_label:"OCT2BIN",frontMatter:{id:"oct2bin",title:"OCT2BIN",sidebar_label:"OCT2BIN"},sidebar:"version-2.5/someSidebar",previous:{title:"HEX2OCT",permalink:"/streamsheets/2.5/functions/engineering/hex2oct"},next:{title:"OCT2DEC",permalink:"/streamsheets/2.5/functions/engineering/oct2dec"}},u=[],c={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Converts an octal number to binary."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Syntax")),(0,o.kt)("p",null,"=OCT2BIN(Number, ","[","Places","]",")"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Number"),(0,o.kt)("td",{parentName:"tr",align:null},"The octal number to convert.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Places (optional)"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of characters to use for returned value. If value has less characters then it is padded with leading zeros.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Return")),(0,o.kt)("p",null,"The binary number or a #NUM! ",(0,o.kt)("a",{parentName:"p",href:"../../other#error-codes"},"error")," if given number is not a valid octal number. The #VALUE! ",(0,o.kt)("a",{parentName:"p",href:"../../other#error-codes"},"error")," is returned if specified places is not numeric or negative."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Formula"),(0,o.kt)("th",{parentName:"tr",align:null},"Result"),(0,o.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("pre",null,(0,o.kt)("code",null,"=OCT2BIN(3)"))),(0,o.kt)("td",{parentName:"tr",align:null},"11"),(0,o.kt)("td",{parentName:"tr",align:null},"converts octal 3 to binary")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("pre",null,(0,o.kt)("code",null,"=OCT2BIN(3, 4)"))),(0,o.kt)("td",{parentName:"tr",align:null},"0011"),(0,o.kt)("td",{parentName:"tr",align:null},"converts octal 3 to binary with 4 characters")))))}p.isMDXComponent=!0}}]);