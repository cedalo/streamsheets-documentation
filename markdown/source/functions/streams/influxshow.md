# INFLUX.SHOW

![star](/images/star.svg) This is a [Streamsheets
Premium](https://cedalo.com/download/) feature.

Performs a SHOW query on your Influx database. You can use the
`Function Wizard <functionwizard>` for this function.

**Syntax**

=`INFLUX`.SHOW(`Producer`, Type, Target, \[, Measurement, Timeout\])

**Arguments**

| Name        | Description                                                                                                                    |
|-------------|--------------------------------------------------------------------------------------------------------------------------------|
| Producer    | Producer to use for querying. The database name is configured in the affiliated `Connector`.                                   |
| Type        | Defines what to show. Must be one of following constants "Continuous Queries", "Measurements", "Series", "Retention Policies". |
| Target      | Defines a cell range to show the query result.                                                                                 |
| Measurement | Optional. Only applies to type "Series". A fully qualified name of the measurement to show its series of.                      |
| Timeout     | Optional. Defines Timeout to perform query.                                                                                    |

**Return Value**

TRUE, if successful.

**Examples**

| Function                                               | Result | Comment                                |
|--------------------------------------------------------|--------|----------------------------------------|
| =INFLUX.SHOW("Producer", "Retention Policies", D1:D10) | TRUE   | Shows all existing retention policies. |
