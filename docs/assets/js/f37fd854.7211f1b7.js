(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[8110],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(f,o(o({ref:e},p),{},{components:n})):r.createElement(f,o({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18303:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s},default:function(){return p}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),o={id:"mqttpublish",title:"MQTT.PUBLISH",sidebar_label:"MQTT.PUBLISH"},i={unversionedId:"functions/streams/mqttpublish",id:"functions/streams/mqttpublish",isDocsHomePage:!1,title:"MQTT.PUBLISH",description:"Publishes either a message or an arbitrary value using a specified",source:"@site/streamsheets/functions/streams/mqttpublish.md",sourceDirName:"functions/streams",slug:"/functions/streams/mqttpublish",permalink:"/streamsheets/2.3/functions/streams/mqttpublish",version:"current",sidebar_label:"MQTT.PUBLISH",frontMatter:{id:"mqttpublish",title:"MQTT.PUBLISH",sidebar_label:"MQTT.PUBLISH"},sidebar:"someSidebar",previous:{title:"MONGO.STORE",permalink:"/streamsheets/2.3/functions/streams/mongostore"},next:{title:"OPCUA.READ",permalink:"/streamsheets/2.3/functions/streams/opcuaread"}},s=[],u={toc:s};function p(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Publishes either a message or an arbitrary value using a specified\nProducer and topic. To reference a message from the outbox use the\noutbox function and to reference a message from the inbox use\nINBOX. You can use the Function Wizard for\nthis function."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("p",null,"=MQTT.PUBLISH(Producer, MessageOrValue, Topic ","[",", QoS, User\nProperties","]",")"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Producer"),(0,l.kt)("td",{parentName:"tr",align:null},"Producer to use for publishing.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MessageOrValue"),(0,l.kt)("td",{parentName:"tr",align:null},"Either an existing message from the outbox or a value to publish.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Topic"),(0,l.kt)("td",{parentName:"tr",align:null},"Topic that is appended to the base topic defined in the Connector.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QoS"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Quality of Service. This option defines the reliability of the publish operation. It depends on the used protocol.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"User Properties"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Define Metadata.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return Value")),(0,l.kt)("p",null,"TRUE, if successful."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("p",null,'All examples assume a base topic with the value "/cedalo" in the\nconnector.'),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Function"),(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"=MQTT.PUBLISH(","|",'MQTT Producer, "Message", "test")'),(0,l.kt)("td",{parentName:"tr",align:null},"TRUE"),(0,l.kt)("td",{parentName:"tr",align:null},'This publishes the string value "Message" using the "MQTT Producer" under the topic "cedalo/test"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"=MQTT.PUBLISH(","|",'MQTT Producer, OUTBOX("Message"), "test")'),(0,l.kt)("td",{parentName:"tr",align:null},"TRUE"),(0,l.kt)("td",{parentName:"tr",align:null},'This publishes the outbox message with id "Message" using the "MQTT Producer" and topic "cedalo/test"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"=MQTT.PUBLISH(","|",'MQTT Producer, JSON(A1:C2), "test")'),(0,l.kt)("td",{parentName:"tr",align:null},"TRUE"),(0,l.kt)("td",{parentName:"tr",align:null},'This publishes a JSON object created by the json function using the "MQTT Producer" and topic "cedalo/test"')))))}p.isMDXComponent=!0}}]);