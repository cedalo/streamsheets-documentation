"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[28978],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8831:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>k,frontMatter:()=>d,metadata:()=>h,toc:()=>y});var a=n(3905),o=Object.defineProperty,r=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&u(e,n,t[n]);return e};const d={id:"maincomponents",title:"Introduction",sidebar_label:"Introduction"},m=void 0,h={unversionedId:"maincomponents",id:"version-2.5/maincomponents",title:"Introduction",description:"The three main components of the Streamsheet platform are: Streamsheets,",source:"@site/streamsheets_versioned_docs/version-2.5/maincomponents.md",sourceDirName:".",slug:"/maincomponents",permalink:"/streamsheets/maincomponents",draft:!1,tags:[],version:"2.5",frontMatter:{id:"maincomponents",title:"Introduction",sidebar_label:"Introduction"},sidebar:"version-2.5/someSidebar",previous:{title:"Introduction",permalink:"/streamsheets/introduction"},next:{title:"Administration",permalink:"/streamsheets/maincomponents/administration"}},f={},y=[{value:"Best Practices",id:"best-practices",level:2},{value:"Maintain",id:"maintain",level:2},{value:"Bug free",id:"bug-free",level:2},{value:"Resource-efficient",id:"resource-efficient",level:2}],g={toc:y};function k(e){var t,o=e,{components:u}=o,d=((e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(o,["components"]);return(0,a.kt)("wrapper",(t=p(p({},g),d),r(t,s({components:u,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"The three main components of the Streamsheet platform are: Streamsheets,\nApps and Streams. Streamsheets consume, process and produce\ndata streams. In Excel, one or several sheets always form part of a\nWorkbook. In a similar way, Streamsheets run in Apps and one App\naccommodates up to four sheets. Hence strictly speaking, the App\nconsumes, processes, and produces data streams, and the Streamsheets\ncontained in the App define how this happens exactly. Streams define the\nendpoints where messages are coming from and where they are sent to,\nhence data sources and data sinks. These endpoints can be e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"MQTT"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"Kafka")," topics as well as ",(0,a.kt)("inlineCode",{parentName:"p"},"OPC UA")," nodes, ",(0,a.kt)("inlineCode",{parentName:"p"},"REST")," APIs, database\ncollections or local directories."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"StMFlow",src:n(85084).Z,width:"1608",height:"922"})),(0,a.kt)("p",null,"Apps consume and produce streams. In the App","`","s Streamsheets the data\nflow logic is defined via functions."),(0,a.kt)("h2",p({},{id:"best-practices"}),"Best Practices"),(0,a.kt)("p",null,"With Streamsheets, many ways lead to your desired outcome. This is great because there is not only one route for you to create applications and realize your project.\nAs your abilities grow and your applications start to get more complex, there are a couple of best practices you should look into to ensure your application is easy to maintain, bug free and resource-efficient.\nThis guide provides some general recommendations and best practices for your app development. "),(0,a.kt)("h2",p({},{id:"maintain"}),"Maintain"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Divide tasks into multiple applications"))),(0,a.kt)("p",null,"Not filling one application with all your ideas, but implementing these in a number of smaller apps, leads to several advantages.",(0,a.kt)("br",{parentName:"p"}),"\n","The first is a good overview. Big applications have multiple sheets and often cross-references among them. If in addition, you do not document and comment properly, you might lose the overview of what is happening in which sheet. The bigger and more complex your app becomes, the harder it is to keep track of its logic.\nHowever, splitting your use case into distinct parts and realizing these in their own respective app, structures your workflow, while maintaining maximum visibility.\nUse the integrated Eclipse Mosquitto Broker to connect your apps and send data from app one to app two. This also serves as a great quality check, especially if you are tracking down issues in your logic. If the messages, arriving in app two, look as expected, app one properly works and the problem occurs somewhere further down the line."),(0,a.kt)("ol",p({},{start:2}),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Document what you are doing"))),(0,a.kt)("p",null,"Work with comments and document the steps you are taking. This might not feel necessary while building your app, but you will surely do your future self (and/or colleagues) a great favor. The comments will help in understanding how your apps work."),(0,a.kt)("ol",p({},{start:3}),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Visually divide the logic within an app"))),(0,a.kt)("p",null,"Similar to the division of tasks into multiple apps, try to separate the different calculations and \u201clogic blocks\u201d within one app visually, e.g. use different sheets or simply leave empty rows between tasks.\nThis helps you in navigating through your app, its logic and extending it later on as your use case grows."),(0,a.kt)("h2",p({},{id:"bug-free"}),"Bug free"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Remember the core principle of Streamsheet calculation"))),(0,a.kt)("p",null,"Left to right and top to bottom.\nThis is the calculation principle of Streamsheets. One of the main differences between a normal spreadsheet and a Streamsheet is that a Streamsheets has a defined order of calculation. It starts by calculating A1, B1, C1, ..., then it jumps to the next row and calculates again A2, B2, C2, ... .\nThis is an immensely powerful feature, but if forgotten, it can introduce unwanted logic dependencies.\nExample: If you are using a READ() function in B26, to get the latest data into your sheet, watch out to not accidentally add functions which reference to B26 above this cell. The reason is that all functions above B26 (e.g. A1) will calculate before B26, thus, these cells might not use the latest data from B26 because B26 updates after them. However, this feature gives you many options if you use it deliberately."),(0,a.kt)("ol",p({},{start:2}),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Check your steps"))),(0,a.kt)("p",null,"Every step calculates the whole sheet. Keep this in mind and make sure the steps do not trigger functions unintentionally. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Calculation mode:"),' If you are using STACKADD() or TIMESCALE.INSERT and your calculation mode is "continuously", these functions are executed every time the sheet is calculated.\nHowever, this does not necessarily mean that you have received new data to work with. Thus, you could be adding the same data repeatedly without wanting to.\nMake sure, the functions are only triggered, when they are supposed to. You can achieve this, for instance, by changing the calculation mode of the sheet to "on message", using IF-Cells (the 1st column of a Streamsheet) or the IF() function.'),(0,a.kt)("h2",p({},{id:"resource-efficient"}),"Resource-efficient"),(0,a.kt)("p",null,"Streamsheets runs on servers, in the cloud or even on your laptop and there are a couple of things you can do to minimize the load your application creates. "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Divide tasks into multiple applications"))),(0,a.kt)("p",null,"Every application runs in its own process on the server. Dividing tasks into multiple apps allows the server to manage and allocate its resources more efficiently and gives you a better overall experience.\nFor example: Create one application to store your data in a database. Based on that data you can now create multiple dashboards for multiple purposes. All in different apps. "),(0,a.kt)("ol",p({},{start:2}),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Keep Streamsheets clean"))),(0,a.kt)("p",null,"Make your app as lightweight as possible. There are a couple of performance dependencies you should look out for while creating your app. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cycle time: The faster your app is running, the more resources are needed. Do you really need to set the cycle speed to 10ms?"),(0,a.kt)("li",{parentName:"ul"},"Amount of cells: Fewer cells and fewer functions lead to an overall better performance. Instead of creating huge tables on the sheets, think about using databases and this way even persist your data. Save your calculated results and query/retrieve this data when and where you need it. "),(0,a.kt)("li",{parentName:"ul"},"Use of the third dimension: In Streamsheets you sometimes use a third dimension to access data. Functions like TIMEAGGREGATE() or TIMESCALE.SELECT() hold data in their cell (they stack them into the \u201c3rd dimension\u201d). The bigger these stacked data sets get and the more you are using these functions, the more data is moved and calculated on each step. Usually you do not need to hold 10-thousands of data points. Aggregate your data in a smart way to make your app run even more smoothly.")),(0,a.kt)("ol",p({},{start:3}),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Add more resources"))),(0,a.kt)("p",null,"Streamsheets uses the number of CPUs, memory and disc space available. Make sure there is always enough.\nIf you host yourself:\nSince your apps are running within a docker environment, first, check the amount of resources docker is allocating. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CPU and Memory: ",(0,a.kt)("inlineCode",{parentName:"li"},"docker stats")),(0,a.kt)("li",{parentName:"ul"},"Disc space: ",(0,a.kt)("inlineCode",{parentName:"li"},"docker system df")," ")),(0,a.kt)("p",null,'Docker allows you to manage the allocated resources of your hardware. When using Docker Desktop, these resources are automatically limited. Go into your settings and adjust these in the Tab "Resources". '),(0,a.kt)("p",null,"If your docker installation already allocates the maximum amount of resources, think about scaling up your setup."))}k.isMDXComponent=!0},85084:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/StMFlow-aecffc2ec76e832ff96b179448f8b4d1.png"}}]);