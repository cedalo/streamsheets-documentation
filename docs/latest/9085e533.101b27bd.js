(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{235:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return l}));var r=a(3),s=a(7),n=(a(0),a(376)),i={id:"charts",title:"Charts",sidebar_label:"Charts"},o={unversionedId:"streamsheets/charts",id:"streamsheets/charts",isDocsHomePage:!1,title:"Charts",description:"Charts help people understand data quickly. Whether one wants to make a",source:"@site/docs\\streamsheets\\charts.mdx",slug:"/streamsheets/charts",permalink:"/latest/docs/streamsheets/charts",version:"current",sidebar_label:"Charts",sidebar:"someSidebar",previous:{title:"Functions",permalink:"/latest/docs/streamsheets/functions"},next:{title:"App building",permalink:"/latest/docs/streamsheets/tutorials/appbuilding"}},c=[{value:"Chart Wizard",id:"chart-wizard",children:[]},{value:"Chart Types",id:"chart-types",children:[]},{value:"Data Source",id:"data-source",children:[]}],h={rightToc:c};function l(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},h,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Charts help people understand data quickly. Whether one wants to make a\ncomparison, show a relationship or highlight a trend, they help the\naudience or even yourself to \u201csee\u201d what actually happens. Each of our chart types has different features that make them better suited for\nspecific tasks.",Object(n.b)("br",{parentName:"p"}),"\n",'To create a Chart select the cell/range with the data to be displayed\nand click in the top bar on the "Insert Chart" Icon. Choose the Chart type\nand create the chart by clicking on the canvas. There are two ways to\nadjust the chart settings. You can either directly adjust the chart\nfunctions or use the "Chart Wizard". There are many different settings to\nplay with: add a title, tooltipps and a legend, determine the length of\nthe axis, allow zooming or use different colors for e.g. the columns or\neven the grid lines etc.. The best would be to just try everything out\n\ud83d\ude04.'),Object(n.b)("img",{src:"/docs/streamsheets/_images/CHART.gif"}),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Creating a chart")),Object(n.b)("h3",{id:"chart-wizard"},"Chart Wizard"),Object(n.b)("p",null,"There are two ways to adjust Charts in Streamsheets. One way is to\nsimply select the parts of the Chart, which you want to change and edit\nthe formular, which is displayed in the edit field and/or use the\ntoolbar icons e.g. to adjust colors etc.."),Object(n.b)("p",null,"A more convinient way is the use of the Chart Wizard. Double click the\nchart you wish to adjust and the Chart Wizard will appear."),Object(n.b)("img",{src:"/docs/streamsheets/_images/ChartPictures/ChWiz.PNG",alt:"ChWiz",width:"30%"}),Object(n.b)("br",null),Object(n.b)("br",null),"There are many ways a chart can be individually adjusted. This also depends on the kind of chart you are using. Different charts different options. In general, the chart wizard consists out of the following categories:",Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Chart:")," define general settings"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Plot:")," define what the data source is and how to interprete it."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Title:")," define title position. Change title in edit field and\ntitle format over toolbar."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Legend:")," define legend position. Change legend format in toolbar."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Series:")," define series settings. (multiple series possible)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Axis:")," set X&Y axis settings like zooming and position. Add other\naxis, if needed."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Grid:")," show or hide grid for X&Y axis. Change format with\ntoolbar."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Data Point:")," only accessible over mouseclick. Select singular\ndata point. Change appearance.")),Object(n.b)("h3",{id:"chart-types"},"Chart Types"),Object(n.b)("p",null,"The Chart Type you choose depends on what kind of information you want\nto present. Displaying the current machine temperature requires a\ndifferent chart than showing the relationship between the temperature\nand time. It depends on how many variables need to be shown.  "),Object(n.b)("p",null,"If there is just one variable your perfectly fine using Line, Cloumn,\nBar, Pie, Dounghnut, Area , Polar Area or Radar Charts. To show the\nrelationship between two different variables we recommend Line (X/Y) or\nScatter. A bubble chart is similar to a scatter plot, but you even can\nintroduce a third variable. For more specific use cases there are State,\nStock and Funnel Charts.  "),Object(n.b)("p",null,"Depending on your selected data range, you will get a dynamic or a\nstatic chart (updating references or fix data input)."),Object(n.b)("img",{src:"/docs/streamsheets/_images/star.svg"}),"  *= premium feature*",Object(n.b)("h4",{id:"column--bar-chart"},"Column & Bar Chart"),Object(n.b)("img",{src:"/docs/streamsheets/_images/ChartPictures/ColCha.PNG",alt:"ColCha",width:"50%"}),Object(n.b)("img",{src:"/docs/streamsheets/_images/ChartPictures/BarCha.PNG",alt:"BarCha",width:"50%"}),Object(n.b)("img",{src:"/docs/streamsheets/_images/ChartPictures/Range1.PNG",alt:"Range1",width:"50%"}),Object(n.b)("p",null,"Column & Bar Charts are used to show differences between diferent data\nseries categories. The height or length of a column/bar visualizes the\nvalue of a category. At least one data series is needed."),Object(n.b)("h4",{id:"line-chart"},"Line Chart"),Object(n.b)("img",{src:"/docs/streamsheets/_images/ChartPictures/LineCha.PNG",alt:"LineCha",width:"50%"}),Object(n.b)("img",{src:"/docs/streamsheets/_images/ChartPictures/Range4.PNG",alt:"Range4",width:"50%"}),Object(n.b)("p",null,"Line Charts are often used to describe values measured over time. But\ncareful: They only connect datapoints over categories, so the distance\nbetween the categories does not claim to be accurate. This can be done\nvia the X/Y Chart."),Object(n.b)("h4",{id:"combination-chart"},"Combination Chart"),Object(n.b)("p",null,"It is possible to combine column, area and line representation of a data\nseries in one chart. Create one of the mentioned charts in the above\ndescribed way and select a single data series. In the Chart Wizard you\nare now able to select the form of representation for the series."),Object(n.b)("img",{src:"/docs/streamsheets/_images/ChartPictures/combinationcha.PNG",alt:"combinationcha",width:"50%"}),Object(n.b)("img",{src:"/docs/streamsheets/_images/ChartPictures/combinationwiz.PNG",alt:"combinationwiz",width:"35%"}),Object(n.b)("h4",{id:"xy-chart"},"XY Chart"),Object(n.b)("img",{src:"/docs/streamsheets/_images/ChartPictures/XYCha.PNG",alt:"XYCha",width:"50%"}),Object(n.b)("img",{src:"/docs/streamsheets/_images/ChartPictures/Range6.PNG",alt:"Range6",width:"50%"}),Object(n.b)("p",null,"The XY Chart shows the relationship of data sets. In many use cases it\nis used for time series data, to show accurate time/value relations."),Object(n.b)("h4",{id:"area-chart"},"Area Chart"),Object(n.b)("img",{src:"/docs/streamsheets/_images/ChartPictures/AreaCha.PNG",alt:"AreaCha",width:"50%"}),Object(n.b)("img",{src:"/docs/streamsheets/_images/ChartPictures/Range4.PNG",alt:"Range4",width:"50%"}),Object(n.b)("p",null,"The Area Chart is similar to a line graph. Area charts are different\nfrom line graphs, however, because the area between the x axis and the\nline is filled in with color or shading. Area charts are a good choice\nto use when you want to show a trend over time, but aren't as concerned\nwith showing exact values. At least one data series is needed."),Object(n.b)("h4",{id:"pie--doughnut-chart"},"Pie & Doughnut Chart"),Object(n.b)("img",{src:"/docs/streamsheets/_images/ChartPictures/PieCha.PNG",alt:"PieCha",width:"50%"}),Object(n.b)("img",{src:"/docs/streamsheets/_images/ChartPictures/Range4.PNG",alt:"Range4",width:"50%"}),Object(n.b)("p",null,"Pie & Doughnut Charts help to visualize parts of a whole and their\nrespective size. Each segment of the pie represents its size in\ncomparison to the other segments. One data series is needed."),Object(n.b)("h4",{id:"heatmap-chart"},"Heatmap Chart"),Object(n.b)("img",{src:"/docs/streamsheets/_images/ChartPictures/HeatCha.PNG",alt:"HeatCha",width:"50%"}),Object(n.b)("img",{src:"/docs/streamsheets/_images/ChartPictures/Range3.PNG",alt:"Range3",width:"50%"}),Object(n.b)("p",null,"The Heatmap Chart visulizes intensity of points on a XY Chart. The\ncloser together the hotter (red) the map gets. In this example picture\nwe used timeseries functions for the data range. Click\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"../tutorials/appbuilding#Timeseries-data"}),"here")," if you want to know more about timeseries\nfunctions."),Object(n.b)("h4",{id:"stockcandelstick-chart"},"Stock/Candelstick Chart"),Object(n.b)("img",{src:"/docs/streamsheets/_images/ChartPictures/StockCha.PNG",alt:"StockCha",width:"50%"}),Object(n.b)("img",{src:"/docs/streamsheets/_images/ChartPictures/Range5.PNG",alt:"Range5",width:"50%"}),Object(n.b)("p",null,'The Candelstick/Stock Chart are a style of financial chart used to\ndescribe price movements of a security, derivative, or currency. Each\n"candlestick" typically shows one day, thus a one-month chart may show\nthe 20 trading days as 20 candlesticks. Candlestick charts can also be\nbuilt using intervals shorter or longer than one day. It is similar to a\nbar chart in that each candlestick represents all four important pieces\nof information for that day: open and close in the thick body; high and\nlow in the \u201ccandle wick\u201d. Being densely packed with information, it\ntends to represent trading patterns over short periods of time, often a\nfew days or a few trading sessions. Depending on the selected version of\nthe Stock chart one either needs three, four or five data series.'),Object(n.b)("img",{src:"/docs/streamsheets/_images/star.svg"}),Object(n.b)("h4",{id:"funnel-chart"},"Funnel Chart"),Object(n.b)("img",{src:"/docs/streamsheets/_images/ChartPictures/FunCha.PNG",alt:"FunCha",width:"50%"}),Object(n.b)("img",{src:"/docs/streamsheets/_images/ChartPictures/Range2.PNG",alt:"Range2",width:"30%"}),Object(n.b)("p",null,"Funnel Charts are often used for visualizing linear processes with\nconnected stages. ",Object(n.b)("img",{src:"/docs/streamsheets/_images/star.svg"})),Object(n.b)("h4",{id:"state-chart"},"State Chart"),Object(n.b)("p",null,'State Charts visualize differnt states. Each state has a dedicated\ncolor. To display a state chart create three columns of data consisting\nof X axis, values and colors. Depening on the State Chart type the X\naxis values use either categorie or timeseries data. To further use the\ninformation the values provide, uncheck the "100%" checkbox in the chart\nwizard. The size of the columne now represents the value. Using ";" in\nthe color column you can add line color and a specified datalable text.\nTo see the text activate datalable and the "state" checkbox in the chart\nwizard. ',Object(n.b)("img",{src:"/docs/streamsheets/_images/star.svg"})),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"State Chart Category:")),Object(n.b)("p",null,"Indicates different states of different categories."),Object(n.b)("img",{src:"/docs/streamsheets/_images/ChartPictures/StChCa.PNG",alt:"StChCa",width:"50%"}),Object(n.b)("img",{src:"/docs/streamsheets/_images/ChartPictures/RangeSTC1.PNG",alt:"RangeSTC1",width:"30%"}),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},'example with "100%" setting unchecked. Find it in the Chart Wizard\ncategorie "Chart"')),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"State Chart Time:")),Object(n.b)("p",null,"Indicates states at certain time points."),Object(n.b)("img",{src:"/docs/streamsheets/_images/ChartPictures/STChT.PNG",alt:"STChT",width:"50%"}),Object(n.b)("img",{src:"/docs/streamsheets/_images/ChartPictures/RangeSTT.PNG",alt:"RangeSTT",width:"30%"}),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"example with extra settings in the color column")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"State Chart Periode:")),Object(n.b)("p",null,"Indicates states over a time periode. From time point a to b."),Object(n.b)("img",{src:"/docs/streamsheets/_images/ChartPictures/STChP.PNG",alt:"STChP",width:"50%"}),Object(n.b)("img",{src:"/docs/streamsheets/_images/ChartPictures/RangeSTTP.PNG",alt:"RangeSTTP",width:"30%"}),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"example of the default setup")),Object(n.b)("h4",{id:"boxplot-chart"},"Boxplot Chart"),Object(n.b)("img",{src:"/docs/streamsheets/_images/ChartPictures/BoxCha.PNG",alt:"BoxCha",width:"60%"}),Object(n.b)("img",{src:"/docs/streamsheets/_images/ChartPictures/RangeBoxCha.PNG",alt:"RangeBoxCha",width:"30%"}),Object(n.b)("p",null,"The Boxplot Chart can be used to graphically visualize the median,\nminimum, maximum and quartiels of a data set. ",Object(n.b)("img",{src:"/docs/streamsheets/_images/star.svg"})),Object(n.b)("h4",{id:"waterfall-chart"},"Waterfall Chart"),Object(n.b)("img",{src:"/docs/streamsheets/_images/ChartPictures/WaterCha.PNG",alt:"WaterCha",width:"60%"}),Object(n.b)("img",{src:"/docs/streamsheets/_images/ChartPictures/RangeWaterCha.PNG",alt:"RangeWaterCha"}),Object(n.b)("p",null,"The Waterfall Chart displays processes and their changes over set\ncategories looking for increases, decreases, with the possibility of\nadding the sum."),Object(n.b)("h3",{id:"data-source"},"Data Source"),Object(n.b)("p",null,'Every chart needs a data source to be able to display data. The most\nknown practice is to use a data range. As seen in the "chart type"\nsection, the ranges differ from type to type. Check out the examples\nabove to get a better idea. To change the interpretation of the given\nrange, or to allow not coherent data ranges, select the chart wizard and\nnavigate to "Plot".'),Object(n.b)("img",{src:"/docs/streamsheets/_images/Plot.svg"}),Object(n.b)("p",null,"Besides using data ranges, the ",Object(n.b)("strong",{parentName:"p"},"XY chart")," offers another option for\ndata sources. Functions. Some functions hold data in their cell. These\ncan either be timeseries functions or query functions\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"../functions/timeseries/timeaggregate"}),"TIME.AGGREGATE"),";\n(",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"../functions/streams/timescaleselect"}),"TIMESCALE.SELECT"),"; ...). Use a cell reference on one\nof these functions and you are able to create XY charts without creating\nhuge data tables on your Streamsheet. "),Object(n.b)("p",null,"Check out our ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"../tutorials/appbuilding#timeseries-functions"}),"tutorial")," for more information."))}l.isMDXComponent=!0},376:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var r=a(0),s=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var h=s.a.createContext({}),l=function(e){var t=s.a.useContext(h),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return s.a.createElement(h.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},u=s.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),d=l(a),u=r,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||n;return a?s.a.createElement(m,o(o({ref:t},h),{},{components:a})):s.a.createElement(m,o({ref:t},h))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var h=2;h<n;h++)i[h]=a[h];return s.a.createElement.apply(null,i)}return s.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);