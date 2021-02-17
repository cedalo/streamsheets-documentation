# MINIFS

Returns the minimum value of all cells which meet multiple criteria.

**Syntax**

=MINIFS(MinRange, CriterionRange1, Criterion1, \[CriterionRange2,
Criterion2\], ...)

**Arguments**

| Name                | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| MinRange            | Cell-range to determine minimum value of.                                   |
| CriterionRange1     | The cell-range which is checked against the criterion.                      |
| Criterion1          | The criterion each cell of CriterionRange1 has to fulfill.                  |
| CriterionRange2,... | Optional. Additional cell-range which is checked against next criterion.    |
| Criterion2,...      | Optional. Additional criterion each cell of CriterionRange2 has to fulfill. |

**Return Value**

The mminimum of all cell values which meet all specified criteria.

**Example**

|     |     |     |     |     |
|-----|-----|-----|-----|-----|
|     | A   | B   | C   | D   |
| 1   | 89  | 1   | a   | 1   |
| 2   | 93  | 2   | b   | 2   |
| 3   | 96  | 2   | a   | 3   |
| 4   | 85  | 3   | b   | 4   |
| 5   | 91  | 1   | b   | 5   |
| 6   | 88  | 1   | a   | 6   |

| Function                                                                                                                                                                           | Result                            | Comment                                                                                                   |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|-----------------------------------------------------------------------------------------------------------|
| MINIFS(<span class="blue">A1:A6</span>, <span class="orange">B1:B6</span>, <span class="green">1</span>)                                                                           | 88                                | Minimum value of cells which have 1 in their B-column.                                                    |
| MINIFS(<span class="blue">A1:A6</span>, <span class="orange">C1:C6</span>, <span class="green">"b"</span>, <span class="orange">D6:D6</span>, <span class="green">"&gt;=2"</span>) | 85                                | Minimum value of all cells which have "b" in their C-column and its D-column value is greater or equal 2. |
| MINIFS(<span class="blue">A1:A6</span>, <span class="orange">B1:B6</span>, <span class="green">"&gt;4"</span>)                                                                     | 0                                 | No cell fulfills given criterion.                                                                         |
| MINIFS(<span class="blue">A1:A6</span>, <span class="orange">B1:D7</span>, <span class="green">"&gt;4"</span>)                                                                     | <span class="red">\#VALUE!</span> | MinRange and CriteriaRange have different height and/or with.                                             |
