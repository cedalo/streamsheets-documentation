"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[3519],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>b,frontMatter:()=>d,metadata:()=>f,toc:()=>k});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&p(e,n,t[n]);return e};const d={id:"stackfind",title:"STACKFIND",sidebar_label:"STACKFIND"},m=void 0,f={unversionedId:"functions/stack/stackfind",id:"version-2.3/functions/stack/stackfind",title:"STACKFIND",description:"This function uses the criteria range to select and copy one or multiple",source:"@site/streamsheets_versioned_docs/version-2.3/functions/stack/stackfind.md",sourceDirName:"functions/stack",slug:"/functions/stack/stackfind",permalink:"/streamsheets/2.3/functions/stack/stackfind",draft:!1,tags:[],version:"2.3",frontMatter:{id:"stackfind",title:"STACKFIND",sidebar_label:"STACKFIND"},sidebar:"version-2.3/someSidebar",previous:{title:"STACKDROP",permalink:"/streamsheets/2.3/functions/stack/stackdrop"},next:{title:"STACKROTATE",permalink:"/streamsheets/2.3/functions/stack/stackrotate"}},g={},k=[],h={toc:k};function b(e){var t,a=e,{components:p}=a,d=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(a,["components"]);return(0,r.kt)("wrapper",(t=u(u({},h),d),o(t,l({components:p,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"This function uses the criteria range to select and copy one or multiple\nrows from the StackRange to the TargetRange. Optionally it deletes all\nfound records after the extract operation (remaining rows all move up!)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("p",null,"=STACKFIND(StackRange, CriteriaRange ","[",", TargetRange, Drop, Unique","]",")"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"StackRange"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Range, where the source range items are added to. The first row of the StackRange is a title range and remains unchanged.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"CriteriaRange"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"The CriteriaRange has at least 2 rows, the first one is the labels row with labels also found in StackRange (not necessarily all and maybe not in the same order!), the second to nth row contain filter settings. Note: criteria values can start with a comparison-operator like, ",(0,r.kt)("inlineCode",{parentName:"td"},">, >=, <, <=, =")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"<>")," Settings in the same row are combined using AND, multiple rows are OR.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"TargetRange"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Optional. If specified, TargetRange must have two rows minimum, the first row has labels also found in StackRange (not necessarily all and maybe not in the same order!). The result of the filter is copied to the matching columns in the TargetRange. Note: TargetRange can have more than 2 rows. If it has more than 2 rows the additional rows can take the additional hits of the filter extract.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Drop"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Optional. If set to TRUE it drops the selected rows from the stack. Drop defaults to FALSE.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Unique"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Optional. If set to TRUE it drops or copies equal rows only once. Two rows are equal if they have same value in each column. Unique defaults to FALSE.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Value")),(0,r.kt)("p",null,"TRUE, if at least one matching value was found, otherwise FALSE. In case\nof an error the corresponding ",(0,r.kt)("a",u({parentName:"p"},{href:"../../other#error-codes"}),"error")," value is returned."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Function"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Result"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"=STACKFIND(A5:D9,A2:D3,A11:B13) ",(0,r.kt)("br",null),"  ",(0,r.kt)("img",{src:n(51677).Z,alt:"select"})),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"After calling STACKFIND  ",(0,r.kt)("br",null),"   ",(0,r.kt)("img",{src:n(99746).Z,alt:"select"}))))))}b.isMDXComponent=!0},51677:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/STACKFIND1-25b4475db9dd87ce137d75a728884740.png"},99746:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/STACKFIND2-a52fbdccd8830f7bc6e17eddaef2ee95.png"}}]);