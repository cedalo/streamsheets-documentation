.. _code:

CODE
-----------------------------

Returns the numeric code for first character of given string.

**Syntax**

=CODE(Text, [CharacterSet])

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - Text
     - A string for which to return the code of its first character.
   * - CharacterSet
     - Optional. A string which specifies the character set to use for converting the character. Only the 'ansi' alias 'cp1252' set is currently supported. If no character-set is specified 'ansi' is used by default.

**Return Value**

The numeric code of first character of specified text.

**Example**

.. list-table::
   :widths: 50 50
   :header-rows: 1

   * - Function
     - Result
   * - =CODE("A")
     - 65
   * - =CODE("€")
     - 128
   * - =CODE("€", "ansi")
     - 128
