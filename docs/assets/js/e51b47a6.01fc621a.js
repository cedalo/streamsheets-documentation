"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[77090],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,y=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(y,s(s({ref:t},u),{},{components:r})):n.createElement(y,s({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},53738:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>f,default:()=>O,frontMatter:()=>d,metadata:()=>y,toc:()=>h});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&u(e,r,t[r]);return e};const d={id:"jsonrange",title:"JSON Range",sidebar_label:"JSON Range"},f=void 0,y={unversionedId:"guides/sheets/jsonrange",id:"version-3.0/guides/sheets/jsonrange",title:"JSON Range",description:"Streamsheets use the JSON format to transfer and",source:"@site/streamsheets_versioned_docs/version-3.0/guides/sheets/jsonrange.md",sourceDirName:"guides/sheets",slug:"/guides/sheets/jsonrange",permalink:"/streamsheets/guides/sheets/jsonrange",draft:!1,tags:[],version:"3.0",frontMatter:{id:"jsonrange",title:"JSON Range",sidebar_label:"JSON Range"},sidebar:"someSidebar",previous:{title:"Inbox",permalink:"/streamsheets/guides/sheets/inbox"},next:{title:"Loop",permalink:"/streamsheets/guides/sheets/loop"}},m={},h=[],g={toc:h};function O(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},g),u),o(t,s({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Streamsheets use the JSON format to transfer and\nprocess data. Creating a JSON-Range in a Streamsheet helps you easily structure your data keys in a hierarchical order. This is needed when\nyou are about to transmit data and need it structured in a certain way.\nIn a Streamsheet, this is possible by writing all your key-value pairs\nbelow each other. After (or before) you are done, select all cells and right-click. Choose \u201cDefine JSON-Range\u201d at the bottom of the menu. "),(0,n.kt)("p",null,"By default, a created JSON Range is always flat. You can start structuring your data using TAB and Shift+TAB to change the hierarchy of a key-value pair. "),(0,n.kt)("iframe",{title:"vimeo-player",src:"https://player.vimeo.com/video/759911252?h=1d489e2240",width:"640",height:"440",frameborder:"0",allowfullscreen:!0}),(0,n.kt)("p",null,"You can now use a JSON Range in functions to send structured data. Use, e.g., MQTT.PUBLISH() and use the created JSON Range as your payload.\nAlso, check out the function JSON(). With it, you can create a JSON and also display it as a string. "),(0,n.kt)("p",null,"A JSON Range is automatically created, if you copy and paste a valid JSON into a cell. Copy the following to try it out."),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{}),'{\n   "InterestingData1":12,\n   "InterestingData2":15,\n   "MoreData":{\n      "DatafromA":17,\n      "DatafromB":1234,\n      "DatafromC":625,\n      "DatafromD":892\n   }\n}\n')),(0,n.kt)("p",null,"Use the JSON Range not only to display hierarchical order. Many times the JSON format is needed to interact with APIs or\nother endpoints.\nThe JSON Range allows you to create data in a visual pleasing way and still being able to send JSON data. The same\nvisual representation as in the JSON Range is also used in the Inbox for incoming messages."))}O.isMDXComponent=!0}}]);