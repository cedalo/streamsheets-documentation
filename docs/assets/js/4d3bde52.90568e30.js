"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[49203],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),u=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=u(r),f=a,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||l;return r?n.createElement(d,o(o({ref:e},c),{},{components:r})):n.createElement(d,o({ref:e},c))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},93221:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>b,contentTitle:()=>f,default:()=>g,frontMatter:()=>m,metadata:()=>d,toc:()=>y});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(t,e,r)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,s=(t,e)=>{for(var r in e||(e={}))p.call(e,r)&&c(t,r,e[r]);if(i)for(var r of i(e))u.call(e,r)&&c(t,r,e[r]);return t};const m={id:"substitute",title:"SUBSTITUTE",sidebar_label:"SUBSTITUTE"},f=void 0,d={unversionedId:"functionss/text/substitute",id:"version-2.5/functionss/text/substitute",title:"SUBSTITUTE",description:"Substitutes a text string with a new text.",source:"@site/streamsheets_versioned_docs/version-2.5/functionss/text/substitute.md",sourceDirName:"functionss/text",slug:"/functionss/text/substitute",permalink:"/streamsheets/2.5/functionss/text/substitute",draft:!1,tags:[],version:"2.5",frontMatter:{id:"substitute",title:"SUBSTITUTE",sidebar_label:"SUBSTITUTE"}},b={},y=[],k={toc:y};function g(t){var e,r=t,{components:a}=r,c=((t,e)=>{var r={};for(var n in t)p.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&i)for(var n of i(t))e.indexOf(n)<0&&u.call(t,n)&&(r[n]=t[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(e=s(s({},k),c),l(e,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Substitutes a text string with a new text."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Syntax")),(0,n.kt)("p",null,"=SUBSTITUTE(Text, OldText, NewText, ","[","Occurrence","]",")"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Text for which to substitute characters.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"OldText"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The text to be replaced.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"NewText"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The text which will replace specified OldText.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Occurrence (optional)"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Specifies which occurrence of OldText to be replaced by NewText. If not specified every occurrence of OldText will be replaced.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Return")),(0,n.kt)("p",null,"A string value with replaced text."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Examples")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Formula"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Comment"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("pre",null,(0,n.kt)("code",null,"${formula}"))),(0,n.kt)("td",s({parentName:"tr"},{align:null}),'"Replace me later"'),(0,n.kt)("td",s({parentName:"tr"},{align:null}))))))}g.isMDXComponent=!0}}]);