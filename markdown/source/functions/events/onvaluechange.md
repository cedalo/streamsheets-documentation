# ONVALUECHANGE

Assign a function, that will be executed, if the a status value of a
drawing item changes (e.g. Button pressed, Slider Value changes). The
event handling is only active, if the process is running.

<div class="note">

<div class="title">

Note

</div>

ONVALUECHANGE() only works for knobs and slider

</div>

**Syntax**

ONVALUECHANGE(Function)

**Arguments**

| Name     | Description          |
|----------|----------------------|
| Function | Function to execute. |

**Return Value**

TRUE.

**Example**

| Function                                                                                                                          | Comment                                                                  |
|-----------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| DRAW.SLIDER("629008621822",,"Slider1",6588,2832,7885,2090,,,, EVENTS(ONVALUECHANGE(DELETECELLS(A8:B12))),,,"Slider",,50,0,100,10) | If the status/value of the slider changes, the range content is deleted. |
