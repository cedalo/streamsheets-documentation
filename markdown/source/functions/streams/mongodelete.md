# MONGO.DELETE

Stores data on a Mongo database. You can use the
`Function Wizard <functionwizard>` for this function. Click
`here<mongofunctions>` for a more detailed tutorial on mongodb
functions.

**Syntax**

=`MONGO`.DELETE(`Producer`, Collection, QueryJSON\[, Target, Timeout\])

**Arguments**

| Name       | Description                                                                                  |
|------------|----------------------------------------------------------------------------------------------|
| Producer   | Producer to use for deleting. The database name is configured in the affiliated `Connector`. |
| Collection | Choose an existing collection, where the item is stored.                                     |
| QueryJSON  | Define a query using a `JSON` cell range, which defines the object(s) to be deleted.         |
| Target     | Optional. Defines a place to give feedback on status of operation.                           |
| Timeout    | Optional. Define Timeout.                                                                    |

**Return Value**

TRUE, if successful.

**Examples**

| Function                                                   | Result | Comment                                                                                                                        |
|------------------------------------------------------------|--------|--------------------------------------------------------------------------------------------------------------------------------|
| =MONGO.DELETE("Producer", "TestCollection", `JSON`(A1:B4)) | TRUE   | This deletes all documents in the database with the values from A1:B4 using the "Producer" in the collection "TestCollection". |
