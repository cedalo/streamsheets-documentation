# DCOUNT

Counts all cells that contain a number within a cell range.

**Syntax**

=DCOUNT(DataRange, ColumnIndex, CriteriaRange)

**Arguments**

| Name          | Description                                                                                                                                             |
|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| DataRange     | Cell range, that containes the data to evaluate. The range must include the field labels.                                                               |
| ColumnIndex   | Column label or index to count values in.                                                                                                               |
| CriteriaRange | Specifies the conditions a row in cell range must fulfill. Must define at least one column with a label and a cell below which specifies the condition. |

**Return Value**

The counted amount of cells within the given parameters.

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
<td><p>=DCOUNT(<span class="blue">A5:C9</span>,2,<span class="red">A2:C3</span>)</p>
<blockquote>
<p><img src="/images/DSUM.PNG" alt="DSUM" /></p>
</blockquote></td>
<td><p>2</p></td>
<td><p>Evaluates the number of valid age entries in "Berlin".</p></td>
</tr>
</tbody>
</table>
