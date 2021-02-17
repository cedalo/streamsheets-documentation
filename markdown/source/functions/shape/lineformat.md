# LINEFORMAT

Create a line format description from the given arguments.

**Syntax**

LINEFORMAT(Color \[, Style, Width, ArrowStart, ArrowEnd\])

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
<td>Color</td>
<td>Hexadecimal color value.</td>
</tr>
<tr class="even">
<td>Style</td>
<td><div class="line-block">Optional. Style Code:<br />
<br />
-1: Hairline (does not zoom)<br />
0: None<br />
1: Solid<br />
2: Dot<br />
3: Dash<br />
4: DashDot<br />
5: DashDotDot</div></td>
</tr>
<tr class="odd">
<td>Width</td>
<td>Optional. Line width.</td>
</tr>
<tr class="even">
<td>ArrowStart</td>
<td>Optional. Arrow to use at start. 0 for no arrow.</td>
</tr>
<tr class="odd">
<td>ArrowEnd</td>
<td>Optional. Arrow to use at end. 0 for no arrow.</td>
</tr>
</tbody>
</table>

**Return Value**

JSON String, which defines the line format and can be used in drawing
functions.

**Example**

| Function                     | Result                                    | Comment                                              |
|------------------------------|-------------------------------------------|------------------------------------------------------|
| LINEFORMAT("\#FF0000", 1, 3) | {"color":"\#FF0000", "style":1,"width":3} | Draw a solid red line using a line width of 3 Pixel. |
