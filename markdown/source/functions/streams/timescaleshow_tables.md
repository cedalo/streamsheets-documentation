# TIMESCALE.SHOW\_TABLES

![star](/images/star.svg) This is a [Streamsheets
Premium](https://cedalo.com/download/) feature.

Shows all table in the timescaledb. Click `here<timescalefunctions>` for
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

=TIMESCALE.SHOW\_TABLES(Stream, Target)

**Arguments**

| Name   | Description                                                                                |
|--------|--------------------------------------------------------------------------------------------|
| Stream | Stream to use for querying. The database name is configured in the affiliated `Connector`. |
| Target | Defines the target displaying the response.                                                |

**Return Value**

TRUE, if successful.

**Examples**

| Function                                     | Result | Comment                                                                  |
|----------------------------------------------|--------|--------------------------------------------------------------------------|
| =TIMESCALE.SHOW\_TABLES("Producer", INBOX()) | TRUE   | The response of the query will be shown in the inbox of the Streamsheet. |
