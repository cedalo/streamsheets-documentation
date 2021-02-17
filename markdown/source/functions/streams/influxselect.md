# INFLUX.SELECT

![star](/images/star.svg) This is a [Streamsheets
Premium](https://cedalo.com/download/) feature.

Performs a SELECT query on your Influx database. You can use the
`Function Wizard <functionwizard>` for this function.

**Syntax**

=`INFLUX`.SELECT(`Producer`, JSON \[, Target, XValue, Instant,
Timeout\])

**Arguments**

| Name     | Description                                                                                                                                               |
|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Producer | Producer to use for querying. The database name is configured in the affiliated `Connector`.                                                              |
| JSON     | Defines a query using a `JSON` cell range, which contains all clauses to build the SELECT query.                                                          |
| Target   | Optional. Defines a cell range to show the query result. Might not be necessary if result is visualized by a chart.                                       |
| XValue   | Optional. Name of the value which should be used for the x-axis if result is visualized by a chart. Defaults to "time".                                   |
| Instant  | Optional. If set to true the select query is immediately performed. Note: use with care, since this can overload InfluxDB very quickly. Default is false. |
| Timeout  | Optional. Defines Timeout to perform query.                                                                                                               |

**Return Value**

TRUE, if successful.

**Examples**

| Function                                          | Result | Comment                                                                                                                                                                         |
|---------------------------------------------------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| =INFLUX.SELECT("Producer", `JSON`(A1:B2), D1:F20) | TRUE   | Assuming passed JSON looks like { select: '\*', from: 'measures' } this will return all values currently stored in measurement "measures" and writes them to cell range D1:F20. |
