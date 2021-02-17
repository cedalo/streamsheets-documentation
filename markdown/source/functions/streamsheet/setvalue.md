# SETVALUE

Writes a given value into target cell, if specified condition evaluates
to true.

**Syntax**

=SETVALUE(\[Condition\], Value, TargetCell \[, OverwriteFormula\])

**Arguments**

| Name             | Description                                                                          |
|------------------|--------------------------------------------------------------------------------------|
| Condition        | Optional. Condition to check for action. Defaults to FALSE if no condition is given. |
| Value            | Value to write to target cell, if condition evaluates to TRUE.                       |
| TargetCell       | Cell to put value into.                                                              |
| OverwriteFormula | Optional. Set to TRUE remove any cell formula. Defaults to FALSE.                    |

**Return Value**

TRUE

**Example**

| Function                        | Result | Comment                                                                                             |
|---------------------------------|--------|-----------------------------------------------------------------------------------------------------|
| =SETVALUE(2&gt;1, 42, B1)       | TRUE   | Will put value 42 in cell B1, but keeps possible cell formula                                       |
| =SETVALUE(2&gt;1, 42, B1, TRUE) | TRUE   | Same as before, but overwrites possible cell formula so that 42 is returned on subsequent App steps |
| =SETVALUE(, 42, B1)             | TRUE   | Does nothing because no condition is specified                                                      |
