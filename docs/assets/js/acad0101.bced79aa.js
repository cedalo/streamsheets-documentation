(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[92850],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=s(n),f=a,d=m["".concat(u,".").concat(f)]||m[f]||c[f]||l;return n?r.createElement(d,o(o({ref:e},p),{},{components:n})):r.createElement(d,o({ref:e},p))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59064:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return u},default:function(){return p}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),o={id:"or",title:"OR",sidebar_label:"OR"},i={unversionedId:"functions/logical/or",id:"version-2.3/functions/logical/or",isDocsHomePage:!1,title:"OR",description:"Evaluates, if at least one of the given values is true.",source:"@site/streamsheets_versioned_docs/version-2.3/functions/logical/or.md",sourceDirName:"functions/logical",slug:"/functions/logical/or",permalink:"/streamsheets/2.3/functions/logical/or",version:"2.3",sidebar_label:"OR",frontMatter:{id:"or",title:"OR",sidebar_label:"OR"},sidebar:"version-2.3/someSidebar",previous:{title:"NOT",permalink:"/streamsheets/2.3/functions/logical/not"},next:{title:"SWITCH",permalink:"/streamsheets/2.3/functions/logical/switch"}},u=[],s={toc:u};function p(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Evaluates, if at least one of the given values is true."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("p",null,"=OR(Value1, ","[","Value2","]",", ...)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Value1"),(0,l.kt)("td",{parentName:"tr",align:null},"First value to check")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Value2, ..."),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Other values to check")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return Value")),(0,l.kt)("p",null,"TRUE, if at least one of the arguments are true, otherwise FALSE."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Function"),(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"=OR(TRUE, 0)"),(0,l.kt)("td",{parentName:"tr",align:null},"TRUE"),(0,l.kt)("td",{parentName:"tr",align:null},"0 is evaluated as FALSE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'=OR(FALSE, "Test")'),(0,l.kt)("td",{parentName:"tr",align:null},"TRUE"),(0,l.kt)("td",{parentName:"tr",align:null},"Non empty strings are evaluated as TRUE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"=OR(FALSE, 0)"),(0,l.kt)("td",{parentName:"tr",align:null},"FALSE"),(0,l.kt)("td",{parentName:"tr",align:null},"0 is evaluated as FALSE")))))}p.isMDXComponent=!0}}]);