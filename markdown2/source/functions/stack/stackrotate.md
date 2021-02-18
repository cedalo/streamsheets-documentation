# STACKROTATE

This function rotates the complete stack by Pos positions up or down.

**Syntax**

=STACKROTATE(StackRange \[, Position, TargetRange\])

**Arguments**

| Name        | Description                                                                                                                                                                                                                                                                                                                                                                                                                         |
|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| StackRange  | Range, where the source range items are added to. The first row of the StackRange is a title range and remains unchanged.                                                                                                                                                                                                                                                                                                           |
| Position    | Optional. If Position equals 0 then it is not rotated. If Position &gt; 0 all rows are moved up and the first row becomes the last one (behind the last filled row in the range). If Position &lt; 0 all rows move down and the last filled cell becomes the first row. Position defaults to 1.                                                                                                                                     |
| TargetRange | If TargetRange is specified, the first row (after rotation) is copied to the TargetRange. TargetRange must have two rows, the first row has labels also found in Stackrange (not necessarily all and maybe not in the same order!). The rotated values are copied to the matching columns in the TargetRange. **Important:** Before copying to the TargetRange all existing values in TargetRange are deleted (not the labels row!) |

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
<td><p>=STACKROTATE(<span class="blue">A2:D6</span>, 1)</p>
<blockquote>
<p><img src="/images/STACKROTATE1.PNG" alt="STACKROTATE1" /></p>
</blockquote></td>
<td><p>After calling STACKROTATE</p>
<blockquote>
<p><img src="/images/STACKROTATE2.PNG" alt="STACKROTATE2" /></p>
</blockquote></td>
</tr>
</tbody>
</table>
