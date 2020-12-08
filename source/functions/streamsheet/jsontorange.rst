.. _jsontorange:
JSON.TORANGE
-----------------------------

Writes the content of given json to a specified cell range. It is recommended, but not a mandatory, to encode passed json with either :ref:`array`,
:ref:`dictionary`, :ref:`range` or the :ref:`json` function itself. For better results the encoding type and direction 
parameters can be specified. Please refer to :ref:`JSON.VALUE` if only a single json value should be extracted.


**Syntax**

=JSON.TORANGE(JSON, TargetRange [, Type, Direction])


**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - JSON
     - A json object which data will be writen to specified target range.
   * - TargetRange
     - A cell range to write json data to. If the range size covers only one cell, it will be automatically increased to match content of given json.
   * - Type
     - Optional. A text which describes the function used for encoding. Should be one of ARRAY, DICTIONARY, JSON, JSONROOT or RANGE.
       Note: the difference beteween JSON and JSONROOT is that JSON traverses the complete json while JSONROOT stops after first level.
       Defaults to JSON.
   * - Direction
     - Optional. Specify TRUE to align keys vertically for ARRAY, JSON and JSONROOT type and horizontally for DICTIONARY and RANGE type.
       Note that the result might depends on the direction used to encode given json. Defaults to TRUE.


**Return Value**

TRUE, if no error occurred, otherwise an :ref:`error <error>` value.


**Example**
Below examples assumes following SourceRange:

.. list-table::
   :widths: 40 30 30
   :header-rows: 1

   * - 
     - A
     - B
   * - 1
     - v1
     - 23
   * - 2
     - v2
     - 42


.. list-table::
   :widths: 30 70
   :header-rows: 1

   * - Function
     - Result
   * - =JSON.TORANGE(ARRAY(A1:B2),A5:B6,"ARRAY")
     - | Results in:
       | A5="v1", B5="23"
       | A6="v1", B6="42"
   * - =JSON.TORANGE(DICTIONARY(A1:B2),A5:B6,"DICTIONARY",FALSE)
     - | Results in:
       | A5="v1", B5="23"
       | A6="v1", B6="42"
   * - =JSON.TORANGE(JSON(A1:B2),A5:B6,FALSE)
     - | Results in:
       | A5="v1", B5="v2"
       | A6="23", B6="42"
   * - =JSON.TORANGE(RANGE(A1:B2),A5:B6,"RANGE",FALSE)
     - | Results in:
       | A5="v1", B5="v2"
       | A6="23", B6="42"
