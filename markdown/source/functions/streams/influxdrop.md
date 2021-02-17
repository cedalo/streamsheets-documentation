# INFLUX.DROP

![star](/images/star.svg) This is a [Streamsheets
Premium](https://cedalo.com/download/) feature.

Performs a DROP query on your Influx database. You can use the
`Function Wizard <functionwizard>` for this function.

**Syntax**

=`INFLUX`.DROP(`Producer`, Type, Name \[, Timeout\])

**Arguments**

| Name     | Description                                                                                                     |
|----------|-----------------------------------------------------------------------------------------------------------------|
| Producer | Producer to use for querying. The database name is configured in the affiliated `Connector`.                    |
| Type     | Defines what to drop. Must be one of following constants "Continuous Query", "Measurement", "Retention Policy". |
| Name     | Fully qualified name to specify what to drop.                                                                   |
| Timeout  | Optional. Defines Timeout to perform query.                                                                     |

**Return Value**

TRUE, if successful.

**Examples**

| Function                                               | Result | Comment                                                        |
|--------------------------------------------------------|--------|----------------------------------------------------------------|
| =INFLUX.DROP("Producer", "Measurement", "1h.measures") | TRUE   | Drops the measurement with fully qualified name "1h.measures". |
