# TIMESCALE.SELECT

![star](/images/star.svg) This is a [Streamsheets
Professional](https://cedalo.com/download/) feature.

Performs a SELECT query on your timescale database.

<div class="note">

<div class="title">

Note

</div>

As of right now, the timescale functions work with the internal
timescaledb. Leave the Producer parameter empty and the connection is
setup. We are working on allowing further timescale connections.

</div>

**Syntax**

=TIMESCALE.SELECT(Stream, SelectJSON \[, Target, XValue,\])

**Arguments**

| Name       | Description                                                                                                             |
|------------|-------------------------------------------------------------------------------------------------------------------------|
| Stream     | Stream to use for querying. The database name is configured in the affiliated `Connector`.                              |
| SelectJSON | Defines a query using a `JSON` cell range, which contains all clauses to build the SELECT query.                        |
| Target     | Optional. Defines a cell range to show the query result. Might not be necessary if result is visualized by a chart.     |
| XValue     | Optional. Name of the value which should be used for the x-axis if result is visualized by a chart. Defaults to "time". |

**Return Value**

TRUE, if successful.

**Examples**

| Function                                             | Result | Comment                                                                                                                                                                         |
|------------------------------------------------------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| =TIMESCALE.SELECT("Producer", `JSON`(A1:B2), D1:F20) | TRUE   | Assuming passed JSON looks like { select: '\*', from: 'measures' } this will return all values currently stored in measurement "measures" and writes them to cell range D1:F20. |
