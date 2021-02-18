# DSUM

Returns the sum of all values in a column of the cell range which
matches the specified criteria.

**Syntax**

=DSUM(DataRange, ColumnIndex, CriteriaRange)

**Arguments**

| Name          | Description                                                                                                                                             |
|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| DataRange     | Cell range, that containes the data to evaluate. The range must include the field labels.                                                               |
| ColumnIndex   | Column label or index to calculate the sum for.                                                                                                         |
| CriteriaRange | Specifies the conditions a row in cell range must fulfill. Must define at least one column with a label and a cell below which specifies the condition. |

**Return Value**

The sum of all values of the matching column.

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
<td><p>=DSUM(<span class="blue">A5:C9</span>,2,<span class="red">A2:C3</span>)</p>
<p><img src="/images/DSUM.PNG" alt="DSUM" /></p></td>
<td><p>43</p></td>
<td><p>Evaluates the sum of all ages in "Berlin".</p></td>
</tr>
</tbody>
</table>
