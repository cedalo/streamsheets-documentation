# CLASSIFYPOINT

This function determines whether a given X, Y coordinate is inside or
outside or on the border of a given polygon defined by the points given.

**Syntax**

=CLASSIFYPOINT(X, Y, PolygonPointsRange)

**Arguments**

| Name               | Description                                                                                                                                             |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| X                  | X coordinate of the point to test                                                                                                                       |
| Y                  | Y coordinate of the point to test                                                                                                                       |
| PolygonPointsRange | A vertical range with 2 columns and N rows where the first column contains the X and the second column contains the Y coordinates of a (closed) Polygon |

**Return Value**

-1: Point is outside of polygon  
0: Point is on polygon border  
1: Point is inside polygon  

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
<td>=CLASSIFYPOINT(500, 500, <span class="blue">A2:B5</span>)</td>
<td>1</td>
<td><div class="line-block">Where A2:B5 looks as follows:<br />
<br />
<img src="/images/CLASSIFYPOINT.PNG" alt="CLASSIFYPOINT" /></div></td>
</tr>
</tbody>
</table>
