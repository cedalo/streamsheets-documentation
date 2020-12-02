HEX2FLOAT
-----------------------------

Converts a hexadecimal number to a floating point number. Floating point numbers are represented as a 32bit-IEEE-754 number.

**Syntax**

=HEX2FLOAT(Number)

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - Number
     - The hexadecimal number to convert.

**Return Value**

The floating point number or a #NUM! error if given number is not a valid hexadecimal number.

**Example**

.. list-table::
   :widths: 45 10 45
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =HEX2FLOAT("40490FDB")
     - 3.1415927410125732421875
     - converts hexadecimal number 40490FDB to floating point number

