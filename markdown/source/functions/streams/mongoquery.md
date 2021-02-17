# MONGO.QUERY

Gets data from your Mongo database. You can use the
`Function Wizard <functionwizard>` for this function. Click
`here<mongofunctions>` for a more detailed tutorial on mongodb
functions.

**Syntax**

=`MONGO`.QUERY(`Producer`, Collection, QueryJSON, Target\[, ResultKeys,
PageSize, Page, Sort, Timeout\])

**Arguments**

| Name       | Description                                                                                                           |
|------------|-----------------------------------------------------------------------------------------------------------------------|
| Producer   | Producer to use for deleting. The database name is configured in the affiliated `Connector`.                          |
| Collection | Choose an existing collection, where the item is stored.                                                              |
| QueryJSON  | Define a query using a `JSON` cell range, which defines the object(s) to searched for.                                |
| Target     | Defines a place to show query result.                                                                                 |
| ResultKeys | Optional. Filter the query result.                                                                                    |
| PageSize   | Optional. Number of Documents to return per page.                                                                     |
| Page       | Optional. Index of page to return.                                                                                    |
| Sort       | Optional. Sort query result ascending or descending. Use 1 and -1 to sort by creation time, or use a JSON cell range. |
| Timeout    | Optional. Define Timeout.                                                                                             |

**Return Value**

TRUE, if successful.

**Examples**

| Function                                                                      | Result | Comment                                                                                                                                                                   |
|-------------------------------------------------------------------------------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| =MONGO.QUERY("Producer", "TestCollection", `JSON`(A1:B4), `INBOX <inboxf>`()) | TRUE   | All documents in the database with the values from A1:B4 using the "Producer" in the collection "TestCollection" will be shown in the `Inbox` of the current Streamsheet. |
