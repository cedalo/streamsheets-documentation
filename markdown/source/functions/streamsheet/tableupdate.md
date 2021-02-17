# TABLE.UPDATE

Creates and updates a defined cell range in a table like manner. The
first row and first column of specifeid cell range defines the indices
used to reference a table cell. To set or update a cell its
corresponding row and column indices must be given. If a row index does
not exist in current range, it can be automatically added to top or
bottom. The same applies for a column index which can be automatically
added to the left or right.

To simply read values from a table cell refer to `TABLE.GET <tableget>`

**Syntax**

=TABLE.UPDATE(CellRange, Value \[, RowIndex, ColumnIndex, PushRowAt,
PushColumnAt, AggregationMethod\])

**Arguments**

| Name              | Description                                                                                                                                                                                                 |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CellRange         | Cell range to treat like a table. Its first row and its first column are used to reference table cells.                                                                                                     |
| Value             | A value to set in referenced table cell.                                                                                                                                                                    |
| RowIndex          | Optional. The row index of a table cell. If not defined no value is set. The PushRowAt parameter can be used to add the row index if the table has no equal index.                                          |
| ColumnIndex       | Optional. The column index of a table cell. If not defined no value is set. The PushColumnAt parameter can be used to add the column index if the table has no equal index.                                 |
| PushRowAt         | Optional. Defines where to insert a new row index. Should be either 1, -1, or 0. To insert new row at the bottom specfiy 1, -1 will insert it at the top and 0 will not insert at all. Defaults to 0.       |
| PushColumnAt      | Optional. Defines where to insert a new column index. Should be either 1, -1, or 0. To insert new column to the right specfiy 1, -1 will insert it to the left and 0 will not insert at all. Defaults to 0. |
| AggregationMethod | Optional. One of the predefined numbers which specifies the aggregation method to use for specified table cell. Defaults to 0.                                                                              |

**Aggregation Methods**

| Number | Method  | Description                                                       |
|--------|---------|-------------------------------------------------------------------|
| 0      | NONE    | No aggregation is performed and the last valid value is returned. |
| 1      | AVERAGE | Calculates the average of all received values.                    |
| 2      | COUNT   | Counts the number of received values.                             |
| 3      | COUNTA  | Counts all values which are not zero.                             |
| 4      | MAX     | Determines the maximum of all received values.                    |
| 5      | MIN     | Determines the minimum of all received values.                    |
| 6      | PRODUCT | Calculates the product of all received values.                    |
| 7      | STDEV.S | Calculates the standard deviation of all recieved values.         |
| 8      | STDEV.P | Currently **not available**!!                                     |
| 9      | SUM     | Calculates the sum of all received values.                        |

**Return Value**

TRUE or an `error <error>` value.

**Example** Below examples assumes following cells in range **A3:D5**

|       |           |           |           |
|-------|-----------|-----------|-----------|
| Time  | Turbine 1 | Turbine 2 | Turbine 3 |
| 93370 | 1000      | 2000      | 3000      |
| 93360 | 1500      | 2500      | 3500      |

| Function                                            | Result | Description                                                                                                                                                                                                               |
|-----------------------------------------------------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| =TABLE.UPDATE(A3:D5, 42, 93360, "Turbine 1")        | TRUE   | Sets value in table cell (93360, "Turbine 1") to 42                                                                                                                                                                       |
| =TABLE.UPDATE(A3:D5, 42, 93300, "Turbine 42", 1, 1) | TRUE   | Inserts new row and column indices to the bottom and right of the table and sets the corresponding table cell to 42. Note that the row with index 93370 and the column with index "Turbine 1" are moved out of the table. |
