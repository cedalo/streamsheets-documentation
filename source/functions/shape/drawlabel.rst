
DRAW.LABEL
-----------

Define a graphical text object.

**Syntax**

=DRAW.LABEL(UnqiueId, Container, Name, X, Y, Width, Height, LineFormat, FillFormat, Attributes, Events, Angle, RotCenter, Text[, Font])

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
       - JSON String created using lineformat
   * - FillFormat
     -  Optional. Options:
       
        - "None" for no fill.
        - Hexadecimal color value ("#FF0000" for Red)
        - JSON String created using fillpattern, filllineargradient, fillradialgradient
   * - Attributes
     - Optional. JSON String created using attributes
   * - Events
     - Optional. JSON String created using events
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
   * - Text
     - Text to display.
   * - Font
     - Optional. JSON String created using fontformat

**Return Value**

TRUE, if label could be created.

**Example**

.. list-table::
   :widths: 73 7 20
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =DRAW.LABEL("ID1", "", "Label1", 1000, 1000, 3000, 3000,,,,,,,"Hello World", FONTFORMAT("Arial", 12))
     - TRUE
     - Draw a text object with an 'Arial 12' font.

