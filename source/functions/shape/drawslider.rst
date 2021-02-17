
DRAW.SLIDER
-----------

Define a graphical slider on a given drawing.

**Syntax**

=DRAW.SLIDER(UniqueID, Container, Name, X, Y, Width, Height, LineFormat, FillFormat, Angle, Attributes, Events, Angle, RotCenter, Label, LabelFont, Value, Min, Max, Step [,ScaleFont, Marker, FormatRange])

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
     -  Optional. Options:
       
        - "None" for no line
        - Hexadecimal color value ("#FF0000" for Red)
        - JSON String created using :ref:`lineformat`
   * - FillFormat
     -  Optional. Options:
       
        - "None" for no fill.
        - Hexadecimal color value ("#FF0000" for Red)
        - JSON String created using :ref:`fillpattern`, :ref:`filllineargradient`, :ref:`fillradialgradient`
   * - Attributes
     - Optional. JSON String created using :ref:`attributes`
   * - Events
     - Optional. JSON String created using :ref:`events`
   * - Angle
     - Optional. Angle in radians.
   * - RotCenter
     -  Optional. This defines, where the object rotates around:
       
        0: Top left corner
        1: Top center
        2: Top right corner
        3: Left center
        4: Center (default)
        5: Right center
        6: Bottom left corner
        7: Bottom center
        8: Bottom right corner
   * - Label
     - Optional. Label to display above slider.
   * - LabelFont
     - Optional. Font to use for label. JSON String created using :ref:`fontformat`
   * - Value
     - Current value of the slider. Must be with the given interval. If a cell reference is used, a value change from user
       interaction will be pushed into that cell.
   * - Min
     - Minimum value displayed in the slider.
   * - Max
     - Maximum value displayed in the slider.
   * - Step
     - Step to use for interaction while changing the slider value.
   * - ScaleFont
     - Optional. Font to use for the slider scale. JSON String created using :ref:`fontformat`
   * - Marker
     -  Optional. Marker style to indicate the current value. Allowed values are:
        'none'
        'square'
        'rect'
        'arrowtop'
        'arrowbottom'
        'arrowbottom'
        'circlesmall'
       
        Default is a large circle.
   * - FormatRange
     - Optional. Cell range to provide additional scale information. It must be a range with 3 columns. The values in the first column
       provides a scale value. The value in the second column provides a label, that is displayed instead of the scale value. This is optional.
       The value in the third column can provide a hexadecimal color value. This is used to color the scale between the last value and the
       current value in column one. This way you can define a colored scale indicating valid, invalid oder desired values ranges. See the sample
       below.

**Return Value**

TRUE, if slider could be created.

**Example**

.. list-table::
   :widths: 73 7 20
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =DRAW.SLIDER("ID1",,"Slider1",1000,1000,1000,2500,,,,,,,"Slider",,A1,0,100,10,,"arrowbottom",D11:F13)
     - TRUE
     - Draw a slider with an interval from 0 to 100 and a step value of 10. As a format range is given,
       the slider scale will be colored and custom labels will be applied. The selected value will be pushed into cell A1.

.. list-table::
   :widths: 10 10 10 10
   :header-rows: 1

   * - ROW
     - D
     - E
     - F
   * - 11
     - 0
     - Bad
     - #FF0000
   * - 12
     - 30
     - Average
     - #00FF00
   * - 13
     - 70
     - Good
     - #0000FF

