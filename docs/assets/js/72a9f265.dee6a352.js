"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[87883],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},54588:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>d,default:()=>h,frontMatter:()=>m,metadata:()=>f,toc:()=>b});var n=r(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&c(e,r,t[r]);return e};const m={id:"overview",title:"MQTT Control API",sidebar_label:"MQTT API Overview"},d=void 0,f={unversionedId:"api/overview",id:"version-2.6/api/overview",title:"MQTT Control API",description:"What is a CONTROL API",source:"@site/mosquitto_versioned_docs/version-2.6/api/overview.md",sourceDirName:"api",slug:"/api/overview",permalink:"/mosquitto/2.6/api/overview",draft:!1,tags:[],version:"2.6",frontMatter:{id:"overview",title:"MQTT Control API",sidebar_label:"MQTT API Overview"},sidebar:"someSidebar",previous:{title:"High Availability",permalink:"/mosquitto/2.6/broker/mosquitto-high-availability"},next:{title:"MMC Rest APIs",permalink:"/mosquitto/2.6/api/restapis/"}},v={},b=[{value:"What is a CONTROL API",id:"what-is-a-control-api",level:2},{value:"AsyncAPI Specifications",id:"asyncapi-specifications",level:2}],y={toc:b};function h(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},y),c),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h2",u({},{id:"what-is-a-control-api"}),"What is a CONTROL API"),(0,n.kt)("p",null,"The broker and several plugins provide so-called control APIs. These APIs are implemented via\nspecific MQTT topics, in a request-response message-workflow."),(0,n.kt)("p",null,"The broker for example itself provides a ",(0,n.kt)("inlineCode",{parentName:"p"},"$CONTROL/broker/v1")," topic, where a client can publish\nit's request to."),(0,n.kt)("admonition",u({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"The broker control API must be enabled explicitly, setting ",(0,n.kt)("inlineCode",{parentName:"p"},"enable_control_api true")," in the broker\nconfiguration.")),(0,n.kt)("p",null,"A requested contains a list of ",(0,n.kt)("inlineCode",{parentName:"p"},"commands")," and each ",(0,n.kt)("inlineCode",{parentName:"p"},"command")," item can have a field\nnamed ",(0,n.kt)("inlineCode",{parentName:"p"},"correlationData")," which will be included in the broker response message. A response messages\nwill be published on the topic ",(0,n.kt)("inlineCode",{parentName:"p"},"$CONTROL/broker/v1/response"),"."),(0,n.kt)("p",null,"Every plugin has it's own request/response topic and some commands require additional request\nparameters. The detailed information about these topics and parameters can be found in the following\nsub-pages."),(0,n.kt)("h2",u({},{id:"asyncapi-specifications"}),"AsyncAPI Specifications"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"pathname:///asyncapi/old/broker"}),"Broker")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"pathname:///asyncapi/old/cert-management"}),"Certificate Management")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"pathname:///asyncapi/old/client-control"}),"Client Control")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"pathname:///asyncapi/old/client-inspect"}),"Client Inspection"))))}h.isMDXComponent=!0}}]);