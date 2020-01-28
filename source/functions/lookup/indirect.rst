.. _INDIRECT:

INDIRECT
-----------------------------

Returns the value of the reference specified by a text string.

**Syntax**

=INDIRECT(Ref_Text, [R1C1_Style])

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - Ref_Text
     - A textual representation of a cell reference, cell range reference or a named cell.
   * - R1C1_Style
     - Optional. If set to FALSE the given Ref_Text is interpreted as R1C1-style reference. Default is TRUE.

**Return Value**

The value at specified reference or #REF! if reference could not be created.

**Example**

.. list-table::
   :widths: 45 10 45
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =INDIRECT("A1")
     - 10
     - Returns the value of cell A1
   * - =INDIRECT("A" & A5)
     - 42
     - Assuming that A5 contains the value 4 the result represents the value of cell A4

