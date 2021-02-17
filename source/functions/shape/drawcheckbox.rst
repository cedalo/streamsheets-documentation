
DRAW.CHECKBOX
---------------

Define a graphical checkbox button on a given drawing.

**Syntax**

=DRAW.CHECKBOX(UnqiueId, Container, Name, X, Y, Width, Height, LineFormat, FillFormat, Attributes, Events, Angle, RotCenter, Label[, LabelFont, Value])

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
     - Label to display on button.
   * - Font
     - Optional. JSON String created using :ref:`fontformat`
   * - Value
     - Optional. Current state of the checkbox. TRUE for checked and FALSE for unchecked. If a cell reference is used, a value change from user
       interaction will be pushed into that cell.

**Return Value**

TRUE, if checkbox could be created.

**Example**

.. list-table::
   :widths: 73 7 20
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =DRAW.CHECKBOX("ID1", "", "Checkbox1", 1000, 1000, 3000, 3000,,,,,,,"Click Me!", FONTFORMAT("Arial", 9))
     - TRUE
     - Draw a checkbox using 'Click Me!' as a label with an 'Arial 9' font.

