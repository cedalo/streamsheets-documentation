(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[7979],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return g}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=s(n),g=r,k=c["".concat(p,".").concat(g)]||c[g]||m[g]||l;return n?a.createElement(k,i(i({ref:e},u),{},{components:n})):a.createElement(k,i({ref:e},u))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},84204:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p},default:function(){return u}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),i={id:"averageifs",title:"AVERAGEIFS",sidebar_label:"AVERAGEIFS"},o={unversionedId:"functions/statistical/averageifs",id:"version-2.3/functions/statistical/averageifs",isDocsHomePage:!1,title:"AVERAGEIFS",description:"Returns the average of all cell values which meet multiple criteria.",source:"@site/streamsheets_versioned_docs/version-2.3/functions/statistical/averageifs.md",sourceDirName:"functions/statistical",slug:"/functions/statistical/averageifs",permalink:"/streamsheets/2.3/functions/statistical/averageifs",version:"2.3",sidebar_label:"AVERAGEIFS",frontMatter:{id:"averageifs",title:"AVERAGEIFS",sidebar_label:"AVERAGEIFS"},sidebar:"version-2.3/someSidebar",previous:{title:"AVERAGEIF",permalink:"/streamsheets/2.3/functions/statistical/averageif"},next:{title:"CORREL",permalink:"/streamsheets/2.3/functions/statistical/correl"}},p=[],s={toc:p};function u(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Returns the average of all cell values which meet multiple criteria."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("p",null,"=AVERAGEIFS(AverageRange, CriterionRange1, Criterion1,\n","[","CriterionRange2, Criterion2","]",", ...)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AverageRange"),(0,l.kt)("td",{parentName:"tr",align:null},"Cell-range to calculate average for.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CriterionRange1"),(0,l.kt)("td",{parentName:"tr",align:null},"The cell-range which is checked against the criterion.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Criterion1"),(0,l.kt)("td",{parentName:"tr",align:null},"The criterion each cell of CriterionRange1 has to fulfill.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CriterionRange2,..."),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Additional cell-range which is checked against next criterion.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Criterion2,..."),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Additional criterion each cell of CriterionRange2 has to fulfill.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return Value")),(0,l.kt)("p",null,"The average over all cell values which meet all specified criteria."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"A"),(0,l.kt)("td",{parentName:"tr",align:null},"B"),(0,l.kt)("td",{parentName:"tr",align:null},"C"),(0,l.kt)("td",{parentName:"tr",align:null},"D")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"230000"),(0,l.kt)("td",{parentName:"tr",align:null},"Freiburg"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"197000"),(0,l.kt)("td",{parentName:"tr",align:null},"Cologne"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"345678"),(0,l.kt)("td",{parentName:"tr",align:null},"Cologne"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"321900"),(0,l.kt)("td",{parentName:"tr",align:null},"Freiburg"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"203000"),(0,l.kt)("td",{parentName:"tr",align:null},"Cologne"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Function"),(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AVERAGEIFS(",(0,l.kt)("span",{class:"blue"},"A1:A5"),", ",(0,l.kt)("span",{class:"orange"},"B1:B5"),", ",(0,l.kt)("span",{class:"green"},'"Cologne"'),", ",(0,l.kt)("span",{class:"orange"},"C1:C5"),", ",(0,l.kt)("span",{class:"green"},'"',">",'2"'),")"),(0,l.kt)("td",{parentName:"tr",align:null},"200000"),(0,l.kt)("td",{parentName:"tr",align:null},"Average price of houses in Cologne that have at least 3 rooms.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AVERAGEIFS(",(0,l.kt)("span",{class:"blue"},"A1:A5"),", ",(0,l.kt)("span",{class:"orange"},"C1:C5"),", ",(0,l.kt)("span",{class:"green"},'"',">",'=4"'),")"),(0,l.kt)("td",{parentName:"tr",align:null},"345678"),(0,l.kt)("td",{parentName:"tr",align:null},"Average price of houses with 4 or more rooms.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AVERAGEIFS(",(0,l.kt)("span",{class:"blue"},"A1:A5"),", ",(0,l.kt)("span",{class:"orange"},"C1:C5"),", ",(0,l.kt)("span",{class:"green"},'"',">",'4"'),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"red"},"#","DIV/0!")),(0,l.kt)("td",{parentName:"tr",align:null},"No cell fulfills given criterion.")))))}u.isMDXComponent=!0}}]);