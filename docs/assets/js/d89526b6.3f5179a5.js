"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[96526],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5401:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>d,default:()=>b,frontMatter:()=>m,metadata:()=>y,toc:()=>h});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&c(e,r,t[r]);return e};const m={},d="Installing Raspian",y={unversionedId:"installation/community-edition/installing-raspian/index",id:"version-2.3/installation/community-edition/installing-raspian/index",title:"Installing Raspian",description:"Raspian is the official operating system for the Raspberry Pi. You will",source:"@site/streamsheets_versioned_docs/version-2.3/installation/community-edition/installing-raspian/index.md",sourceDirName:"installation/community-edition/installing-raspian",slug:"/installation/community-edition/installing-raspian/",permalink:"/streamsheets/2.3/installation/community-edition/installing-raspian/",draft:!1,tags:[],version:"2.3",frontMatter:{}},f={},h=[{value:"Connect to your Raspberry Pi over the network",id:"connect-to-your-raspberry-pi-over-the-network",level:2}],w={toc:h};function b(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},w),c),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"installing-raspian"}),"Installing Raspian"),(0,n.kt)("p",null,"Raspian is the official operating system for the Raspberry Pi. You will\nneed a microSD Card and a computer with a SD card reader to install the\nimage."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Visit ",(0,n.kt)("a",u({parentName:"li"},{href:"https://www.raspberrypi.org/downloads/raspbian/"}),"https://www.raspberrypi.org/downloads/raspbian/")," and download\na Raspian image of your choice. (Desktop or light version work both)"),(0,n.kt)("li",{parentName:"ol"},"Install an image writing software on your compouter (for example\netcher: ",(0,n.kt)("a",u({parentName:"li"},{href:"https://www.balena.io/etcher/"}),"https://www.balena.io/etcher/"),")"),(0,n.kt)("li",{parentName:"ol"},"Insert a microSD Card in your Pi"),(0,n.kt)("li",{parentName:"ol"},"Run your image writing software, select the downloaded image and\nyour microSD Card and click \u201cFlash\u201d"),(0,n.kt)("li",{parentName:"ol"},"When its finished eject the microSD Card, insert it in your Pi and\nplug in the power supply"),(0,n.kt)("li",{parentName:"ol"},"Follow the steps to setup your Pi. You are now a proud owner of a\nfully functional Raspberry Pi!!")),(0,n.kt)("h2",u({},{id:"connect-to-your-raspberry-pi-over-the-network"}),"Connect to your Raspberry Pi over the network"),(0,n.kt)("p",null,"You don\xb4t necessarily have to control your Pi with a keyboard, mouse and\nmonitor. It is possible to access it from another device over the local\nnetwork."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Plug your microSD Card with a working Raspian operating system into\nyour computer and open it in your file manager."),(0,n.kt)("li",{parentName:"ol"},'Add a file named "ssh" and make sure it has no file extension.'),(0,n.kt)("li",{parentName:"ol"},"Start your Raspberry Pi with the customized microSD card image and\nmake sure it is connected to your network."),(0,n.kt)("li",{parentName:"ol"},"Open a shell on a computer in the same network and type in\n",(0,n.kt)("inlineCode",{parentName:"li"},"ssh <username>@<hostname>"),". The standard version of this command\nwould be ",(0,n.kt)("inlineCode",{parentName:"li"},"ssh pi@raspberrypi")),(0,n.kt)("li",{parentName:"ol"},'Enter the password, which is "raspberry" by default.')),(0,n.kt)("p",null,"Now you are able to remote control your Raspberry Pi."))}b.isMDXComponent=!0}}]);