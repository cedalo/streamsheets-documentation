<div id="sumifs">

</div>

# SUMIFS

Returns the sum of all cell values which meet multiple criteria.

**Syntax**

=SUMIFS(SumRange, CriterionRange1, Criterion1, \[CriterionRange2,
Criterion2\], ...)

**Arguments**

| Name                | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| SumRange            | Cell-range to calculate sum for.                                            |
| CriterionRange1     | The cell-range which is checked against the criterion.                      |
| Criterion1          | The criterion each cell of CriterionRange1 has to fulfill.                  |
| CriterionRange2,... | Optional. Additional cell-range which is checked against next criterion.    |
| Criterion2,...      | Optional. Additional criterion each cell of CriterionRange2 has to fulfill. |

**Return Value**

The sum of cell values which meet all specified criteria.

**Example**

|     |        |          |     |     |
|-----|--------|----------|-----|-----|
|     | A      | B        | C   | D   |
| 1   | 230000 | Freiburg | 3   | No  |
| 2   | 197000 | Cologne  | 2   | Yes |
| 3   | 345678 | Cologne  | 4   | Yes |
| 4   | 321900 | Freiburg | 2   | Yes |
| 5   | 203000 | Cologne  | 3   | No  |

| Function                                                                                                                                                                                 | Result | Comment                                                                        |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|--------------------------------------------------------------------------------|
| SUMIFS(<span class="blue">A1:A5</span>, <span class="orange">B1:B5</span>, <span class="green">"Cologne"</span>)                                                                         | 745678 | Total price of all avaialable houses in Cologne.                               |
| SUMIFS(<span class="blue">A1:A5</span>, <span class="orange">B1:B5</span>, <span class="green">"Freiburg"</span>, <span class="orange">C1:C5</span>, <span class="green">"&gt;2"</span>) | 230000 | Total price of all avaialable houses in Freiburg which have more than 2 rooms. |
