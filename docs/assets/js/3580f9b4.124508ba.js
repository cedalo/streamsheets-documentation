"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[31395],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=d(n),c=r,k=s["".concat(p,".").concat(c)]||s[c]||m[c]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},56981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>k,toc:()=>b});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(o)for(var n of o(t))d.call(t,n)&&u(e,n,t[n]);return e};const s={id:"drawslider",title:"DRAW.SLIDER",sidebar_label:"DRAW.SLIDER"},c=void 0,k={unversionedId:"functions/shape/drawslider",id:"version-2.3/functions/shape/drawslider",title:"DRAW.SLIDER",description:"Define a graphical slider on a given drawing.",source:"@site/streamsheets_versioned_docs/version-2.3/functions/shape/drawslider.md",sourceDirName:"functions/shape",slug:"/functions/shape/drawslider",permalink:"/streamsheets/2.3/functions/shape/drawslider",draft:!1,tags:[],version:"2.3",frontMatter:{id:"drawslider",title:"DRAW.SLIDER",sidebar_label:"DRAW.SLIDER"},sidebar:"version-2.3/someSidebar",previous:{title:"DRAW.RECTANGLE",permalink:"/streamsheets/2.3/functions/shape/drawrectangle"},next:{title:"FILLLINEARGRADIENT",permalink:"/streamsheets/2.3/functions/shape/filllineargradient"}},g={},b=[],N={toc:b};function f(e){var t,n=e,{components:r}=n,u=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},N),u),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Define a graphical slider on a given drawing."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("p",null,"=DRAW.SLIDER(X,Y,Width,Height,lineColor,FillColor,AngleLabel,Value,Min,Max,Step,Marker,FormatRange,StartAngle,EndAngle, FormatRange)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"X"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"X Coordinate in 1/100th mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Y"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Y Coordinate in 1/100th mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Width"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Width in 1/100th mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Height"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Height in 1/100th mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"LineColor"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Optional. Options: ",(0,a.kt)("br",null)," - ",(0,a.kt)("inlineCode",{parentName:"td"},"None")," for no line ",(0,a.kt)("br",null)," - Hexadecimal color value (",(0,a.kt)("inlineCode",{parentName:"td"},"#FF0000")," for Red)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"FillColor"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),'Optional. - Hexadecimal color value ("#FF0000" for Red)')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Angle"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Optional. Angle in radians.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Label"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Label to display")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Value"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Optional. Current state of the button. TRUE for pushed and FALSE for released. If a cell reference is used, a value change from user interaction will be pushed into that cell.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Min"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Minimum value displayed in the knob.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Max"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Maximum value displayed in the knob.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Step"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Step to use for interaction while changing the knob value.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Marker"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Optional. Marker style to indicate the current value. Allowed values are: ",(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"none")," ",(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"arrowinner")," ",(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"line"),"  ",(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"circlesmall")," ",(0,a.kt)("br",null)," Default is a large circle.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"FormatRange"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Optional. Cell range to provide additional scale information. It must be a range with 3 columns. The values in the first column provides a scale value. The value in the second column provides a label, that is displayed instead of the scale value. This is optional. The value in the third column can provide a hexadecimal color value. This is used to color the scale between the last value and the current value in column one. This way you can define a colored scale indicating valid, invalid oder desired values ranges. See the sample below.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return Value")),(0,a.kt)("p",null,"TRUE, if slider could be created."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Function"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Result"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Comment"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),'=DRAW.SLIDER(51800,20705,14314,6509,"#AAAAAA","#DDDDDD",,"Slider",A1,0,100,5,,D11:F13)'),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"TRUE"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Draw a slider with an interval from 0 to 100 and a step value of 5. As a format range is given, the slider scale will be colored and custom labels will be applied. The selected value will be pushed into cell A1.")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"ROW"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"D"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"E"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"F"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"11"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"0"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Bad"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"#","FF0000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"12"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"30"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Average"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"#","00FF00")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"13"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"70"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Good"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"#","0000FF")))))}f.isMDXComponent=!0}}]);