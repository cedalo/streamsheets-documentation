"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[18950],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var o=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),c=i,b=m["".concat(s,".").concat(c)]||m[c]||d[c]||n;return r?o.createElement(b,a(a({ref:t},p),{},{components:r})):o.createElement(b,a({ref:t},p))}));function c(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,a=new Array(n);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<n;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13952:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>c,default:()=>k,frontMatter:()=>m,metadata:()=>b,toc:()=>h});var o=r(3905),i=Object.defineProperty,n=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&p(e,r,t[r]);return e};const m={id:"broker-download",title:"Download",sidebar_label:"Download"},c=void 0,b={unversionedId:"broker-download",id:"version-2.0/broker-download",title:"Download",description:"Source",source:"@site/mosquitto_versioned_docs/version-2.0/download.md",sourceDirName:".",slug:"/broker-download",permalink:"/mosquitto/2.0/broker-download",draft:!1,tags:[],version:"2.0",frontMatter:{id:"broker-download",title:"Download",sidebar_label:"Download"},sidebar:"someSidebar",previous:{title:"MQTT",permalink:"/mosquitto/2.0/manpage-mqtt"},next:{title:"Release Notes",permalink:"/mosquitto/2.0/mosquitto-releasenotes"}},f={},h=[{value:"Source",id:"source",level:2},{value:"Binary Installation",id:"binary-installation",level:2},{value:"Windows",id:"windows",level:3},{value:"Mac",id:"mac",level:3},{value:"Linux distributions with snap support",id:"linux-distributions-with-snap-support",level:3},{value:"Debian",id:"debian",level:3},{value:"Raspberry Pi",id:"raspberry-pi",level:3},{value:"Ubuntu",id:"ubuntu",level:3},{value:"System Requirements",id:"system-requirements",level:2}],y={toc:h};function k(e){var t,r=e,{components:i}=r,p=((e,t)=>{var r={};for(var o in e)s.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&l)for(var o of l(e))t.indexOf(o)<0&&u.call(e,o)&&(r[o]=e[o]);return r})(r,["components"]);return(0,o.kt)("wrapper",(t=d(d({},y),p),n(t,a({components:i,mdxType:"MDXLayout"}))),(0,o.kt)("h2",d({},{id:"source"}),"Source"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"https://mosquitto.org/files/source/mosquitto-2.0.0.tar.gz"}),"mosquitto-2.0.0.tar.gz")," (319kB) (",(0,o.kt)("a",d({parentName:"li"},{href:"https://mosquitto.org/files/source/mosquitto-2.0.0.tar.gz.asc"}),"GPG signature"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"https://github.com/eclipse/mosquitto"}),"Git source code repository")," (github.com)")),(0,o.kt)("p",null,"Older downloads are available at ",(0,o.kt)("a",d({parentName:"p"},{href:"https://mosquitto.org/files/"}),"https://mosquitto.org/files/")),(0,o.kt)("h2",d({},{id:"binary-installation"}),"Binary Installation"),(0,o.kt)("p",null,"The binary packages listed below are supported by the Eclipse Mosquitto project. In many cases Mosquitto is also available directly from official Linux/BSD distributions."),(0,o.kt)("h3",d({},{id:"windows"}),"Windows"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"https://mosquitto.org/files/binary/win64/mosquitto-2.0.0-install-windows-x64.exe"}),"mosquitto-2.0.0-install-windows-x64.exe")," (~1.4 MB) (64-bit build, Windows Vista and up, built with Visual Studio Community 2019)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"https://mosquitto.org/files/binary/win32/mosquitto-2.0.0-install-windows-x86.exe"}),"mosquitto-2.0.0-install-windows-x32.exe")," (~1.4 MB) (32-bit build, Windows Vista and up, built with Visual Studio Community 2019)")),(0,o.kt)("p",null,"Older installers can be found at ",(0,o.kt)("a",d({parentName:"p"},{href:"https://mosquitto.org/files/binary/"}),"https://mosquitto.org/files/binary/"),"."),(0,o.kt)("p",null,"See also README-windows.md after installing.  "),(0,o.kt)("h3",d({},{id:"mac"}),"Mac"),(0,o.kt)("p",null,"Mosquitto can be installed from the homebrew project. See ",(0,o.kt)("a",d({parentName:"p"},{href:"https://brew.sh/"}),"brew.sh")," and then use ",(0,o.kt)("inlineCode",{parentName:"p"},"brew install mosquitto")),(0,o.kt)("h3",d({},{id:"linux-distributions-with-snap-support"}),"Linux distributions with snap support"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"snap install mosquitto"))),(0,o.kt)("h3",d({},{id:"debian"}),"Debian"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Mosquitto is now in Debian proper. There will be a short delay between a new release and it appearing in Debian as part of the normal Debian procedures."),(0,o.kt)("li",{parentName:"ul"},"There are also Debian repositories provided by the mosquitto project, as described at ",(0,o.kt)("a",d({parentName:"li"},{href:"https://mosquitto.org/2013/01/mosquitto-debian-repository"}),"https://mosquitto.org/2013/01/mosquitto-debian-repository"))),(0,o.kt)("h3",d({},{id:"raspberry-pi"}),"Raspberry Pi"),(0,o.kt)("p",null,"Mosquitto is available through the main repository."),(0,o.kt)("p",null,"There are also Debian repositories provided by the mosquitto project, as described at ",(0,o.kt)("a",d({parentName:"p"},{href:"https://mosquitto.org/2013/01/mosquitto-debian-repository/"}),"https://mosquitto.org/2013/01/mosquitto-debian-repository/")),(0,o.kt)("h3",d({},{id:"ubuntu"}),"Ubuntu"),(0,o.kt)("p",null,"Mosquitto is available in the Ubuntu repositories, so you can install as with any other package. If you are on an earlier version of Ubuntu or want a more recent version of mosquitto, add the ",(0,o.kt)("a",d({parentName:"p"},{href:"https://launchpad.net/%7Emosquitto-dev/+archive/mosquitto-ppa/"}),"mosquitto-dev PPA")," to your repositories list - see the link for details. mosquitto can then be installed from your package manager."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sudo apt-add-repository ppa:mosquitto-dev/mosquitto-ppa")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sudo apt-get update"))),(0,o.kt)("h2",d({},{id:"system-requirements"}),"System Requirements"),(0,o.kt)("p",null,"Minimum tested specs are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"32-bit 600MHz ARM CPU"),(0,o.kt)("li",{parentName:"ul"},"128 MB RAM"),(0,o.kt)("li",{parentName:"ul"},"running embedded Linux.")))}k.isMDXComponent=!0}}]);