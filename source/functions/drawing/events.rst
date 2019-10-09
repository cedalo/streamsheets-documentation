.. _events:

EVENTS
------

Assign a function, that will be executed, if an event occurs on the object The event handling is only active, if the
process is running. The events to be handles and the resulting action are defined by using a set of functions provided
to handle events as described below.

**Syntax**

=EVENTS([EventHandler1,EventHandler2,...])

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - EventHandler1..N
     - | Eventhandler defining the event and the action to be executed. Valid handlers are:
       |
       | :ref:`onclick`
       | :ref:`ondoubleclick`
       | :ref:`onmousedown`
       | :ref:`onmouseup`
       | :ref:`onvaluechange`

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

