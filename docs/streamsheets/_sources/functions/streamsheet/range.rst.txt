.. _range:

RANGE
-----------------------------

Creates a flat :term:`JSON` array from specified cell range. Basically this is the same as using :ref:`array` with nested and flat parameter set to true.


**Syntax**

=RANGE(Cellrange)

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - Cellrange
     - Source Range to retrieve data from.

**Return Value**

A comma separated list of cell values.

**Example**

.. list-table::
   :widths: 45 10 45
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =RANGE(A1:A1)
     - [42]
     - Range defines only one cell, so returned list contains only one value.
   * - =RANGE(A1, B2)
     - [42, 23, 13, 17]
     - Range defines 4 values, so returned list contains 4 values.

