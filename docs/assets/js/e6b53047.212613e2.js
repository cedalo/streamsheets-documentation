"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[98114],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},50341:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>d,default:()=>b,frontMatter:()=>m,metadata:()=>f,toc:()=>h});var r=t(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,c=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&u(e,t,n[t]);if(i)for(var t of i(n))p.call(n,t)&&u(e,t,n[t]);return e};const m={id:"mc-plugins",title:"Plugins",sidebar_label:"Plugins"},d=void 0,f={unversionedId:"mc-plugins",id:"version-2.4/mc-plugins",title:"Plugins",description:"Several plugins are currently available:",source:"@site/management-center_versioned_docs/version-2.4/plugins.md",sourceDirName:".",slug:"/mc-plugins",permalink:"/management-center/2.4/mc-plugins",draft:!1,tags:[],version:"2.4",frontMatter:{id:"mc-plugins",title:"Plugins",sidebar_label:"Plugins"},sidebar:"someSidebar",previous:{title:"Streamsheets",permalink:"/management-center/2.4/mc-streamsheets"},next:{title:"Streams",permalink:"/management-center/2.4/mc-streams"}},g={},h=[{value:"Custom Themes",id:"custom-themes",level:2},{value:"REST API",id:"rest-api",level:2},{value:"Login",id:"login",level:3},{value:"Commands",id:"commands",level:3},{value:"Multiple Broker Connections",id:"multiple-broker-connections",level:2}],k={toc:h};function b(e){var n,a=e,{components:u}=a,m=((e,n)=>{var t={};for(var r in e)s.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&i)for(var r of i(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t})(a,["components"]);return(0,r.kt)("wrapper",(n=c(c({},k),m),o(n,l({components:u,mdxType:"MDXLayout"}))),(0,r.kt)("admonition",c({},{title:"premium feature",type:"info"})),(0,r.kt)("p",null,"Several plugins are currently available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"#custom-themes"}),"Custom Themes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"#rest-api"}),"REST API"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"#login"}),"Login")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"#commands"}),"Commands")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"#multiple-broker-connections"}),"Multiple Broker Connections"))),(0,r.kt)("p",null,'Changing the default configuration is possible within the config file of the management center. Open your installer folder and open the sub folders "management-center" and "config" to find the "config.json" file. '),(0,r.kt)("p",null,"There are four categories within the file:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"connections"),(0,r.kt)("li",{parentName:"ul"},"tools"),(0,r.kt)("li",{parentName:"ul"},"plugins"),(0,r.kt)("li",{parentName:"ul"},"themes")),(0,r.kt)("p",null,'Plugins can be turned off and on in the Plugins section of the "config.json" file.'),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),'"plugins": [\n        {\n            "name": "connections-rest-api"\n        },\n        {\n            "name": "custom-themes"\n        },\n        {\n            "name": "multiple-connections"\n        },\n        {\n            "name": "system-status-rest-api"\n        },\n        {\n            "name": "topictree-rest-api"\n        } ] \n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"plugins in the config file")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:t(39303).Z,width:"2566",height:"1540"}),"\n",(0,r.kt)("em",{parentName:"p"},"overview of the plugins in the mmc")),(0,r.kt)("h2",c({},{id:"custom-themes"}),"Custom Themes"),(0,r.kt)("p",null,'With this plugin you can define a custom theme for the Management Center, including a custom logo.\nYou find the settings for your themes in the "config.json" file under "themes".'),(0,r.kt)("p",null,"It looks a little like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),' "themes": [\n        {\n            "id": "custom",\n            "name": "Cedalo AG",\n            "light": {\n                "logo": { }}}] \n')),(0,r.kt)("p",null,"Exchange current wordings, logos, colors by replacing the default values.\nThe image files for the logo are encoded in base64."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABL4.."')),(0,r.kt)("p",null," An easy way to encode your own images is via ",(0,r.kt)("a",c({parentName:"p"},{href:"https://www.base64-image.de/"}),"base64 image"),"."),(0,r.kt)("h2",c({},{id:"rest-api"}),"REST API"),(0,r.kt)("p",null,"With this plugin you can access several components of the Management Center via REST API, e.g., the topic tree information."),(0,r.kt)("h3",c({},{id:"login"}),"Login"),(0,r.kt)("p",null,"First you will have to log in."),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"POST {base-url}/auth\n")),(0,r.kt)("p",null,"With your body being:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),' {\n    "username": "cedalo",\n    "password": "password"\n}\n')),(0,r.kt)("p",null,"To logout use:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"GET {base-url}/logout\n")),(0,r.kt)("h3",c({},{id:"commands"}),"Commands"),(0,r.kt)("p",null,"Topic tree information:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{})," GET {base-url}/api/system/topictree \n")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"DELETE {base-url}/api/system/topictree \n")),(0,r.kt)("p",null,"Broker Status:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"GET {base-url}/api/connections \n")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"GET {base-url}/api/system/status \n")),(0,r.kt)("h2",c({},{id:"multiple-broker-connections"}),"Multiple Broker Connections"),(0,r.kt)("p",null,'With this plugin you can connect multiple instances of Eclipse Mosquitto to the Management Center.\nYou find the set connections in the "config.json" file under "connections".'),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),'"connections": [\n        {\n            "id": "mosquitto-2-preview-1",\n            "name": "Mosquitto 2.0 Instance 1",\n            "url": "mqtt://mosquitto:1883",\n            "credentials": {\n                "username": "cedalo",\n                "password": "password"\n            }\n        },\n        {\n            "id": "mosquitto-2-preview-2",\n            "name": "Mosquitto 2.0 Instance 2",\n            "url": "mqtt://mosquitto2:1883",\n            "credentials": {\n                "username": "cedalo",\n                "password": "password"\n            }\n        }   \n        ]\n')),(0,r.kt)("p",null,"Change the default setup or add further connections to your management center.\nThese will be accessible over a drop-down menu in the UI."))}b.isMDXComponent=!0},39303:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/plugins-a9627227eb1b578dc24de6f347de37e9.png"}}]);