"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[63082],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),p=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=p(n),c=r,k=s["".concat(u,".").concat(c)]||s[c]||m[c]||l;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},36926:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return s}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={id:"drawslider",title:"DRAW.SLIDER",sidebar_label:"DRAW.SLIDER"},u=void 0,p={unversionedId:"functionss/shape/drawslider",id:"version-2.5/functionss/shape/drawslider",title:"DRAW.SLIDER",description:"Define a graphical slider on a given drawing.",source:"@site/streamsheets_versioned_docs/version-2.5/functionss/shape/drawslider.md",sourceDirName:"functionss/shape",slug:"/functionss/shape/drawslider",permalink:"/streamsheets/2.5/functionss/shape/drawslider",tags:[],version:"2.5",frontMatter:{id:"drawslider",title:"DRAW.SLIDER",sidebar_label:"DRAW.SLIDER"}},d=[],m={toc:d};function s(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Define a graphical slider on a given drawing."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("p",null,"=DRAW.SLIDER(X, Y, Width, Height, ","[","LineColor","]",", ","[","FillColor","]",", ","[","Angle","]",", Label, ","[","Value","]",", Min, Max, Step, ","[","Marker","]",", ","[","FormatRange","]",")"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"X Coordinate in 1/100th mm")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"Y Coordinate in 1/100th mm")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Width"),(0,l.kt)("td",{parentName:"tr",align:null},"Width in 1/100th mm")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Height"),(0,l.kt)("td",{parentName:"tr",align:null},"Height in 1/100th mm")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LineColor (optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"Options: ",(0,l.kt)("br",null)," - ",(0,l.kt)("inlineCode",{parentName:"td"},"None")," for no line ",(0,l.kt)("br",null)," - Hexadecimal color value (",(0,l.kt)("inlineCode",{parentName:"td"},"#FF0000")," for Red)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FillColor (optional)"),(0,l.kt)("td",{parentName:"tr",align:null},'- Hexadecimal color value ("#FF0000" for Red)')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Angle (optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"Angle in radians.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"Label to display")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Value (optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"Current state of the button. TRUE for pushed and FALSE for released. If a cell reference is used, a value change from user interaction will be pushed into that cell.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Min"),(0,l.kt)("td",{parentName:"tr",align:null},"Minimum value displayed in the knob.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Max"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum value displayed in the knob.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Step"),(0,l.kt)("td",{parentName:"tr",align:null},"Step to use for interaction while changing the knob value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Marker (optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"Marker style to indicate the current value. Allowed values are: ",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"none")," ",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"arrowinner")," ",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"line"),"  ",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"circlesmall")," ",(0,l.kt)("br",null)," Default is a large circle.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FormatRange (optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"Cell range to provide additional scale information. It must be a range with 3 columns. The values in the first column provides a scale value. The value in the second column provides a label, that is displayed instead of the scale value. This is optional. The value in the third column can provide a hexadecimal color value. This is used to color the scale between the last value and the current value in column one. This way you can define a colored scale indicating valid, invalid oder desired values ranges. See the sample below.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return")),(0,l.kt)("p",null,"TRUE, if slider could be created."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Hint")),(0,l.kt)("p",null,"This function should not be used in a cell"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"A"),(0,l.kt)("th",{parentName:"tr",align:null},"B"),(0,l.kt)("th",{parentName:"tr",align:null},"C"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Bad"),(0,l.kt)("td",{parentName:"tr",align:null},"#FF0000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"30"),(0,l.kt)("td",{parentName:"tr",align:null},"Average"),(0,l.kt)("td",{parentName:"tr",align:null},"#00FF00")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"70"),(0,l.kt)("td",{parentName:"tr",align:null},"Good"),(0,l.kt)("td",{parentName:"tr",align:null},"#0000FF")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Formula"),(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("pre",null,(0,l.kt)("code",null,"${formula}"))),(0,l.kt)("td",{parentName:"tr",align:null},"TRUE"),(0,l.kt)("td",{parentName:"tr",align:null},"Draw a slider with an interval from 0 to 100 and a step value of 5. As a format range is given, the slider scale will be colored and custom labels will be applied. The selected value will be pushed into cell A1.")))))}s.isMDXComponent=!0}}]);