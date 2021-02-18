# MOVEVALUES

Move values in source range to target range.

**Syntax**

=MOVEVALUES(SourceRange, TargetRange)

**Arguments**

| Name        | Description                                                                                                                                                            |
|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SourceRange | Range to get values to move from.                                                                                                                                      |
| TargetRange | Range to move values to. Smaller Target Range leads to the removal of all Source Values, but not in the writing of all. Bigger does not have any further consequences. |

**Return Value**

TRUE, if no error.

**Example**

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Function</th>
<th>Result</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>=MOVEVALUES(<span class="blue">A2:B2</span>,<span class="red">A4:B4</span>)</p>
<p><img src="/images/MOVEVALUES1.PNG" alt="MOVEVALUES1" /></p></td>
<td><p>After MOVEVALUES</p>
<p><img src="/images/MOVEVALUES2.PNG" alt="MOVEVALUES2" /></p></td>
</tr>
</tbody>
</table>

<div class="warning">

<div class="title">

Warning

</div>

Only the values will be moved. Formulas will be removed.

</div>
