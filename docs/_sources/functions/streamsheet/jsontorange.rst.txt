.. _jsontorange:
JSON.TO.RANGE
-----------------------------

Writes the content of given JSON to a specified cell range. It is recommended, but not a mandatory, to encode passed JSON with either :ref:`array`,
:ref:`dictionary`, :ref:`range` or the :ref:`json` function itself. For better results the encoding type and direction 
parameters can be specified. Please refer to :ref:`JSON.VALUE` if only a single JSON value should be extracted.


**Syntax**

=JSON.TO.RANGE(JSON, TargetRange [, Type, Direction])


**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - JSON
     - A JSON object which data will be writen to specified target range.
   * - TargetRange
     - A cell range to write JSON data to. If the range size covers only one cell, it will be automatically increased to match content of given JSON.
   * - Type
     - Optional. A text which describes the function used for encoding. Should be one of "ARRAY", "DICTIONARY", "JSON", "JSONFLAT" or "RANGE".
       Note: the difference beteween "JSON" and "JSONFLAT" is that "JSONFLAT" traverses the complete JSON while "JSON" stops after first level.
       Defaults to "JSON".
   * - Direction
     - Optional. Specify TRUE to align keys vertically for ARRAY, JSON and RANGE type and horizontally for DICTIONARY type.
       Note that the result depends on the direction used to encode given JSON. Defaults to TRUE.


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
   * - =JSON.TO.RANGE(ARRAY(A1:B2),A5:B6,"ARRAY")
     - | Results in:
       | A5="v1", B5="23"
       | A6="v1", B6="42"
   * - =JSON.TO.RANGE(DICTIONARY(A1:B2),A5:B6,"DICTIONARY",FALSE)
     - | Results in:
       | A5="v1", B5="23"
       | A6="v1", B6="42"
   * - =JSON.TO.RANGE(JSON(A1:B2),A5:B6,FALSE)
     - | Results in:
       | A5="v1", B5="v2"
       | A6="23", B6="42"
   * - =JSON.TO.RANGE(RANGE(A1:B2),A5:B6,"RANGE",FALSE)
     - | Results in:
       | A5="v1", B5="v2"
       | A6="23", B6="42"
