(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[37094],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,b=c["".concat(u,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},76702:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return u},default:function(){return s}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),i={id:"tableget",title:"TABLE.GET",sidebar_label:"TABLE.GET"},o={unversionedId:"functions/streamsheet/tableget",id:"version-2.3/functions/streamsheet/tableget",isDocsHomePage:!1,title:"TABLE.GET",description:"Gets the value from the table cell at specified index.",source:"@site/streamsheets_versioned_docs/version-2.3/functions/streamsheet/tableget.md",sourceDirName:"functions/streamsheet",slug:"/functions/streamsheet/tableget",permalink:"/streamsheets/2.3/functions/streamsheet/tableget",version:"2.3",sidebar_label:"TABLE.GET",frontMatter:{id:"tableget",title:"TABLE.GET",sidebar_label:"TABLE.GET"},sidebar:"version-2.3/someSidebar",previous:{title:"SWAPVALUES",permalink:"/streamsheets/2.3/functions/streamsheet/swapvalues"},next:{title:"TABLE.ORDERCOLUMN",permalink:"/streamsheets/2.3/functions/streamsheet/tableordercolumn"}},u=[],p={toc:u};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Gets the value from the table cell at specified index.",(0,l.kt)("br",{parentName:"p"}),"\n","To create a table like cell range please refer to\nTABLE.UPDATE."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("p",null,"=TABLE.GET(CellRange, RowIndex, ColumnIndex)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CellRange"),(0,l.kt)("td",{parentName:"tr",align:null},"Cell range to treat like a table. Its first row and its first column are used to reference table cells.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RowIndex"),(0,l.kt)("td",{parentName:"tr",align:null},"The row index of a table cell.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ColumnIndex"),(0,l.kt)("td",{parentName:"tr",align:null},"The column index of a table cell")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return Value")),(0,l.kt)("p",null,"The value of specified table cell or an ",(0,l.kt)("a",{parentName:"p",href:"../../other#error-codes"},"error")," value if cell\nrange does not contain specified cell."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")," Below examples assumes following cells in range ",(0,l.kt)("strong",{parentName:"p"},"A3:D5")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Time"),(0,l.kt)("td",{parentName:"tr",align:null},"Turbine 1"),(0,l.kt)("td",{parentName:"tr",align:null},"Turbine 2"),(0,l.kt)("td",{parentName:"tr",align:null},"Turbine 3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"93370"),(0,l.kt)("td",{parentName:"tr",align:null},"1000"),(0,l.kt)("td",{parentName:"tr",align:null},"2000"),(0,l.kt)("td",{parentName:"tr",align:null},"3000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"93360"),(0,l.kt)("td",{parentName:"tr",align:null},"1500"),(0,l.kt)("td",{parentName:"tr",align:null},"2500"),(0,l.kt)("td",{parentName:"tr",align:null},"3500")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Function"),(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'=TABLE.GET(A3:D5, 93370, "Turbine 1")'),(0,l.kt)("td",{parentName:"tr",align:null},"1000"),(0,l.kt)("td",{parentName:"tr",align:null},'Gets the value from table cell (93360, "Turbine 1") which is 1000')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'=TABLE.GET(A3:D5, 93360, "Turbine 2")'),(0,l.kt)("td",{parentName:"tr",align:null},"2500"),(0,l.kt)("td",{parentName:"tr",align:null},'Gets the value from table cell (93360, "Turbine 1") which is 2500')))))}s.isMDXComponent=!0}}]);