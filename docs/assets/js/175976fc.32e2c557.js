"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[54186],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=m(r),c=a,k=u["".concat(s,".").concat(c)]||u[c]||d[c]||o;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},40017:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>N,frontMatter:()=>u,metadata:()=>k,toc:()=>h});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))m.call(t,r)&&p(e,r,t[r]);return e};const u={id:"system-requirements",title:"System Requirements",sidebar_label:"System Requirements"},c="Mosquitto Requirements",k={unversionedId:"broker/system-requirements",id:"version-2.6/broker/system-requirements",title:"System Requirements",description:"Server Hardware",source:"@site/mosquitto_versioned_docs/version-2.6/broker/system-requirements.md",sourceDirName:"broker",slug:"/broker/system-requirements",permalink:"/mosquitto/2.6/broker/system-requirements",draft:!1,tags:[],version:"2.6",frontMatter:{id:"system-requirements",title:"System Requirements",sidebar_label:"System Requirements"},sidebar:"someSidebar",previous:{title:"Mosquitto MQTT Compliance",permalink:"/mosquitto/2.6/broker/mosquitto-mqtt-compliance"},next:{title:"Overview",permalink:"/mosquitto/2.6/broker/Mosquitto Manual/mosquitto-man-pages"}},g={},h=[{value:"Server Hardware",id:"server-hardware",level:2},{value:"Server hardware",id:"server-hardware-1",level:2},{value:"Network",id:"network",level:2}],b={toc:h};function N(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=d(d({},b),p),o(t,l({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",d({},{id:"mosquitto-requirements"}),"Mosquitto Requirements"),(0,n.kt)("h2",d({},{id:"server-hardware"}),"Server Hardware"),(0,n.kt)("p",null,'Hardware requirements for Eclipse Mosquitto can vary depending on the client\nconnections and message rates expected. The minimum specification below is for\na low power device supporting 10s of clients with a low message rate. The\nrecommended specification is for a device capable of supporting 10,000s of\nclients with reasonable message rates. The "with stream processing"\nspecification includes extra RAM and storage for stream processing support.'),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Minimum"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Recommended"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Recommended (with stream processing)"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Comment"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"RAM")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"128MB"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"4GB"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"16GB"),(0,n.kt)("td",d({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"CPU")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"1 core 32-bit ARM"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Recent 4+ core AMD/Intel"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Recent 4+ core AMD/Intel"),(0,n.kt)("td",d({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Storage")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"20MB"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"200MB"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"40GB"),(0,n.kt)("td",d({parentName:"tr"},{align:null}))))),(0,n.kt)("h1",d({},{id:"cluster-system-requirements"}),"Cluster System Requirements"),(0,n.kt)("p",null,"On each High-Availability node the components need the following system resources:"),(0,n.kt)("h2",d({},{id:"server-hardware-1"}),"Server hardware"),(0,n.kt)("p",null,"For the Load Balancer we recommend HAProxy. The recommended hardware components for the instance would be:\nRecent 4+ core CPU (AMD or Intel) and 8GB of RAM, if Load Balancers run separately, 8+ cores if load balancers run on same hosts as the Mosquitto nodes. As storage, 5 GB (R/W speed at least 500 MB/s) in a RAID is recommended."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:"center"})),(0,n.kt)("th",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Mosquitto Node")),(0,n.kt)("th",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Load balancer")),(0,n.kt)("th",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Mosquitto Node + Loadbalancer")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),(0,n.kt)("strong",{parentName:"td"},"CPU:")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"4+ Cores"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"4+ Cores"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"8+ Cores")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),(0,n.kt)("strong",{parentName:"td"},"RAM:")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"8GB"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"8GB"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"8GB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),(0,n.kt)("strong",{parentName:"td"},"Storage:")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"5GB (500Mb/s +)"),(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null}))))),(0,n.kt)("p",null,"In case stream processing is used, then the following recommendations apply for each node.\nWhile the CPU recommendations stay the same, it is proposed to use 24 GB of RAM and 50 GB (R/W speed at least 500 MB/s) of storage."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Stream Plugin usage:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:"center"})),(0,n.kt)("th",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Mosquitto Node")),(0,n.kt)("th",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Load balancer")),(0,n.kt)("th",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Mosquitto Node + Loadbalancer")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),(0,n.kt)("strong",{parentName:"td"},"CPU:")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"4+ Cores"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"4+ Cores"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"8+ Cores")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),(0,n.kt)("strong",{parentName:"td"},"RAM:")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"24GB"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"24GB"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"24GB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),(0,n.kt)("strong",{parentName:"td"},"Storage:")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"50GB (500Mb/s +)"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"50GB (500Mb/s +)"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"50GB (500Mb/s +)")))),(0,n.kt)("h2",d({},{id:"network"}),"Network"),(0,n.kt)("p",null,"As shown in the cluster architecture, the following network system is required. "),(0,n.kt)("p",null,"All nodes need to have access to a public network with public IPs (where MQTT clients and browser to view MMC information reside).\nA private network with private IPs (for communication between nodes, load balancers, and between nodes and Management Center). If this is not explicitly possible then a VPN can be pulled up to privately connect the components. Private network communication is done via TCP, while the Load Balancer are used for SSL termination. "),(0,n.kt)("p",null,"All nodes are 100% replicas from each other and get synchronized in real-time via the private network. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Network speed:")," Depending on expected bandwidth, 100 Mbit or 1 Gbit network is recommended. "),(0,n.kt)("p",null,"The Network speeds always need to be aligned with desired message bandwidth from your MQTT clients. The upper limit for bandwidth that the Mosquitto cluster can cope with is governed by a lot of factors, however 30 MB/sec or 240 Mbit is an ultimate upper limit what a Mosquitto node can cover under certain circumstances. Therefore, it is recommended that the network between the nodes is at least a Gbit network."))}N.isMDXComponent=!0}}]);