(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[67793],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return p},kt:function(){return c}});var i=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,i,n=function(t,e){if(null==t)return{};var r,i,n={},o=Object.keys(t);for(i=0;i<o.length;i++)r=o[i],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=i.createContext({}),u=function(t){var e=i.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},p=function(t){var e=u(t.components);return i.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=u(r),c=n,b=m["".concat(l,".").concat(c)]||m[c]||d[c]||o;return r?i.createElement(b,a(a({ref:e},p),{},{components:r})):i.createElement(b,a({ref:e},p))}));function c(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:n,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},21057:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var i=r(22122),n=r(19756),o=(r(67294),r(3905)),a={id:"broker-download",title:"Download",sidebar_label:"Download"},s={unversionedId:"broker-download",id:"broker-download",isDocsHomePage:!1,title:"Download",description:"Source",source:"@site/mosquitto/download.md",sourceDirName:".",slug:"/broker-download",permalink:"/mosquitto/2.0/broker-download",version:"current",sidebar_label:"Download",frontMatter:{id:"broker-download",title:"Download",sidebar_label:"Download"},sidebar:"someSidebar",previous:{title:"MQTT man page",permalink:"/mosquitto/2.0/manpage-mqtt"},next:{title:"Release Notes",permalink:"/mosquitto/2.0/mosquitto-releasenotes"}},l=[{value:"Source",id:"source",children:[]},{value:"Binary Installation",id:"binary-installation",children:[{value:"Windows",id:"windows",children:[]},{value:"Mac",id:"mac",children:[]},{value:"Linux distributions with snap support",id:"linux-distributions-with-snap-support",children:[]},{value:"Debian",id:"debian",children:[]},{value:"Raspberry Pi",id:"raspberry-pi",children:[]},{value:"Ubuntu",id:"ubuntu",children:[]}]},{value:"System Requirements",id:"system-requirements",children:[]}],u={toc:l};function p(t){var e=t.components,r=(0,n.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"source"},"Source"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://mosquitto.org/files/source/mosquitto-2.0.0.tar.gz"},"mosquitto-2.0.0.tar.gz")," (319kB) (",(0,o.kt)("a",{parentName:"li",href:"https://mosquitto.org/files/source/mosquitto-2.0.0.tar.gz.asc"},"GPG signature"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/eclipse/mosquitto"},"Git source code repository")," (github.com)")),(0,o.kt)("p",null,"Older downloads are available at ",(0,o.kt)("a",{parentName:"p",href:"https://mosquitto.org/files/"},"https://mosquitto.org/files/")),(0,o.kt)("h2",{id:"binary-installation"},"Binary Installation"),(0,o.kt)("p",null,"The binary packages listed below are supported by the Mosquitto project. In many cases Mosquitto is also available directly from official Linux/BSD distributions."),(0,o.kt)("h3",{id:"windows"},"Windows"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://mosquitto.org/files/binary/win64/mosquitto-2.0.0-install-windows-x64.exe"},"mosquitto-2.0.0-install-windows-x64.exe")," (~1.4 MB) (64-bit build, Windows Vista and up, built with Visual Studio Community 2019)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://mosquitto.org/files/binary/win32/mosquitto-2.0.0-install-windows-x86.exe"},"mosquitto-2.0.0-install-windows-x32.exe")," (~1.4 MB) (32-bit build, Windows Vista and up, built with Visual Studio Community 2019)")),(0,o.kt)("p",null,"Older installers can be found at ",(0,o.kt)("a",{parentName:"p",href:"https://mosquitto.org/files/binary/"},"https://mosquitto.org/files/binary/"),"."),(0,o.kt)("p",null,"See also README-windows.md after installing.  "),(0,o.kt)("h3",{id:"mac"},"Mac"),(0,o.kt)("p",null,"Mosquitto can be installed from the homebrew project. See ",(0,o.kt)("a",{parentName:"p",href:"https://brew.sh/"},"brew.sh")," and then use ",(0,o.kt)("inlineCode",{parentName:"p"},"brew install mosquitto")),(0,o.kt)("h3",{id:"linux-distributions-with-snap-support"},"Linux distributions with snap support"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"snap install mosquitto"))),(0,o.kt)("h3",{id:"debian"},"Debian"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Mosquitto is now in Debian proper. There will be a short delay between a new release and it appearing in Debian as part of the normal Debian procedures."),(0,o.kt)("li",{parentName:"ul"},"There are also Debian repositories provided by the mosquitto project, as described at ",(0,o.kt)("a",{parentName:"li",href:"https://mosquitto.org/2013/01/mosquitto-debian-repository"},"https://mosquitto.org/2013/01/mosquitto-debian-repository"))),(0,o.kt)("h3",{id:"raspberry-pi"},"Raspberry Pi"),(0,o.kt)("p",null,"Mosquitto is available through the main repository."),(0,o.kt)("p",null,"There are also Debian repositories provided by the mosquitto project, as described at ",(0,o.kt)("a",{parentName:"p",href:"https://mosquitto.org/2013/01/mosquitto-debian-repository/"},"https://mosquitto.org/2013/01/mosquitto-debian-repository/")),(0,o.kt)("h3",{id:"ubuntu"},"Ubuntu"),(0,o.kt)("p",null,"Mosquitto is available in the Ubuntu repositories so you can install as with any other package. If you are on an earlier version of Ubuntu or want a more recent version of mosquitto, add the ",(0,o.kt)("a",{parentName:"p",href:"https://launchpad.net/%7Emosquitto-dev/+archive/mosquitto-ppa/"},"mosquitto-dev PPA")," to your repositories list - see the link for details. mosquitto can then be installed from your package manager."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sudo apt-add-repository ppa:mosquitto-dev/mosquitto-ppa")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sudo apt-get update"))),(0,o.kt)("h2",{id:"system-requirements"},"System Requirements"),(0,o.kt)("p",null,"Minimum tested specs are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"32-bit 600MHz ARM CPU"),(0,o.kt)("li",{parentName:"ul"},"128 MB RAM"),(0,o.kt)("li",{parentName:"ul"},"running embedded Linux.")))}p.isMDXComponent=!0}}]);