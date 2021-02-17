# SETCYCLETIME

Set the current `Cycle Time`. The Cycle Time is an overall setting in an
`App <App>` that applies to each `Streamsheet` in the App. It generally
defines how long the system pauses between calculation cycles (in ms).

**Syntax**

=SETCYCLETIME(Milliseconds)

**Arguments**

Cycletime in milliseconds. Has to be a number.

**Return Value**

Depends on condition. TRUE or FALSE

**Example**

| Function            | Result | Comment                              |
|---------------------|--------|--------------------------------------|
| =SETCYCLETIME(1000) | TRUE   | The cycle time is set to one second. |
