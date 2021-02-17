# OLAPDBLIST

Get database name at given index.

**Syntax**

OLAPDBLIST(Token, Index)

**Arguments**

| Name  | Description                        |
|-------|------------------------------------|
| Token | Token received from `olaplogin`    |
| Index | Index of database to get name for. |

**Return Value**

TRUE, if successful, otherwise error string from OLAP server.

**Example**

| Function          | Result          | Comment                               |
|-------------------|-----------------|---------------------------------------|
| OLAPDBLIST(A1, 1) | e.g. "DBSample" | A1 contains the token from OLAPLOGIN. |

<div class="warning">

<div class="title">

Warning

</div>

All OLAP Functions interrupt the calculation to wait for the OLAP server
result. This is necessary, as following calls to OLAP Functions might
depend on the success of the previous function. Calculation continues
with the next cycle.

</div>
