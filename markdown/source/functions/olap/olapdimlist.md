# OLAPDIMLIST

Get name of dimension at given index.

**Syntax**

OLAPDIMLIST(Token, Database, Index)

**Arguments**

| Name     | Description                     |
|----------|---------------------------------|
| Token    | Token received from `olaplogin` |
| Database | Name of database.               |
| Index    | Index of dimension.             |

**Return Value**

TRUE, if successful, otherwise error string from OLAP server.

**Example**

| Function                       | Result       | Comment                               |
|--------------------------------|--------------|---------------------------------------|
| OLAPDIMLIST(A1, "DBSample", 1) | e.g.: "Year" | A1 contains the token from OLAPLOGIN. |

<div class="warning">

<div class="title">

Warning

</div>

All OLAP Functions interrupt the calculation to wait for the OLAP server
result. This is necessary, as following calls to OLAP Functions might
depend on the success of the previous function. Calculation continues
with the next cycle.

</div>