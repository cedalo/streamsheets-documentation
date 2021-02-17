# OLAPEDELETEALL

Delete all elements in dimension.

**Syntax**

OLAPEDELETEALL(Token, Database, Dimension)

**Arguments**

| Name      | Description                     |
|-----------|---------------------------------|
| Token     | Token received from `olaplogin` |
| Database  | Name of database.               |
| Dimension | Name of dimension.              |
| Element   | Name of element.                |

**Return Value**

TRUE, if successful, otherwise error string from OLAP server.

**Example**

| Function                               | Result | Comment                               |
|----------------------------------------|--------|---------------------------------------|
| OLAPEDELETEALL(A1, "DBSample", "Year") | TRUE   | A1 contains the token from OLAPLOGIN. |

<div class="warning">

<div class="title">

Warning

</div>

All OLAP Functions interrupt the calculation to wait for the OLAP server
result. This is necessary, as following calls to OLAP Functions might
depend on the success of the previous function. Calculation continues
with the next cycle.

</div>
