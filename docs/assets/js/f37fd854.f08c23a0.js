(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[88110],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},18303:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s},default:function(){return p}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),l={id:"mqttpublish",title:"MQTT.PUBLISH",sidebar_label:"MQTT.PUBLISH"},i={unversionedId:"functions/streams/mqttpublish",id:"functions/streams/mqttpublish",isDocsHomePage:!1,title:"MQTT.PUBLISH",description:"Publishes either a message or an arbitrary value using a specified",source:"@site/streamsheets/functions/streams/mqttpublish.md",sourceDirName:"functions/streams",slug:"/functions/streams/mqttpublish",permalink:"/streamsheets/2.4/functions/streams/mqttpublish",version:"current",sidebar_label:"MQTT.PUBLISH",frontMatter:{id:"mqttpublish",title:"MQTT.PUBLISH",sidebar_label:"MQTT.PUBLISH"},sidebar:"someSidebar",previous:{title:"MONGO.STORE",permalink:"/streamsheets/2.4/functions/streams/mongostore"},next:{title:"OPCUA.READ",permalink:"/streamsheets/2.4/functions/streams/opcuaread"}},s=[],u={toc:s};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Publishes either a message or an arbitrary value using a specified\nProducer and topic. To reference a message from the outbox use the\noutbox function and to reference a message from the inbox use\nINBOX. You can use the Function Wizard for\nthis function."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Syntax")),(0,o.kt)("p",null,"=MQTT.PUBLISH(Producer, MessageOrValue, Topic ","[",", QoS, User\nProperties","]",")"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Producer"),(0,o.kt)("td",{parentName:"tr",align:null},"Producer to use for publishing.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MessageOrValue"),(0,o.kt)("td",{parentName:"tr",align:null},"Either an existing message from the outbox or a value to publish.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Topic"),(0,o.kt)("td",{parentName:"tr",align:null},"Topic that is appended to the base topic defined in the Connector.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"QoS"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. Quality of Service. This option defines the reliability of the publish operation. It depends on the used protocol.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"User Properties"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. Define Metadata.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Return Value")),(0,o.kt)("p",null,"TRUE, if no ",(0,o.kt)("a",{parentName:"p",href:"../../other#error-codes"},"error"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples")),(0,o.kt)("p",null,'All examples assume a base topic with the value "/cedalo" in the\nconnector.'),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Function"),(0,o.kt)("th",{parentName:"tr",align:null},"Result"),(0,o.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"=MQTT.PUBLISH(","|",'MQTT Producer, "Message", "test")'),(0,o.kt)("td",{parentName:"tr",align:null},"TRUE"),(0,o.kt)("td",{parentName:"tr",align:null},'This publishes the string value "Message" using the "MQTT Producer" under the topic "cedalo/test"')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"=MQTT.PUBLISH(","|",'MQTT Producer, OUTBOX("Message"), "test")'),(0,o.kt)("td",{parentName:"tr",align:null},"TRUE"),(0,o.kt)("td",{parentName:"tr",align:null},'This publishes the outbox message with id "Message" using the "MQTT Producer" and topic "cedalo/test"')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"=MQTT.PUBLISH(","|",'MQTT Producer, JSON(A1:C2), "test")'),(0,o.kt)("td",{parentName:"tr",align:null},"TRUE"),(0,o.kt)("td",{parentName:"tr",align:null},'This publishes a JSON object created by the json function using the "MQTT Producer" and topic "cedalo/test"')))))}p.isMDXComponent=!0}}]);