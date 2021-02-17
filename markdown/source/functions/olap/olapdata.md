# OLAPDATA

Get value from cube. Elements for all dimensions must be provided in the
order they are defined in the cube.

**Syntax**

OLAPDATA(Token, Database, Cube, Element1, ..., ElementN)

**Arguments**

| Name                | Description                                                                                                      |
|---------------------|------------------------------------------------------------------------------------------------------------------|
| Token               | Token received from `olaplogin`                                                                                  |
| Database            | Database where cube resides.                                                                                     |
| Cube                | Name of cube to use. Must be unique.                                                                             |
| Element1...ElementN | Element names for data item to retrieve. One name for each dimension in the order they are defined is necessary. |

**Return Value**

Data value, otherwise error string from olap server.

**Example**

| Function                                                      | Result                            | Comment                               |
|---------------------------------------------------------------|-----------------------------------|---------------------------------------|
| OLAPDATA(A1, "DBSample", "Sales", "2018", "May", "Product A") | Element value at that coordinate. | A1 contains the token from OLAPLOGIN. |

<div class="warning">

<div class="title">

Warning

</div>

All OLAP Functions interrupt the calculation to wait for the OLAP server
result. This is necessary, as following calls to OLAP Functions might
depend on the success of the previous function. Calculation continues
with the next cycle.

</div>
