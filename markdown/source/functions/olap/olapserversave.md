# OLAPSERVERSAVE

Persist Server. The OLAP server keeps all data in memory. This command
forces the server to persist all data.

**Syntax**

OLAPSERVERSAVE(Token)

**Arguments**

| Name  | Description                     |
|-------|---------------------------------|
| Token | Token received from `olaplogin` |

**Return Value**

TRUE, if succesful, otherwise error string from olap server.

**Example**

| Function           | Result | Comment                               |
|--------------------|--------|---------------------------------------|
| OLAPSERVERSAVE(A1) | TRUE   | A1 contains the token from OLAPLOGIN. |

<div class="warning">

<div class="title">

Warning

</div>

All OLAP Functions interrupt the calculation to wait for the OLAP server
result. This is necessary, as following calls to OLAP Functions might
depend on the success of the previous function. Calculation continues
with the next cycle.

</div>
