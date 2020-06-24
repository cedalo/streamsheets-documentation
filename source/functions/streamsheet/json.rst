.. _json:

.. |JSON| image:: /images/JSON.PNG

JSON
-----------------------------

A Streamsheet has the possibility to process, generate and accumulate data. Before sending this data, the cells from a 
data range have to be structured, in order for a Stream Machine to interpret them correctly. JSON() is paring two columns 
together to a key and value pair using the JSON Syntax. Alternatively it is possible to specify a text which will be
parsed to JSON. The optional second parameter can be used to convert the resulting JSON object to a textual representation.
This function is mostly used within publish functions like::ref:`mqttpublish`.

**Syntax**

JSON(DataRangeOrText,ResultAsText)

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - DataRangeOrText
     - A data range over at least two columns, only interpreting the first and last column into the JSON Object. Or a 
     text which will be evaluated to JSON.
   * - ResultAsText
     - Optional. Set to TRUE to return a textual representation of resulting JSON object. Defaults to FALSE.


**Return Value**

{JSON Object} as a placeholder for JSON object or a textual representation, if successful.

**Example**

.. list-table::
   :widths: 20 40 40
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =JSON(B6:C8)
     - { JSON Object }
     - This is the representation of a cell filled with a JSON Object.
   * - =JSON(B6:C8, TRUE)
     - {"values":{"temperature":16918,"CO2":49}}
     - The textual representation of resulting JSON Object.
   * - =JSON(C4) with following text in C4: {"values":{"temperature":16918,"CO2":49}}
     - { JSON Object }
     - This is the representation of a cell filled with a JSON Object.
   * - =FEEDINBOX(B11,"S1") with B11 JSON(B6:C8)
     - In Streamsheet S1 the Inbox will be filled with the JSON gathered by B11
     - |JSON|

