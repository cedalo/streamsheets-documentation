# STACKFIND

This function uses the criteria range to select and copy one or multiple
rows from the StackRange to the TargetRange. Optionally it deletes all
found records after the extract operation (remaining rows all move up!)

**Syntax**

=STACKFIND(StackRange, CriteriaRange \[, TargetRange, Drop, Unique\])

**Arguments**

| Name          | Description                                                                                                                                                                                                                                                                                                                                                                                                  |
|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| StackRange    | Range, where the stack range resides. The first row of the StackRange is a title range and remains unchanged.                                                                                                                                                                                                                                                                                                |
| CriteriaRange | The CriteriaRange has at least 2 rows, the first one is the labels row with labels also found in StackRange (not necessarily all and maybe not in the same order!), the second to nth row contain filter settings. Note: criteria values can start with a comparison-operator like, &gt;, &gt;=, &lt;, &lt;=, = or &lt;&gt; Settings in the same row are combined using AND, multiple rows are OR.           |
| TargetRange   | Optional. If specified, TargetRange must have two rows minimum, the first row has labels also found in StackRange (not necessarily all and maybe not in the same order!). The result of the filter is copied to the matching columns in the TargetRange. Note: TargetRange can have more than 2 rows. If it has more than 2 rows the additional rows can take the additional hits of the the filter extract. |
| Drop          | Optional. If set to TRUE it drops the selected rows from the stack. Drop defaults to FALSE.                                                                                                                                                                                                                                                                                                                  |
| Unique        | Optional. If set to TRUE it drops or copies equal rows only once. Two rows are equal if they have same value in each column. Unique defaults to FALSE.                                                                                                                                                                                                                                                       |

**Return Value**

TRUE, if at least one matching value was found, otherwise FALSE. In case
of an error the corresponding `error <error>` value is returned.

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
<td><p>=STACKFIND(<span class="blue">A5:D9</span>,<span class="red">A2:D3</span>,<span class="green">A11:B13</span>)</p>
<blockquote>

</blockquote></td>
<td><p>After calling STACKFIND</p>
<blockquote>
<p><img src="/images/STACKFIND2.PNG" alt="STACKFIND2" /></p>
</blockquote></td>
</tr>
</tbody>
</table>
