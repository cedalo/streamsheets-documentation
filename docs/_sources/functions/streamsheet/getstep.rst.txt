.. _getstep:

GETSTEP
-----------------------------

Returns the current Streamsheet step.

.. Note:: A Streamsheet step is increased only if the Streamsheet is processed, which is not necessarily the case on each 
            App step. 

To get the steps for an App refer to :ref:`getmachinestep` and to get the steps for Streamsheets which are repeatedly
triggered by :ref:`execute` refer to :ref:`repeatindex`.

**Syntax**

=GETSTEP([:term:`Streamsheet`])

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - Streamsheet
     - Optional. Define the Streamsheet to retrieve step count from. If not specified affiliated Streamsheet is used.


**Return Value**

Current Streamsheet step.

**Example**

.. list-table::
   :widths: 45 10
   :header-rows: 1

   * - Function
     - Result

   * - =GETSTEP()
     - 1
   * - =GETSTEP("S2")
     - 1

