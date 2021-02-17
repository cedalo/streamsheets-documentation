# OLAPLOGIN

Log into OLAP server.

**Syntax**

OLAPLOGIN(User, Password)

**Arguments**

| Name     | Description         |
|----------|---------------------|
| User     | Username for login  |
| Password | Md5 coded password. |

**Return Value**

Token to use for most of the other OLAP functions.

**Example**

| Function                    | Result | Comment |
|-----------------------------|--------|---------|
| OLAPLOGON("admin", "XXXXX") | Token  |         |

<div class="warning">

<div class="title">

Warning

</div>

All OLAP Functions interrupt the calculation to wait for the OLAP server
result. This is necessary, as following calls to OLAP Functions might
depend on the success of the previous function. Calculation continues
with the next cycle.

</div>
