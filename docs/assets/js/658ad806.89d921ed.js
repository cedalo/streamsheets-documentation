"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[6253],{83166:(e,t,i)=>{var a=i(64836);t.Z=void 0;var n=a(i(64938)),l=i(85893),r=(0,n.default)((0,l.jsx)("path",{d:"M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z"}),"GppGood");t.Z=r},13328:(e,t,i)=>{var a=i(64836);t.Z=void 0;var n=a(i(64938)),l=i(85893),r=(0,n.default)((0,l.jsx)("path",{d:"m23 12-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z"}),"NewReleases");t.Z=r},81231:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>y,frontMatter:()=>p,metadata:()=>v,toc:()=>b});var a=i(3905),n=i(78901),l=i(49044),r=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,h=(e,t,i)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,m=(e,t)=>{for(var i in t||(t={}))d.call(t,i)&&h(e,i,t[i]);if(c)for(var i of c(t))u.call(t,i)&&h(e,i,t[i]);return e};const p={id:"mmc-high-availability",title:"High Availability \u2b50",sidebar_label:"High Availability \u2b50"},g=void 0,v={unversionedId:"mmc-high-availability",id:"version-2.4/mmc-high-availability",title:"High Availability \u2b50",description:"Introduction",source:"@site/management-center_versioned_docs/version-2.4/high-availability.md",sourceDirName:".",slug:"/mmc-high-availability",permalink:"/management-center/2.4/mmc-high-availability",draft:!1,tags:[],version:"2.4",frontMatter:{id:"mmc-high-availability",title:"High Availability \u2b50",sidebar_label:"High Availability \u2b50"},sidebar:"someSidebar",previous:{title:"Dynamic Security REST API",permalink:"/management-center/2.4/mc-dynamic-security-rest-api"},next:{title:"Release Notes",permalink:"/management-center/2.4/mmc-releasenotes"}},f={},b=[{value:"Introduction",id:"introduction",level:2},{value:"Create Cluster",id:"create-cluster",level:2},{value:"Cluster details",id:"cluster-details",level:2},{value:"Remove nodes from a cluster",id:"remove-nodes-from-a-cluster",level:2},{value:"Delete a Cluster",id:"delete-a-cluster",level:2}],k={toc:b};function y(e){var t,r=e,{components:h}=r,p=((e,t)=>{var i={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(i[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&u.call(e,a)&&(i[a]=e[a]);return i})(r,["components"]);return(0,a.kt)("wrapper",(t=m(m({},k),p),o(t,s({components:h,mdxType:"MDXLayout"}))),(0,a.kt)(n.Z,{version:"2.3",mdxType:"SinceVersion"}),(0,a.kt)(l.Z,{mdxType:"PremiumFeature"}),(0,a.kt)("h2",m({},{id:"introduction"}),"Introduction"),(0,a.kt)("p",null,"The Cedalo high availability feature provides the ability to run a cluster of Mosquitto nodes with a single leader and multiple followers, so that broker availability can be ensured even if a single node becomes unavailable through fault or for an upgrade. This document describes the recommended cluster architecture and how to configure the cluster for first use, and in the future."),(0,a.kt)("p",null,"To understand more about the underlying architecture and configuration visit the ",(0,a.kt)("a",m({parentName:"p"},{href:"/mosquitto/2.5/broker-dynamic-security"}),"Mosquitto documentation")),(0,a.kt)("h2",m({},{id:"create-cluster"}),"Create Cluster"),(0,a.kt)("admonition",m({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"Before creating a cluster it is necessary to connect your future cluster nodes to the Management Center. Make sure to be connected via Port 1885, to allow direct communication to the individual nodes, using a client with ACLs to read and write on the ",(0,a.kt)("em",{parentName:"p"},"$CONTROL")," topic of the broker.")),(0,a.kt)("p",null,'To navigate to the High Availability Cluster overview, select the "Cluster Management" menu entry from the left main menu.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:i(17661).Z,width:"1277",height:"810"})),(0,a.kt)("p",null,'To create a new high availability cluster, click on the button "New cluster".'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:i(10408).Z,width:"1282",height:"900"})),(0,a.kt)("p",null,"On the following page you can enter the detail information about the cluster that you want to create."),(0,a.kt)("p",null,"Select a unique Node ID, enter the IP address of the broker with in its private network and select the preconfigured connection. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:i(77414).Z,width:"1277",height:"955"})),(0,a.kt)("p",null,'When you have entered all the necessary information, click on "Save" to the cluster configuration. The new cluster configuration will now appear in the overview list.'),(0,a.kt)("h2",m({},{id:"cluster-details"}),"Cluster details"),(0,a.kt)("p",null,"Select your created cluster to see its current\nIn order to add a Mosquitto node to a cluster, select the cluster in the overview list. This will navigate you to the detail view of the cluster."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:i(32728).Z,width:"2870",height:"1642"})),(0,a.kt)("p",null,'To add a new node, first switch into edit mode by clicking on the button "Edit".'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:i(70120).Z,width:"2872",height:"1636"})),(0,a.kt)("p",null,'Then, click on "Add node", which will open a select dialog that lists all available Mosquitto connections.'),(0,a.kt)("admonition",m({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"See here for a description on how to create new Mosquitto connections in the Management Center.")),(0,a.kt)("p",null,'In the dialog, select the node you want to add to the cluster and confirm by clicking "Add node".'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:i(42336).Z,width:"2872",height:"1632"})),(0,a.kt)("p",null,"The node now appears as part of the cluster:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:i(81792).Z,width:"2866",height:"1632"})),(0,a.kt)("h2",m({},{id:"remove-nodes-from-a-cluster"}),"Remove nodes from a cluster"),(0,a.kt)("p",null,'Navigate to the cluster detail page (e.g., by selecting it in the overview list) and click the "Edit" button. Then in order to remove a node click on the "Remove" button next to that node.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:i(2722).Z,width:"2870",height:"1636"})),(0,a.kt)("h2",m({},{id:"delete-a-cluster"}),"Delete a Cluster"),(0,a.kt)("p",null,'Delete the Cluster by clicking the "bin" icon in the overview menu.'))}y.isMDXComponent=!0},49044:(e,t,i)=>{i.d(t,{Z:()=>o});var a=i(67294),n=i(74889),l=i(62659),r=i(83166);function o({inline:e}){return a.createElement(n.Z,{sx:{margin:e?"0px 5px":"5px",height:e?"22px":void 0,color:"#ffffff",backgroundColor:l.Z[500]},size:"small",icon:a.createElement(r.Z,{style:{color:"white"},size:"small"}),label:"Premium"})}},78901:(e,t,i)=>{i.d(t,{Z:()=>r});var a=i(67294),n=i(74889),l=i(13328);function r({version:e}){return e?a.createElement(n.Z,{sx:{margin:"5px"},color:"info",size:"small",icon:a.createElement(l.Z,{size:"small"}),label:`${e}`}):a.createElement(a.Fragment,null)}},32728:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/HA-cluster_006-detail-cluster-3ffc27e45df27410c394a5a0665e70b8.png"},70120:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/HA-cluster_007-edit-cluster-ef6f3c276ee11747088b8f36aa6e8123.png"},42336:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/HA-cluster_008-add-node-301c405dfe2ebfc08f284514098703d5.png"},81792:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/HA-cluster_009-node-added-5655e11e1e55bc20151a0f3d1b19abd9.png"},2722:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/HA-cluster_012-remove-node-089b0b46c2c1858e7888dc98582d49c3.png"},17661:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/clusteroverview-92819e8851d67112801935972d5f3f18.png"},10408:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/createCluster-c9852b481002f4cfe80d86afb2194df3.png"},77414:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/createClusterex-b8498ed5da0dc16020b79e8bc085fa2f.png"}}]);