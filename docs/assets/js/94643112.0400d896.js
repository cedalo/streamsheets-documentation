"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[75144],{83166:(t,e,r)=>{var a=r(64836);e.Z=void 0;var n=a(r(64938)),l=r(85893),i=(0,n.default)((0,l.jsx)("path",{d:"M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z"}),"GppGood");e.Z=i},69558:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>h,contentTitle:()=>c,default:()=>b,frontMatter:()=>g,metadata:()=>k,toc:()=>N});var a=r(3905),n=r(49044),l=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(t,e,r)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,d=(t,e)=>{for(var r in e||(e={}))p.call(e,r)&&m(t,r,e[r]);if(s)for(var r of s(e))u.call(e,r)&&m(t,r,e[r]);return t};const g={id:"stripechargegetall",title:"STRIPE.CHARGE.GETALL",hide_title:!0},c=void 0,k={unversionedId:"functions/integrations/stripechargegetall",id:"version-3.0/functions/integrations/stripechargegetall",title:"STRIPE.CHARGE.GETALL",description:"STRIPE.CHARGE.GETALL",source:"@site/streamsheets_versioned_docs/version-3.0/functions/integrations/stripechargegetall.md",sourceDirName:"functions/integrations",slug:"/functions/integrations/stripechargegetall",permalink:"/streamsheets/functions/integrations/stripechargegetall",draft:!1,tags:[],version:"3.0",frontMatter:{id:"stripechargegetall",title:"STRIPE.CHARGE.GETALL",hide_title:!0},sidebar:"someSidebar",previous:{title:"STRIPE.CHARGE.GET",permalink:"/streamsheets/functions/integrations/stripechargeget"},next:{title:"STRIPE.CHARGE.UPDATE",permalink:"/streamsheets/functions/integrations/stripechargeupdate"}},h={},N=[],f={toc:N};function b(t){var e,r=t,{components:l}=r,m=((t,e)=>{var r={};for(var a in t)p.call(t,a)&&e.indexOf(a)<0&&(r[a]=t[a]);if(null!=t&&s)for(var a of s(t))e.indexOf(a)<0&&u.call(t,a)&&(r[a]=t[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(e=d(d({},f),m),i(e,o({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("h1",null,"STRIPE.CHARGE.GETALL"),(0,a.kt)(n.Z,{mdxType:"PremiumFeature"}),(0,a.kt)("p",null,"Retrieves a sorted list of previousely created charges, with most recent charge first."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("p",null,"=STRIPE.CHARGE.GETALL(","[","CustomerID","]",", ","[","Limit","]",", ","[","Options","]",", ","[","ResponseTarget","]",")"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"CustomerID (optional)"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Only return charges for customer specified by given ID.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Limit (optional)"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Limit the number of returned charges. Limit can range between 1 and 100. Defaults to 10.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Options (optional)"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"JSON"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"JSON which defines additional options as key value pairs. See Stripe API for supported options and their values.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"ResponseTarget (optional)"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Target"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Specify inbox, outbox, cell or cell-range to write any response to")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Boolean,Result,Error"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Request result if no target is specified otherwise TRUE. In case of an error the corresponding ",(0,a.kt)("a",d({parentName:"td"},{href:"../../other/errorcodes"}),"error-code")," is returned.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Formula"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Result"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Comment"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("pre",null,(0,a.kt)("code",null,"=STRIPE.CHARGE.GETALL(3)"))),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"JSON"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Retrieves a list of all created charges. Returned list is limited to 3.")))))}b.isMDXComponent=!0},49044:(t,e,r)=>{r.d(e,{Z:()=>o});var a=r(67294),n=r(74889),l=r(62659),i=r(83166);function o({inline:t}){return a.createElement(n.Z,{sx:{margin:t?"0px 5px":"5px",height:t?"22px":void 0,color:"#ffffff",backgroundColor:l.Z[500]},size:"small",icon:a.createElement(i.Z,{style:{color:"white"},size:"small"}),label:"Premium"})}}}]);