"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[67339],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||c[f]||l;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},99689:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>f,default:()=>k,frontMatter:()=>m,metadata:()=>d,toc:()=>g});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&u(e,r,t[r]);return e};const m={id:"execute",title:"EXECUTE",sidebar_label:"EXECUTE"},f=void 0,d={unversionedId:"functions/streamsheet/execute",id:"version-2.4/functions/streamsheet/execute",title:"EXECUTE",description:"Triggers the recalculation of another Streamsheet. The executed Sheet",source:"@site/streamsheets_versioned_docs/version-2.4/functions/streamsheet/execute.md",sourceDirName:"functions/streamsheet",slug:"/functions/streamsheet/execute",permalink:"/streamsheets/2.4/functions/streamsheet/execute",draft:!1,tags:[],version:"2.4",frontMatter:{id:"execute",title:"EXECUTE",sidebar_label:"EXECUTE"},sidebar:"version-2.4/someSidebar",previous:{title:"EDGE.DETECT",permalink:"/streamsheets/2.4/functions/streamsheet/edgedetect"},next:{title:"FEEDINBOX",permalink:"/streamsheets/2.4/functions/streamsheet/feedinbox"}},h={},g=[],b={toc:g};function k(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},b),u),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Triggers the recalculation of another ",(0,n.kt)("inlineCode",{parentName:"p"},"Streamsheet"),'. The executed Sheet\nwill only be executed if Streamsheet settings of executed Sheet allow\nexecution. Calculate Streamsheet "On Execute".'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Syntax")),(0,n.kt)("p",null,"=EXECUTE(Streamsheet ","[",", Repeat, ",(0,n.kt)("inlineCode",{parentName:"p"},"JSON"),", Selector","]",")"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Streamsheet"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),'Name of Streamsheet to trigger. (Put the name of the Streamsheet in quotes e.g. "S1")')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Repeat"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Optional. Number of repetitions. If larger than 1 (Default), the execute function will be executed multiple times")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"JSON"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Optional. JSON to use as message data to process, when executing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Selector"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Optional. Selector to use when selecting a message from the inbox for processing.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Return Value")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"NOTE:")," if the execution of the triggered StreamSheet is stopped via\nthe RETURN function, its result is returned instead."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Function"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Comment"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),'=EXECUTE("S2")'),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"TRUE"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),'Triggers the calculation of a second Streamsheet, called "S2".')))))}k.isMDXComponent=!0}}]);