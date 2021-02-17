# STACKSORT

This function uses the criteria range to select and copy one or multiple
rows from the StackRange to the TargetRange. Optionally it deletes all
found records after the extract operation (remaining rows all move up!)

**Syntax**

=STACKSORT(StackRange, SortSettingsRange)

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
<td><div class="line-block">Range, where the stack range resides. The first row of the StackRange is a title range and remains unchanged.</div></td>
</tr>
<tr class="even">
<td>SortSettingsRange</td>
<td><div class="line-block">The SortSettingsRange has two rows. In the first row you have all or part of the labels of the StackRange (may be in another order). The cells in the second row either contain TRUE or FALSE. TRUE is ascending, FALSE is descending.<br />
If you have more than two rows in the SortSettingsRange then it is first sorted after the field name in the second row, then after the field name in the third row, etc.</div></td>
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
<td><p>=STACKSORT(<span class="blue">A5:D9</span>,<span class="red">A2:D3</span>)</p>
<div class="line-block"><img src="/images/STACKSORT1.PNG" alt="STACKSORT1" /></div></td>
<td><p>After calling STACKSORT</p>
<div class="line-block"><img src="/images/STACKSORT2.PNG" alt="STACKSORT2" /></div></td>
</tr>
</tbody>
</table>
