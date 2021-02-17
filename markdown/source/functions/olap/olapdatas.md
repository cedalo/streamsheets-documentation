# OLAPDATAS

Retrieve data from a prevously defined Olap slice. The two elements
provided are the variable elements in the slice for the column and the
row.

**Syntax**

OLAPDATAS(SliceName, Element1, ..., ElementN)

**Arguments**

| Name                | Description                                                                                                      |
|---------------------|------------------------------------------------------------------------------------------------------------------|
| SliceName           | Name of slice to get data from. The slice must be created before using this function by using `olapslice`        |
| Element1...ElementN | Element names for data item to retrieve. One name for each dimension in the order they are defined is necessary. |

**Return Value**

Data value, otherwise error string from olap server.

**Example**

| Function                                           | Result                            | Comment |
|----------------------------------------------------|-----------------------------------|---------|
| OLAPDATAS("SliceName", "2018", "May", "Product A") | Element value at that coordinate. |         |

<div class="warning">

<div class="title">

Warning

</div>

All OLAP Functions interrupt the calculation to wait for the OLAP server
result. This is necessary, as following calls to OLAP Functions might
depend on the success of the previous function. Calculation continues
with the next cycle.

</div>
