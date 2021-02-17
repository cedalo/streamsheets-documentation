# CONTINUE

Continue current calculation at given cell. Note that if specified cell
is before current cell the calculation is continued on next step.
Normally a Streamsheet is calculated from left to right and top to
bottom. Using CONTINUE you can jump within the calculation logic.

**Syntax**

=CONTINUE(Cell)

**Arguments**

| Name | Description              |
|------|--------------------------|
| Cell | Target cell of CONTINUE. |

**Return Value**

TRUE, if successful, otherwise error code.

**Example**

| Function      | Result | Comment                                                                                     |
|---------------|--------|---------------------------------------------------------------------------------------------|
| =CONTINUE(B1) | TRUE   | The step stops at the CONTINUE() function, jumps back to B1 and starts the next step at B1. |

<div class="warning">

<div class="title">

Warning

</div>

Be careful, when using CONTINUE, as you can define an endless loop using
this function.

</div>
