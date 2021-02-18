# OFFSET

Returns a cell range that is defined by specified number of rows and
columns from an initial range.

**Syntax**

=OFFSET(Range, RowOffset, ColumnOffset \[, Height, Width\])

**Arguments**

| Name         | Description                                                                                                                                 |
|--------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| Range        | A cell or cell range which defines the base of returned cell range.                                                                         |
| RowOffset    | Row offset from top left position of Range, might be positive or negative.                                                                  |
| ColumnOffset | Column offset from top left position of Range, might be positive or negative.                                                               |
| Height       | Optional. Number of rows for result range. Height must be greater than zero. If not given the height of specified base cell range is used.  |
| Width        | Optional. Number of columns for result range. Width must be greater than zero. If not given the width of specified base cell range is used. |

**Return Value**

> If height and width define a cell: Value of cell If height and width
> define a cell range: \#VALUE

**Example**

| Function                                                                                                                                             | Result             | Comment                                                                                                                                                                                          |
|------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **1.** =OFFSET(<span class="blue">A2</span>, 2, 1, 1, 1) **2.** =SUM(OFFSET(<span class="blue">A2</span>, 1, 1, 2, 1)) ![OFFSET](/images/OFFSET.PNG) | **1.** 6 **2.** 10 | **1.** B4 has an offset of 2 rows and 1 column from A1. The cell value is 6. **2.** B3 has an offset of 1 row and 1 column from A1. The SUM of the range defined through height and width is 10. |
