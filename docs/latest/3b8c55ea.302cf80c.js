(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),l=n(7),i=(n(0),n(91)),o={id:"installation",title:"Installation",sidebar_label:"Installation"},r={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"The Cedalo Platform is available for Windows, Linux and macOS. In addition it also can be installed on a Raspberry Pi.",source:"@site/docs/installation.md",slug:"/installation",permalink:"/latest/docs/installation",version:"current",sidebar_label:"Installation",sidebar:"someSidebar",previous:{title:"Cedalo Platform Documentation",permalink:"/latest/docs/"},next:{title:"Eclipse Mosquitto",permalink:"/latest/docs/broker/broker-overview"}},c=[{value:"Installation via Docker",id:"installation-via-docker",children:[{value:"Installation command",id:"installation-command",children:[]},{value:"Windows",id:"windows",children:[]},{value:"Linux",id:"linux",children:[]},{value:"macOS",id:"macos",children:[]},{value:"Raspberry Pi",id:"raspberry-pi",children:[]}]},{value:"Installation via npx",id:"installation-via-npx",children:[]},{value:"Application ports",id:"application-ports",children:[]}],s={rightToc:c};function b(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Cedalo Platform is available for Windows, Linux and macOS. In addition it also can be installed on a Raspberry Pi."),Object(i.b)("h2",{id:"installation-via-docker"},"Installation via Docker"),Object(i.b)("p",null,"The easiest way to install ",Object(i.b)("strong",{parentName:"p"},"any")," of Cedalos Technologies individually, as a bundle or the whole platform is to use the official Docker installer image ",Object(i.b)("inlineCode",{parentName:"p"},"cedalo/installer"),", which is available at ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://hub.docker.com/repository/docker/cedalo/installer"}),"Docker Hub"),"."),Object(i.b)("p",null,"The installer will guide you through the installation process and will allow you to select which components you want to install: Eclipse Mosquitto, Eclipse Streamsheets, the Management Center or combinations of it."),Object(i.b)("h3",{id:"installation-command"},"Installation command"),Object(i.b)("p",null,"The general structure of the installation command is the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"docker run -it -v <INSTALLATION_DIR>:/cedalo cedalo/installer:<VERSION>-<OS>\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<INSTALLATION_DIR>"),": the installation directory"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<VERSION>"),": the version of the installer (e.g., ",Object(i.b)("inlineCode",{parentName:"li"},"2.0")," for the 2.0 version)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<OS>"),": the operating system (e.g., ",Object(i.b)("inlineCode",{parentName:"li"},"win"),", ",Object(i.b)("inlineCode",{parentName:"li"},"linux"),", ",Object(i.b)("inlineCode",{parentName:"li"},"macos"),")")),Object(i.b)("h3",{id:"windows"},"Windows"),Object(i.b)("p",null,"For an installation under Windows use the installer image tagged with ",Object(i.b)("inlineCode",{parentName:"p"},"latest-win"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"docker run -it -v C:\\cedalo_platform:/cedalo cedalo/installer:2.0-win\n")),Object(i.b)("p",null,"In the following dialog you can select which components should be installed:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"? Select what to install \u203a - Space to select. Return to submit\n\u25c9   Management Center for Eclipse Mosquitto\n\u25c9   Eclipse Streamsheets\n\u25c9   Eclipse Mosquitto 2.0\n\u25ef   Eclipse Mosquitto 1.6\n")),Object(i.b)("p",null,"To start everything you installed, just use the ",Object(i.b)("inlineCode",{parentName:"p"},"start.bat")," file."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"cd C:\\cedalo_platform\nstart.bat\n")),Object(i.b)("h3",{id:"linux"},"Linux"),Object(i.b)("p",null,"For an installation under Linux use the installer image tagged with ",Object(i.b)("inlineCode",{parentName:"p"},"2.0-linux"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"docker run -it -v ~/cedalo_platform:/cedalo cedalo/installer:2.0-linux\n")),Object(i.b)("p",null,"In the following dialog you can select which components should be installed:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"? Select what to install \u203a - Space to select. Return to submit\n\u25c9   Management Center for Eclipse Mosquitto\n\u25c9   Eclipse Streamsheets\n\u25c9   Eclipse Mosquitto 2.0\n\u25ef   Eclipse Mosquitto 1.6\n")),Object(i.b)("p",null,"To start everything you installed, just use the ",Object(i.b)("inlineCode",{parentName:"p"},"start.sh")," file."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"cd ~/cedalo_platform\nsh start.sh\n")),Object(i.b)("h3",{id:"macos"},"macOS"),Object(i.b)("p",null,"For an installation under macOS use the installer image tagged with ",Object(i.b)("inlineCode",{parentName:"p"},"2.0-macos"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"docker run -it -v ~/cedalo_platform:/cedalo cedalo/installer:2.0-macos\n")),Object(i.b)("p",null,"In the following dialog you can select which components should be installed:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"? Select what to install \u203a - Space to select. Return to submit\n\u25c9   Management Center for Eclipse Mosquitto\n\u25c9   Eclipse Streamsheets\n\u25c9   Eclipse Mosquitto 2.0\n\u25ef   Eclipse Mosquitto 1.6\n")),Object(i.b)("p",null,"To start everything you installed, just use the ",Object(i.b)("inlineCode",{parentName:"p"},"start.sh")," file."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"cd ~/cedalo_platform\nsh start.sh\n")),Object(i.b)("h3",{id:"raspberry-pi"},"Raspberry Pi"),Object(i.b)("p",null,"Coming soon"),Object(i.b)("h2",{id:"installation-via-npx"},"Installation via npx"),Object(i.b)("p",null,"Coming soon"),Object(i.b)("h2",{id:"application-ports"},"Application ports"),Object(i.b)("p",null,"When everything is installed and started correctly the applications should be available under the following ports:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Eclipse Mosquitto: 1883"),Object(i.b)("li",{parentName:"ul"},"Eclipse Streamsheets: 8081"),Object(i.b)("li",{parentName:"ul"},"Management Center: 8088")))}b.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),l=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=l.a.createContext({}),b=function(e){var t=l.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=b(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return n?l.a.createElement(m,r(r({ref:t},s),{},{components:n})):l.a.createElement(m,r({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var s=2;s<i;s++)o[s]=n[s];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);