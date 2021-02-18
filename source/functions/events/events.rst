.. _events:

EVENTS
------

Assign a function, that will be executed, if a selected event occurs on the object/shape. 
Add the EVENTS() function to a shape in the "Events" parameter. 

**Syntax**

=EVENTS([EventHandler1,EventHandler2,...])

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - EventHandler1..N
     - Eventhandler defining the event and the action to be executed. Valid handlers are:       onclick()      ondoubleclick()        onmousedown()  onmouseup()        onvaluechange()

**Return Value**

TRUE.

**Example**

.. list-table::
   :widths: 75 25
   :header-rows: 1

   * - Function
     - Comment
   * - =DRAW.RECTANGLE("ID1", "", "Rect1", 1000, 1000, 3000, 3000,,,, EVENTS(ONCLICK(DELETECELLS(A1:C1)))
     - If the user clicks on the rectangle the cell range A1:C1 will be deleted.

