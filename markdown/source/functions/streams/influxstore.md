# INFLUX.STORE

![star](/images/star.svg) This is a [Streamsheets
Premium](https://cedalo.com/download/) feature.

Performs a STORE query on your Influx database. You can use the
`Function Wizard <functionwizard>` for this function.

**Syntax**

=`INFLUX`.STORE(`Producer`, Measurement, Values-JSON \[, Tags-JSON,
Target, Duration, Instant, Timeout\])

**Arguments**

| Name        | Description                                                                                                                                                                                                                                                                                           |
|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Producer    | Producer to use for querying. The database name is configured in the affiliated `Connector`.                                                                                                                                                                                                          |
| Measurement | Name of the measurement to store values to. Note: its fully qualified name will be written to target range, if provided.                                                                                                                                                                              |
| Values      | A JSON with key/value pairs to store.                                                                                                                                                                                                                                                                 |
| Tags        | Optional.A JSON with key/value pairs to tag stored values.                                                                                                                                                                                                                                            |
| Target      | Optional. Defines a cell range to show the query result (key/value-pairs). Currently only the fully qualified measurement name is returned.                                                                                                                                                           |
| Duration    | Optional. Defines how long stored values should be kept. Duration is a number plus a time unit. Valid units are "ms" for milliseconds, "s" for second, "m" for minute, "h" for hour, "d" for day and "w" for week. To specifiy infinity use "INF". Minimum value is one hour. Default value is "INF". |
| Instant     | Optional. If set to true the store query is immediately performed. Note: use with care, since this can overload InfluxDB very quickly. Default is false.                                                                                                                                              |
| Timeout     | Optional. Defines Timeout to perform query.                                                                                                                                                                                                                                                           |

**Return Value**

TRUE, if successful.

**Examples**

| Function                                                           | Result | Comment                                                                                                     |
|--------------------------------------------------------------------|--------|-------------------------------------------------------------------------------------------------------------|
| =INFLUX.STORE("Producer", "measures", { v1: "hello" },,D1:E1,"1h") | TRUE   | Stores "hello" under v1 to "measures". Its fully qualified name ("1h.measures") will be written to cell E1. |
