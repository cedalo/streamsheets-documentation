(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[14146],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||c[f]||o;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63139:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s},default:function(){return u}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),l={id:"showdialog",title:"SHOWDIALOG",sidebar_label:"SHOWDIALOG"},i={unversionedId:"functions/events/showdialog",id:"functions/events/showdialog",isDocsHomePage:!1,title:"SHOWDIALOG",description:"It is possible to export data to the App Files of an App (e.g.",source:"@site/streamsheets/functions/events/showdialog.md",sourceDirName:"functions/events",slug:"/functions/events/showdialog",permalink:"/streamsheets/2.4/functions/events/showdialog",version:"current",sidebar_label:"SHOWDIALOG",frontMatter:{id:"showdialog",title:"SHOWDIALOG",sidebar_label:"SHOWDIALOG"},sidebar:"someSidebar",previous:{title:"ONVALUECHANGE",permalink:"/streamsheets/2.4/functions/events/onvaluechange"},next:{title:"SHOWVALUES",permalink:"/streamsheets/2.4/functions/events/showvalues"}},s=[],p={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'It is possible to export data to the App Files of an App (e.g.\nTIMESCALE.EXPORT()). Usually it is possible to access the App FIles over\nthe left side menu. This menu is not accessible, if you only want to\nallow your user to be able to access a build App via the "preview" or\n"share App" mode. The SHOWDIALOG() function allows opening the App Files\nvia event on a shape or object.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Syntax")),(0,o.kt)("p",null,"SHOWDIALOG()"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"No parameter"),(0,o.kt)("td",{parentName:"tr",align:null},"There are no parameter inputs neccessary")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Return Value")),(0,o.kt)("p",null,"TRUE."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Function"),(0,o.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'DRAW.BUTTON("100285020360",,"Button1",22066,9182,7250,5794,,,,EVENTS(ONCLICK(SHOWDIALOG())))),,,"Button",,FALSE)'),(0,o.kt)("td",{parentName:"tr",align:null},"If the user clicks on the button the App Files dialog will open.")))))}u.isMDXComponent=!0}}]);