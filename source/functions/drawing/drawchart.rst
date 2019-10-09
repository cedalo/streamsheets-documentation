
DRAW.CHART
----------

Define a chart on a given drawing. The drawing must have been created before using this function.

**Syntax**

=DRAW.CHART(UnqiueId, Container, Name, X, Y, Width, Height, LineFormat, FillFormat, Attributes, Events, RotCenter, ChartType, DataRange[, FormatRange])

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - UniqueId
     - Unique Id of drawing object. Should not be modified and must be unique.
   * - Container
     - Optional. Name of the container object this object is placed within. Coordinates are relative then.
   * - Name
     - Name of drawing object. Must be unique.
   * - X
     - X Coordinate in 1/100th mm
   * - Y
     - Y Coordinate in 1/100th mm.
   * - Width
     - Width in 1/100th mm
   * - Height
     - Height in 1/100th mm
   * - LineFormat
     - | Optional. Options:
       |
       | - "None" for no line
       | - Hexadecimal color value ("#FF0000" for Red)
       | - JSON String created using :ref:`lineformat`
   * - FillFormat
     - | Optional. Options:
       |
       | - "None" for no fill.
       | - Hexadecimal color value ("#FF0000" for Red)
       | - JSON String created using :ref:`fillpattern`, :ref:`filllineargradient`, :ref:`fillradialgradient`
   * - Attributes
     - Optional. JSON String created using :ref:`attributes`
   * - Events
     - Optional. JSON String created using :ref:`events`
   * - ChartType
     - Valid types are: "line", "column", ""bar", "radar", "polar", ""doughnut", "pie", "scatter", "scatterLine" and "bubble" .
   * - RotCenter
     - | Optional. Location to use for rotation. Rotate around:
       |
       | 0: Center (Default)
       | 1: Top Center
       | 2: Top Right
       | 3: Middle Right
       | 4: Bottom Right
       | 5: Bottom Center
       | 6: Bottom Left
       | 7: Middle Left
       | 8: Top Left
   * - DataRange
     - Cell Range to define the data source of the data to be displayed
       in chart. The function is trying to automatically detect label
       settings and the orientation of the data.
       The chart type scatter needs two data points and the chart type bubble three.
   * - FormatRange
     - Optional. Formatting Range to define the data source for a color definition, which is used to display the data.


**Return Value**

TRUE, if chart could be created.

**Example**

.. list-table::
   :widths: 45 10 45
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =DRAW.CHART("ID1", "", "Chart1", 1000, 1000, 3000, 3000, "#000000", "#FFFFFF",,,,,"pie", A5:B10)
     - TRUE
     - Draw a pie chart.

