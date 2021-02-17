# OLAPDIMCREATE

Create dimension in database.

**Syntax**

OLAPDIMCREATE(Token, Database, Name)

**Arguments**

| Name     | Description                                  |
|----------|----------------------------------------------|
| Token    | Token received from `olaplogin`              |
| Database | Name of database to create dimension in.     |
| Name     | Name of dimension to create. Must be unique. |

**Return Value**

TRUE, if successful, otherwise error string from OLAP server.

**Example**

| Function                              | Result | Comment                               |
|---------------------------------------|--------|---------------------------------------|
| OLAPDIMCREATE(A1, "DBSample", "Year") | TRUE   | A1 contains the token from OLAPLOGIN. |

<div class="warning">

<div class="title">

Warning

</div>

All OLAP Functions interrupt the calculation to wait for the OLAP server
result. This is necessary, as following calls to OLAP Functions might
depend on the success of the previous function. Calculation continues
with the next cycle.

</div>
