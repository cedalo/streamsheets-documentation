ISOBJECT
-----------------------------

Checks, if given value represents an object value.

**Syntax**

=ISOBJECT(Value)

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - Value
     - Value to check.

**Return Value**

TRUE if given value represents an object, otherwise FALSE.

**Example**

.. list-table::
   :widths: 45 10 45
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =ISOBJECT(JSON(A1:B1))
     - TRUE
     - JSON returns an object value
   * - =ISOBJECT("object")
     - FALSE
     - a text is not an object value

