# REPEATINDEX

Returns the number of times a Streamsheet was triggered by `execute`.

To get the number of steps a Streamsheet was processed refer to
`getstep` and to get the number of steps for a Streamsheet in
repeate-calculation mode refer to `getcycle`. Only works in the
repeating Streamsheet.

**Syntax**

=REPEATINDEX()

**Arguments**

None.

**Return Value**

Current execute repetition.

**Example**

| Function       | Result | Comment |
|----------------|--------|---------|
| =REPEATINDEX() | 1      |         |
