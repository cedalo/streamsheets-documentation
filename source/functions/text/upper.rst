.. _upper:

UPPER
-----------------------------

Converts the letters of a given string to uppercase. To convert text to lowercase please refer to :ref:`lower`.

**Syntax**

=UPPER(Text)

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - Text
     - A string to convert to uppercase

**Return Value**

Given text in uppercase.

**Example**

.. list-table::
   :widths: 45 10 45
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =UPPER("nIcE 4 u!")
     - NICE 4 U!
     - only affects letters in lowercase
   * - =UPPER(A1)
     - HELLO WORLD
     - assumes cell A1 contains text "hello world"

