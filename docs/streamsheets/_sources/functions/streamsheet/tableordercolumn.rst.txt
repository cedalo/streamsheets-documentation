TABLE.ORDERCOLUMN
-----------------------------

| Orders specfied table columns according to corresponding reference columns.
| To create a table like cell range please refer to :ref:`TABLE.UPDATE <tableupdate>`.


**Syntax**

=TABLE.ORDERCOLUMN(ColumnsRange, ReferenceColumnsRange)

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - ColumnsRange
     - Cell range to treat like table columns. Its first row defines the column header.
   * - ReferenceColumnsRange
     - Cell range which defines the order of referenced table columns. Its first row defines the column header.

**Return Value**

TRUE or an :ref:`error <error>` value.

**Example**
Below examples assumes following cells in range **A3:D5**

.. list-table::
   :widths: 25 25 25 25

   * - Col1
     - Col2
     - Col1
     - Col2
   * - 21
     - "hello"
     - 42
     - "world"
   * - 42
     - "world"
     - 63
     - "hello"
   * - 63
     - "!!!"
     - 
     - 

.. list-table::
   :widths: 40 10 50
   :header-rows: 1

   * - Function
     - Result
     - Description
   * - =TABLE.ORDERCOLUMN(A3:B5,C3:C5)
     - TRUE
     - Orders **Col1** as follows: 42, 63, 21
   * - =TABLE.ORDERCOLUMN(A3:D5, C3:D5)
     - TRUE
     - Orders both columns **Col1** and **Col2**, with **Col2** as follows: world, hello, !!!

