"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[76519],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return c}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),s=u(n),c=a,k=s["".concat(p,".").concat(c)]||s[c]||m[c]||l;return n?r.createElement(k,o(o({ref:e},d),{},{components:n})):r.createElement(k,o({ref:e},d))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},12311:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return s}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={id:"drawknob",title:"DRAW.KNOB",sidebar_label:"DRAW.KNOB"},p=void 0,u={unversionedId:"functions/shape/drawknob",id:"version-2.5/functions/shape/drawknob",title:"DRAW.KNOB",description:"Define a graphical knob on a given drawing.",source:"@site/streamsheets_versioned_docs/version-2.5/functions/shape/drawknob.md",sourceDirName:"functions/shape",slug:"/functions/shape/drawknob",permalink:"/streamsheets/2.5/functions/shape/drawknob",tags:[],version:"2.5",frontMatter:{id:"drawknob",title:"DRAW.KNOB",sidebar_label:"DRAW.KNOB"},sidebar:"version-2.5/someSidebar",previous:{title:"DRAW.ELLIPSE",permalink:"/streamsheets/2.5/functions/shape/drawellipse"},next:{title:"DRAW.LABEL",permalink:"/streamsheets/2.5/functions/shape/drawlabel"}},d=[],m={toc:d};function s(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Define a graphical knob on a given drawing."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("p",null,"=DRAW.KNOB(X, Y, Width, Height, ","[","LineColor","]",", ","[","FillColor","]",", ","[","Angle","]",", Label, ","[","Value","]",", Min, Max, Step, ","[","Marker","]",")"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"X Coordinate in 1/100th mm")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"Y Coordinate in 1/100th mm")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Width"),(0,l.kt)("td",{parentName:"tr",align:null},"Width in 1/100th mm")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Height"),(0,l.kt)("td",{parentName:"tr",align:null},"Height in 1/100th mm")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LineColor (optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"Options: ",(0,l.kt)("br",null)," - ",(0,l.kt)("inlineCode",{parentName:"td"},"None")," for no line ",(0,l.kt)("br",null)," - Hexadecimal color value (",(0,l.kt)("inlineCode",{parentName:"td"},"#FF0000")," for Red)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FillColor (optional)"),(0,l.kt)("td",{parentName:"tr",align:null},'- Hexadecimal color value ("#FF0000" for Red)')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Angle (optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"Angle in radians.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"Label to display")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Value (optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"Current state of the button. TRUE for pushed and FALSE for released. If a cell reference is used, a value change from user interaction will be pushed into that cell.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Min"),(0,l.kt)("td",{parentName:"tr",align:null},"Minimum value displayed in the knob.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Max"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum value displayed in the knob.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Step"),(0,l.kt)("td",{parentName:"tr",align:null},"Step to use for interaction while changing the knob value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Marker (optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"Marker style to indicate the current value. Allowed values are: ",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"none")," ",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"arrowinner")," ",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"line"),"  ",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"circlesmall")," ",(0,l.kt)("br",null)," Default is a large circle.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return")),(0,l.kt)("p",null,"TRUE, if button could be created."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Hint")),(0,l.kt)("p",null,"This function should not be used in a cell"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Formula"),(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("pre",null,(0,l.kt)("code",null,'=DRAW.KNOB(8711,14368,9578,3942,,,,"Knob",50,0,100,5,,0,0.52,5.76)'))),(0,l.kt)("td",{parentName:"tr",align:null},"TRUE"),(0,l.kt)("td",{parentName:"tr",align:null},"A knob with an interval from 0 to 100 and a step value of 5. Current Value is 50.")))))}s.isMDXComponent=!0}}]);