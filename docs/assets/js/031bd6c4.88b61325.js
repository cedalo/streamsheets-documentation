"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[6011],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=s(n),d=a,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(f,i(i({ref:e},u),{},{components:n})):r.createElement(f,i({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},62610:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>k,contentTitle:()=>d,default:()=>y,frontMatter:()=>c,metadata:()=>f,toc:()=>b});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(t,e,n)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,m=(t,e)=>{for(var n in e||(e={}))p.call(e,n)&&u(t,n,e[n]);if(o)for(var n of o(e))s.call(e,n)&&u(t,n,e[n]);return t};const c={id:"axis",title:"AXIS",sidebar_label:"AXIS"},d=void 0,f={unversionedId:"functionss/chart/axis",id:"version-2.5/functionss/chart/axis",title:"AXIS",description:"Define axis settings of a chart axis.",source:"@site/streamsheets_versioned_docs/version-2.5/functionss/chart/axis.md",sourceDirName:"functionss/chart",slug:"/functionss/chart/axis",permalink:"/streamsheets/2.5/functionss/chart/axis",draft:!1,tags:[],version:"2.5",frontMatter:{id:"axis",title:"AXIS",sidebar_label:"AXIS"}},k={},b=[],g={toc:b};function y(t){var e,n=t,{components:a}=n,u=((t,e)=>{var n={};for(var r in t)p.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&o)for(var r of o(t))e.indexOf(r)<0&&s.call(t,r)&&(n[r]=t[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(e=m(m({},g),u),l(e,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Define axis settings of a chart axis."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("p",null,"=AXIS(Min, Max, ","[","Step","]",", ","[","Time Step","]",", ","[","ZoomMin","]",", ","[","ZoomMax","]",")"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Min"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Minimum axis Value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Max"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Maximum axis value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Step (optional)"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Step for axis ticks or grid lines. For time axis the step will increment the time step.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Time Step (optional)"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Step type for time units. Allowed values are 'year', 'quarter', 'month', 'day', 'hour', 'minute', 'second' or 'millisecond'.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"ZoomMin (optional)"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Axis minimum to use, if chart is zoomed. This value will be filled automatically, if axis is zoomed using the mouse.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"ZoomMax (optional)"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Axis maximum to use, if chart is zoomed. This value will be filled automatically, if axis is zoomed using the mouse.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return")),(0,r.kt)("p",null,"TRUE or an ",(0,r.kt)("a",m({parentName:"p"},{href:"../../other#error-codes"}),"Error Code")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hint")),(0,r.kt)("p",null,"This function is shown in the edit bar, if an axis is selected. It should not be used in a cell"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Formula"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Result"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("pre",null,(0,r.kt)("code",null,"${formula}"))),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"TRUE"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Scales the axis from 0 to 200 using a step of 50 units.")))))}y.isMDXComponent=!0}}]);