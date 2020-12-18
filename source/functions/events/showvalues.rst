.. _showvalues:

SHOWVALUES
-----------

To display values from a querey in a boxed table use the SHOWVALUES() function in an event. Select the source and the size of your table, a event should trigger. 
The tablebox can be scrolled through and closed again. 

**Syntax**

SHOWVALUES(Datasource,Targetrange)

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - Datasource
     - A cell with a querey (e.g. TIMESCALE.SELECT(), TIMEAGGREGATE())
   * - Targetrange
     - A range to display the data over. 

**Return Value**

TRUE.

**Example**

.. list-table::
   :widths: 45 55
   :header-rows: 1

   * - Function
     - Comment
   * - DRAW.BUTTON("100285020360",,"Button1",22066,9182,7250,5794,,,,EVENTS(ONCLICK(SHOWVALUES(C6,K2:N7))),,,"Button",,FALSE)
     - If the user clicks on the button, queried data from C6 will be shown in a table covering K2:N7.

