.. _read:

.. |Read| image:: /images/Read.png


READ
-----------------------------

Reads the values from a :term:`JSON` object using the given key. Mainly used to read :ref:`inbox` :term:`payload`\ s.

**Syntax**

=READ(Key, TargetCell, Type[, Direction, ErrorOnMissing])

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - Key
     - A key to a data item, that should be read. The key is usually created by using utility functions
       like :ref:`INBOXDATA`, :ref:`INBOXMETADATA`, :ref:`OUTBOXMETADATA` or :ref:`OUTBOXDATA`. The key consists of the path to the item within the
       JSON object. Each path element is surrounded by brackets, Depending on the used utility function, you
       can retrieve data from different sources (e.g. Inbox or Outbox).
   * - TargetCell or Range
     - Optional. Target cell or range to write the resulting value into.
   * - Type
     - Optional. Type of Value. Allowed types are String, Number, Bool/Boolean, Array, Dictionary, Json or Jsonroot. The type defines the color of the target cell. Defaults to Json.
   * - Direction
     - Optional. Specify TRUE to align keys vertically for type ARRAY, JSON or JSONROOT and horizontally for type DICTIONARY or RANGE. Defaults to TRUE.
   * - ErrorOnMissing
     - Optional. If this is set to TRUE #NA! will be returned if no data is available. If set to FALSE last read value
       will be returned or a default value if none was read before. Default is FALSE.


**Return Value**

The last part of the key of the data value to be retrieved.

**Example**

.. list-table::
   :widths: 45 40 40
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =READ(:ref:`INBOXDATA`\ ("", "", "Customer"), B1, "String")
     - Customer
     - Example to read a value from a JSON object from the inbox of the current Streamsheet and transfer it into cell B1.
   * - =READ(:ref:`INBOXDATA`\ ("", "", "Customer", "Name"), C2, "String",,TRUE)
     - :ref:`#NA! <error>`
     - Returns error code if customer name is not available because last parameter is to TRUE.
   * - =READ(:ref:`INBOXDATA`\ (,,"Products","0"),F19:J25,"Dictionary",,TRUE)
     -  |Read|
        Read function with target range. 
     - Example to read a whole table with the help of the DICTIONARY() function and a target range. 

