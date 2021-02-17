# TIMESCALE.INSERT

![star](/images/star.svg) This is a [Streamsheets
Professional](https://cedalo.com/download/) feature.

Performs a STORE query on your Timescale database.

<div class="note">

<div class="title">

Note

</div>

As of right now, the timescale functions work with the internal
timescaledb. Leave the Producer parameter empty and the connection is
setup. We are working on allowing further timescale connections.

</div>

**Syntax**

=TIMESCALE.INSERT(Stram, TableName, ValuesJSON \[Target,
TableSchemaJSON\])

**Arguments**

| Name            | Description                                                                                                                                                                                                                                                                         |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Stream          | Stream to use for querying. The database name is configured in the affiliated `Connector`.                                                                                                                                                                                          |
| TableName       | Name of the table to store values to. Note: its fully qualified name will be written to target range, if provided.                                                                                                                                                                  |
| ValuesJSON      | A JSON with key/value pairs to store.                                                                                                                                                                                                                                               |
| TableSchemaJSON | Optional. The timescale enforces the usage of a schema. If the used table is not already created, enter a JSON Range with a schema. Now for every new table the specifed schema is setup. Supported schema values can be NUMERIC, TEXT, TIMESTAMP,, TIMESTAMPTZ, DATE, INTEGER etc. |

**Return Value**

TRUE, if successful.

**Examples**

| Function                                                   | Result | Comment                                          |
|------------------------------------------------------------|--------|--------------------------------------------------|
| =TIMESCALE.INSERT("Producer", "measures", { v1: "hello" }) | TRUE   | Stores "hello" under v1 in the "measures" table. |
