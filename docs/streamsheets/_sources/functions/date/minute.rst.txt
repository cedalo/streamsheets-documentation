MINUTE
-----------------------------

Returns the minute of the date value.

**Syntax**

=MINUTE(DateValue[,Round])

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

Minute evaluated from date value.

**Example**

.. list-table::
   :widths: 45 10 45
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =MINUTE(43238.5)
     - 0
     - The given date value represents the 18th of May, 2018, 12:00
   * - =MINUTE(43930.999999, true)
     - 0
     - Rounded to 0
   * - =MINUTE(43930.999999, false)
     - 59
     - Same as before but prevent rounding
