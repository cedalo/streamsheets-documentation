# OLAPSLICEDELETE

Delete a temporary slice created by OLAPSLICE.

**Syntax**

OLAPSLICEDELETE(SliceName)

**Arguments**

| Name      | Description                          |
|-----------|--------------------------------------|
| SliceName | Name of slice to remove from memory. |

**Return Value**

TRUE, if successful.

**Example**

| Function                       | Result | Comment                                              |
|--------------------------------|--------|------------------------------------------------------|
| OLAPSLICEDELETE("SampleSlice") | TRUE   | "SampleSlice" must have been created using OLAPSLICE |

<div class="warning">

<div class="title">

Warning

</div>

All OLAP Functions interrupt the calculation to wait for the OLAP server
result. This is necessary, as following calls to OLAP Functions might
depend on the success of the previous function. Calculation continues
with the next cycle.

</div>
