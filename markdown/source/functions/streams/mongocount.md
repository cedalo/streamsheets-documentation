# MONGO.COUNT

Counts the amount of elements in a Mongo database. You can use the
`Function Wizard <functionwizard>` for this function. Click
`here<mongofunctions>` for a more detailed tutorial on mongodb
functions.

**Syntax**

=`MONGO`.COUNT(`Producer`, Collection, Query, Target\[, Timeout\])

**Arguments**

| Name       | Description                                                                                  |
|------------|----------------------------------------------------------------------------------------------|
| Producer   | Producer to use for counting. The database name is configured in the affiliated `Connector`. |
| Collection | Choose an existing collection, where the item is stored.                                     |
| Query      | Define a query using a `JSON` cell range, which defines the object(s) to be counted.         |
| Target     | Defines a place to give feedback on status of operation.                                     |
| Timeout    | Optional. Define Timeout.                                                                    |

**Return Value**

TRUE, if successful.

**Examples**

| Function                                                  | Result | Comment |
|-----------------------------------------------------------|--------|---------|
| =MONGO.COUNT("Producer", "TestCollection", `JSON`(A1:B4)) | TRUE   |         |
