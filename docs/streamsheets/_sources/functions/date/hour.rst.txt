HOUR
-----------------------------

Returns the hour of the date value.

**Syntax**

=HOUR(DateValue[,Round])

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - DateValue
     - Insert a valid timestamp format or a cell reference to a timestamp. A timestamp consists out of two numbers. The number to the left of the decimal define the days since 01.01.1900. The number to the right of the decimal
       define the fraction of the day.
   * - Round
     - Optional. Defines if value should be rounded. Default is true.


**Return Value**

Hour evaluated from date value.

**Example**

.. list-table::
   :widths: 45 10 45
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =HOUR(43238.5)
     - 12
     - The given date value represents the 18th of May, 2018, 12:00
   * - =HOUR(43930.999999, true)
     - 0
     - Rounded to 0
   * - =HOUR(43930.999999, false)
     - 23
     - Same as before but prevent rounding
