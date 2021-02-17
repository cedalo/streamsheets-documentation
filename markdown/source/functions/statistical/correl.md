# CORREL

Returns the correlation coefficient of two cell ranges.

**Syntax**

=CORREL(CellRange1, CellRange2)

**Arguments**

| Name       | Description                                                         |
|------------|---------------------------------------------------------------------|
| CellRange1 | A cell range which defines x numbers. No number values are ignored. |
| CellRange2 | A cell range which defines y numbers. No number values are ignored. |

**Return Value**

A number representing the correlation between all x and y values.

**Example**

| Function              | Result      | Comment                                                                                     |
|-----------------------|-------------|---------------------------------------------------------------------------------------------|
| =CORREL(A2:A6,B2:B6)  | 0.997054486 | with cell values A2: 3, A3: 2, A4: 4, A5: 5, A6: 6 and B2: 9, B3: 7, B4: 12, B5: 15, B6: 17 |
| =CORREL(A2:A4,B2:B6)  | \#NA!       | number of of given x and y values are not equal                                             |
| =CORREL(A7:A12,B2:B6) | \#DIV0!     | no x or y values                                                                            |
