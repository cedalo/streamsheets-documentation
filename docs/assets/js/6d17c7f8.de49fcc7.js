"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[40758],{83166:(t,e,a)=>{var r=a(64836);e.Z=void 0;var n=r(a(64938)),l=a(85893),i=(0,n.default)((0,l.jsx)("path",{d:"M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z"}),"GppGood");e.Z=i},18084:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>g,contentTitle:()=>c,default:()=>b,frontMatter:()=>k,metadata:()=>N,toc:()=>f});var r=a(3905),n=a(49044),l=Object.defineProperty,i=Object.defineProperties,p=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(t,e,a)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,m=(t,e)=>{for(var a in e||(e={}))d.call(e,a)&&u(t,a,e[a]);if(o)for(var a of o(e))s.call(e,a)&&u(t,a,e[a]);return t};const k={id:"stripeproductupdate",title:"STRIPE.PRODUCT.UPDATE",hide_title:!0},c=void 0,N={unversionedId:"functions/integrations/stripeproductupdate",id:"version-3.0/functions/integrations/stripeproductupdate",title:"STRIPE.PRODUCT.UPDATE",description:"STRIPE.PRODUCT.UPDATE",source:"@site/streamsheets_versioned_docs/version-3.0/functions/integrations/stripeproductupdate.md",sourceDirName:"functions/integrations",slug:"/functions/integrations/stripeproductupdate",permalink:"/streamsheets/functions/integrations/stripeproductupdate",draft:!1,tags:[],version:"3.0",frontMatter:{id:"stripeproductupdate",title:"STRIPE.PRODUCT.UPDATE",hide_title:!0},sidebar:"someSidebar",previous:{title:"STRIPE.PRODUCT.GETALL",permalink:"/streamsheets/functions/integrations/stripeproductgetall"},next:{title:"TWILIO.EMAIL.SEND",permalink:"/streamsheets/functions/integrations/twilioemailsend"}},g={},f=[],h={toc:f};function b(t){var e,a=t,{components:l}=a,u=((t,e)=>{var a={};for(var r in t)d.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(null!=t&&o)for(var r of o(t))e.indexOf(r)<0&&s.call(t,r)&&(a[r]=t[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(e=m(m({},h),u),i(e,p({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("h1",null,"STRIPE.PRODUCT.UPDATE"),(0,r.kt)(n.Z,{mdxType:"PremiumFeature"}),(0,r.kt)("p",null,"Updates settings for specified product."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("p",null,"=STRIPE.PRODUCT.UPDATE(ProductID, ","[","Active","]",", ","[","DefaultPriceID","]",", ","[","Options","]",", ","[","ResponseTarget","]",")"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"ProductID"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"The unique ID of the product to update.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Active (optional)"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Optional new active state for specfied product.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"DefaultPriceID (optional)"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"ID of the new default price for specfied product.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Options (optional)"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"JSON"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"JSON which defines additional options as key value pairs. See Stripe API for supported options and their values.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"ResponseTarget (optional)"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Target"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Specify inbox, outbox, cell or cell-range to write any response to")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Boolean,Result,Error"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Request result if no target is specified otherwise TRUE. In case of an error the corresponding ",(0,r.kt)("a",m({parentName:"td"},{href:"../../other/errorcodes"}),"error-code")," is returned.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"A"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"B"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"1"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"metadata","[order_id]"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"6735")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Formula"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Result"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("pre",null,(0,r.kt)("code",null,'=STRIPE.PRODUCT.UPDATE("prod_MhD1djepQmTqfQ",FALSE)'))),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"JSON"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),'Deactivates the product with id "prod_MhD1djepQmTqfQ".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("pre",null,(0,r.kt)("code",null,'=STRIPE.PRODUCT.UPDATE("prod_MhD1djepQmTqfQ",FALSE)'))),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"JSON"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Same as before but additionally adds an metadata.order_id specified by given JSON object.")))))}b.isMDXComponent=!0},49044:(t,e,a)=>{a.d(e,{Z:()=>p});var r=a(67294),n=a(39082),l=a(62659),i=a(83166);function p({inline:t}){return r.createElement(n.Z,{sx:{margin:t?"0px 5px":"5px",height:t?"22px":void 0,color:"#ffffff",backgroundColor:l.Z[500]},size:"small",icon:r.createElement(i.Z,{style:{color:"white"},size:"small"}),label:"Premium"})}}}]);