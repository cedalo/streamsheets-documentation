# TIMESCALE.DROP\_TABLE

![star](/images/star.svg) This is a [Streamsheets
Premium](https://cedalo.com/download/) feature.

Drops a table from the timescaledb. Click `here<timescalefunctions>` for
a more detailed tutorial on timemescaledb functions.

<div class="note">

<div class="title">

Note

</div>

As of right now, the timescale functions work with the internal
timescaledb. Leave the Producer parameter empty and the connection is
setup. We are working on allowing further timescale connections.

</div>

**Syntax**

=TIMESCALE.DROP\_TABLE(Stream, Type, Name \[, Timeout\])

**Arguments**

| Name      | Description                                                                                |
|-----------|--------------------------------------------------------------------------------------------|
| Stream    | Stream to use for querying. The database name is configured in the affiliated `Connector`. |
| TableName | Defines which table to drop.                                                               |

**Return Value**

TRUE, if successful.

**Examples**

| Function                                      | Result | Comment                   |
|-----------------------------------------------|--------|---------------------------|
| =TIMESCALE.DROP\_TABLE("Producer", "Table1",) | TRUE   | Drops the table "Table1". |
