(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[3921],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=p(n),k=r,c=s["".concat(d,".").concat(k)]||s[k]||m[k]||l;return n?a.createElement(c,i(i({ref:e},u),{},{components:n})):a.createElement(c,i({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},25475:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return d},default:function(){return u}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),i={id:"drawslider",title:"DRAW.SLIDER",sidebar_label:"DRAW.SLIDER"},o={unversionedId:"functions/shape/drawslider",id:"functions/shape/drawslider",isDocsHomePage:!1,title:"DRAW.SLIDER",description:"Define a graphical slider on a given drawing.",source:"@site/streamsheets/functions/shape/drawslider.md",sourceDirName:"functions/shape",slug:"/functions/shape/drawslider",permalink:"/streamsheets/2.3/functions/shape/drawslider",version:"current",sidebar_label:"DRAW.SLIDER",frontMatter:{id:"drawslider",title:"DRAW.SLIDER",sidebar_label:"DRAW.SLIDER"},sidebar:"someSidebar",previous:{title:"DRAW.RECTANGLE",permalink:"/streamsheets/2.3/functions/shape/drawrectangle"},next:{title:"FILLLINEARGRADIENT",permalink:"/streamsheets/2.3/functions/shape/filllineargradient"}},d=[],p={toc:d};function u(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Define a graphical slider on a given drawing."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("p",null,"=DRAW.SLIDER(UniqueID, Container, Name, X, Y, Width, Height, LineFormat,\nFillFormat, Angle, Attributes, Events, Angle, RotCenter, Label,\nLabelFont, Value, Min, Max, Step ","[",",ScaleFont, Marker, FormatRange","]",")"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UniqueId"),(0,l.kt)("td",{parentName:"tr",align:null},"Unique Id of drawing object. Should not be modified and must be unique.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Container"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Name of the container object this object is placed within. Coordinates are relative then.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Name"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of drawing object. Must be unique.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"X Coordinate in 1/100th mm")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"Y Coordinate in 1/100th mm")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Width"),(0,l.kt)("td",{parentName:"tr",align:null},"Width in 1/100th mm")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Height"),(0,l.kt)("td",{parentName:"tr",align:null},"Height in 1/100th mm")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LineFormat"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Options: ",(0,l.kt)("br",null)," - ",(0,l.kt)("inlineCode",{parentName:"td"},"None")," for no line ",(0,l.kt)("br",null)," - Hexadecimal color value (",(0,l.kt)("inlineCode",{parentName:"td"},"#FF0000")," for Red) ",(0,l.kt)("br",null)," - JSON String created using lineformat")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FillFormat"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Options: ",(0,l.kt)("br",null),' - "None" for no fill  ',(0,l.kt)("br",null),'- Hexadecimal color value ("#FF0000" for Red) ',(0,l.kt)("br",null)," - JSON String created using ",(0,l.kt)("a",{parentName:"td",href:"../shape/fillpattern"},"FILLPATTERN"),", ",(0,l.kt)("a",{parentName:"td",href:"../shape/filllineargradient"},"FILLLINEARGRADIENT"),", ",(0,l.kt)("a",{parentName:"td",href:"../shape/fillradialgradient"},"FILLRADIALGRADIENT"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Attributes"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. JSON String created using ",(0,l.kt)("a",{parentName:"td",href:"../shape/attributes"},"ATTRIBUTES"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Events"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. JSON String created using ",(0,l.kt)("a",{parentName:"td",href:"../events/events"},"EVENTS"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Angle"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Angle in radians.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RotCenter"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. This defines, where the object rotates around:  ",(0,l.kt)("br",null),"   ",(0,l.kt)("inlineCode",{parentName:"td"},"0"),": Top left corner  ",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"1"),": Top center ",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"2"),": Top right corner ",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"4"),": Center (default) ",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"5"),": Right center ",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"6"),": Bottom left corner ",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"7"),": Bottom center ",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"8"),": Bottom right corner")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"Label to display")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LabelFont"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Options: ",(0,l.kt)("br",null),' - "None" for no fill  ',(0,l.kt)("br",null),'- Hexadecimal color value ("#FF0000" for Red) ',(0,l.kt)("br",null)," - JSON String created using ",(0,l.kt)("a",{parentName:"td",href:"../shape/fontformat"},"FONTFORMAT"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Value"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Current state of the button. TRUE for pushed and FALSE for released. If a cell reference is used, a value change from user interaction will be pushed into that cell.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Min"),(0,l.kt)("td",{parentName:"tr",align:null},"Minimum value displayed in the slider.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Max"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum value displayed in the slider.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Step"),(0,l.kt)("td",{parentName:"tr",align:null},"Step to use for interaction while changing the slider value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ScaleFont"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Font to use for the slider scale. JSON String created using ",(0,l.kt)("a",{parentName:"td",href:"../shape/fontformat"},"FONTFORMAT"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Marker"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Marker style to indicate the current value. Allowed values are: ",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"none")," ",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"square")," ",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"line"),"  ",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"rect"),"  ",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"arrowtop")," ",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"arrowbottom")," ",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"circlesmall")," ",(0,l.kt)("br",null)," Default is a large circle.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FormatRange"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Cell range to provide additional scale information. It must be a range with 3 columns. The values in the first column provides a scale value. The value in the second column provides a label, that is displayed instead of the scale value. This is optional. The value in the third column can provide a hexadecimal color value. This is used to color the scale between the last value and the current value in column one. This way you can define a colored scale indicating valid, invalid oder desired values ranges. See the sample below.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return Value")),(0,l.kt)("p",null,"TRUE, if slider could be created."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Function"),(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'=DRAW.SLIDER("ID1",,"Slider1",1000,1000,1000,2500,,,',(0,l.kt)("br",null),',,,,"Slider",,A1,0,100,10,,"arrowbottom",D11:F13)'),(0,l.kt)("td",{parentName:"tr",align:null},"TRUE"),(0,l.kt)("td",{parentName:"tr",align:null},"Draw a slider with an interval from 0 to 100 and a step value of 10. As a format range is given, the slider scale will be colored and custom labels will be applied. The selected value will be pushed into cell A1.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ROW"),(0,l.kt)("th",{parentName:"tr",align:null},"D"),(0,l.kt)("th",{parentName:"tr",align:null},"E"),(0,l.kt)("th",{parentName:"tr",align:null},"F"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"11"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Bad"),(0,l.kt)("td",{parentName:"tr",align:null},"#","FF0000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null},"30"),(0,l.kt)("td",{parentName:"tr",align:null},"Average"),(0,l.kt)("td",{parentName:"tr",align:null},"#","00FF00")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"13"),(0,l.kt)("td",{parentName:"tr",align:null},"70"),(0,l.kt)("td",{parentName:"tr",align:null},"Good"),(0,l.kt)("td",{parentName:"tr",align:null},"#","0000FF")))))}u.isMDXComponent=!0}}]);