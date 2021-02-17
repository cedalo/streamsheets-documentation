# OLAPCUBEDELETE

Create cube in OLAP database.

**Syntax**

OLAPCUBEDELETE(Token, Database, Name)

**Arguments**

| Name     | Description                     |
|----------|---------------------------------|
| Token    | Token received from `olaplogin` |
| Database | Database to delete cube from.   |
| Name     | Name of cube to delete.         |

**Return Value**

TRUE, if successful, otherwise error string from OLAP server.

**Example**

| Function                                | Result | Comment                               |
|-----------------------------------------|--------|---------------------------------------|
| OLAPCUBEDELETE(A1, "DBSample", "Sales") | TRUE   | A1 contains the token from OLAPLOGIN. |

<div class="warning">

<div class="title">

Warning

</div>

All OLAP Functions interrupt the calculation to wait for the OLAP server
result. This is necessary, as following calls to OLAP Functions might
depend on the success of the previous function. Calculation continues
with the next cycle.

</div>
