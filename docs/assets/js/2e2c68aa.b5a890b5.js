(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[50793],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||l;return n?r.createElement(m,o(o({ref:e},p),{},{components:n})):r.createElement(m,o({ref:e},p))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85380:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return u},default:function(){return p}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),o={id:"if",title:"IF",sidebar_label:"IF"},i={unversionedId:"functionss/logical/if",id:"version-2.5/functionss/logical/if",isDocsHomePage:!1,title:"IF",description:"Returns depending on the condition the true or the false argument. Or, if condition evaluates in an error, the function returns the error message and is not calculated.",source:"@site/streamsheets_versioned_docs/version-2.5/functionss/logical/if.md",sourceDirName:"functionss/logical",slug:"/functionss/logical/if",permalink:"/streamsheets/2.5/functionss/logical/if",version:"2.5",sidebar_label:"IF",frontMatter:{id:"if",title:"IF",sidebar_label:"IF"}},u=[],c={toc:u};function p(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Returns depending on the condition the true or the false argument. Or, if condition evaluates in an error, the function returns the error message and is not calculated."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("p",null,"=IF(Condition, TrueValue, FalseValue)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Condition"),(0,l.kt)("td",{parentName:"tr",align:null},"Condition to check.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TrueValue"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional value to return, if the condition is true. If not specified nothing is returned.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FalseValue"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional value to return, if the condition is false. If not specified nothing is returned.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return")),(0,l.kt)("p",null,"The appropriate value depending on the condition."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Formula"),(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("pre",null,(0,l.kt)("code",null,"${formula}"))),(0,l.kt)("td",{parentName:"tr",align:null},'"Warning"'),(0,l.kt)("td",{parentName:"tr",align:null},"As the condition results to TRUE, the first value is returned.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("pre",null,(0,l.kt)("code",null,"${formula}"))),(0,l.kt)("td",{parentName:"tr",align:null},"#NA"),(0,l.kt)("td",{parentName:"tr",align:null},"A1 returns an error and the function will not be calculated")))))}p.isMDXComponent=!0}}]);