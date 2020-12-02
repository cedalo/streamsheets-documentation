.. _countifs:

.. role:: blue
.. role:: orange


COUNTIFS
--------

Returns the number of cells from several cell-ranges which meet all corresponding criteria.

**Syntax**

=COUNTIFS(CriterionRange1, Criterion1, [CriterionRange2, Criterion2], ...)

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - CriterionRange1
     - The range of cells to count.
   * - Criterion1
     - The criterion each cell of CriterionRange1 has to fulfill.
   * - CriterionRange2,...
     - Optional. Additional cell-range which is checked against next criterion.
   * - Criterion2,...
     - Optional. Additional criterion each cell of CriterionRange2 has to fulfill.

**Return Value**

The number of cells which meet all specified criteria.

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
    * - COUNTIFS(:blue:`C1:C4`, :orange:`">=3"`)
      - 3
      - Counts all houses which have three or more rooms.
    * - COUNTIFS(:blue:`B1:B5`, :orange:`"Cologne"`, :blue:`D1:D5`, :orange:`"=Yes"`)
      - 2
      - Counts all houses in Cologne which have a garage.
