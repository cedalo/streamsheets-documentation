.. role:: blue
.. role:: orange


COUNTIF
-------

Returns the number of cells in a cell-range which meet a given criterion.
To specify multiple criteria please use :ref:`COUNTIFS <countifs>`.

**Syntax**

=COUNTIF(CellRange, Criterion)

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - CellRange
     - The range of cells to count.
   * - Criterion
     - The criterion a cell has to fulfill in order to be counted.


**Return Value**

The number of cells which meet criterion.

**Example**

.. list-table::
    :widths: 4 48 48

    * -
      - A
      - B
    * - 1
      - apples
      - 32
    * - 2
      - oranges
      - 54
    * - 3
      - peaches
      - 75
    * - 4
      - apples
      - 86

.. list-table::
    :widths: 45 10 45
    :header-rows: 1

    * - Function
      - Result
      - Comment
    * - COUNTIF(:blue:`A1:A4`, :orange:`"apples"`)
      - 2
      - Counts all apples.
    * - COUNTIF(:blue:`B1:B4`, :orange:`">55"`)
      - 2
      - Counts all cells which values is greater than 55.
