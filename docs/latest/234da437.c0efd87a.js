(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),r=(n(0),n(375)),s={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started"},i={unversionedId:"streamsheets/getting-started",id:"streamsheets/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"If you are new to Streamsheets, this section offers a",source:"@site/docs\\streamsheets\\gettingstarted.md",slug:"/streamsheets/getting-started",permalink:"/latest/docs/streamsheets/getting-started",version:"current",sidebar_label:"Getting Started",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/latest/docs/streamsheets/installation"},next:{title:"ABS",permalink:"/latest/docs/streamsheets/functions/math/abs"}},c=[{value:"|",id:"",children:[]}],l={rightToc:c};function d(e){var t=e.components,s=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,s,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"If you are new to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"./maincomponents/components-streamsheet"}),"Streamsheets"),", this section offers a\nquick introduction to help you understand some of the basic principles.\nIn this step-by-step guide we will build an App, which is meant to\nquickly illustrate how to generate, send and receive data with\nStreamsheets. More specifically, we will create data in one Streamsheet,\ncontinuously send it to the internal MQTT Broker and this way\nproduce a data stream which we will then receive in another\nStreamsheet.  "),Object(r.b)("p",null,"Let\xb4s get started!"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Step 1: Create an App"),"  "),Object(r.b)("p",null,"After logging in, you are taken to the App Dashboard which lists all\nApps you have access to. To create your first App, look to the\nbottom-right corner and identify the \u201cAdd\u201d button (it is the \u201cplus\u201d).\nClick it and choose a meaningful name for your App, e.g. \u201cGreat Start\u201d\nor \u201cCats and Dogs\u201d. The option \u201cNo Consumer\u201d is pre-selected and means\nthat we will create an App which does not have an input data stream\nconnected to it. This is fine for now because, first, we have to create\nsome data."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Step 2: Generate Data"),"  "),Object(r.b)("p",null,Object(r.b)("img",{alt:"Step2",src:n(449).default}),"  "),Object(r.b)("p",null,"Since we do not have a real data streams connected to our application\nyet, we simulate some to work with. A simple way to do this is to use\nthe function ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"./functions/math/randbetween"}),"RANDBETWEEN"),". It creates random values between a\nminimum and a maximum. Let\xb4s create two values, one beneath the other\nand name them. Write the names left of the values, e.g. \u201cCats\u201d and\n\u201cDogs\u201d. Then, select all four cells, right-click and define them as a\nJSON Range. A JSON is essentially a number of key-value pairs in which\nthe keys can be thought of as the names for the respective values"),Object(r.b)("p",null,"Now, this cell range is not only a range in the sheet but also a JSON\nobject which is continuously built with every calculation step of the\nsheet.",Object(r.b)("br",{parentName:"p"}),"\n","To send these JSON objects and this way create an outgoing data stream,\nwe need Step 3."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Step 3: Create a Consumer and Producer"),"  "),Object(r.b)("p",null,"At this point a small theoretical lesson about Streamsheets is\nhelpful:  "),Object(r.b)("p",null,"To get data into a sheet or send data from a sheet, connections need to\nbe defined. We call these connections Streams.",Object(r.b)("br",{parentName:"p"}),"\n","Streams always consist of two parts, a Connector and Consumer or a\nConnector and a Producer. You can also think of them as two layers in\nwhich Connectors form the foundation that Consumers and Producers are\nbased on.",Object(r.b)("br",{parentName:"p"}),"\n","Connectors hold the general information, such as the Host URL, to\nconnect Streamsheets to the outside world. Consumers and Producers, on\nthe other hand, further specify the input (Consumer) and output streams\n(Producer).",Object(r.b)("br",{parentName:"p"}),"\n",'All three Stream resources are defined in the "Stream" Dashboard.  '),Object(r.b)("p",null,'This step is optional. Default streams for the internal MQTT Broker are\nalready set. We still encourage you to try and setup your own streams.\nPlease go back to the "Apps" Dashboard and select the "Streams" Tab.  '),Object(r.b)("p",null,"You can either use the existing MQTT Connector or create a new one. To\nsend the simulated data via MQTT we need an outgoing Stream, thus we\nhave to set up a Producer. Select the MQTT","_",'Connector and add a new\nProducer by clicking on the "+"" button next to "Producer". Further\nsettings are optional.'),Object(r.b)("p",null,'As we are already in the Streams menu, let\xb4s quickly create a Consumer.\nAgain, click the "+"" button (this time next to "Consumers"). This time\nwe have to specify a topic as an additional parameter, e.g.\n\u201ccatsanddogs\u201d.  '),Object(r.b)("p",null,Object(r.b)("img",{alt:"Step3",src:n(450).default}),"  "),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},'The "base topic" in the MQTT Connector defines the top level of the\ntopic structure you are working with. E.g. a Consumer listening to the\ntopic "catsanddogs" really listens to ',"<","basetopic",">",'/catsanddogs. The\n"base topic" is optional.'))),Object(r.b)("h2",{id:""},"|"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Step 4: Produce a Message stream"),"  "),Object(r.b)("p",null,Object(r.b)("img",{alt:"Step4",src:n(451).default}),"  "),Object(r.b)("p",null,"Now, we switch back to our App. Should you have closed the tab, just go\nto the dashboard and open it again.",Object(r.b)("br",{parentName:"p"}),"\n","To send the created JSON Range, we select an empty cell beneath the\nrange and click \u201cInsert Stream Function\u201d in the tool bar. Choose\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"./functions/streams/mqttpublish"}),"MQTT.PUBLISH")," and as Stream the Producer you just\ncreated. The message parameter should already be prefilled referencing\nto the JSON Range above. If that is not the case, select the JSON range.\nTo complete ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"./functions/streams/mqttpublish"}),"MQTT.PUBLISH")," enter the MQTT topic you listed in the\nConsumer, possibly \u201ccatsanddogs\u201d, and click OK. Then, start the App by\nclicking \u201cPlay\u201d in the blue bar on the top."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Streamsheets calculate from ",Object(r.b)("strong",{parentName:"p"},"left to right")," and from ",Object(r.b)("strong",{parentName:"p"},"top to\nbottom"),". This means, first, row 1 is calculated from left to right,\nthen, row 2 followed by row 3 \u2026 until the end of the sheet is reached.\nAs a consequence, you typically ",Object(r.b)("strong",{parentName:"p"},"place a stream function behind the\ncells you want to send/produce"),". Placing the stream function before\nthese cells will send the values of the previous calculation step."))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Step 5: Consume a data stream"),"  "),Object(r.b)("p",null,"The easiest way to link an input data stream to a Streamsheet is to\nconnect a Consumer to its Inbox. Let\xb4s take this last step! Create\nanother Streamsheet in this App by clicking the \u201cplus\u201d icon in the\nbottom-right corner. In the new Streamsheet look to the top-left where\nit says \u201cInbox\u201d. Next to it is a cogwheel which takes you to the Inbox\nSettings. Select the Consumer you created before and change the\ncalculation mode to \u201cOn Message Arrival\u201d. In this mode a Streamsheet is\nonly calculated when messages arrive in its Inbox and not in certain\nintervals.  "),Object(r.b)("p",null,"Done?  "),Object(r.b)("p",null,"Great! You just set up connections to the local MQTT broker and created\nan App which produces as well as consumes MQTT data streams.  "),Object(r.b)("p",null,"Messages should be arriving in the Inbox of the second Streamsheet. If\nthat is not the case, check whether your App is running (on \u201cPlay\u201d),\nthat your first Streamsheet has the calculation mode \u201cContinuously\u201d and\nthat the topic in MQTT.PUBLISH() is the same as in the Consumer.  "),Object(r.b)("p",null,Object(r.b)("img",{alt:"Step5",src:n(452).default}),"  "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Optional Step: Ideas on what to do next"),"  "),Object(r.b)("p",null,"As mentioned in the beginning, this example serves as a quick\nintroduction.",Object(r.b)("br",{parentName:"p"}),"\n","Hence, why not extend this Streamsheet model a little? By dragging and\ndropping data points which you receive in the Inbox into the grid, you\ncreate a direct link between data stream and the spreadsheet world.\nConsequently, you can start processing data and build logic with\nspreadsheet formulas, e.g. to calculate KPIs, create dynamic dashboards\nand build decision engines.  "),Object(r.b)("p",null,Object(r.b)("img",{alt:"optionalstep",src:n(453).default}),"  "),Object(r.b)("p",null,"You will notice that you are working \u201clive\u201d on the message stream as\nincoming data is immediately transferred to the grid and formulas change\ntheir results accordingly. Additionally, you always see what the current\nresult in each cell is. Remember: with every calculation step the whole\nlogic is recalculated and, therefore, all conditions are reconsidered\nand based upon these, decisions can be taken. For instance, you could\nsend messages to an additional MQTT topic or a slack channel but only if\na certain threshold is met.  "),Object(r.b)("p",null,"Further, sending data from one Streamsheet or App to another is useful\nwhen building larger models, however, typically you want to set up\nconnections (Streams) to something outside of Streamsheets, too. Hence,\nwhy not set up a new Connector to get your Streamsheets communicating\nwith the outside world?"))}d.isMDXComponent=!0},375:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),p=a,b=u["".concat(s,".").concat(p)]||u[p]||h[p]||r;return n?o.a.createElement(b,i(i({ref:t},l),{},{components:n})):o.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},449:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Cats-and-Dogs-7ac8ece0a812c5253ecc90ff012cd262.gif"},450:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/SetupStreams-c3bf051224be253c3b5ba751fc874490.gif"},451:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Publish-0da35e364ac57fe498df0d202039235a.gif"},452:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Consume-1b9b4e7cc4d1d88b8858c1cd503ba815.gif"},453:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/optionalstep-883bd3e5854be506edb40f225981dad8.gif"}}]);