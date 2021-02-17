# OLAPCUBEDIMLIST

Get name of dimension in cube at given index.

**Syntax**

OLAPCUBEDIMLIST(Token, Database, Cube, Index)

**Arguments**

| Name     | Description                          |
|----------|--------------------------------------|
| Token    | Token received from `olaplogin`      |
| Database | Database where cube resides.         |
| Cube     | Name of cube to use. Must be unique. |
| Index    | Index of dimension in cube.          |

**Return Value**

Name of dimension, otherwise error string from olap server.

**Example**

| Function                                    | Result                           | Comment                               |
|---------------------------------------------|----------------------------------|---------------------------------------|
| OLAPCUBEDIMLIST(A1, "DBSample", "Sales", 1) | Name of first dimension in cube. | A1 contains the token from OLAPLOGIN. |

<div class="warning">

<div class="title">

Warning

</div>

All OLAP Functions interrupt the calculation to wait for the OLAP server
result. This is necessary, as following calls to OLAP Functions might
depend on the success of the previous function. Calculation continues
with the next cycle.

</div>
