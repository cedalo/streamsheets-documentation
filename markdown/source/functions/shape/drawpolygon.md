# DRAW.POLYGON

Define a graphical polygon.

**Syntax**

=DRAW.POLYGON(UnqiueId, Container, Name, X, Y, Width, Height,
LineFormat, FillFormat, Attributes, Events, Angle, RotCenter,
PointRange, Close)

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
<td>X</td>
<td>X Coordinate in 1/100th mm</td>
</tr>
<tr class="odd">
<td>Y</td>
<td>Y Coordinate in 1/100th mm.</td>
</tr>
<tr class="even">
<td>Width</td>
<td>Width in 1/100th mm</td>
</tr>
<tr class="odd">
<td>Height</td>
<td>Height in 1/100th mm</td>
</tr>
<tr class="even">
<td>LineFormat</td>
<td><div class="line-block">Optional. Options:<br />
<br />
- "None" for no line<br />
- Hexadecimal color value ("#FF0000" for Red)<br />
- JSON String created using <code class="interpreted-text" role="ref">lineformat</code></div></td>
</tr>
<tr class="odd">
<td>FillFormat</td>
<td><div class="line-block">Optional. Options:<br />
<br />
- "None" for no fill.<br />
- Hexadecimal color value ("#FF0000" for Red)<br />
- JSON String created using <code class="interpreted-text" role="ref">fillpattern</code>, <code class="interpreted-text" role="ref">filllineargradient</code>, <code class="interpreted-text" role="ref">fillradialgradient</code></div></td>
</tr>
<tr class="even">
<td>Attributes</td>
<td>Optional. JSON String created using <code class="interpreted-text" role="ref">attributes</code></td>
</tr>
<tr class="odd">
<td>Events</td>
<td>Optional. JSON String created using <code class="interpreted-text" role="ref">events</code></td>
</tr>
<tr class="even">
<td>Angle</td>
<td>Optional. Angle in radians.</td>
</tr>
<tr class="odd">
<td>RotCenter</td>
<td><div class="line-block">Optional. This defines, where the object rotates around:<br />
<br />
0: Top left corner<br />
1: Top center<br />
2: Top right corner<br />
3: Left center<br />
4: Center (default)<br />
5: Right center<br />
6: Bottom left corner<br />
7: Bottom center<br />
8: Bottom right corner</div></td>
</tr>
<tr class="even">
<td>PointRange</td>
<td>Optional. Cell Range with coordinates. A coordinate is defined by a fraction of the width and height of the polygon ranging from 0 to 1. 1 would place the coordinate at the bottom or right corner of the object. The range must have 2 columns. The left column contains the x coordinates and the right column the y coordinates. If the object was drawn using the mouse or one of the predefined objects was used, the given coordinates will be used, as long as no coordinates are defined using this parameter.</td>
</tr>
<tr class="odd">
<td>Close</td>
<td>Optional. Close polygon by connecting the first and last point (Default: TRUE)</td>
</tr>
</tbody>
</table>

**Return Value**

TRUE, if polygon could be created.

**Example**

| Function                                                                  | Result | Comment                                                                                      |
|---------------------------------------------------------------------------|--------|----------------------------------------------------------------------------------------------|
| =DRAW.POLYGON("ID8",,"Polygon2",3990,12754,4868,3519,,,,,,,C31:D33,FALSE) | TRUE   | Draw a polygon using the given coordinates. The coordinates must be given as fractions of 1. |
