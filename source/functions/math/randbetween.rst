.. _randbetween:

RANDBETWEEN
-----------------------------

Creates a random value between min and max. It is possible to create a series of increasing or decreasing values by
specifying a delta range. The delta is randomly choosen within its range and applied to last returned value.

**Syntax**

=RANDBETWEEN(Min, Max [, MinDelta, MaxDelta, InitialValue])

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
     - Optional. Minimum value applied to last value in next step. If specified MaxDelta must also be set. Min and MaxDelta together define the possible range of change
   * - MaxDelta
     - Optional. Maximum value applied to last value in next step. If specified MinDelta must also be set.
   * - InitialValue
     - Optional. Initial value to start with. Only used if MinDelta and MaxDelta are given. Note: delta will be applied to inital value.

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
   * - =RANDBETWEEN(10, 30, -1, 1, 15)
     - e.g.: 16
     - Initial value is 15 to which a random delta of -1, 0 or 1 is added. 1 in this case resulting in 16.
   * - =RANDBETWEEN(10, 30, 1, 3, 15)
     - e.g.: 16
     - Initial value is 15 to which a random delta of 1, 2 or 3 is added. 1 in this case resulting in 16.

