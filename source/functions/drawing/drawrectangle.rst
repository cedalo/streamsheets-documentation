
DRAW.RECTANGLE
--------------

Define a rectangle on a given drawing.

**Syntax**

=DRAW.RECTANGLE(UnqiueId, Container, Name, X, Y, Width, Height, LineFormat, FillFormat, Attributes, Events, RotCenter)

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

**Return Value**

TRUE, if rectangle could be created.

**Example**

.. list-table::
   :widths: 53 7 40
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =DRAW.RECTANGLE("ID1", "", "Rectangle1", 1000, 1000, 2000, 3000)
     - TRUE
     - Draw a rectangle, having a size of 2 by 3 cm at the position 1cm, 1cm.

