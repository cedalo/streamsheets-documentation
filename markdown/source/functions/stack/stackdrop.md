# STACKDROP

This function removes one row from the Stack. All rows below move one
row up.

**Syntax**

=STACKDROP(StackRange \[ Position, TargetRange\])

**Arguments**

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 80%" />
</colgroup>
<thead>
<tr class="header">
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>StackRange</td>
<td><div class="line-block">Range, where the source range items are added to. The first row of the StackRange is a title<br />
range and remains unchanged.</div></td>
</tr>
<tr class="even">
<td>Position</td>
<td><div class="line-block">Optional. Position defines, which row is dropped.<br />
If Position = -1 all rows (except the title row) are dropped.<br />
If Position = 0 the last used row is dropped.<br />
If Position = 1 the first row (after the title row) is dropped.<br />
Any value between 2 and N (last row) can also be specified. Pos defaults to 1.</div></td>
</tr>
<tr class="odd">
<td>TargetRange</td>
<td><div class="line-block">If TargetRange is specified and if a row has to be dropped, the row is copied to the TargetRange.<br />
TargetRange must have two rows, the first row has labels also found in Stackrange (not necessarily all and maybe not in the same order!). The dropped values are copied to the matching columns in the TargetRange.<br />
If no row is dropped, the values in the second row of TargetRange are blanked out.<br />
<strong>Important:</strong> Before copying to the TargetRange all existing values in TargetRange are deleted (not the labels row!)</div></td>
</tr>
</tbody>
</table>

**Return Value**

TRUE, if no error occurred, otherwise `error <error>` value.

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
<td><p>=STACKDROP(<span class="blue">A2:D3</span>, 1)</p>
<div class="line-block"><img src="/images/STACKDROP1.PNG" alt="STACKDROP1" /></div></td>
<td><p>After calling STACKDROP</p>
<div class="line-block"><img src="/images/STACKDROP2.PNG" alt="STACKDROP2" /></div></td>
</tr>
</tbody>
</table>
