STACKUPSERT
-----------------------------

The STACKUPSERT function is like a combination of :ref:`stackadd` and :ref:`stackfind`, i.e. it can add and update matching cell values from a given SourceRange.
Like STACKADD cell values are copied from SourceRange to a specified StackRange if they are not already contained, otherwise they are updated. Anaolog to STACKFIND, a CriteriaRange
is used to determine the cell values to copy or update.
Updating is done either by replacing the cell value or by using a simple text based arithmetic rule, like "+1" or by specifing an arbitrary formula.


**Syntax**

=STACKUPSERT(StackRange, SourceRange, CriteriaRange [, AddIfNotFound, Direction, Unique, TargetRange])


**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - StackRange
     -  Cell range, to copy SourceRange cells to or to update matching cells. The first row of the StackRange always contains the cell labels and remains unchanged.
   * - SourceRange
     -  Cell range, where the source data or update rules are taken from. Analog to StackRange the first row contains the cell labels and remains unchanged.
   * - CriteriaRange
     -  The CriteriaRange has at least 2 rows, the first one is the labels row with labels also found in StackRange and SourceRange (not necessarily all and maybe not in the same order!), the second to nth row contain filter settings.
        Note: criteria values can start with a comparison-operator like, >, >=, <, <=, = or <>
        Settings in the same row are combined using AND, multiple rows are OR.
   * - AddIfNotFound
     -  Optional. If a matching source row is not found in StackRange it will be added. Specify FALSE to prevent this behaviour.
        Defaults to TRUE.
   * - Direction
     -  Optional. If you set Direction to TRUE the new data is added behind the last empty row on the StackRange.
        If the StackRange is full, the first row (after the columns row) is dropped from the stack and all rows move up to make room for the new data in the last row. Analog, if Direction is set to FALSE rows are added at top of the stack and dropped from the bottom.
        By default Direction is TRUE.
   * - Unique
     -  Optional. If set to TRUE equal rows are updated or added only once to StackRange. Two rows are equal if they have same value in each column.
        Unique defaults to FALSE.
   * - TargetRange
     -  Optional. If TargetRange is specified and if a row has to be dropped, the row is copied to the TargetRange.
        TargetRange must have two rows, the first row has labels also found in StackRange (not necessarily all and maybe not in the same order!). The dropped values are copied to the matching columns in the TargetRange.
        If no row is dropped, the values in the second row of TargetRange are blanked out.
        **Important:** Before copying to the TargetRange all existing values in TargetRange are deleted (not the labels row!)


**Update Rules**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Function
     - Description
   * - \+
     -  Add specified number to current value in matching StackRange cell
   * - \-
     -  Subtract specified number from current value in matching StackRange cell
   * - =
     -  Specifies initial value of matching StackRange cell. Applied only on first add.
   * - formula
     -  its also possible to use any sheet formula to update matching StackRange cell.
        **Note:** if formula references cells from SourceRange which uses text arithmetic it is fully ok if formula returns an error value.


**Return Value**

TRUE, if no error occurred, otherwise an :ref:`error <error>` value.


**Example**
Below examples assumes following SourceRange:

.. list-table::
   :widths: 15 15 15 15 15 25
   :header-rows: 1

   * - 
     - A
     - B
     - C
     - D
     - E
   * - 4
     - ItemNumber
     - Quantity
     - Price
     - VAT
     - Total
   * - 5
     - 1234
     - +1
     - =23
     - 0.19
     - =B5 * C5 * (1 + D5)

.. list-table::
   :widths: 30 70
   :header-rows: 1

   * - Function
     - Result
   * - =STACKUPSERT(A1:E3,A5:E5,A4:A5)
     - | After calling STACKUPSERT the first time the row in A1 will contains following values:
       | 1234, 1, 23, 0.19, 27.37
       | i.e. Quantity is initialized with 1 and Price with 23 and the Total value is 27.37 which was calculated by specified formula.
   * - =STACKUPSERT(A1:E3,A5:E5,A4:A5)
     - | Calling STACKUPSERT again will update the row in A1 to following values:
       | 1234, 2, 23, 0.19, 54.74
       | i.e. +1 is used to update Quantity. The Price remains unchanged since it already exists. And again the Total value is calculated by a formula and results to 54.74.
