(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[69638],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84483:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={id:"mqttpublish",title:"MQTT.PUBLISH",sidebar_label:"MQTT.PUBLISH"},l={unversionedId:"functions/streams/mqttpublish",id:"version-2.4/functions/streams/mqttpublish",isDocsHomePage:!1,title:"MQTT.PUBLISH",description:"Publishes either a message or an arbitrary value using a specified",source:"@site/streamsheets_versioned_docs/version-2.4/functions/streams/mqttpublish.md",sourceDirName:"functions/streams",slug:"/functions/streams/mqttpublish",permalink:"/streamsheets/2.4/functions/streams/mqttpublish",version:"2.4",sidebar_label:"MQTT.PUBLISH",frontMatter:{id:"mqttpublish",title:"MQTT.PUBLISH",sidebar_label:"MQTT.PUBLISH"},sidebar:"version-2.4/someSidebar",previous:{title:"MONGO.STORE",permalink:"/streamsheets/2.4/functions/streams/mongostore"},next:{title:"OPCUA.READ",permalink:"/streamsheets/2.4/functions/streams/opcuaread"}},s=[],u={toc:s};function p(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Publishes either a message or an arbitrary value using a specified\nProducer and topic. To reference a message from the outbox use the\noutbox function and to reference a message from the inbox use\nINBOX. You can use the Function Wizard for\nthis function."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Syntax")),(0,o.kt)("p",null,"=MQTT.PUBLISH(Producer, MessageOrValue, Topic ","[",", QoS, User\nProperties","]",")"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Producer"),(0,o.kt)("td",{parentName:"tr",align:null},"Producer to use for publishing.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MessageOrValue"),(0,o.kt)("td",{parentName:"tr",align:null},"Either an existing message from the outbox or a value to publish.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Topic"),(0,o.kt)("td",{parentName:"tr",align:null},"Topic that is appended to the base topic defined in the Connector.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"QoS"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. Quality of Service. This option defines the reliability of the publish operation. It depends on the used protocol.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"User Properties"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. Define Metadata.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Return Value")),(0,o.kt)("p",null,"TRUE, if no ",(0,o.kt)("a",{parentName:"p",href:"../../other#error-codes"},"error"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples")),(0,o.kt)("p",null,'All examples assume a base topic with the value "/cedalo" in the\nconnector.'),(0,o.kt)("img",{src:n(77001).Z,width:"50%"}),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Function"),(0,o.kt)("th",{parentName:"tr",align:null},"Result"),(0,o.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"=MQTT.PUBLISH(","|",'MQTT Producer, JSON(A1:B2), "test")'),(0,o.kt)("td",{parentName:"tr",align:null},"TRUE"),(0,o.kt)("td",{parentName:"tr",align:null},'This publishes a JSON object created by the json function using the "MQTT Producer" and topic "cedalo/test"')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"=MQTT.PUBLISH(","|",'MQTT Producer, "Message", "test")'),(0,o.kt)("td",{parentName:"tr",align:null},"TRUE"),(0,o.kt)("td",{parentName:"tr",align:null},'This publishes the string value "Message" using the "MQTT Producer" under the topic "cedalo/test"')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"=MQTT.PUBLISH(","|",'MQTT Producer, OUTBOX("Message"), "test")'),(0,o.kt)("td",{parentName:"tr",align:null},"TRUE"),(0,o.kt)("td",{parentName:"tr",align:null},'This publishes the outbox message with id "Message" using the "MQTT Producer" and topic "cedalo/test"')))))}p.isMDXComponent=!0},77001:function(e,t,n){"use strict";t.Z=n.p+"assets/images/mqttpub-c4b72fb988590359d4f9d54c153421ed.png"}}]);