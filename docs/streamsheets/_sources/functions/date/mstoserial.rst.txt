MSTOSERIAL
-----------------------------

Converts the given elapsed milliseconds, since UNIX epoch time, to a serial date value.

**Syntax**

=MSTOSERIAL(TimeValue)

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - TimeValue
     - Milliseconds since UNIX epoch time (1st of January 1970).

**Return Value**

Date value deducted from milliseconds.

**Example**

.. list-table::
   :widths: 45 10 45
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =MSTOSERIAL(3230234343334)
     - 37386.97157
     - The given date value represents the 10th of May, 2002, 23:19.

