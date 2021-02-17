# SUMIF

Returns the sum of all cell values in a cell-range which meet a given
criterion. To specify multiple criteria please use `SUMIFS <sumifs>`.

**Syntax**

=SUMIF(DataRange, Criterion, \[SumRange\])

**Arguments**

| Name      | Description                                                                                    |
|-----------|------------------------------------------------------------------------------------------------|
| DataRange | Cell-range to calculate sum for.                                                               |
| Criterion | The criterion each cell has to fulfill.                                                        |
| SumRange  | Optional. If given these cells are used to calculate total sum. If ommitted DataRange is used. |

**Return Value**

The sum of all cell values which meet criterion.

**Example**

|     |        |      |
|-----|--------|------|
|     | A      | B    |
| 1   | 100000 | 200  |
| 2   | 200000 | 400  |
| 3   | 300000 | 400  |
| 4   | North  | 600  |
| 5   | East   | 800  |
| 6   | South  | 1000 |

| Function                                                                                                      | Result | Comment                                                                                     |
|---------------------------------------------------------------------------------------------------------------|--------|---------------------------------------------------------------------------------------------|
| SUMIF(<span class="blue">A1:A3</span>, <span class="orange">"&lt;250000"</span>)                              | 300000 | Only cells A1 and A2 match given criterion.                                                 |
| SUMIF(<span class="blue">A1:A6</span>, <span class="orange">"=\*th"</span>, <span class="green">B1:B6</span>) | 1600   | Take cells from colum A which end with "th" and average corresponding values from column B. |
