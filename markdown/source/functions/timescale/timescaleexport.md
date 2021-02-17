# TIMESCALE.EXPORT

![star](/images/star.svg) This is a [Streamsheets
Professional](https://cedalo.com/download/) feature.

Performs an EXPORT query on your Timescale database. This query works
exactly like the queries from TIMESCALE.SELECT, but exports the result
into a file. This file can be accessed in the side menu of your App
under "App Files".

<div class="note">

<div class="title">

Note

</div>

As of right now, the timescale functions work with the internal
timescaledb. Leave the Producer parameter empty and the connection is
setup. We are working on allowing further timescale connections.

</div>

**Syntax**

=TIMESCALE.EXPORT(Stream, TableName, SelectJSON, Filename, \[Compres,
Delimiter\])

**Arguments**

| Name       | Description                                                                                |
|------------|--------------------------------------------------------------------------------------------|
| Stream     | Stream to use for querying. The database name is configured in the affiliated `Connector`. |
| TableName  | Name of the table.                                                                         |
| SelectJSON | A SelectJSON to query your data to export.                                                 |
| Filename   | Name the File.                                                                             |

**Return Value**

TRUE, if successful.

**Examples**

| Function                                                        | Result | Comment                                                                                    |
|-----------------------------------------------------------------|--------|--------------------------------------------------------------------------------------------|
| =TIMESCALE.EXPORT("Producer", "Table1", JSON(A1:B2), "Export1") | TRUE   | Exports data from "Table1" to the file "Export1". The data to export is specified in A1:B2 |
