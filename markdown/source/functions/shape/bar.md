# BAR

Draw a bar within a cell . A bar is only drawn in the cell, if it is the
outer function within a formula.

**Syntax**

=BAR(Value\[,Direction,FillColor,LineColor\])

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
<td>Value</td>
<td>Size of bar covering the cell, that the function contains. The size is given as a factor of the height or width between 0 and 1, where 1 will cover the complete cell. Negative vales are allowed.</td>
</tr>
<tr class="even">
<td>Direction</td>
<td><div class="line-block">Optional. 0 is default.<br />
<br />
Options:<br />
<br />
0 : Display horizontal bar<br />
1 : Display vertical bar</div></td>
</tr>
<tr class="odd">
<td>FillColor</td>
<td>Optional. Fill color value. The default value is '#00FF00'.</td>
</tr>
<tr class="even">
<td>LineColor</td>
<td>Optional. Line color value. By default the line is set to invisible.</td>
</tr>
</tbody>
</table>

**Return Value**

The value passed as the first argument.

**Example**

| Function                 | Result | Comment                                                                           |
|--------------------------|--------|-----------------------------------------------------------------------------------|
| =BAR(0.5, 0, '\#FF0000') | 0.5    | Draw a horizontal with with a red fill color filling half the height of the cell. |
