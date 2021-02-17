# SWAPVALUES

Copies the values from the given source range to the target range and
vice versa. Beware that only the values are copied and not formulas. If
the target range is a multiple of the source range, the target range is
filled repeatedly with the source values.

**Syntax**

=SWAPVALUES(SourceRange, TargetRange)

**Arguments**

| Name   | Description       |
|--------|-------------------|
| Range1 | Range to exchange |
| Range2 | Range to exchange |

**Return Value**

TRUE, if successful.

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
<td><div class="line-block">=SWAPVALUES(<span class="blue">A2:B2</span>,<span class="red">A4:B4</span>)<br />
<br />
<img src="/images/SWAPVALUES1.PNG" alt="SWAPVALUES1" /></div></td>
<td><div class="line-block">After call of SWAPVALUES<br />
<br />
<img src="/images/SWAPVALUES2.PNG" alt="SWAPVALUES2" /></div></td>
</tr>
</tbody>
</table>

<div class="warning">

<div class="title">

Warning

</div>

Only the values will be moved. Formulas will be removed.

</div>
