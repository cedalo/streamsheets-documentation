# ONMOUSEDOWN

Assign a function, that will be executed, if the user presses the mouse
down on a drawing item. The event handling is only active, if the
process is running.

**Syntax**

ONMOUSEDOWN(Function)

**Arguments**

| Name     | Description          |
|----------|----------------------|
| Function | Function to execute. |

**Return Value**

TRUE.

**Example**

| Function                                                                                              | Comment                                                                   |
|-------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| DRAW.RECTANGLE("ID1", "", "Rect1", 1000, 1000, 3000, 3000,,,, EVENTS(ONMOUSEDOWN(DELETECELLS(A1:C1))) | If the user clicks on the rectangle the cell range A1:C1 will be deleted. |
