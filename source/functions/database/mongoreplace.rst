.. _mongoreplace:

MONGO.REPLACE
-----------------------------

Replaces elements in a Mongo database. You can use the :ref:`Function Wizard <functionwizard>` for this function. Only replaces one entry at a time.  


**Syntax**

=\ :term:`MONGO`\ .REPLACE(:term:`Producer`, Collection, Query, Document[, Upsert])

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - Producer
     - Producer to use for counting. The database name is configured in the affiliated :term:`Connector`.
   * - Collection
     - Choose an existing collection, where the item is stored.
   * - Query
     - Define a query using a :term:`JSON` cell range, which defines the document to be replaced.
   * - Document
     - Defines the key-value pair(s) to be replacing the old entry.
   * - Upsert
     - Optional Parameter to define, if a new document will be created when the query can not find a document to be replaced.  Default = FALSE

**Return Value**

TRUE, if successful.

**Examples**

.. list-table::
   :widths: 45 15 40
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =MONGO.REPLACE("Producer", "TestCollection", :ref:`JSON`\ (A1:B4), :ref:`JSON`\ (C1:D4))
     - TRUE
     - The Query looks for a document in the collection which matches the A1:B4 key-value pairs. The found document will be deleted and the new document takes its place. If nothing is found to be replaced, no action will occur. 
