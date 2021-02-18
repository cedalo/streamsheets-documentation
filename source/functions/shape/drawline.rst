
DRAW.LINE
-----------

Define a graphical line.

**Syntax**

=DRAW.LINE(UniqueID, Container, Name, X1, Y1, X2, Y2 [,LineFormat])

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
   * - X1
     - X1 Start X-Coordinate in 1/100th mm
   * - Y1
     - Y1 Start Y-Coordinate in 1/100th mm.
   * - X2
     - X2 End X-Coordinate in 1/100th mm
   * - Y2
     - Y2 End Y-Coordinate in 1/100th mm.
   * - LineFormat
     -  Optional. Options:
       
        - "None" for no line
        - Hexadecimal color value ("#FF0000" for Red)
        - JSON String created using lineformat

**Return Value**

TRUE, if line could be created.

**Example**

.. list-table::
   :widths: 60 7 33
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =DRAW.LINE("ID1", "", "Line1", 1000, 1000, 3000, 3000)
     - TRUE
     - Draw a line from coordinate 1cm, 1cm to coordinate 3cm, 3cm.
