(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[2082],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return p}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=r,h=u["".concat(l,".").concat(p)]||u[p]||d[p]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},43037:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o={id:"mc-overview",title:"Cedalo Management Center",sidebar_label:"Overview"},s={unversionedId:"mc-overview",id:"version-2.2/mc-overview",isDocsHomePage:!1,title:"Cedalo Management Center",description:"The Cedalo Management Center allows to easily manage instances of Eclipse Mosquitto, e.g., to manage the new dynamic security feature.",source:"@site/management-center_versioned_docs/version-2.2/overview.md",sourceDirName:".",slug:"/mc-overview",permalink:"/management-center/2.2/mc-overview",version:"2.2",sidebar_label:"Overview",frontMatter:{id:"mc-overview",title:"Cedalo Management Center",sidebar_label:"Overview"},sidebar:"version-2.2/someSidebar",previous:{title:"Installation",permalink:"/management-center/2.2/installation"},next:{title:"Dynamic Security",permalink:"/management-center/2.2/mc-dynamic-security"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Login",id:"login",children:[]},{value:"Dashboard",id:"dashboard",children:[{value:"Metrics",id:"metrics",children:[]},{value:"Broker information",id:"broker-information",children:[]},{value:"Clients",id:"clients",children:[]},{value:"Messages",id:"messages",children:[]}]},{value:"Toolbar",id:"toolbar",children:[{value:"Side Menu",id:"side-menu",children:[]},{value:"Select Broker Connection",id:"select-broker-connection",children:[]},{value:"View Modes",id:"view-modes",children:[]},{value:"Info Panel",id:"info-panel",children:[]},{value:"Help Guide",id:"help-guide",children:[]}]}],c={toc:l};function m(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Cedalo Management Center allows to easily manage instances of Eclipse Mosquitto, e.g., to manage the new ",(0,i.kt)("a",{parentName:"p",href:"mc-dynamic-security"},"dynamic security feature"),"."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,'The easiest and fastes way to install the "Cedalo Management Center" is to use "Cedalo Platform" installer. You are able to deselect any items you don\xb4t need in the installation process. '),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"installation"},"Install Cedalo Platform")),(0,i.kt)("p",null,"Open the following URL in your web browser to access the broker dashboard: ",(0,i.kt)("a",{href:"http://localhost:8088",rel:"nofollow",target:"_blank"},"http://localhost:8088")),(0,i.kt)("h2",{id:"login"},"Login"),(0,i.kt)("p",null,"The default login of the management center is set in the docker-compose.yml file. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Default Credentials:")," User: ",(0,i.kt)("inlineCode",{parentName:"p"},"cedalo")," Password: ",(0,i.kt)("inlineCode",{parentName:"p"},"mmcisawesome"),". "),(0,i.kt)("p",null,"Change the password in the docker-compose.yml file.\nFind and change this entry:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CEDALO_MC_USERNAME: cedalo\nCEDALO_MC_PASSWORD: mmcisawesome\n")),(0,i.kt)("p",null,"After a restart your new credentials will be applied. "),(0,i.kt)("h2",{id:"dashboard"},"Dashboard"),(0,i.kt)("p",null,"The dashboard view displays various metrics and meta information for the connected broker instance based on the ",(0,i.kt)("a",{parentName:"p",href:"https://mosquitto.org/man/mosquitto-8.html"},"system topics")," (see sections below for a detailed description)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(50735).Z})),(0,i.kt)("h3",{id:"metrics"},"Metrics"),(0,i.kt)("p",null,"The following metrics (i.e., system topics) are displayed on the dashboard:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Clients total"),": the total number of active and inactive clients currently connected and registered on the broker."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Subscriptions"),": the total number of subscriptions currently active on the broker."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"PUBLISH received"),": The total number of PUBLISH messages received since the broker started."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"PUBLISH sent"),": The total number of PUBLISH messages sent since the broker started."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Bytes received"),": The total number of bytes received since the broker started."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Bytes sent"),": The total number of bytes sent since the broker started."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total received"),": The total number of messages of any type received since the broker started."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total sent"),": The total number of messages of any type sent since the broker started.")),(0,i.kt)("h3",{id:"broker-information"},"Broker information"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Broker version: The id of the running broker version."),(0,i.kt)("li",{parentName:"ul"},"Uptime: The operational uptime of the broker in seconds.")),(0,i.kt)("h3",{id:"clients"},"Clients"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total clients"),": The total number of active and inactive clients currently connected and registered on the broker."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Active clients"),": The number of currently connected clients."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Connected clients"),": The number of currently connected clients.")),(0,i.kt)("h3",{id:"messages"},"Messages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Received messages"),": The total number of messages of any type received since the broker started."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Sent messages"),": The total number of messages of any type sent since the broker started."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Stored messages"),": The number of messages currently held in the message store. This includes retained messages and messages queued for durable clients.")),(0,i.kt)("h2",{id:"toolbar"},"Toolbar"),(0,i.kt)("p",null,"The top bar of the Managent Center serves as an access point for the side panel, the broker selection, a view mode switch, the info panel and a quick help guide. "),(0,i.kt)("h3",{id:"side-menu"},"Side Menu"),(0,i.kt)("p",null,"Open the side menu to access different areas and features of the Management Center.\nThe different access points are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#dashboard"},"System Status")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./mc-topic-tree"},"Topic Tree")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./mc-dynamic-security/#clients"},"Clients")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./mc-dynamic-security/#groups"},"Groups")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./mc-dynamic-security/#roles"},"Roles")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./mc-plugins"},"Plugins")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./mc-streamsheets"},"Eclipse Streamsheets")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./mc-streams"},"Streams")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./mc-connections"},"Connections"))),(0,i.kt)("h3",{id:"select-broker-connection"},"Select Broker Connection"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"premium feature")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"})),(0,i.kt)("p",null,"In general the Cedalo Management Center can be connected to any Eclipse Mosquitto broker."),(0,i.kt)("p",null,"It automatically connects to the broker hosted under:\n",(0,i.kt)("inlineCode",{parentName:"p"},"mqtt://localhost:1883"),"\nIf you have used the Cedalo Platform installation a Mosquitto Broker is already up an running. "),(0,i.kt)("p",null,"When you have the premium version of the Cedalo Management Center, you are able to set up multiple broker instances, which can be accessed via the broker connection dropdown. "),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In order to use the features provided by the Management Center it is required to use Eclipse Mosquitto 2.0. In principle the Management Center can be connected to older versions. However, then not all features will be available."))),(0,i.kt)("h4",{id:"setup-broker-connections"},"Setup broker connections"),(0,i.kt)("p",null,"Coming soon. "),(0,i.kt)("h3",{id:"view-modes"},"View Modes"),(0,i.kt)("p",null,"The Cedalo Management Center by default comes with two separate themes: a light theme and a dark theme. Click the icon to switch between modes. "),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The premium version of the Cedalo Management Center allows to specify a custom theme, including a custom logo. See the ",(0,i.kt)("a",{parentName:"p",href:"#custom-themes"},"custom themes section")," for more information."))),(0,i.kt)("h4",{id:"light-mode"},"Light Mode"),(0,i.kt)("p",null,"The following screenshot shows the light mode:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(98575).Z})),(0,i.kt)("h4",{id:"dark-mode"},"Dark Mode"),(0,i.kt)("p",null,"The following screenshot shows the dark mode:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(16009).Z})),(0,i.kt)("h4",{id:"custom-themes"},"Custom Themes"),(0,i.kt)("p",null,"tbd."),(0,i.kt)("h3",{id:"info-panel"},"Info Panel"),(0,i.kt)("p",null,"The Info Panel contains information about the current installation of the Management Center. Also license information is displayed here.\n",(0,i.kt)("img",{alt:"image",src:n(90029).Z})),(0,i.kt)("h3",{id:"help-guide"},"Help Guide"),(0,i.kt)("p",null,"If you ever find yourself lost in the Management Center, because you have not used it in a while, or it is your first time, try the guide. It is a click through help to quickly understand all features and submenus. Start it by clicking the icon on the top right of the toolbar."))}m.isMDXComponent=!0},90029:function(e,t,n){"use strict";t.Z=n.p+"assets/images/InfoPanel-9642b648f83c806cecabc61f659fe5ad.png"},50735:function(e,t,n){"use strict";t.Z=n.p+"assets/images/dashboard-28def32c2f2ae120bc98ec12f5627d4f.png"},16009:function(e,t,n){"use strict";t.Z=n.p+"assets/images/dashboard_dark-e3da3c8bad9234c210a9163f03c3d8ec.png"},98575:function(e,t,n){"use strict";t.Z=n.p+"assets/images/dashboard_light-28def32c2f2ae120bc98ec12f5627d4f.png"}}]);