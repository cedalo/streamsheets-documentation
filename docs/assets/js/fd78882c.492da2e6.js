(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[57893],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,E=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(E,u(u({ref:t},c),{},{components:n})):r.createElement(E,u({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var l=2;l<o;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43535:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return i},toc:function(){return s},default:function(){return c}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),u={id:"getexecutestep",title:"GETEXECUTESTEP",sidebar_label:"GETEXECUTESTEP"},i={unversionedId:"functions/streamsheet/getexecutestep",id:"version-2.3/functions/streamsheet/getexecutestep",isDocsHomePage:!1,title:"GETEXECUTESTEP",description:"Returns the number of repetitions of the execute function.",source:"@site/streamsheets_versioned_docs/version-2.3/functions/streamsheet/getexecutestep.md",sourceDirName:"functions/streamsheet",slug:"/functions/streamsheet/getexecutestep",permalink:"/streamsheets/2.3/functions/streamsheet/getexecutestep",version:"2.3",sidebar_label:"GETEXECUTESTEP",frontMatter:{id:"getexecutestep",title:"GETEXECUTESTEP",sidebar_label:"GETEXECUTESTEP"},sidebar:"version-2.3/someSidebar",previous:{title:"GETCYCLETIME",permalink:"/streamsheets/2.3/functions/streamsheet/getcycletime"},next:{title:"GETMACHINESTEP",permalink:"/streamsheets/2.3/functions/streamsheet/getmachinestep"}},s=[],l={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Returns the number of repetitions of the execute function."),(0,o.kt)("p",null,"EXECUTE triggers the recalculation of another Streamsheet. With the\nrepeat Parameter you can set the number of repetitions. If larger than 1\n(Default), the execute function will be executed multiple times."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Syntax")),(0,o.kt)("p",null,"=GETEXECUTESTEP()"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("p",null,"None."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Return Value")),(0,o.kt)("p",null,"Current repetition step of the execute function."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Function"),(0,o.kt)("th",{parentName:"tr",align:null},"Result"),(0,o.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"=GETEXECUTESTEP()"),(0,o.kt)("td",{parentName:"tr",align:null},"3"),(0,o.kt)("td",{parentName:"tr",align:null},'=EXECUTE("S2",3)')))))}c.isMDXComponent=!0}}]);