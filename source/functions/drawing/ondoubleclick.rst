ONDOUBLECLICK
-------------

Assign a function, that will be executed, if the user double clicks on a drawing item.  The event handling is only active, if the
process is running.

**Syntax**

ONDOUBLECLICK(Function)

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - Function
     - Function to execute.


**Return Value**

TRUE.

**Example**

.. list-table::
   :widths: 45 55
   :header-rows: 1

   * - Function
     - Comment
   * - DRAW.RECTANGLE("ID1", "", "Rect1", 1000, 1000, 3000, 3000,,,, EVENTS(ONDOUBLECLICK(DELETECELLS(A1:C1)))
     - If the user double clicks on the rectangle the cell range A1:C1 will be deleted.

