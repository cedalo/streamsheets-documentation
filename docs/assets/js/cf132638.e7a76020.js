"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[33516],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>N});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),g=u(n),N=r,k=g["".concat(p,".").concat(N)]||g[N]||d[N]||l;return n?a.createElement(k,o(o({ref:e},m),{},{components:n})):a.createElement(k,o({ref:e},m))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},70936:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>N,default:()=>b,frontMatter:()=>g,metadata:()=>k,toc:()=>s});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,d=(t,e)=>{for(var n in e||(e={}))p.call(e,n)&&m(t,n,e[n]);if(i)for(var n of i(e))u.call(e,n)&&m(t,n,e[n]);return t};const g={id:"mongoquery",title:"MONGO.QUERY",hide_title:!0},N=void 0,k={unversionedId:"functions/connection/mongoquery",id:"version-3.0/functions/connection/mongoquery",title:"MONGO.QUERY",description:"MONGO.QUERY",source:"@site/streamsheets_versioned_docs/version-3.0/functions/connection/mongoquery.md",sourceDirName:"functions/connection",slug:"/functions/connection/mongoquery",permalink:"/streamsheets/functions/connection/mongoquery",draft:!1,tags:[],version:"3.0",frontMatter:{id:"mongoquery",title:"MONGO.QUERY",hide_title:!0},sidebar:"someSidebar",previous:{title:"MONGO.DELETE",permalink:"/streamsheets/functions/connection/mongodelete"},next:{title:"MONGO.REPLACE",permalink:"/streamsheets/functions/connection/mongoreplace"}},c={},s=[],y={toc:s};function b(t){var e,n=t,{components:r}=n,m=((t,e)=>{var n={};for(var a in t)p.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&i)for(var a of i(t))e.indexOf(a)<0&&u.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=d(d({},y),m),l(e,o({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",null,"MONGO.QUERY"),(0,a.kt)("p",null,"Gets data from your Mongo database."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("p",null,"=MONGO.QUERY(Connection, Collection, QueryJSON, Target, ","[","ResultKeys","]",", ","[","PageSize","]",", ","[","Page","]",", ","[","Sort","]",", ","[","Timeout","]",")"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Connection"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Connection"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Reference to connection used for querying. The database name is configured in the affiliated connection settings.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Collection"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Choose an existing collection, where the item is stored.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"QueryJSON"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"JSON"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Define a query using a JSON cell range, which defines the object(s) to searched for.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Target"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Target"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),'INBOX(), OUTBOX("MsgID") or a cell range where the result will be placed. Make sure the cell range is big enough or not everything is displayed.')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"ResultKeys (optional)"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Range"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Filter the query result.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"PageSize (optional)"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Number of Documents to return per page.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Page (optional)"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Index of page to return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Sort (optional)"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Number or Range"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Sort query result ascending or descending. Use 1 and -1 to sort by creation time, or use a JSON cell range.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Timeout (optional)"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Define Timeout in seconds.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Boolean or Error"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"TRUE, if no ",(0,a.kt)("a",d({parentName:"td"},{href:"../../other/errorcodes"}),"error"),".")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null})),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"A"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"B"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"C"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"D"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"E"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"1"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Collection:"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"DataSet1"),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"2"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Gender"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"M"),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"3"),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"4"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"_id"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"PatientID"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"PatientName"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"PatientSurName"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Gender")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"5"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"1"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"AF3"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Miller"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Joe"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"M")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"6"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"2"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"CF3"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Mayer"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Jim"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"M")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"7"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"3"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"AD4"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Smith"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Jack"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"M")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Formula"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Result"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Comment"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("pre",null,(0,a.kt)("code",null,"=MONGO.QUERY(MongoConnection!, B1,JSON(A2:B2),A4:E7)"))),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"TRUE"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),'All documents in the database with the "Gender" male in the collection "TestCollection" will be shown in the range F18:N21 of the current Streamsheet. Use INBOX() as a "Target" to prevent space issues.')))))}b.isMDXComponent=!0}}]);