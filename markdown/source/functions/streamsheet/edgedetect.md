# EDGE.DETECT

Detects if the result of a given condition changed from FALSE to TRUE.

This functions detects if a given condition evaluates from FALSE to
TRUE. Only in this case TRUE is returned. In all other cases, i.e. TRUE
to FALSE, FALSE to FALSE or TRUE to TRUE, EDGE.DETECT returns FALSE. If
the function is processed for the first time it is assumed that a
previous condition result was FALSE. That means that if the condition
immediately evaluates to TRUE, this function returns TRUE.

The behaviour of this function can be influenced by two optional
parameters, namely *Period* and *Delay*. *Period* specifies for how long
this function still returns TRUE, even if no changes were detected. On
the other hand *Delay* specifes for how long this function returns
FALSE, after a change was detected. The default value of both parameters
is 0, meaning they have no effect. If both parameters are set and
greater zero, *Period* starts after *Delay*.

It is not recommended to use EDGE.DETECT within another function.

**Syntax**

=EDGE.DETECT(Condition, \[Period\], \[Delay\])

**Arguments**

| Name      | Description                                                                                                                             |
|-----------|-----------------------------------------------------------------------------------------------------------------------------------------|
| Condition | Value or formula that returns a boolean value.                                                                                          |
| Period    | Optional. Time in milliseconds, where the result of this formula still is TRUE. Starting after an optional delay. Defaults to 0.        |
| Delay     | Optional. Delay in Milliseconds, where the result of this formula still is FALSE even if condition change was dectected. Defaults to 0. |

**Return Value**

TRUE, if condition result changes from FALSE to TRUE or FALSE otherwise.

**Example**

| Function                       | Result | Comment                                                                             |
|--------------------------------|--------|-------------------------------------------------------------------------------------|
| =EDGE.DETECT(TRUE, 0)          | TRUE   | period has no effect                                                                |
| =EDGE.DETECT(TRUE, 1000)       | TRUE   | returns TRUE for all cycles which run within next second                            |
| =EDGE.DETECT(TRUE, 1000, 1000) | FALSE  | returns TRUE after a delay of 1 second and then keeps returning TRUE for one second |