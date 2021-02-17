# OLAPLOGOUT

Log out from OLAP server.

**Syntax**

OLAPLOGOUT(Token)

**Arguments**

| Name  | Description                     |
|-------|---------------------------------|
| Token | Token received from `olaplogin` |

**Return Value**

TRUE, if successful.

**Example**

| Function       | Result | Comment                               |
|----------------|--------|---------------------------------------|
| OLAPLOGOUT(A1) | TRUE   | A1 contains the token from OLAPLOGIN. |

<div class="warning">

<div class="title">

Warning

</div>

All OLAP Functions interrupt the calculation to wait for the OLAP server
result. This is necessary, as following calls to OLAP Functions might
depend on the success of the previous function. Calculation continues
with the next cycle.

</div>
