# MONGO.STORE

Stores data on a Mongo database. You can use the
`Function Wizard <functionwizard>` for this function. Click
`here<mongofunctions>` for a more detailed tutorial on mongodb
functions.

**Syntax**

=`MONGO`.STORE(`Producer`, Collection, Document)

**Arguments**

| Name       | Description                                                                                 |
|------------|---------------------------------------------------------------------------------------------|
| Producer   | Producer to use for storing. The database name is configured in the affiliated `Connector`. |
| Collection | Use an existing collection or type in any new collection name you need.                     |
| Document   | Define the payload of your document by using a `JSON` cell range.                           |

**Return Value**

TRUE, if successful.

**Examples**

| Function                                                  | Result | Comment                                                                                 |
|-----------------------------------------------------------|--------|-----------------------------------------------------------------------------------------|
| =MONGO.STORE("Producer", "TestCollection", `JSON`(A1:B4)) | TRUE   | This stores the values in A1:B4 using the "Producer" in the collection "TestCollection" |
