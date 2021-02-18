# DAVERAGE

Returns the average of a specified column in given data range.

**Syntax**

=DAVERAGE(DataRange, ColumnIndex, CriteriaRange)

**Arguments**

| Name          | Description                                                                                                                                             |
|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| DataRange     | Cell range, that containes the data to evaluate. The range must include the field labels.                                                               |
| ColumnIndex   | Column label or index to calculate average for.                                                                                                         |
| CriteriaRange | Specifies the conditions a row in cell range must fulfill. Must define at least one column with a label and a cell below which specifies the condition. |

**Return Value**

The average of the matching column.

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
<td><p>=DAVERAGE(<span class="blue">A5:C9</span>,2,<span class="red">A2:C3</span>)</p>
<p><img src="/images/DSUM.PNG" alt="DSUM" /></p></td>
<td><p>21.5</p></td>
<td><p>Evaluates the average age in "Berlin".</p></td>
</tr>
</tbody>
</table>
