.. role:: blue
.. role:: green
.. role:: orange


AVERAGEIF
---------

Returns the average of all cell values in a cell-range which meet a given criterion.
To specify multiple criteria please use :ref:`AVERAGEIFS <averageifs>`.

**Syntax**

=AVERAGEIF(DataRange, Criterion, [AverageRange])

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - DataRange
     - Cell-range to calculate average for.
   * - Criterion
     - The criterion each cell has to fulfill.
   * - AverageRange
     - Optional. If given these cells are used to calculate average. If ommitted DataRange is used.

**Return Value**

The average over all cell values which meet criterion.

**Example**

.. list-table::
    :widths: 4 48 48

    * -
      - A
      - B
    * - 1
      - 100000
      - 200
    * - 2
      - 200000
      - 400
    * - 3
      - 300000
      - 400
    * - 4
      - North
      - 600
    * - 5
      - East
      - 800
    * - 6
      - South
      - 1000

.. list-table::
    :widths: 45 10 45
    :header-rows: 1

    * - Function
      - Result
      - Comment
    * - AVERAGEIF(:blue:`A1:A3`, :orange:`"<250000"`)
      - 150000
      - Only cells A1 and A2 match given criterion
    * - AVERAGEIF(:blue:`A1:A6`, :orange:`"=*th"`, :green:`B1:B6`)
      - 800
      - Take cells from colum A which end with "th" and average corresponding values from column B
