.. _lower:

LOWER
-----------------------------

Converts the letters of a given string to lowercase. To convert text to uppercase please refer to :ref:`upper`.

**Syntax**

=LOWER(Text)

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - Text
     - A string to convert to lowercase

**Return Value**

Given text in lowercase.

**Example**

.. list-table::
   :widths: 45 10 45
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =LOWER("HeLLo!")
     - hello!
     - only affects letters in uppercase
   * - =LOWER(A1)
     - hello world
     - assumes cell A1 contains text "Hello WORLD"

