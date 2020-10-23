.. _json:

.. |JSON| image:: /images/JSON.PNG

JSON
-----------------------------

A Streamsheet has the possibility to process, generate and accumulate data. Before sending this data, the cells from a 
data range have to be structured, in order for an App to interpret them correctly. JSON() is paring two columns 
together to a key and value pair using the JSON Syntax. Alternatively it is possible to specify a text which will be
parsed to JSON or use one of the various INBOX/OUTBOX functions to reference an element from a message stored in inbox or
outbox respectively. The optional second parameter can be used to convert the resulting JSON object to a textual representation.
This function is mostly used within publish functions like::ref:`mqttpublish`. The JSON structure supports quotes "". eg. {"Key":"value"}

**Syntax**

JSON(DataRangeOrTextOrInboxOutboxFunction,ResultAsText)

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - DataRangeOrTextOrInboxOutboxFunction
     - A data range over at least two columns, only interpreting the first and last column into the JSON object. Or a text which will be evaluated to JSON. Or an INBOX/OUTBOX function to reference an element of a message.
   * - ResultAsText
     - Optional. Set to TRUE to return a textual representation of resulting JSON object. Defaults to FALSE.


**Return Value**

{ JSON } as a placeholder for JSON object or a textual representation, if successful.

**Example**

.. list-table::
   :widths: 20 40 40
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =JSON(B6:C8)
     - { JSON }
     - This is the representation of a cell filled with JSON data.
   * - =JSON(B6:C8, TRUE)
     - {"values":{"temperature":16918,"CO2":49}}
     - The textual representation of resulting JSON data.
   * - =JSON(C4) with following text in C4: {"values":{"temperature":16918,"CO2":49}}
     - { JSON }
     - This is the representation of a cell filled with JSON data.
   * - =JSON(OUTBOXDATA("MessageId","Customer"))
     - { JSON }
     - This is the representation of a cell filled with JSON data. Internally the cell has a JSON object which represents the "Customer" value from specified outbox message.
   * - =FEEDINBOX(B11,"S1") with B11 JSON(B6:C8)
     - In Streamsheet S1 the Inbox will be filled with the JSON gathered by B11
     - |JSON|

