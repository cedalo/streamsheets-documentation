# ISERROR

Checks, if given value represents an `error <error>`.

**Syntax**

=ISERROR(Value)

**Arguments**

| Name  | Description     |
|-------|-----------------|
| Value | Value to check. |

**Return Value**

TRUE if given value represents an error, otherwise FALSE.

**Example**

| Function      | Result | Comment                                      |
|---------------|--------|----------------------------------------------|
| =ISERROR(3/0) | TRUE   | DIV/0 error is passed by the Value argument. |
