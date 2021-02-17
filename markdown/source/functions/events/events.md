# EVENTS

Assign a function, that will be executed, if a selected event occurs on
the object/shape. Add the EVENTS() function to a shape in the "Events"
parameter.

**Syntax**

=EVENTS(\[EventHandler1,EventHandler2,...\])

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
<td>EventHandler1..N</td>
<td><div class="line-block">Eventhandler defining the event and the action to be executed. Valid handlers are:<br />
<br />
<code class="interpreted-text" role="ref">onclick</code><br />
<code class="interpreted-text" role="ref">ondoubleclick</code><br />
<code class="interpreted-text" role="ref">onmousedown</code><br />
<code class="interpreted-text" role="ref">onmouseup</code><br />
<code class="interpreted-text" role="ref">onvaluechange</code></div></td>
</tr>
</tbody>
</table>

**Return Value**

TRUE.

**Example**

| Function                                                                                           | Comment                                                                   |
|----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| =DRAW.RECTANGLE("ID1", "", "Rect1", 1000, 1000, 3000, 3000,,,, EVENTS(ONCLICK(DELETECELLS(A1:C1))) | If the user clicks on the rectangle the cell range A1:C1 will be deleted. |
