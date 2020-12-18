.. _showdialog:

SHOWDIALOG
-----------

It is possible to export data to the App Files of an App (e.g. TIMESCALE.EXPORT()). Usually it is possible to access the App FIles over the left side menu. 
This menu is not accessible, if you only want to allow your user to be able to access a build App via the "preview" or "share App" mode. 
The SHOWDIALOG() function allows opening the App Files via event on a shape or object. 

**Syntax**

SHOWDIALOG()

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - No parameter
     - There are no parameter inputs neccessary

**Return Value**

TRUE.

**Example**

.. list-table::
   :widths: 45 55
   :header-rows: 1

   * - Function
     - Comment
   * - DRAW.BUTTON("100285020360",,"Button1",22066,9182,7250,5794,,,,EVENTS(ONCLICK(SHOWDIALOG())))),,,"Button",,FALSE)
     - If the user clicks on the button the App Files dialog will open.

