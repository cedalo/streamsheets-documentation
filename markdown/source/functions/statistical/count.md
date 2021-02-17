# COUNT

Counts the amount of number values in specified cells.

**Syntax**

=COUNT(Value1, \[Value2, ..., ValueN\])

**Arguments**

| Name            | Description                                                            |
|-----------------|------------------------------------------------------------------------|
| Value1          | Cell range or reference range in whichnumber values should be counted. |
| Value2...ValueN | Optional. Other cell references or ranges to check.                    |

**Return Value**

Amount of number values.

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
<td><div class="line-block">=COUNT(<span class="blue">A2:B4</span>)<br />
</div>
<div class="line-block"><img src="/images/COUNT.PNG" alt="COUNT" /></div></td>
<td>3</td>
<td>Empty cells are not counted.</td>
</tr>
</tbody>
</table>
