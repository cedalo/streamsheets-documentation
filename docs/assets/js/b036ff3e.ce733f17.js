"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[6613],{3958:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return h},default:function(){return g}});var n=i(87462),a=i(63366),o=(i(67294),i(3905)),l=i(92313),r=i(93866),s=["components"],c={id:"high-availability",hide_title:!0,sidebar_label:"High Availability \u2b50"},d=void 0,u={unversionedId:"high-availability",id:"version-2.3/high-availability",title:"high-availability",description:"High Availability",source:"@site/management-center_versioned_docs/version-2.3/high-availability.md",sourceDirName:".",slug:"/high-availability",permalink:"/management-center/2.3/high-availability",tags:[],version:"2.3",frontMatter:{id:"high-availability",hide_title:!0,sidebar_label:"High Availability \u2b50"}},h=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Create Cluster",id:"create-cluster",children:[],level:2},{value:"Cluster details",id:"cluster-details",children:[],level:2},{value:"Remove nodes from a cluster",id:"remove-nodes-from-a-cluster",children:[],level:2}],m={toc:h};function g(e){var t=e.components,c=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",null,"High Availability"),(0,o.kt)(l.Z,{version:"2.3",mdxType:"SinceVersion"}),(0,o.kt)(r.Z,{mdxType:"PremiumFeature"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"The Cedalo high availability feature provides the ability to run a cluster of Mosquitto nodes with a single leader and multiple followers, so that broker availability can be ensured even if a single node becomes unavailable through fault or for an upgrade. This document describes the recommended cluster architecture and how to configure the cluster for first use, and in the future."),(0,o.kt)("p",null,"To understand more about the underlying architecture and configuration visit the ",(0,o.kt)("a",{parentName:"p",href:"/mosquitto/broker-dynamic-security"},"Mosquitto documentation")),(0,o.kt)("h2",{id:"create-cluster"},"Create Cluster"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Before creating a cluster it is necessary to connect your future cluster nodes to the Management Center. Make sure to be connected via Port 1885, to allow direct communication to the individual nodes, using a client with ACLs to read and write on the ",(0,o.kt)("em",{parentName:"p"},"$CONTROL")," topic of the broker."))),(0,o.kt)("p",null,'To navigate to the High Availability Cluster overview, select the "Cluster Management" menu entry from the left main menu.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:i(67644).Z,width:"2866",height:"1630"})),(0,o.kt)("p",null,'To create a new high availability cluster, click on the button "New cluster".'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:i(6651).Z,width:"2864",height:"1632"})),(0,o.kt)("p",null,"On the following page you can enter the detail information about the cluster that you want to create."),(0,o.kt)("p",null,"Select a unique Node ID, enter the ip adress of the broker with in its private network and select the preconfigured connection. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:i(76955).Z,width:"2868",height:"1636"})),(0,o.kt)("p",null,'When you have entered all the necessary information, click on "Save" to the cluster configuration. The new cluster configuration will now appear in the overview list:'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:i(68173).Z,width:"2866",height:"1634"})),(0,o.kt)("h2",{id:"cluster-details"},"Cluster details"),(0,o.kt)("p",null,"Select your created cluster to see its current\nIn order to add a Mosquitto node to a cluster, select the cluster in the overview list. This will navigate you to the detail view of the cluster."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:i(88326).Z,width:"2870",height:"1642"})),(0,o.kt)("p",null,'To add a new node, first switch into edit mode by clicking on the button "Edit".'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:i(75300).Z,width:"2872",height:"1636"})),(0,o.kt)("p",null,'Then, click on "Add node", which will open a select dialog that lists all available Mosquitto connections.'),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"See here for a description on how to create new Mosquitto connections in the Management Center."))),(0,o.kt)("p",null,'In the dialog, select the node you want to add to the cluster and confirm by clicking "Add node".'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:i(45768).Z,width:"2872",height:"1632"})),(0,o.kt)("p",null,"The node now appears as part of the cluster:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:i(92252).Z,width:"2866",height:"1632"})),(0,o.kt)("h2",{id:"remove-nodes-from-a-cluster"},"Remove nodes from a cluster"),(0,o.kt)("p",null,'Navigate to the cluster detail page (e.g., by selecting it in the overview list) and click the "Edit" button. Then in order to remove a node click on the "Remove" button next to that node.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:i(55622).Z,width:"2870",height:"1636"})))}g.isMDXComponent=!0},93866:function(e,t,i){i.d(t,{Z:function(){return s}});var n=i(36459),a=i(67294),o=i(21055),l=i(55137),r=i(83166);function s(e){return(0,n.Z)(e),a.createElement(o.Z,{sx:{margin:"5px",color:"#ffffff",backgroundColor:l.Z[500]},size:"small",icon:a.createElement(r.Z,{style:{color:"white"},size:"small"}),label:"Premium"})}},92313:function(e,t,i){i.d(t,{Z:function(){return l}});var n=i(67294),a=i(21055),o=i(13328);function l(e){var t=e.version;return t?n.createElement(a.Z,{sx:{margin:"5px"},color:"info",size:"small",icon:n.createElement(o.Z,{size:"small"}),label:""+t}):n.createElement(n.Fragment,null)}},67644:function(e,t,i){t.Z=i.p+"assets/images/HA-cluster_001-menu-b55bc1fc530debd722cf4a237c15471b.png"},6651:function(e,t,i){t.Z=i.p+"assets/images/HA-cluster_002-overview-9123ff2c838007770be87e8a3156a683.png"},76955:function(e,t,i){t.Z=i.p+"assets/images/HA-cluster_003-new-cluster-5b0bb2a8ea3cdbc42c841956555ff18f.png"},68173:function(e,t,i){t.Z=i.p+"assets/images/HA-cluster_005-overview-4558bef92d96c999483aeefde2a4a120.png"},88326:function(e,t,i){t.Z=i.p+"assets/images/HA-cluster_006-detail-cluster-3ffc27e45df27410c394a5a0665e70b8.png"},75300:function(e,t,i){t.Z=i.p+"assets/images/HA-cluster_007-edit-cluster-ef6f3c276ee11747088b8f36aa6e8123.png"},45768:function(e,t,i){t.Z=i.p+"assets/images/HA-cluster_008-add-node-301c405dfe2ebfc08f284514098703d5.png"},92252:function(e,t,i){t.Z=i.p+"assets/images/HA-cluster_009-node-added-5655e11e1e55bc20151a0f3d1b19abd9.png"},55622:function(e,t,i){t.Z=i.p+"assets/images/HA-cluster_012-remove-node-089b0b46c2c1858e7888dc98582d49c3.png"}}]);