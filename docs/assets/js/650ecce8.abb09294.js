(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[40642],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15300:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c},default:function(){return p}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),o={id:"dec2hex",title:"DEC2HEX",sidebar_label:"DEC2HEX"},i={unversionedId:"functionss/engineering/dec2hex",id:"version-2.5/functionss/engineering/dec2hex",isDocsHomePage:!1,title:"DEC2HEX",description:"Converts a decimal number to hexadecimal.",source:"@site/streamsheets_versioned_docs/version-2.5/functionss/engineering/dec2hex.md",sourceDirName:"functionss/engineering",slug:"/functionss/engineering/dec2hex",permalink:"/streamsheets/2.5/functionss/engineering/dec2hex",version:"2.5",sidebar_label:"DEC2HEX",frontMatter:{id:"dec2hex",title:"DEC2HEX",sidebar_label:"DEC2HEX"}},c=[],u={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Converts a decimal number to hexadecimal."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("p",null,"=DEC2HEX(Number, ","[","Places","]",")"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"The decimal number to convert.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Places (optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of characters to use for returned value. If value has less characters then it is padded with leading zeros.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return")),(0,l.kt)("p",null,"The hexadecimal number or a #NUM! ",(0,l.kt)("a",{parentName:"p",href:"../../other#error-codes"},"error")," if given number is not a valid decimal number. The #VALUE! ",(0,l.kt)("a",{parentName:"p",href:"../../other#error-codes"},"error")," is returned if specified places is not numeric or negative."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Formula"),(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("pre",null,(0,l.kt)("code",null,"${formula}"))),(0,l.kt)("td",{parentName:"tr",align:null},"1C"),(0,l.kt)("td",{parentName:"tr",align:null},"converts decimal 28 to hexadecimal")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("pre",null,(0,l.kt)("code",null,"${formula}"))),(0,l.kt)("td",{parentName:"tr",align:null},"001C"),(0,l.kt)("td",{parentName:"tr",align:null},"converts decimal 28 to hexadecimal with 4 characters")))))}p.isMDXComponent=!0}}]);