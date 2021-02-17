# GETMACHINESTEP

Returns the current step.

The machine step is increased either on each machine cycle, i.e. when a
machine runs, or on each manually triggered step, i.e. if an `App <App>`
is stopped or paused. To get the steps for a Streamsheet refer to
`getstep`.

**Syntax**

=GETMACHINESTEP()

**Arguments**

None.

**Return Value**

Current step.

**Example**

| Function          | Result |
|-------------------|--------|
| =GETMACHINESTEP() | 1      |
