# MONGO.REPLACE

Replaces elements in a Mongo database. You can use the
`Function Wizard <functionwizard>` for this function. Only replaces one
entry at a time. Click `here<mongofunctions>` for a more detailed
tutorial on mongodb functions.

**Syntax**

=`MONGO`.REPLACE(`Producer`, Collection, Query, Document\[, Upsert\])

**Arguments**

| Name       | Description                                                                                                                            |
|------------|----------------------------------------------------------------------------------------------------------------------------------------|
| Producer   | Producer to use for counting. The database name is configured in the affiliated `Connector`.                                           |
| Collection | Choose an existing collection, where the item is stored.                                                                               |
| Query      | Define a query using a `JSON` cell range, which defines the document to be replaced.                                                   |
| Document   | Defines the key-value pair(s) to be replacing the old entry.                                                                           |
| Upsert     | Optional Parameter to define, if a new document will be created when the query can not find a document to be replaced. Default = FALSE |

**Return Value**

TRUE, if successful.

**Examples**

| Function                                                                   | Result | Comment                                                                                                                                                                                                                      |
|----------------------------------------------------------------------------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| =MONGO.REPLACE("Producer", "TestCollection", `JSON`(A1:B4), `JSON`(C1:D4)) | TRUE   | The Query looks for a document in the collection which matches the A1:B4 key-value pairs. The found document will be deleted and the new document takes its place. If nothing is found to be replaced, no action will occur. |
