"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[31764],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||s;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29706:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),o=["components"],i={id:"getstep",title:"GETSTEP",sidebar_label:"GETSTEP"},l=void 0,p={unversionedId:"functions/streamsheet/getstep",id:"version-2.3/functions/streamsheet/getstep",title:"GETSTEP",description:"Returns the current Streamsheet step.",source:"@site/streamsheets_versioned_docs/version-2.3/functions/streamsheet/getstep.md",sourceDirName:"functions/streamsheet",slug:"/functions/streamsheet/getstep",permalink:"/streamsheets/2.3/functions/streamsheet/getstep",tags:[],version:"2.3",frontMatter:{id:"getstep",title:"GETSTEP",sidebar_label:"GETSTEP"},sidebar:"version-2.3/someSidebar",previous:{title:"GETMACHINESTEP",permalink:"/streamsheets/2.3/functions/streamsheet/getmachinestep"},next:{title:"INBOX",permalink:"/streamsheets/2.3/functions/streamsheet/inbox"}},c=[],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Returns the current Streamsheet step."),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"A Streamsheet step is increased only if the Streamsheet is processed,\nwhich is not necessarily the case on each App step."))),(0,s.kt)("p",null,"To get the steps for an App refer to getmachinestep and to get the\nsteps for Eclipse Streamsheets which are repeatedly triggered by execute refer\nto repeatindex."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("p",null,"=GETSTEP(","[","Streamsheet","]",")"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Arguments")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Streamsheet"),(0,s.kt)("td",{parentName:"tr",align:null},"Optional. Define the Streamsheet to retrieve step count from. If not specified affiliated Streamsheet is used.")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Return Value")),(0,s.kt)("p",null,"Current Streamsheet step."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Function"),(0,s.kt)("th",{parentName:"tr",align:null},"Result"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"=GETSTEP()"),(0,s.kt)("td",{parentName:"tr",align:null},"1")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},'=GETSTEP("S2")'),(0,s.kt)("td",{parentName:"tr",align:null},"1")))))}m.isMDXComponent=!0}}]);