
DRAW.BEZIER
------------

Define a graphical bezier curve. The control points are created automatically.

**Syntax**

=DRAW.BEZIER(UnqiueId, Container, Name, X, Y, Width, Height, LineFormat, FillFormat, Attributes, Events, Angle, RotCenter, PointRange, Close)

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
   * - PointRange
     - Optional. Cell Range with coordinates. A coordinate is defined by a fraction of the width and height of the bezier ranging
       from 0 to 1. 1 would place the coordinate at the bottom or right corner of the object. The range must have 2 columns. The
       left column contains the x coordinates and the right column the y coordinates. If the object was drawn using the mouse or
       one of the predefined objects was used, the given coordinates will be used, as long as no coordinates are defined using this
       parameter.
   * - Close
     - Optional. Close bezier curve by connecting the first and last point (Default: TRUE)

**Return Value**

TRUE, if bezier curve could be created.

**Example**

.. list-table::
   :widths: 53 7 40
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =DRAW.BEZIER("ID8",,"Bezier1",3990,12754,4868,3519,,,,,,,C31:D33,FALSE)
     - TRUE
     - Draw a bezier using the given coordinates. The coordinates must be given as fractions of 1.

