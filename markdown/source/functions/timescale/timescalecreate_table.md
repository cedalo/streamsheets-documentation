# TIMESCALE.CREATE\_TABLE

![star](/images/star.svg) This is a [Streamsheets
Professional](https://cedalo.com/download/) feature.

Creates a table in the timescaledb and sets up its schema.

<div class="note">

<div class="title">

Note

</div>

As of right now, the timescale functions work with the internal
timescaledb. Leave the Producer parameter empty and the connection is
setup. We are working on allowing further timescale connections.

</div>

**Syntax**

=TIMESCALE.CREATE\_TABLE(Stream, Type, Name \[, Timeout\])

**Arguments**

| Name       | Description                                                                                                                                                                     |
|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Stream     | Stream to use for querying. The database name is configured in the affiliated `Connector`.                                                                                      |
| TableName  | Defines which table to create.                                                                                                                                                  |
| SchemaJSON | The timescale enforces the usage of a schema. Enter a JSON Range to setup the schema. Supported schema values can be NUMERIC, TEXT, TIMESTAMP,, TIMESTAMPTZ, DATE, INTEGER etc. |

**Return Value**

TRUE, if successful.

**Examples**

| Function                                                   | Result | Comment                                                                                                                                            |
|------------------------------------------------------------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| =TIMESCALE.CREATE\_TABLE("Producer", "Table1",JSON(A1:B3)) | TRUE   | Creates the table "Table1". In the Range A1:B3 the needed key value pairs should be entered. E.g. Value1: TEXT; Value2: NUMERIC; Value3: TIMESTAMP |
