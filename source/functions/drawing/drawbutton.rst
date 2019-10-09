
DRAW.BUTTON
-----------

Define a graphical button on a given drawing.

**Syntax**

=DRAW.BUTTON(UnqiueId, Container, Name, X, Y, Width, Height, LineFormat, FillFormat, Attributes, Events, RotCenter, Label[, LabelFont, Value])

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
   * - Label
     - Label to display on button.
   * - Font
     - Optional. JSON String created using :ref:`fontformat`
   * - Value
     - Optional. Current state of the button. TRUE for pushed and FALSE for released.

**Return Value**

TRUE, if button could be created.

**Example**

.. list-table::
   :widths: 45 10 45
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =DRAW.BUTTON("ID1", "", "Button1", 1000, 1000, 3000, 3000,,,,,,,"Click Me!", FONTFORMAT("Arial", 12))
     - TRUE
     - Draw a button using 'Click Me!' as a label with an 'Arial 10' font.

