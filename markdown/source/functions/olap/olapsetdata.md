# OLAPSETDATA

Write a data value to a cube.

**Syntax**

OLAPSETDATA(Token, Database, Cube, Value, Splash, Element1, ...,
ElementN)

**Arguments**

| Name                | Description                                                                                                           |
|---------------------|-----------------------------------------------------------------------------------------------------------------------|
| Token               | Token received from `olaplogin`                                                                                       |
| Database            | Database where cube resides.                                                                                          |
| Cube                | Name of cube to use. Must be unique.                                                                                  |
| Value               | Value to set into data cell.                                                                                          |
| Splash              | Flag, to indicate, that the data should be distributed into base elements, if this element is a consolidated element. |
| Element1...ElementN | Element names for data item to retrieve. One name for each dimension in the order they are defined is necessary.      |

**Return Value**

TRUE, if succesful, otherwise error string from olap server.

**Example**

| Function                                                                      | Result | Comment                               |
|-------------------------------------------------------------------------------|--------|---------------------------------------|
| OLAPSETDATA(A1, "DBSample", "Sales", 4000, FALSE, "2018", "May", "Product A") | TRUE   | A1 contains the token from OLAPLOGIN. |

<div class="warning">

<div class="title">

Warning

</div>

All OLAP Functions interrupt the calculation to wait for the OLAP server
result. This is necessary, as following calls to OLAP Functions might
depend on the success of the previous function. Calculation continues
with the next cycle.

</div>