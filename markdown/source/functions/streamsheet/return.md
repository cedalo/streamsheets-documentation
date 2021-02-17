# RETURN

Interrupts the recalculation cycle. This is of special interest, if a
Streamsheet starts to evaluate on process start and is set to evaluate
endlessly. Using RETURN, you can stop this endless recalculation.

**Syntax**

=RETURN()

**Arguments**

None.

**Return Value**

TRUE or `error <error>` value.

**Example**

| Function  | Result |
|-----------|--------|
| =RETURN() | TRUE   |
