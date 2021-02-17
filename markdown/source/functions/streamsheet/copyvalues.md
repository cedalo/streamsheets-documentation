# COPYVALUES

Copies the values from the given source range to the target range.
Beware that only the values are copied and not formulas. If the target
range is a multiple of the source range, the target range is filled
repeatedly with the source values.

**Syntax**

=COPYVALUES(SourceRange, TargetRange)

**Arguments**

| Name        | Description                                                                                                                                 |
|-------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| SourceRange | Source Range to retrieve data from                                                                                                          |
| TargetRange | Target Range to copy values to. If Range smaller or bigger as Source Range values will be added accordingly (less input or multiple input). |

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
<td><div class="line-block">=COPYVALUES(<span class="blue">A2:B2</span>,<span class="red">A4:B4</span>)<br />
<br />
<img src="/images/COPYVALUES1.PNG" alt="COPYVALUES1" /></div></td>
<td><h2 id="section">|</h2>
<div class="line-block"><img src="/images/COPYVALUES2.PNG" alt="COPYVALUES2" /></div></td>
</tr>
</tbody>
</table>

<div class="warning">

<div class="title">

Warning

</div>

Only the values will be moved. Formulas will be removed.

</div>
