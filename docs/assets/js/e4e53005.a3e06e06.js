"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[10723],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(f,o(o({ref:e},c),{},{components:n})):r.createElement(f,o({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7047:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>g,contentTitle:()=>d,default:()=>y,frontMatter:()=>m,metadata:()=>f,toc:()=>k});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(t,e,n)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,s=(t,e)=>{for(var n in e||(e={}))p.call(e,n)&&c(t,n,e[n]);if(i)for(var n of i(e))u.call(e,n)&&c(t,n,e[n]);return t};const m={id:"if",title:"IF",hide_title:!0},d=void 0,f={unversionedId:"functions/logical/if",id:"version-3.0/functions/logical/if",title:"IF",description:"IF",source:"@site/streamsheets_versioned_docs/version-3.0/functions/logical/if.md",sourceDirName:"functions/logical",slug:"/functions/logical/if",permalink:"/streamsheets/functions/logical/if",draft:!1,tags:[],version:"3.0",frontMatter:{id:"if",title:"IF",hide_title:!0},sidebar:"someSidebar",previous:{title:"AND",permalink:"/streamsheets/functions/logical/and"},next:{title:"NOT",permalink:"/streamsheets/functions/logical/not"}},g={},k=[],b={toc:k};function y(t){var e,n=t,{components:a}=n,c=((t,e)=>{var n={};for(var r in t)p.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&i)for(var r of i(t))e.indexOf(r)<0&&u.call(t,r)&&(n[r]=t[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(e=s(s({},b),c),l(e,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",null,"IF"),(0,r.kt)("p",null,"Returns depending on the condition the true or the false argument. Or, if condition evaluates in an error, the function returns the error message and is not calculated."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("p",null,"=IF(Condition, TrueValue, FalseValue)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Condition"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Condition"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Condition to check.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"TrueValue"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Value"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Optional value to return, if the condition is true. If not specified nothing is returned.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"FalseValue"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Value"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Optional value to return, if the condition is false. If not specified nothing is returned.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The appropriate value depending on the condition.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Formula"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Result"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("pre",null,(0,r.kt)("code",null,"=IF(3",">",'1, "Warning", "OK")'))),(0,r.kt)("td",s({parentName:"tr"},{align:null}),'"Warning"'),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"As the condition results to TRUE, the first value is returned.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("pre",null,(0,r.kt)("code",null,'=IF(A1="no_streamsheets", "Warning", RETURN())'))),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"#N  with A1 = #NA"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"A1 returns an error and the function will not be calculated")))))}y.isMDXComponent=!0}}]);