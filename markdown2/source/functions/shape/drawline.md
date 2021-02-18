# DRAW.LINE

Define a graphical line.

**Syntax**

=DRAW.LINE(UniqueID, Container, Name, X1, Y1, X2, Y2 \[,LineFormat\])

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
<td>UniqueId</td>
<td>Unique Id of drawing object. Should not be modified and must be unique.</td>
</tr>
<tr class="even">
<td>Container</td>
<td>Optional. Name of the container object this object is placed within. Coordinates are relative then.</td>
</tr>
<tr class="odd">
<td>Name</td>
<td>Name of drawing object. Must be unique.</td>
</tr>
<tr class="even">
<td>X1</td>
<td>X1 Start X-Coordinate in 1/100th mm</td>
</tr>
<tr class="odd">
<td>Y1</td>
<td>Y1 Start Y-Coordinate in 1/100th mm.</td>
</tr>
<tr class="even">
<td>X2</td>
<td>X2 End X-Coordinate in 1/100th mm</td>
</tr>
<tr class="odd">
<td>Y2</td>
<td>Y2 End Y-Coordinate in 1/100th mm.</td>
</tr>
<tr class="even">
<td>LineFormat</td>
<td>Optional. Options:
<ul>
<li>"None" for no line</li>
<li>Hexadecimal color value ("#FF0000" for Red)</li>
<li>JSON String created using <code class="interpreted-text" role="ref">lineformat</code></li>
</ul></td>
</tr>
</tbody>
</table>

**Return Value**

TRUE, if line could be created.

**Example**

| Function                                               | Result | Comment                                                      |
|--------------------------------------------------------|--------|--------------------------------------------------------------|
| =DRAW.LINE("ID1", "", "Line1", 1000, 1000, 3000, 3000) | TRUE   | Draw a line from coordinate 1cm, 1cm to coordinate 3cm, 3cm. |
