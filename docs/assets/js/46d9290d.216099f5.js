"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[39866],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>s});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=u(n),s=r,k=d["".concat(p,".").concat(s)]||d[s]||c[s]||l;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26763:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>g,contentTitle:()=>s,default:()=>b,frontMatter:()=>d,metadata:()=>k,toc:()=>N});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,c=(t,e)=>{for(var n in e||(e={}))p.call(e,n)&&m(t,n,e[n]);if(o)for(var n of o(e))u.call(e,n)&&m(t,n,e[n]);return t};const d={id:"minifs",title:"MINIFS",sidebar_label:"MINIFS"},s=void 0,k={unversionedId:"functionss/statistical/minifs",id:"version-2.5/functionss/statistical/minifs",title:"MINIFS",description:"Returns the minimum value of all cells which meet multiple criteria.",source:"@site/streamsheets_versioned_docs/version-2.5/functionss/statistical/minifs.md",sourceDirName:"functionss/statistical",slug:"/functionss/statistical/minifs",permalink:"/streamsheets/2.5/functionss/statistical/minifs",draft:!1,tags:[],version:"2.5",frontMatter:{id:"minifs",title:"MINIFS",sidebar_label:"MINIFS"}},g={},N=[],f={toc:N};function b(t){var e,n=t,{components:r}=n,m=((t,e)=>{var n={};for(var a in t)p.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&o)for(var a of o(t))e.indexOf(a)<0&&u.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=c(c({},f),m),l(e,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Returns the minimum value of all cells which meet multiple criteria."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("p",null,"=MINIFS(MinRange, CriterionRange1, Criterion1, ","[","CriterionRange2,...","]",", ","[","Criterion2,...","]",")"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"MinRange"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Cell-range to determine minimum value of.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"CriterionRange1"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"The cell-range which is checked against the criterion.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Criterion1"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"The criterion each cell of CriterionRange1 has to fulfill.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"CriterionRange2,... (optional)"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Additional cell-range which is checked against next criterion.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Criterion2,... (optional)"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Additional criterion each cell of CriterionRange2 has to fulfill.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return")),(0,a.kt)("p",null,"The minimum of all cell values which meet all specified criteria."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"A"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"B"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"C"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"D"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"1"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"89"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"1"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"a"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"2"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"93"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"2"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"b"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"3"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"96"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"2"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"a"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"4"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"85"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"3"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"b"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"5"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"91"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"1"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"b"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"6"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"88"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"1"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"a"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"6")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Formula"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Result"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Comment"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("pre",null,(0,a.kt)("code",null,"${formula}"))),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"88"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Minimum value of cells which have 1 in their B-column.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("pre",null,(0,a.kt)("code",null,"${formula}"))),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"85"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),'Minimum value of all cells which have "b" in their C-column and its D-column value is greater or equal 2.')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("pre",null,(0,a.kt)("code",null,"${formula}"))),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"0"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"No cell fulfills given criterion.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("pre",null,(0,a.kt)("code",null,"${formula}"))),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("span",{class:"red"},"#VALUE!")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"MinRange and CriteriaRange have different height and/or with.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Function"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Result"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Comment")))))}b.isMDXComponent=!0}}]);