(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{283:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),c=(n(0),n(375)),o={id:"kafkapublish",title:"KAFKA.PUBLISH",sidebar_label:"KAFKA.PUBLISH"},s={unversionedId:"streamsheets/functions/streams/kafkapublish",id:"streamsheets/functions/streams/kafkapublish",isDocsHomePage:!1,title:"KAFKA.PUBLISH",description:"Publishes either a message or an arbitrary value using a specified",source:"@site/docs\\streamsheets\\functions\\streams\\kafkapublish.md",slug:"/streamsheets/functions/streams/kafkapublish",permalink:"/latest/docs/streamsheets/functions/streams/kafkapublish",version:"current",sidebar_label:"KAFKA.PUBLISH",sidebar:"someSidebar",previous:{title:"KAFKA.COMMAND",permalink:"/latest/docs/streamsheets/functions/streams/kafkacommand"},next:{title:"KAFKA.QUERY",permalink:"/latest/docs/streamsheets/functions/streams/kafkaquery"}},b=[],i={rightToc:b};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Publishes either a message or an arbitrary value using a specified\nProducer and topic. To reference a message from the outbox use the\noutbox function and to reference a message from the inbox use\nINBOX. You can use the Function Wizard for\nthis function."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Syntax")),Object(c.b)("p",null,"=KAFKA.PUBLISH(Producer, Message, Topic)"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Arguments")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Producer"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Producer to use for publishing.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Message"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Either an existing message from the outbox a JSON or a primitive value to publish.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Topic"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Topic the message is published to.")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Return Value")),Object(c.b)("p",null,"TRUE, if successful."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Examples")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Function"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Result"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Comment"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'=KAFKA.PUBLISH("Kafka Producer", "Message", "test")'),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"TRUE"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'This publishes the string value "Message" using the "Kafka Producer" to the topic "test"')))))}l.isMDXComponent=!0},375:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,O=u["".concat(o,".").concat(m)]||u[m]||p[m]||c;return n?a.a.createElement(O,s(s({ref:t},i),{},{components:n})):a.a.createElement(O,s({ref:t},i))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var s={};for(var b in t)hasOwnProperty.call(t,b)&&(s[b]=t[b]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<c;i++)o[i]=n[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);