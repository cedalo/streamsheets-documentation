.. _onvaluechange:

ONVALUECHANGE
-------------

Assign a function, that will be executed, if the a status value of a drawing item changes (e.g. Button pressed, Slider Value
changes). The event handling is only active, if the process is running.

**Syntax**

ONVALUECHANGE(Function)

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
   * - DRAW.BUTTON("ID5",,"Button1",4625,6774,5980,1984,,,,EVENTS(ONCLICK(DELETECELLS(D2))),,,"Button",,FALSE)
     - If the status of the button changes (pressed/not pressed), the range content is deleted.

