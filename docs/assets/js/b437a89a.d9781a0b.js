(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[59672],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52890:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return c},default:function(){return p}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),i={id:"dec2hex",title:"DEC2HEX",sidebar_label:"DEC2HEX"},o={unversionedId:"functions/engineering/dec2hex",id:"functions/engineering/dec2hex",isDocsHomePage:!1,title:"DEC2HEX",description:"Converts a decimal number to hexadecimal.",source:"@site/streamsheets/functions/engineering/dec2hex.md",sourceDirName:"functions/engineering",slug:"/functions/engineering/dec2hex",permalink:"/streamsheets/2.4/functions/engineering/dec2hex",version:"current",sidebar_label:"DEC2HEX",frontMatter:{id:"dec2hex",title:"DEC2HEX",sidebar_label:"DEC2HEX"},sidebar:"someSidebar",previous:{title:"DEC2BIN",permalink:"/streamsheets/2.4/functions/engineering/dec2bin"},next:{title:"DEC2OCT",permalink:"/streamsheets/2.4/functions/engineering/dec2oct"}},c=[],u={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Converts a decimal number to hexadecimal."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("p",null,"=DEC2HEX(Number, ","[","Places","]",")"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"The decimal number to convert.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Places"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. The number of characters to use for returned value. If value has less characters then it is padded with leading zeros.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return Value")),(0,l.kt)("p",null,"The hexadecimal number or a ","#","NUM! ",(0,l.kt)("a",{parentName:"p",href:"../../other#error-codes"},"error")," if given number is not a valid\ndecimal number. The ","#","VALUE! ",(0,l.kt)("a",{parentName:"p",href:"../../other#error-codes"},"error")," is returned if specified places is\nnonnumeric or negative."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Function"),(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"=DEC2HEX(28)"),(0,l.kt)("td",{parentName:"tr",align:null},"1C"),(0,l.kt)("td",{parentName:"tr",align:null},"converts decimal 28 to hexadecimal")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"=DEC2HEX(28, 4)"),(0,l.kt)("td",{parentName:"tr",align:null},"001C"),(0,l.kt)("td",{parentName:"tr",align:null},"converts decimal 28 to hexadecimal with 4 characters")))))}p.isMDXComponent=!0}}]);