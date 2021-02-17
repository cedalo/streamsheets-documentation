
DRAW.KNOB
-----------

Define a graphical knob on a given drawing.

**Syntax**

=DRAW.KNOB(UniqueID,Container,Name,X,Y,Width,Height,LineFormat,FillFormat,Attributes,Events,Angle,RotCenter,Label,LabelFont,Value,Min,Max,Step,ScaleFont,Marker,FormatRange,StartAngle,EndAngle)

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
     - Optional. Label to display below knob.
   * - LabelFont
     - Optional. Font to use for label. JSON String created using :ref:`fontformat`
   * - Value
     - Current value of the knob. Must be with the given interval. If a cell reference is used, a value change from user
       interaction will be pushed into that cell.
   * - Min
     - Minimum value displayed in the knob.
   * - Max
     - Maximum value displayed in the knob.
   * - Step
     - Step to use for interaction while changing the knob value.
   * - ScaleFont
     - Optional. Font to use for the knob scale. JSON String created using :ref:`fontformat`
   * - Marker
     -  Optional. Marker style to indicate the current value. Allowed values are:
        'none'
        'arrowinner'
        'line' (default)
        'circlesmall'
       
        Default is a large circle.
   * - FormatRange
     - Optional. Cell range to provide additional scale information. It must be a range with at least 3 columns. The values in the first column
       provide the start value. The values in the second column provide the end value, which will be used to color the range between start and end value.
       The value in the third column provides a hexadecimal color value. This is used to color the scale between the start value and the
       end value. This way you can define a colored scale indicating valid, invalid oder desired values ranges.
       The optional value in the fourth column provides a label, that is displayed instead of the scale value above the center of the colored range.
   * - StartAngle
     - Optional. Angle in radians, where the labels start.
   * - EndAngle
     - Optional. Angle in radians, where the labels end.

**Return Value**

TRUE, if button could be created.

**Example**

.. list-table::
   :widths: 73 7 20
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =DRAW.KNOB("ID14",,"Knob1",26854,10240,5398,5212,,,,,,,"Knob",,50,0,100,10)
     - TRUE
     - Draw a knob with an interval from 0 to 100 and a step value of 10. Current Value is 50.


