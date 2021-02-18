# DMIN

Returns the smallest number in a column of cell range which matches the
specified criteria.

**Syntax**

=DMIN(DataRange, ColumnIndex, CriteriaRange)

**Arguments**

| Name          | Description                                                                                                                                             |
|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| DataRange     | Cell range, that containes the data to evaluate. The range must include the field labels.                                                               |
| ColumnIndex   | Column label or index to find the minimum value in.                                                                                                     |
| CriteriaRange | Specifies the conditions a row in cell range must fulfill. Must define at least one column with a label and a cell below which specifies the condition. |

**Return Value**

The minimum value of the matching column.

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
<td><p>=DMIN(<span class="blue">A5:C9</span>,2,<span class="red">A2:C3</span>)</p>
<p><img src="/images/DSUM.PNG" alt="DSUM" /></p></td>
<td><p>19</p></td>
<td><p>Evaluates the minimum age in "Berlin".</p></td>
</tr>
</tbody>
</table>
