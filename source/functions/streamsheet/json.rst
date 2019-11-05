.. _json:

.. |JSON| image:: /images/JSON.PNG

JSON
-----------------------------

A Streamsheet has the possibility to process, generate and accumulate data. Before sending this data, the cells from a data range have to be structured, in order for a Stream Machine to interpret them correctly. 
JSON() is paring two columns together to a key and value pair using the JSON Syntax. This function is mostly used within publish functions like::ref:`mqttpublish`. 

**Syntax**

JSON(DataRange)

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - DataRange
     - A data range over at least two columns, only interpreting the first and last column into the JSON Object. 


**Return Value**

[object Object] or {JSON Object}, if successful.

**Example**

.. list-table::
   :widths: 40 35 45
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =JSON(B6:C8)
     - { JSON Object }}
     - This is the representation of a cell filled with a JSON Object.
   * - =FEEDINBOX(B11,"S1") with B11 JSON(B6:C8)
     - In Streamsheet S1 the Inbox will be filled with the JSON gathered by B11
     - |JSON|

