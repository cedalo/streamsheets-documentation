# COUNTIF

Returns the number of cells in a cell-range which meet a given
criterion. To specify multiple criteria please use
`COUNTIFS <countifs>`.

**Syntax**

=COUNTIF(CellRange, Criterion)

**Arguments**

| Name      | Description                                                 |
|-----------|-------------------------------------------------------------|
| CellRange | The range of cells to count.                                |
| Criterion | The criterion a cell has to fulfill in order to be counted. |

**Return Value**

The number of cells which meet criterion.

**Example**

|     |         |     |
|-----|---------|-----|
|     | A       | B   |
| 1   | apples  | 32  |
| 2   | oranges | 54  |
| 3   | peaches | 75  |
| 4   | apples  | 86  |

| Function                                                                       | Result | Comment                                           |
|--------------------------------------------------------------------------------|--------|---------------------------------------------------|
| COUNTIF(<span class="blue">A1:A4</span>, <span class="orange">"apples"</span>) | 2      | Counts all apples.                                |
| COUNTIF(<span class="blue">B1:B4</span>, <span class="orange">"&gt;55"</span>) | 2      | Counts all cells which values is greater than 55. |
