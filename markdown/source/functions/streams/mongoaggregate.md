# MONGO.AGGREGATE

Gets aggregated data from your Mongo database. You can use the
`Function Wizard <functionwizard>` for this function. Click
`here<mongofunctions>` for a more detailed tutorial on mongodb
functions.

**Syntax**

=`MONGO`.AGGREGATE(`Producer`, Collection, Aggregate JSON, Target\[,
Result Keys, Timeout\])

**Arguments**

| Name           | Description                                                                                     |
|----------------|-------------------------------------------------------------------------------------------------|
| Producer       | Producer to use for aggregating. The database name is configured in the affiliated `Connector`. |
| Collection     | Choose an existing collection, where the items are stored.                                      |
| Aggregate JSON | Define an aggregation using a `JSON` cell range.                                                |
| Target         | Defines a place to show aggregation result.                                                     |
| Result Keys    | Optional. Filter the result.                                                                    |
| Timeout        | Optional. Define Timeout.                                                                       |

**Return Value**

TRUE, if successful.

**Examples**
