<div id="averageifs">

</div>

# AVERAGEIFS

Returns the average of all cell values which meet multiple criteria.

**Syntax**

=AVERAGEIFS(AverageRange, CriterionRange1, Criterion1,
\[CriterionRange2, Criterion2\], ...)

**Arguments**

| Name                | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| AverageRange        | Cell-range to calculate average for.                                        |
| CriterionRange1     | The cell-range which is checked against the criterion.                      |
| Criterion1          | The criterion each cell of CriterionRange1 has to fulfill.                  |
| CriterionRange2,... | Optional. Additional cell-range which is checked against next criterion.    |
| Criterion2,...      | Optional. Additional criterion each cell of CriterionRange2 has to fulfill. |

**Return Value**

The average over all cell values which meet all specified criteria.

**Example**

|     |        |          |     |     |
|-----|--------|----------|-----|-----|
|     | A      | B        | C   | D   |
| 1   | 230000 | Freiburg | 3   | No  |
| 2   | 197000 | Cologne  | 2   | Yes |
| 3   | 345678 | Cologne  | 4   | Yes |
| 4   | 321900 | Freiburg | 2   | Yes |
| 5   | 203000 | Cologne  | 3   | No  |

| Function                                                                                                                                                                                    | Result                            | Comment                                                        |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|----------------------------------------------------------------|
| AVERAGEIFS(<span class="blue">A1:A5</span>, <span class="orange">B1:B5</span>, <span class="green">"Cologne"</span>, <span class="orange">C1:C5</span>, <span class="green">"&gt;2"</span>) | 200000                            | Average price of houses in Cologne that have at least 3 rooms. |
| AVERAGEIFS(<span class="blue">A1:A5</span>, <span class="orange">C1:C5</span>, <span class="green">"&gt;=4"</span>)                                                                         | 345678                            | Average price of houses with 4 or more rooms.                  |
| AVERAGEIFS(<span class="blue">A1:A5</span>, <span class="orange">C1:C5</span>, <span class="green">"&gt;4"</span>)                                                                          | <span class="red">\#DIV/0!</span> | No cell fulfills given criterion.                              |
