# VLOOKUP

Returns the value of a cell within a specified cell range in a choosen
row and characteristic.

**Syntax**

=VLOOKUP(Value, Range, Index \[, ExactMatch\])

**Arguments**

| Name       | Description                                                                                                                                             |
|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| Value      | Value to look up in the first column of the given range.                                                                                                |
| Range      | Range to look in.                                                                                                                                       |
| Index      | Relative index to the column of the identified row, to retrieve the return value from.                                                                  |
| ExactMatch | Optional. A value to specify exact or approximate match with wildcards. Specify TRUE for an approximate match, FALSE for an exact one. Default is TRUE. |

**Return Value**

Value of cell within the given range and index or offset, if a row with
the value was found.

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
<td><p>=VLOOKUP("Test3",<span class="blue">A2:B4</span>, 2)</p>
<p><img src="/images/VLOOKUP.PNG" alt="VLOOKUP" /></p></td>
<td><p>3</p></td>
<td><p>The value of cell B3 within the given range is returned.</p></td>
</tr>
</tbody>
</table>
