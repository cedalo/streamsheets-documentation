# STACKADD

This function adds the cells in a SourceRange to a StackRange.The Stack
range is a range of cells on the `sheet <Streamsheet>`, which will be
filled by using STACKADD. If the range is filled with cells, the
existing cells will be moved defined by the direction parameter and the
new cells will be added to the list. Values added to the StackRange have
to use identical headers in both the Stack- and SourceRange. The
STACKADD function automatically indexes the added items in the correct
columns.

**Syntax**

=STACKADD(StackRange, SourceRange \[, Direction, TargetRange\])

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
<td><div class="line-block">Range, where the source range items are added to. The first row of the StackRange is a title range and remains unchanged.</div></td>
</tr>
<tr class="even">
<td>SourceRange</td>
<td><div class="line-block">Range, where the source data is taken from and copied into the StackRange.The first row of the StackRange is a title range and remains unchanged.</div></td>
</tr>
<tr class="odd">
<td>Direction</td>
<td><div class="line-block">Optional. If you set Direction to TRUE the new data is added behind the last empty row on the SourceRange.<br />
If the StackRange is full, the first row (after the columns row) is dropped from the stack and all rows move up to make room for the new data in the last row. Analog, if Direction is set to FALSE rows are added at top of the stack and dropped from the bottom. By default Direction is TRUE.</div></td>
</tr>
<tr class="even">
<td>TargetRange</td>
<td><div class="line-block">Optional. If TargetRange is specified and if a row has to be dropped, the row is copied to the TargetRange.<br />
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
<td><p>=STACKADD(<span class="blue">A5:D9</span>,<span class="red">A2:D3</span>,TRUE)</p>
<div class="line-block"></div></td>
<td><p>After calling STACKADD the first time</p>
<div class="line-block"><img src="/images/STACKADD2.PNG" alt="STACKADD2" /></div></td>
</tr>
</tbody>
</table>
