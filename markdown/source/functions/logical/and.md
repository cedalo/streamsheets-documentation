# AND

Evaluates, if all given values are true.

**Syntax**

=AND(Value1 \[, Value2\], ...)

**Arguments**

| Name        | Description                     |
|-------------|---------------------------------|
| Value1      | First value to check            |
| Value2, ... | Optional. Other values to check |

**Return Value**

TRUE, if all passed arguments are true, otherwise FALSE.

**Example**

| Function           | Result | Comment                                                  |
|--------------------|--------|----------------------------------------------------------|
| =AND(TRUE,1)       | TRUE   | Numbers not equal 0 are evaluated as TRUE                |
| =AND(TRUE,"Test")  | TRUE   | Non empty strings are evaluated as TRUE                  |
| =AND(FALSE,"Test") | FALSE  | First Value is "FALSE", function is evaluated as "FALSE" |
