# IF

Returns depending on the condition the true or the false argument.

**Syntax**

=IF(Condition, TrueValue, FalseValue)

**Arguments**

| Name       | Description                                     |
|------------|-------------------------------------------------|
| Condition  | Condition to check.                             |
| TrueValue  | The value to return, if the condition is true.  |
| FalseValue | The value to return, if the condition is false. |

**Return Value**

The appropriate value depending on the condition.

**Example**

| Function                     | Result    | Comment                                                        |
|------------------------------|-----------|----------------------------------------------------------------|
| =IF(3&gt;1, "Warning", "OK") | "Warning" | As the condition results to TRUE, the first value is returned. |
