.. _randbetween:

RANDBETWEEN
-----------------------------

Creates a random value between min and max. It is possible to create a series of increasing or decreasing values by
specifying a delta range. The delta is randomly choosen within its range and applied to last returned value.

**Syntax**

=RANDBETWEEN(Min, Max [, MinDelta, MaxDelta])

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - Min
     - Minimum value to return.
   * - Max
     - Maximum value to return.
   * - MinDelta
     - Optional. Minimum value applied to last value in next step. If specified MaxDelta must also be set.
   * - MaxDelta
     - Optional. Maximum value applied to last value in next step. If specified MinDelta must also be set.

**Return Value**

Random number between minimum and maximum argument.

**Example**

.. list-table::
   :widths: 45 10 45
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =RANDBETWEEN(1, 10)
     - e.g.: 5
     - The return value can be any number between 1 and 10.

