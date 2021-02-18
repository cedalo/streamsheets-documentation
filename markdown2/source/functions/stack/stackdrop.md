# STACKDROP

This function removes one row from the Stack. All rows below move one
row up.

**Syntax**

=STACKDROP(StackRange \[ Position, TargetRange\])

**Arguments**

| Name        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| StackRange  | Range, where the source range items are added to. The first row of the StackRange is a title range and remains unchanged.                                                                                                                                                                                                                                                                                                                                                                                                      |
| Position    | Optional. Position defines, which row is dropped. If Position = -1 all rows (except the title row) are dropped. If Position = 0 the last used row is dropped. If Position = 1 the first row (after the title row) is dropped. Any value between 2 and N (last row) can also be specified. Pos defaults to 1.                                                                                                                                                                                                                   |
| TargetRange | If TargetRange is specified and if a row has to be dropped, the row is copied to the TargetRange. TargetRange must have two rows, the first row has labels also found in Stackrange (not necessarily all and maybe not in the same order!). The dropped values are copied to the matching columns in the TargetRange. If no row is dropped, the values in the second row of TargetRange are blanked out. **Important:** Before copying to the TargetRange all existing values in TargetRange are deleted (not the labels row!) |

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
<blockquote>
<p><img src="/images/STACKDROP1.PNG" alt="STACKDROP1" /></p>
</blockquote></td>
<td><p>After calling STACKDROP</p>
<blockquote>
<p><img src="/images/STACKDROP2.PNG" alt="STACKDROP2" /></p>
</blockquote></td>
</tr>
</tbody>
</table>
