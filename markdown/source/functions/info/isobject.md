# ISOBJECT

Checks, if given value represents an object value.

**Syntax**

=ISOBJECT(Value)

**Arguments**

| Name  | Description     |
|-------|-----------------|
| Value | Value to check. |

**Return Value**

TRUE if given value represents an object, otherwise FALSE.

**Example**

| Function               | Result | Comment                       |
|------------------------|--------|-------------------------------|
| =ISOBJECT(JSON(A1:B1)) | TRUE   | JSON returns an object value  |
| =ISOBJECT("object")    | FALSE  | a text is not an object value |
