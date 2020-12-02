.. _sumifs:

.. role:: blue
.. role:: green
.. role:: orange


SUMIFS
------

Returns the sum of all cell values which meet multiple criteria.

**Syntax**

=SUMIFS(SumRange, CriterionRange1, Criterion1, [CriterionRange2, Criterion2], ...)

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - SumRange
     - Cell-range to calculate sum for.
   * - CriterionRange1
     - The cell-range which is checked against the criterion.
   * - Criterion1
     - The criterion each cell of CriterionRange1 has to fulfill.
   * - CriterionRange2,...
     - Optional. Additional cell-range which is checked against next criterion.
   * - Criterion2,...
     - Optional. Additional criterion each cell of CriterionRange2 has to fulfill.

**Return Value**

The sum of cell values which meet all specified criteria.

**Example**

.. list-table::
    :widths: 4 24 24 24 24

    * -
      - A
      - B
      - C
      - D
    * - 1
      - 230000
      - Freiburg
      - 3
      - No
    * - 2
      - 197000
      - Cologne
      - 2
      - Yes
    * - 3
      - 345678
      - Cologne
      - 4
      - Yes
    * - 4
      - 321900
      - Freiburg
      - 2
      - Yes
    * - 5
      - 203000
      - Cologne
      - 3
      - No

.. list-table::
    :widths: 45 10 45
    :header-rows: 1

    * - Function
      - Result
      - Comment
    * - SUMIFS(:blue:`A1:A5`, :orange:`B1:B5`, :green:`"Cologne"`)
      - 745678
      - Total price of all avaialable houses in Cologne.
    * - SUMIFS(:blue:`A1:A5`, :orange:`B1:B5`, :green:`"Freiburg"`, :orange:`C1:C5`, :green:`">2"`)
      - 230000
      - Total price of all avaialable houses in Freiburg which have more than 2 rooms.
