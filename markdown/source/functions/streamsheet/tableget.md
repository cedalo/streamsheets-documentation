# TABLE.GET

Gets the value from the table cell at specified index.  
To create a table like cell range please refer to
`TABLE.UPDATE <tableupdate>`

**Syntax**

=TABLE.GET(CellRange, RowIndex, ColumnIndex)

**Arguments**

| Name        | Description                                                                                             |
|-------------|---------------------------------------------------------------------------------------------------------|
| CellRange   | Cell range to treat like a table. Its first row and its first column are used to reference table cells. |
| RowIndex    | The row index of a table cell.                                                                          |
| ColumnIndex | The column index of a table cell                                                                        |

**Return Value**

The value of specified table cell or an `error <error>` value if cell
range does not contain specified cell.

**Example** Below examples assumes following cells in range **A3:D5**

|       |           |           |           |
|-------|-----------|-----------|-----------|
| Time  | Turbine 1 | Turbine 2 | Turbine 3 |
| 93370 | 1000      | 2000      | 3000      |
| 93360 | 1500      | 2500      | 3500      |

| Function                              | Result | Description                                                       |
|---------------------------------------|--------|-------------------------------------------------------------------|
| =TABLE.GET(A3:D5, 93370, "Turbine 1") | 1000   | Gets the value from table cell (93360, "Turbine 1") which is 1000 |
| =TABLE.GET(A3:D5, 93360, "Turbine 2") | 2500   | Gets the value from table cell (93360, "Turbine 1") which is 2500 |
