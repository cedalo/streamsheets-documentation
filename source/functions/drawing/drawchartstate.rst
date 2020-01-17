
DRAW.CHARTSTATE
-----------

Define a state diagram on a given drawing. A state diagram display vertical bars within a given period in a given color.

**Syntax**
=DRAW.CHARTSTATE(UniqueID, Container, Name, X, Y, Width, Height, LineFormat, FillFormat, Attributes, Events, Angle, RotCenter, Title, TitleFont, ChartType, DataRange, LegendRange, Min, Max, StepType, Step)

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
   * - Angle
     - Optional. Angle in radians.
   * - RotCenter
     - | Optional. This defines, where the object rotates around:
       |
       | 0: Top left corner
       | 1: Top center
       | 2: Top right corner
       | 3: Left center
       | 4: Center (default)
       | 5: Right center
       | 6: Bottom left corner
       | 7: Bottom center
       | 8: Bottom right corner
   * - Title
     - Optional. Title to display below chart.
   * - TitleFont
     - Optional. Font to use for title. JSON String created using :ref:`fontformat`
   * - ChartType
     - Optional. Currently only chart type 'state' is supported and default.
   * - DataRange
     - Range with time intervals and a legend label to use. A range needs 3 columns. In the first column, the start data is defined, in the second
       the end date and in the third, the legend entry to use for coloring the label. See example below
   * - LegendRange
     - Range that defines the legend entries for the state chart.
   * - Min
     - Optional. Minimum value for the horizontal axis. Default is the minimum value.
   * - Max
     - Optional. Maximum value for the horizontal axis. Default is now.
   * - StepType
     - Optional. Time Step type for the horizontal axis labels. Allowed values are 'second', 'minute', 'hour' and 'none. Default is 'minute'.
       'none' will not display any axis label.
   * - Step
     - Optional. Time Step for the horizontal axis. Default is 1.

**Return Value**

TRUE, if chart state could be created.

**Example**

.. list-table::
   :widths: 73 7 20
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =DRAW.CHARTSTATE("ID1",,"ChartState1",1000,1000,6000,2500,,,,,,,"ChartState",,,A5:C8,A1:B3,A5,C9,'second')
     - TRUE
     - Draw a chart state using the table below.

.. list-table::
   :widths: 10 10 10 10
   :header-rows: 1

   * - ROW
     - A
     - B
     - C
   * - 1
     - Good
     - green
     -
   * - 2
     - Medium
     - yellow
     -
   * - 3
     - Bad
     - red
     -
   * - 4
     -
     -
     -
   * - 5
     - 15:09:00
     - 15:09:10
     - Good
   * - 6
     - 15:09:10
     - 15:09:20
     - Bad
   * - 7
     - 15:09:20
     - 15:09:30
     - Good
   * - 8
     - 15:09:30
     - 15:09:40
     - Medium

