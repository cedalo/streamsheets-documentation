# IFERROR

Returns specified ErrorValue, if given value represents an
`error <error>`. If not, this function simply returns given value.

**Syntax**

=IFERROR(Value, ErrorValue)

**Arguments**

| Name       | Description                                           |
|------------|-------------------------------------------------------|
| Value      | Value to check against each defined error values.     |
| ErrorValue | The value to return, if first value returns an error. |

**Return Value**

ErrorValue, if error occurs, otherwise the Value.

**Example**

| Function                   | Result    | Comment                                                               |
|----------------------------|-----------|-----------------------------------------------------------------------|
| =IFERROR(2 / 0, "Warning") | "Warning" | As the Value leads to a DIV/0 error, the text "Warning" is displayed. |