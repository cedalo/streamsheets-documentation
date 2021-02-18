# INDEX

Returns a cell within the range using the row and column offset.

**Syntax**

=INDEX(Range,Row,Column)

**Arguments**

| Name   | Description                          |
|--------|--------------------------------------|
| Range  | Range of cells to search in.         |
| Row    | Row index or offset starting with 1. |
| Column | Column index offset starting with 1. |

**Return Value**

Cell value of the cell within the range with an offset of row and
column.

**Example**

<table>
<colgroup>
<col style="width: 45%" />
<col style="width: 10%" />
<col style="width: 45%" />
</colgroup>
<thead>
<tr class="header">
<th>Function</th>
<th>Result</th>
<th>Comment</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>=INDEX(<span class="blue">A2:B4</span>, 2, 1)</p>
<p><img src="/images/INDEX.PNG" alt="INDEX" /></p></td>
<td><p>8</p></td>
<td><p>The value of cell A2 is returned.</p></td>
</tr>
</tbody>
</table>
