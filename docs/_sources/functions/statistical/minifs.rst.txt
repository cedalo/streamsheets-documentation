.. role:: blue
.. role:: green
.. role:: orange
.. role:: red


MINIFS
------

Returns the minimum value of all cells which meet multiple criteria.

**Syntax**

=MINIFS(MinRange, CriterionRange1, Criterion1, [CriterionRange2, Criterion2], ...)

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - MinRange
     - Cell-range to determine minimum value of.
   * - CriterionRange1
     - The cell-range which is checked against the criterion.
   * - Criterion1
     - The criterion each cell of CriterionRange1 has to fulfill.
   * - CriterionRange2,...
     - Optional. Additional cell-range which is checked against next criterion.
   * - Criterion2,...
     - Optional. Additional criterion each cell of CriterionRange2 has to fulfill.

**Return Value**

The mminimum of all cell values which meet all specified criteria.

**Example**

.. list-table::
    :widths: 4 24 24 24 24

    * -
      - A
      - B
      - C
      - D
    * - 1
      - 89
      - 1
      - a
      - 1
    * - 2
      - 93
      - 2
      - b
      - 2
    * - 3
      - 96
      - 2
      - a
      - 3
    * - 4
      - 85
      - 3
      - b
      - 4
    * - 5
      - 91
      - 1
      - b
      - 5
    * - 6
      - 88
      - 1
      - a
      - 6

.. list-table::
    :widths: 45 10 45
    :header-rows: 1

    * - Function
      - Result
      - Comment
    * - MINIFS(:blue:`A1:A6`, :orange:`B1:B6`, :green:`1`)
      - 88
      - Minimum value of cells which have 1 in their B-column.
    * - MINIFS(:blue:`A1:A6`, :orange:`C1:C6`, :green:`"b"`, :orange:`D6:D6`, :green:`">=2"`)
      - 85
      - Minimum value of all cells which have "b" in their C-column and its D-column value is greater or equal 2.
    * - MINIFS(:blue:`A1:A6`, :orange:`B1:B6`, :green:`">4"`)
      - 0
      - No cell fulfills given criterion.
    * - MINIFS(:blue:`A1:A6`, :orange:`B1:D7`, :green:`">4"`)
      - :red:`#VALUE!`
      - MinRange and CriteriaRange have different height and/or with.
