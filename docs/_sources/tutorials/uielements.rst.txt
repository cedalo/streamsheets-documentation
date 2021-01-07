.. |FWDemo| image:: /images/FunctionWizard-Demo.gif
        :scale: 65 %
.. |JSONRANGE| image:: /images/JSONRANGE.gif
        :scale: 65 %
.. |IFCELL| image:: /images/IFCELL.gif
        :scale: 65 %
.. |CHART| image:: /images/ChartPictures/Charts.gif
        :scale: 65 %
.. |StreamF| image:: /images/Streamfunction.png
    :scale: 75%

.. |Area| image:: /images/ChartPictures/AreaCha.png
.. |XY| image:: /images/ChartPictures/XYCha.png
.. |Col| image:: /images/ChartPictures/ColCha.png
.. |Bar| image:: /images/ChartPictures/BarCha.png
.. |Line| image:: /images/ChartPictures/LineCha.png
.. |Pie| image:: /images/ChartPictures/PieCha.png
.. |Fun| image:: /images/ChartPictures/FunCha.png
.. |Heat| image:: /images/ChartPictures/HeatCha.png
.. |Stock| image:: /images/ChartPictures/StockCha.png
.. |StChCa| image:: /images/ChartPictures/StChCa.png
.. |STChT| image:: /images/ChartPictures/STChT.png
.. |STChP| image:: /images/ChartPictures/STChP.png
.. |TQW| image:: /images/TS/TQW.PNG
.. |TQA| image:: /images/TS/TGA.PNG
.. |TAM| image:: /images/TS/TAM.PNG
.. |Box| image:: /images/ChartPictures/BoxCha.png
        :scale: 80%
.. |RangeBox| image:: /images/ChartPictures/RangeBoxCha.png
        :scale: 80%
.. |Water| image:: /images/ChartPictures/WaterCha.png
        :scale: 80%
.. |RangeWater| image:: /images/ChartPictures/RangeWaterCha.png
        :scale: 80%

.. |ChWiz| image:: /images/ChartPictures/ChWiz.png
        :scale: 50%
.. |Range4| image:: /images/ChartPictures/Range4.PNG
.. |Range3| image:: /images/ChartPictures/Range3.PNG
.. |Range2| image:: /images/ChartPictures/Range2.PNG
.. |Range1| image:: /images/ChartPictures/Range1.PNG
.. |Range5| image:: /images/ChartPictures/Range5.PNG
.. |Range6| image:: /images/ChartPictures/Range6.PNG
.. |RangeSTC1| image:: /images/ChartPictures/RangeSTC1.PNG
.. |RangeSTCTP| image:: /images/ChartPictures/RangeSTTP.PNG
.. |RangeSTCT| image:: /images/ChartPictures/RangeSTT.PNG
.. |RTS| image:: /images/TS/RTS.PNG
.. |RTQ| image:: /images/TS/RTQ.PNG
.. |RTAM| image:: /images/TS/RTAM.PNG

.. |history| image:: /images/History.gif
    :scale: 65 %  

Tools & Charts
===============

There are multiple tools and elements in Streamsheets to help you build your Apps. 


.. _charts:


Charts
-------

| Charts help people understand data quickly. Whether one wants to make a comparison, show a relationship or highlight a trend, they help the audience or even yourself to “see” what actually happens. Each of our 11 chart types has different features that make them better suited for specific tasks.
| To create a Chart select the cell/range with the Data to be displayed and click in the top bar on the Insert Chart Icon. Choose the  Chart type and create the chart by clicking on the canvas.  There are two ways to adjust the chart settings. You can either directly adjust the chart functions or use the Chart Wizard. There are many different settings to play with: add a title, tooltipps and a legend, determine the length of the axis, allow zooming or use different colors for e.g. the columns or even the grid lines etc.. The best would be to just try everything out 😄.

| |CHART| 
| *Creating a chart*


Chart Wizard
``````````````

There are two ways to adjust Charts in Streamsheets. 
One way is to simply select the parts of the Chart, which you want to change and edit the formular, which is displayed in the edit field and/or use the toolbar icons e.g. to adjust colors etc..

A more convinient way is the use of the Chart Wizard. Double click the chart you wish to adjust and the Chart Wizard will appear. 

| |ChWiz|
| *example view on the Chart Wizard*

There are many ways a chart can be individually adjusted. This also depends on the kind of chart you are using. Different charts different options. In general, the chart wizard consists out of the following categories:

+ **Chart:** define general settings 
+ **Plot:** define what the data source is and how to interprete it. 
+ **Title:** define title position. Change title in edit field and title format over toolbar. 
+ **Legend:** define legend position. Change legend format in toolbar.
+ **Series:** define series settings. (multiple series possible)
+ **Axis:**  set X&Y axis settings like zooming and position. Add other axis, if needed.
+ **Grid:** show or hide grid for X&Y axis. Change format with toolbar.  
+ **Data Point:** only accessible over mouseclick. Select singular data point. Change appearance.  

Chart Types
``````````````````

| The Chart Type you choose depends on what kind of information you want to present. Displaying the current machine temperature requires a different chart than showing the relationship between the temperature and time. It depends on how many variables need to be shown. 
| 
| If there is just one variable your perfectly fine using Line, Cloumn, Bar, Pie, Dounghnut, Area , Polar Area or Radar Charts. To show the relationship between two different variables we recommend Line (X/Y) or Scatter. A bubble chart is similar to a scatter plot, but you even can introduce a third variable. For more specific use cases there are State, Stock and Funnel Charts.
|	
| Depending on your selected data range, you will get a dynamic or a static chart (updating references or fix data input). 

.. |star| image:: /images/star.svg
    :scale: 50%

|star| *= premium feature*


Column & Bar Chart
''''''''''''''''''''''

|Col|  |Bar|  |Range1| 

Column & Bar Charts are used to show differences between diferent data series categories. The height or length of a column/bar visualizes the value of a category. At least one data series is needed. 

Line Chart
''''''''''''''''''''''

|Line| |Range4|

Line Charts are often used to describe values measured over time.
But careful: They only connect datapoints over categories, so the distance between the categories does not claim to be accurate. This can be done via the X/Y Chart. 

XY Chart
''''''''''''''''''''''

|XY| |Range6|

The XY Chart shows the relationship of data sets. In many use cases it is used for time series data, to show accurate time/value relations. 

Area Chart
''''''''''''''''''''''

|Area|  |Range4|

The Area Chart is similar to a line graph. Area charts are different from line graphs, however, because the area between the x axis and the line is filled in with color or shading. Area charts are a good choice to use when you want to show a trend over time, but aren't as concerned with showing exact values. At least one data series is needed.


Pie & Doughnut Chart
''''''''''''''''''''''

|Pie| |Range4|

Pie & Doughnut Charts help to visualize parts of a whole and their respective size. Each segment of the pie represents its size in comparison to the other segments. One data series is needed.  

Stock Chart
''''''''''''''''''''''

|Stock| |Range5|

Stock Charts contain information about the x&y values and further the changes of a value and historical highs and lows. They use boxes to visualize these parameters. Depending on the selected version of the Stock chart one either needs three, four or five data series. |star|

Funnel Chart
''''''''''''''''''''''

|Fun| |Range2|

Funnel Charts are often used for visualizing linear processes with connected stages. |star|

State Chart
''''''''''''''''''''''
State Charts visualize differnt states. Each state has a dedicated color. To display a state chart create three columns of data consisting of X axis, values and colors. 
Depening on the State Chart type the X axis values use either categorie or timeseries data. To further use the information the values provide, uncheck the "100%" checkbox in the chart wizard. The size of the columne now represents the value. 
Using ";" in the color column you can add line color and a specified datalable text. To see the text activate datalable and the "state" checkbox in the chart wizard.  |star|

**State Chart Category:**

Indicates different states of different categories. 

| |StChCa| |RangeSTC1|
| *example with "100%" setting unchecked. Find it in the Chart Wizard categorie "Chart"*


**State Chart Time:**

Indicates states at certain time points. 

| |STChT| |RangeSTCT|
| *example with extra settings in the color column*

**State Chart Periode:**

Indicates states over a time periode. From time point a to b.

| |STChP| |RangeSTCTP|
| *example of the default setup* 

Heatmap Chart
''''''''''''''''''''''

|Heat| |Range3|

The Heatmap Chart visulizes intensity of points on a XY Chart. The closer together the hotter (red) the map gets. 
In this example picture we used timeseries functions for the data range. Click :ref:`here<timeseriesfunctions>` if you want to know more about timeseries functions. 


Boxplot Chart
.................

|Box| |RangeBox|

The Boxplot Chart can be used to graphically visualize the median, minimum, maximum and quartiels of a data set. |star|

Waterfall Chart
..................

|Water| |RangeWater|

The Waterfall Chart displays processes and their changes over set categories looking for increases, decreases, with the possibility of adding the sum. |star|




Timeseries data
-------------------------------
Often it is important to not only work with single real-time data points in the moment, but to build a history and work with a series of values. 
In the Chart section we discussed ways of data representation, but we have not discussed how to gather this data in Streamsheets and how realtime updates work.
The following solutions are perfectly helpful in situations, where permanent data storage is not neccessary. To permanantly save your data connect Streamsheets to a database like MongoDB, InfluxDB or TimescaleDB. 


Timeseries data table
`````````````````````````````````


In an IoT environment it is essential to work with dynamic sets of data. The maybe most obviouse way to create a table, that dynamicaly updates overtime and uses messages from Streams to add information, is to use direct cell refernces.  
The following example shows how to create a short (stepwise) data history.

    .. note:: Every :term:`sheet <Streamsheet>` is calculated from left to right and from top to bottom. Consequently, cell A1 is calculated first followed by B1, C1 etc. proceding in the next rows in the same manner. Thanks to this concept, we can use references to create a history of values.

The cell at the very bottom references to the data input and the cells above the reference to the cell below. As higher cells are calculated first, they fetch the values of lower cells before these are calculated. In the end the last cells take the latest data input. Effectively it looks as if new values enter the history at the bottom and move up before leaving the series at the top.

|history|

*Create data history in a Streamsheet*

.. _timeseriesfunctions:

Timeseries functions
````````````````````````

Using table in sheets feels natural, but holding huge chunks of data on a Streamsheet is not always the best decsion (especially if you don´t want to display the whole table and only use it as a base for charts). 
Tables cover a lot of space, which should be used for implementing your logic. This is where :ref:`timeseries` functions come into play. 

 
 + :ref:`TIMEAGGREGATE()<timeaggregate>`
 + :ref:`TIMESTORE()<timestore>`
 + :ref:`TIMEQUERY()<timequery>`


 
These functions track a cell and store the observed changes & timestamps over a certain amount of time. They basically create an invisible table fitted into one cell. The result is, that now Charts can use one function as a data range instead of huge tables. 
While the TIMESTORE function is used as a base for one or more TIMEQUERY functions, the TIMEAGGREGATE works on its own. 

**TIMESTORE & TIMEQUERY:**
TIMESTORE and TIMEQUERY operate like a short term database.
The TIMESTORE function saves key value pairs over a specified period of time. Like a real databse, it creates a data table, which then again can be queried by the TIMEQUERY function. 
It is possible to not only query original values, but aggregate and filter the data. You can add one or more TIMESTORE function per Streamsheet and every TIMESTORE can be referenced by one or more TIMEQUERY function.

| |RTS| 
| *Storing the key value pairs of Berlin, London and Paris*
| 
| |RTQ| 
| *Adding queries on top of the TIMESTORE()*
|
| |TQA| |TQW|
| *Adding charts on top of the TIMEQUERY functions*


**TIMEAGGREGATE:**
The TIMEAGGREAGATE function is the quick hack of TIMESTORE and TIMEQUERY. It monitors one key value pair over a specifed time. As the TIMESTORE function it stores the raw values and timestamps within the cell, while displaying the aggregated value as the cell value. 

| |RTAM|
| *TIMEAGGREGATE(B6,,4) uses B6 as the datasource and is set to method "4" which determins the maximum of all recieved values. To display the aggregated value reference it again in another cell (Max 122).*
|
| |TAM|
| *Now you can use the cell of the TIMEAGGREGATE() function to display the raw data chart and the reference cell for the aggregation.*

To create a chart with more then one data series just use multiple TIMEAGGREGATE() or TIMEQUERY() functions as the soure range. 

        .. note:: 
                #LIMIT appears, when the set limit of stored key value pairs is reached. This is not necessarily a problem, it only means that old stores will be overwritten by newer ones.  



Create Dashboards
--------------------------

Shapes
````````

In some scenarios it is necessary, to not only control data streams and implement certain logics, but create dashboards to present the data to an end user. Dashboards are popular visual displays of data, mostly comprising charts / graphs with striking attention seeking components. If you want to learn more about how to setup Charts in Streamsheets click :ref:`here<charts>`. 
In this tutorial we cover another very useful tool Streamsheets offers, which is adding shapes. Shapes can be found next to the Chart icon in the App toolbar. 


PICTURE

There are a ton of different shapes, which can be colored and sized the way you want. 
As everything else in Streamsheets, Shapes use functions as a base. This function can be used to add dynamic settings. For example, it is possible to dynamically set the size, coordinates or displayed information of a shape, just by referencing cells from a sheet. 
All shapes have a very similar function structure:


*=DRAW.RECTANGLE(UnqiueId, Container, Name, X, Y, Width, Height, LineFormat, FillFormat, Attributes, Events, Angle, RotCenter)*

Format changes can be done using simple inputs like hexadecimal codes for colors or more complex inputs using functions like FILLPATTERN() (add pictures via urls) FILLLINEGRADIANT()  FILLRADIALGRADIANT(), (add color transitions) LINEFORMAT(). 

One important distinction is that only lable are able to display information as they have a "Text" parameter. Lable can be created over the shape menu or by double clicking a shape. 

*=DRAW.LABEL(UnqiueId, Container, Name, X, Y, Width, Height, LineFormat, FillFormat, Attributes, Events, Angle, RotCenter, Text[, Font])*


Example use case: The dashboard should be able to represent different information in different tiles and give visual feedback. For each information you need representation create a shape e.g. rectangle and place it on the sheet. To display information double click to create a lable within the rectangle and link the "Text" parameter to the cell with the required information. To further visually support your given information, let´s switch back to the rectangle shape. In the "Fillformat" parameter we will now enter: IF("cell reference"<300,"green","red"). Now a threshold of 300 is set to decide, wether the rectangle color is red or green.  


Interactions
`````````````````````` 

If your use case does require direct user input, there are multiple ways to allow these in Streamsheets.
Before we dive into details, here a short reminder:
 
.. note::
        Always hide your logic from the end user. They will likely get confused and/or change it. 

        + | Only display the Streamsheet you want the end user to see. Open the App Settings and select it in the “Maximize Sheet on load” field
        + | Only share your App with end user over an URL that prohibits them from changing your logic. 

There are multiple ways you can allow an end user to adjust the visualization of your dashboard.

SELECT()
'''''''''

A very fast and easy way to allow user interaction is the SELECT() function. 
It allows the end user to select a value from a list of options. This selection then can be integrated in your sheet logic. 


PICTURE

Example use case: A dashboard is created to gather information on different type of animals in a zoo. The user is allowed to select from a list of animals. Depending on which animal is selected, the represented information change. Select “tiger” and the amount of tigers, their names etc. will be displayed or  select “koala” to see all respective information about koalas. 


Interactive Shapes
''''''''''''''''''''
In the shape menu, in the controls category, you can find interactive elements. In a stopped or paused app, these elements can be adjusted as usual, by selecting the shape and changing the formula parameter. In a running app "control" shapes become interactive and are not selectable anymore. 

+ | **Checkboxes** are very helpful in use cases, where switching between two states is necessary. They switch their value parameter depending on the user interaction to FALSE or TRUE. To work with these states use a cell reference in the value parameter. Now you only have to use the referenced cell in your sheet logic to react on state changes.
  |  GIF
  | *Example use case: You want to only show certain information, when a check box is selected. FALSE represents that the information will not be shown. If the information you would like to hide is represented in an e.g. rectangle shape you could use the attributes parameter of the DRAW:RECTANGLE() function to switch between visible and not visible. Find more about the attributes' parameter here.*
+ | **Slider** allow the selection of values between a given minimum and maximum. Again referencing the value parameter to a cell gives you the power to integrate the selected value into your sheet logic. 
  |  GIF
  | *Example use case: An End User should be able to regulate a thermostat between the values of 15°C and 25°C. With the slider the user sets the wished temperature and the value gets set in the referenced cell of the value parameter. The value will be then published to the thermostat over e.g. an MQTT Stream. Now the user directly impacts the temperature by moving the slider.*
+ | The **Knob** works exactly like the slider, but instead of sliding from left to right the end user animation is turning a knob. 
+ | **Button**, like the checkboxes, set TRUE or FALSE values. The difference is, that they only set the value parameter to TRUE, as long as the user is pressing the button. After the release, the value turns back to FALSE. Again using a cell reference for the value parameter is the key to integrate the interaction in your sheet logic.  *Tip: Try to use EDGE.DETECT() if you only need a one time switch to TRUE.* 
  |  GIF
  | *Example use case: An end user should be able to open a valve by pushing a button on the screen. The valve only knows two states “open” and “close” and is connected to a MQTT broker. The payload of the message will now change dynamically and depending on the state of the button either “open” or “close” will be published.*


.. TBD: Container categorie. Sobald klar ist wie das aussieht


EVENTS()
'''''''''''
The EVENTS() function adds another layer to end user interactions. In every shape formula there is one parameter called "Events", which can be filled with a number of event functions:

+ :ref:`ONMOUSEDOWN()<onmousedown>`
+ :ref:`ONMOUSEUP()<onmouseup>`
+ :ref:`ONVALUECHANGE()<onvaluechange>`
+ :ref:`ONCLICK()<onclick>`
+ :ref:`ONDOUBLECLICK()<ondoubleclick>`


Integrating one or more events in the EVENT() function, adds the possibility to define actions. 
For example: *EVENTS(ONCLICK(COPYVALUES(A1:B11,G10:H10))* triggers the COPYVALUE() function after an onclick action by the user. 


Other functions which could be used in this context: 

+ :ref:`MQTT.PUBLISH()<mqttpublish>` (or any other :ref:`stream<streams>` function)
+ :ref:`SETVALUE()<setvalue>`
+ :ref:`DELETECELLS()<deletecells>`
+ :ref:`COPYVALUES()<copyvalues>`
+ :ref:`DELETE()<delete>`
+ :ref:`EXECUTE()<execute>`
+ :ref:`FEEDINBOX()<feedinbox>`
+ :ref:`STACKADD()<stackadd>` (or any other :ref:`stack<stack>` function)
+ :ref:`WRITE()<write>`
+ :ref:`SHOWVALUES()<showvalues>`
+ :ref:`SHOWDIALOG()<showdialog>`




.. _functionwizard:

Stream Function Wizard
------------------------

Usually Functions are created by entering “=” followed by the name of the function in a cell. This process is supported by the function inline help, which prompts suggestions and parameter support.

To further simplify the creation of functions the "Stream Function Wizard" was added. The Fuction Wizard supports mainly the creation of so called Stream Functions. These are functions which use a Stream (:term:`Producer`\ /:term:`Consumer`\ ) to communicate with entities outside of an :term:`App` and usually are of a more complex structure than regular functions.

To open the "Stream Function Wizard" select the cell, where the function should be inserted and click in the top bar on the Function Wizard Icon. The Wizard will open on the right side of your screen. 
Now first select the Stream Function followed by the Stream. Depending on the chosen Stream Function a set of different other parameter is required. 

When finished click “Ok” to eventually create the function.

*Note: In version 1.5 the icon for the stream functions was changed* |StreamF|

| |FWDemo|
| *Create a MQTT.PUBLISH function with the Function Wizard*


JSON Range
-----------

:term:`Streamsheets <Streamsheet>` are using the :term:`JSON` format to transfer and process data. Creating a JSON-Range in a Streamsheet helps you to easly structure your data keys in a hierarchical order. 
This is needed when you are about to transmit data and need it structured in a certain way.
In a Streamsheet this is possible by writing all your key value pairs below each other. After (or before) you are done, select all cells and right-click. Choose “Define JSON-Range” on the bottom of the menu.
Now you can start structuring your data using TAB and Shift+TAB to change the hierarchy of a key value pair.

|JSONRANGE|
*Create a JSON Range*

| Now the function JSON(C5:D11) will automatically include the implemented hirarchy, which prestructures e.g. message contents.
|        ``{“Interesting Data 1”:12,“Interesting Data 2”:15,“More Data”:{“Data from A”:17,“Data from B”:1234,“Data from C”:625,``
|        ``“Data from D”:892}}``

IF Column
----------

| The IF-Column is on the left side of your Streamsheet next to column A and offers one individual IF-Cell per row. 
| IF-Cells are a different version of the :ref:`if`\ () function, but instead of influencing only one cell they influence all cells in their row! When the given condition is met, the IF-Cell states “TRUE” (green background), if not it states “FALSE” (red background), either" turning on" or “off” the affiliated row.

|IFCELL|
*Add a condition to a whole row*

| In this scenario the IF-Cell is checking if the “Interesting Data” from the :ref:`Inbox` is over a value of 200 (see edit row). As long as this condition is not met, the whole row is not calculated. If at some point the value exceeds the set condition, the row would be set active again and the :ref:`MQTT.PUBLISH <mqttpublish>`\ () function in B14 would send a message.
| This is just one of many example cases the IF-Cell could be used. 



