"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[20305],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(u,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50239:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={id:"mongoquery",title:"MONGO.QUERY",sidebar_label:"MONGO.QUERY"},u=void 0,s={unversionedId:"functionss/databases/mongoquery",id:"version-2.5/functionss/databases/mongoquery",title:"MONGO.QUERY",description:"Gets data from your Mongo database. You can use the Function Wizard for this function.",source:"@site/streamsheets_versioned_docs/version-2.5/functionss/databases/mongoquery.md",sourceDirName:"functionss/databases",slug:"/functionss/databases/mongoquery",permalink:"/streamsheets/2.5/functionss/databases/mongoquery",tags:[],version:"2.5",frontMatter:{id:"mongoquery",title:"MONGO.QUERY",sidebar_label:"MONGO.QUERY"}},p=[],c={toc:p};function m(e){var t=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Gets data from your Mongo database. You can use the Function Wizard for this function."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Syntax")),(0,o.kt)("p",null,"=MONGO.QUERY(Producer, Collection, QueryJSON, Target, ","[","ResultKeys","]",", ","[","PageSize","]",", ","[","Page","]",", ","[","Sort","]",", ","[","Timeout","]",")"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Producer"),(0,o.kt)("td",{parentName:"tr",align:null},"Producer to use for deleting. The database name is configured in the affiliated Connector.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Collection"),(0,o.kt)("td",{parentName:"tr",align:null},"Choose an existing collection, where the item is stored.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"QueryJSON"),(0,o.kt)("td",{parentName:"tr",align:null},"Define a query using a JSON cell range, which defines the object(s) to searched for.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Target"),(0,o.kt)("td",{parentName:"tr",align:null},'INBOX(), OUTBOX("MsgID") or a cell range where the result will be placed. Make sure the cell range is big enough or not everything is displayed.')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ResultKeys (optional)"),(0,o.kt)("td",{parentName:"tr",align:null},"Filter the query result.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"PageSize (optional)"),(0,o.kt)("td",{parentName:"tr",align:null},"Number of Documents to return per page.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Page (optional)"),(0,o.kt)("td",{parentName:"tr",align:null},"Index of page to return.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Sort (optional)"),(0,o.kt)("td",{parentName:"tr",align:null},"Sort query result ascending or descending. Use 1 and -1 to sort by creation time, or use a JSON cell range.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Timeout (optional)"),(0,o.kt)("td",{parentName:"tr",align:null},"Define Timeout.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Return")),(0,o.kt)("p",null,"TRUE, if no ",(0,o.kt)("a",{parentName:"p",href:"../../other#error-codes"},"error"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples")),(0,o.kt)("img",{src:n(19983).Z,width:"100%"}),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Formula"),(0,o.kt)("th",{parentName:"tr",align:null},"Result"),(0,o.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("pre",null,(0,o.kt)("code",null,"${formula}"))),(0,o.kt)("td",{parentName:"tr",align:null},"TRUE"),(0,o.kt)("td",{parentName:"tr",align:null},'All documents in the database with the "Gender" male in the collection "TestCollection" will be shown in the range F18:N21 of the current Streamsheet. Use INBOX() as a "Target" to prevent space issues.')))))}m.isMDXComponent=!0},19983:function(e,t,n){t.Z=n.p+"assets/images/MongoQuery2-6002ecd1bbd868e617a970ab2dd3ae28.png"}}]);