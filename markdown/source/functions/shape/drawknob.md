# DRAW.KNOB

Define a graphical knob on a given drawing.

**Syntax**

=DRAW.KNOB(UniqueID,Container,Name,X,Y,Width,Height,LineFormat,FillFormat,Attributes,Events,Angle,RotCenter,Label,LabelFont,Value,Min,Max,Step,ScaleFont,Marker,FormatRange,StartAngle,EndAngle)

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
<td>Label</td>
<td>Optional. Label to display below knob.</td>
</tr>
<tr class="odd">
<td>LabelFont</td>
<td>Optional. Font to use for label. JSON String created using <code class="interpreted-text" role="ref">fontformat</code></td>
</tr>
<tr class="even">
<td>Value</td>
<td>Current value of the knob. Must be with the given interval. If a cell reference is used, a value change from user interaction will be pushed into that cell.</td>
</tr>
<tr class="odd">
<td>Min</td>
<td>Minimum value displayed in the knob.</td>
</tr>
<tr class="even">
<td>Max</td>
<td>Maximum value displayed in the knob.</td>
</tr>
<tr class="odd">
<td>Step</td>
<td>Step to use for interaction while changing the knob value.</td>
</tr>
<tr class="even">
<td>ScaleFont</td>
<td>Optional. Font to use for the knob scale. JSON String created using <code class="interpreted-text" role="ref">fontformat</code></td>
</tr>
<tr class="odd">
<td>Marker</td>
<td><div class="line-block">Optional. Marker style to indicate the current value. Allowed values are:<br />
'none'<br />
'arrowinner'<br />
'line' (default)<br />
'circlesmall'<br />
<br />
Default is a large circle.</div></td>
</tr>
<tr class="even">
<td>FormatRange</td>
<td>Optional. Cell range to provide additional scale information. It must be a range with at least 3 columns. The values in the first column provide the start value. The values in the second column provide the end value, which will be used to color the range between start and end value. The value in the third column provides a hexadecimal color value. This is used to color the scale between the start value and the end value. This way you can define a colored scale indicating valid, invalid oder desired values ranges. The optional value in the fourth column provides a label, that is displayed instead of the scale value above the center of the colored range.</td>
</tr>
<tr class="odd">
<td>StartAngle</td>
<td>Optional. Angle in radians, where the labels start.</td>
</tr>
<tr class="even">
<td>EndAngle</td>
<td>Optional. Angle in radians, where the labels end.</td>
</tr>
</tbody>
</table>

**Return Value**

TRUE, if button could be created.

**Example**

| Function                                                                    | Result | Comment                                                                                 |
|-----------------------------------------------------------------------------|--------|-----------------------------------------------------------------------------------------|
| =DRAW.KNOB("ID14",,"Knob1",26854,10240,5398,5212,,,,,,,"Knob",,50,0,100,10) | TRUE   | Draw a knob with an interval from 0 to 100 and a step value of 10. Current Value is 50. |
