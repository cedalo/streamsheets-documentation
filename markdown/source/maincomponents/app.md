# App

`Streamsheet`s are bundled in one functional entity which processes data
streams, an `App`. The behaviour of an App and the way it processes data
streams is defined through its Streamsheets. All Apps are listed in the
“Dashboard”. You can access the Dashboard by opening the burger menu in
the top-left corner and selecting "Apps" towards the end of the list.
The Dashboard is also the start screen.  
  
**App Characteristics**

-   Apps contain one or up to four Streamsheets.
-   Apps run on servers. Hence, once you start them, they keep running
    until they are being stopped or the server is shut down. That means
    you can close your web browser and the App is still running. It even
    means you can turn off the device you are using to access the
    Streamsheet platform, e.g. your computer, and the Apps keep running.
-   Apps have a cycle time. This serves as its general calculation speed
    and could be seen as its internal clock.
-   Each App is a `microservice`.

## Menu & Settings

At the top of every App you find the menu bar containing its name,
controls and cycle time. To access further App settings, click on the
burger menu in the top left corner and then click on “Settings”.

![SettingsMenu](/images/SettingsMenu.png)

## Name

To better organise all of your Apps you should think about a
comprehensible name names (it can be more descriptive as in the example
😉 ). ![Name](/images/Name.png)

## App Control

![StartBig](/images/StartBig.png)

With these 4 buttons an App\`s state is controlled. An App can either be
started, paused, stopped or calculated step-by-step.

-   Stop: This button stops the App and sets its calculation-step-count
    to 0. Additionally, the step-counts and the inbox queues of its
    Streamsheets are reset.
-   Pause: This pauses the App. Step-counts are not reset. However, the
    biggest difference to “stop” is that messages are queued in the
    inboxes of the Streamsheets.
-   Play: This button starts an App if it is paused or stopped. Message
    streams are only processed or produced if an App is set to “play”.
-   Execute 1 step: Clicking this button triggers one App calculation
    step.

## Cycle Time

When an App is started, it recalculates continuously at the speed of its
cycle time.

![CycleTime](/images/CycleTime.png)

Depending on how fast an App is running, not every recalculation-step
can be visualized in your browser. Thus, the system automatically
balances itself by visualizing only every Xth step. In addition, this
update interval can also be set to a higher value manually. In any case,
this affects only the visualization in the browser as the App will
always run with the defined cycle time on the server.

![CycleTime2](/images/CycleTime2.JPG)

In the screenshot the cycle time is set to 1000 ms. Thus, the App
performs one recalculation aka one step per second. The Update Interval
is set to 10. Consequently, the visualization of the App and its
Streamsheets is updated in your browser only every 10th step that is to
say in this case every 10 seconds. The gauges show how many steps are
calculated on the server and how many are visualized on the client (your
browser).

<div class="tip">

<div class="title">

Tip

</div>

The Calculation Setting "On Message" in the Stream Sheet Settings
ignores the cycle time and calculates on every incoming message.

</div>

## Tool bar

![ETools](/images/EditingTools.png)

Here you find many tools to insert functions, shapes and charts as well
as to format cells in the Streamsheet grid.  
  
Tools especially worth mentioning are:

-   **Insert Stream Function:** This tool opens a wizard containing all
    functions you can use to save and send data, essentially to produce
    a data stream. Most of the functions serve the purpose of creating
    an outgoing data stream. However, some, such as
    `REST.REQUEST <restrequest>` or `MONGO.QUERY <mongoquery>`, can also
    be used to bring data into the Streamsheet. Simply choose a stream
    function and complete the arguments. The default option is called
    `MQTT.PUBLISH <mqttpublish>`. This is also the most common formula
    to send data from one App to another.
-   **Insert Drawing Shape:** This tool offers you a variety of shapes
    to use in your Streamsheets. Insert a shape and have a look at the
    formula bar. You will see that every shape is created by a DRAW
    formula. Link the position parameters to cells with changing numbers
    and the shape starts moving.
-   **Insert Chart:** Similarly to other Spreadsheet solutions, charts
    can be created by selecting a cell range and choosing a chart type.
    However, as Streamsheets are recalculated automatically, charts
    change dynamically according to their input.

## Charts

<div id="charts">

Charts help people understand data quickly. Whether one wants to make a
comparison, show a relationship or highlight a trend, they help the
audience or even yourself to “see” what actually happens. Each of our 11
chart types has different features that make them better suited for
specific tasks.  
To create a Chart select the cell/range with the Data to be displayed
and click in the top bar on the Insert Chart Icon. Choose the Chart type
and create the chart by clicking on the canvas. There are two ways to
adjust the chart settings. You can either directly adjust the chart
functions or use the Chart Wizard. There are many different settings to
play with: add a title, tooltipps and a legend, determine the length of
the axis, allow zooming or use different colors for e.g. the columns or
even the grid lines etc.. The best would be to just try everything out
😄.

</div>

![CHART](/images/ChartPictures/Charts.gif)  
*Creating a chart*

### Chart Wizard

There are two ways to adjust Charts in Streamsheets. One way is to
simply select the parts of the Chart, which you want to change and edit
the formular, which is displayed in the edit field and/or use the
toolbar icons e.g. to adjust colors etc..

A more convinient way is the use of the Chart Wizard. Double click the
chart you wish to adjust and the Chart Wizard will appear.

![ChWiz](/images/ChartPictures/ChWiz.png)  
*example view on the Chart Wizard*

There are many ways a chart can be individually adjusted. This also
depends on the kind of chart you are using. Different charts different
options. In general, the chart wizard consists out of the following
categories:

-   **Chart:** define general settings
-   **Plot:** define what the data source is and how to interprete it.
-   **Title:** define title position. Change title in edit field and
    title format over toolbar.
-   **Legend:** define legend position. Change legend format in toolbar.
-   **Series:** define series settings. (multiple series possible)
-   **Axis:** set X&Y axis settings like zooming and position. Add other
    axis, if needed.
-   **Grid:** show or hide grid for X&Y axis. Change format with
    toolbar.
-   **Data Point:** only accessible over mouseclick. Select singular
    data point. Change appearance.

### Chart Types

The Chart Type you choose depends on what kind of information you want
to present. Displaying the current machine temperature requires a
different chart than showing the relationship between the temperature
and time. It depends on how many variables need to be shown.  
  
If there is just one variable your perfectly fine using Line, Cloumn,
Bar, Pie, Dounghnut, Area , Polar Area or Radar Charts. To show the
relationship between two different variables we recommend Line (X/Y) or
Scatter. A bubble chart is similar to a scatter plot, but you even can
introduce a third variable. For more specific use cases there are State,
Stock and Funnel Charts.  
  
Depending on your selected data range, you will get a dynamic or a
static chart (updating references or fix data input).

![star](/images/star.svg) *= premium feature*

#### Column & Bar Chart

![Col](/images/ChartPictures/ColCha.png)
![Bar](/images/ChartPictures/BarCha.png)
![Range1](/images/ChartPictures/Range1.PNG)

Column & Bar Charts are used to show differences between diferent data
series categories. The height or length of a column/bar visualizes the
value of a category. At least one data series is needed.

#### Line Chart

![Line](/images/ChartPictures/LineCha.png)
![Range4](/images/ChartPictures/Range4.PNG)

Line Charts are often used to describe values measured over time. But
careful: They only connect datapoints over categories, so the distance
between the categories does not claim to be accurate. This can be done
via the X/Y Chart.

#### Combination Chart

It is possible to combine column, area and line representation of a data
series in one chart. Create one of the mentioned charts in the above
described way and select a single data series. In the Chart Wizard you
are now able to select the form of representation for the series.

![combinationcha](/images/ChartPictures/combinationcha.png)
![combinationwiz](/images/ChartPictures/combinationwiz.png)

#### XY Chart

![XY](/images/ChartPictures/XYCha.png)
![Range6](/images/ChartPictures/Range6.PNG)

The XY Chart shows the relationship of data sets. In many use cases it
is used for time series data, to show accurate time/value relations.

#### Area Chart

![Area](/images/ChartPictures/AreaCha.png)
![Range4](/images/ChartPictures/Range4.PNG)

The Area Chart is similar to a line graph. Area charts are different
from line graphs, however, because the area between the x axis and the
line is filled in with color or shading. Area charts are a good choice
to use when you want to show a trend over time, but aren't as concerned
with showing exact values. At least one data series is needed.

#### Pie & Doughnut Chart

![Pie](/images/ChartPictures/PieCha.png)
![Range4](/images/ChartPictures/Range4.PNG)

Pie & Doughnut Charts help to visualize parts of a whole and their
respective size. Each segment of the pie represents its size in
comparison to the other segments. One data series is needed.

#### Heatmap Chart

![Heat](/images/ChartPictures/HeatCha.png)
![Range3](/images/ChartPictures/Range3.PNG)

The Heatmap Chart visulizes intensity of points on a XY Chart. The
closer together the hotter (red) the map gets. In this example picture
we used timeseries functions for the data range. Click
`here<timeseriesfunctions>` if you want to know more about timeseries
functions.

#### Stock/Candelstick Chart

![Stock](/images/ChartPictures/StockCha.png)
![Range5](/images/ChartPictures/Range5.PNG)

The Candelstick/Stock Chart are a style of financial chart used to
describe price movements of a security, derivative, or currency. Each
"candlestick" typically shows one day, thus a one-month chart may show
the 20 trading days as 20 candlesticks. Candlestick charts can also be
built using intervals shorter or longer than one day. It is similar to a
bar chart in that each candlestick represents all four important pieces
of information for that day: open and close in the thick body; high and
low in the “candle wick”. Being densely packed with information, it
tends to represent trading patterns over short periods of time, often a
few days or a few trading sessions. Depending on the selected version of
the Stock chart one either needs three, four or five data series.
![star](/images/star.svg)

#### Funnel Chart

![Fun](/images/ChartPictures/FunCha.png)
![Range2](/images/ChartPictures/Range2.PNG)

Funnel Charts are often used for visualizing linear processes with
connected stages. ![star](/images/star.svg)

#### State Chart

State Charts visualize differnt states. Each state has a dedicated
color. To display a state chart create three columns of data consisting
of X axis, values and colors. Depening on the State Chart type the X
axis values use either categorie or timeseries data. To further use the
information the values provide, uncheck the "100%" checkbox in the chart
wizard. The size of the columne now represents the value. Using ";" in
the color column you can add line color and a specified datalable text.
To see the text activate datalable and the "state" checkbox in the chart
wizard. ![star](/images/star.svg)

**State Chart Category:**

Indicates different states of different categories.

![StChCa](/images/ChartPictures/StChCa.png)
![RangeSTC1](/images/ChartPictures/RangeSTC1.PNG)  
*example with "100%" setting unchecked. Find it in the Chart Wizard
categorie "Chart"*

**State Chart Time:**

Indicates states at certain time points.

![STChT](/images/ChartPictures/STChT.png)
![RangeSTCT](/images/ChartPictures/RangeSTT.PNG)  
*example with extra settings in the color column*

**State Chart Periode:**

Indicates states over a time periode. From time point a to b.

![STChP](/images/ChartPictures/STChP.png)
![RangeSTCTP](/images/ChartPictures/RangeSTTP.PNG)  
*example of the default setup*

#### Boxplot Chart

![Box](/images/ChartPictures/BoxCha.png)
![RangeBox](/images/ChartPictures/RangeBoxCha.png)

The Boxplot Chart can be used to graphically visualize the median,
minimum, maximum and quartiels of a data set. ![star](/images/star.svg)

#### Waterfall Chart

![Water](/images/ChartPictures/WaterCha.png)
![RangeWater](/images/ChartPictures/RangeWaterCha.png)

The Waterfall Chart displays processes and their changes over set
categories looking for increases, decreases, with the possibility of
adding the sum. ![star](/images/star.svg)

### Data Source

Every chart needs a data source to be able to display data. The most
known practice is to use a data range. As seen in the "chart type"
section, the ranges differ from type to type. Check out the examples
above to get a better idea. To change the interpretation of the given
range, or to allow not coherent data ranges, select the chart wizard and
navigate to "Plot".

![Plot](/images/Plot.png)

Besides using data ranges, the **XY chart** offers another option for
data sources. Functions. Some functions hold data in their cell. These
can either be timeseries functions or query functions
(`TIMEAGGREGATE()<timeaggregate>`;
`TIMESCALE.SELECT()<timescaleselect>`; ...). Use a cell reference on one
of these functions and you are able to create XY charts without creating
huge data tables on your Streamsheet. Check out our
`timeseriesfunctions` tutorial for more information.
