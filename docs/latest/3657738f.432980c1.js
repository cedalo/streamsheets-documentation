(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(376)),c={id:"streamsheets-streams",title:"Streams",sidebar_label:"Streams"},i={unversionedId:"streamsheets/tutorials/streamsheets-streams",id:"streamsheets/tutorials/streamsheets-streams",isDocsHomePage:!1,title:"Streams",description:"Streams build the link to the outside wolrd for any data stream you want",source:"@site/docs\\streamsheets\\tutorials\\streams.md",slug:"/streamsheets/tutorials/streamsheets-streams",permalink:"/latest/docs/streamsheets/tutorials/streamsheets-streams",version:"current",sidebar_label:"Streams"},s=[{value:"Connector",id:"connector",children:[{value:"MQTT Connector",id:"mqtt-connector",children:[]}]},{value:"Producer",id:"producer",children:[{value:"MQTT Producer",id:"mqtt-producer",children:[]}]},{value:"Consumer",id:"consumer",children:[{value:"MQTT Consumer",id:"mqtt-consumer",children:[]}]}],l={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,'Streams build the link to the outside wolrd for any data stream you want\nto build. Architectural we are working with Connectors, Consumer and\nProducer. To access or create your streams go to the apps dashboard and\nselect the tab "streams".'),Object(a.b)("h2",{id:"connector"},"Connector"),Object(a.b)("p",null,'A Connector is always the foundation of our communication architecture.\nConsumer and Producer reference to a Connector and define the details.\nThe connector itself "connects" the Streamsheet to a provider, you can\nchoose from a preconfigured list. Once a provider is choosen, there are\na variety of settings, which can be applied to define the details of\nyour data stream.'),Object(a.b)("h3",{id:"mqtt-connector"},"MQTT Connector"),Object(a.b)("p",null,"The MQTT Connector has the following possible settings."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Name:")," The Name of your Connector"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Provider:")," you can\xb4t change the provider. You choose it while\ncreating the connector."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"URL:")," Choose the MQTT Broke you want to use. If you want to use\nour own broker, which is hosted by the Stream Sheet Server, type in\n",Object(a.b)("inlineCode",{parentName:"li"},"broker")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Port:")," Choose the port you will be using to transfer the data."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"User Name & Password:")," If your URL needs identification, you can\ntype in your credentials. For local usage not neccessary."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Base Topic:")," The Base topic describes where the connector will be\nconnected to."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Retain Message:")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"QoS:")," Stands for quality of service. You have the choice between:\nAt most once, At least once, Exactly once."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Label:")," Choose a label to categorize the Connector and to\npossibly administer usage rights over our Label system.")),Object(a.b)("h2",{id:"producer"},"Producer"),Object(a.b)("p",null,"A Producer is used in a Function. It directs the data stream out of the\nStream Sheet. The Function together with the Producer defines where your\ndata will be heading. A Producer is always connected to a Connector,\nwhich serves as the foundation of a Producer. Once the Connector is\nchoosen, there are some additional settings within the Producer."),Object(a.b)("h3",{id:"mqtt-producer"},"MQTT Producer"),Object(a.b)("p",null,"The MQTT Producer has the following possible settings:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Name:")," The Name of your Producer."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Connector:")," Choose the connected Connector."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Data Format:")," Choose the Data Format a Producer will publish the\nMessages in."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Topic:")," Extend the Base Topic of the Connector. The Message will\nbe sent to the full topic branch defined through Connector, Producer\nand Function (ConnectorTopic/ProducerTopic/FunctionTopic)."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Label:")," Choose a label to categorize the Connector and to\npossibly administer usage rights over our Label system.")),Object(a.b)("h2",{id:"consumer"},"Consumer"),Object(a.b)("p",null,"A Consumer is always connected to the Inbox of a Stream Sheet. It\ndefines the details of the data stream comming into a Stream Sheet. A\nConsumer is always connected to a Connector. Once the Connector is\nchoosen, there are some additional settings within the Consumer."),Object(a.b)("h3",{id:"mqtt-consumer"},"MQTT Consumer"),Object(a.b)("p",null,"The MQTT Consumer has the following Settings:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Name:")," The Name of your Consumer."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Connector:")," Choose the connected Connector."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Data Format:")," Choose the Data Format you wish to accept in the\nInbox."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Client ID:")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Topics:"),' Choose one or more topics the Consumer will listen to.\nUse the comma "," to seperate topics from another. The topics always\nextend the Connector Base Topic.'),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Filter:")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Label Attribute:")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"ID Attribute:")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Label:")," Choose a label to categorize the Connector and to\npossibly administer usage rights over our Label system.")))}u.isMDXComponent=!0},376:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),h=r,p=b["".concat(c,".").concat(h)]||b[h]||m[h]||a;return n?o.a.createElement(p,i(i({ref:t},l),{},{components:n})):o.a.createElement(p,i({ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);