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
<td><div class="line-block">=INDEX(<span class="blue">A2:B4</span>, 2, 1)<br />
<br />
<img src="/images/INDEX.PNG" alt="INDEX" /></div></td>
<td>8</td>
<td>The value of cell A2 is returned.</td>
</tr>
</tbody>
</table>
