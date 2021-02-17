# AXIS

Define axis settings of a chart axis.

**Syntax**

=AXIS(Min, Max, Step, TimeStep, ZoomMin, ZoomMax)

**Arguments**

| Name      | Description                                                                                                                |
|-----------|----------------------------------------------------------------------------------------------------------------------------|
| Min       | Minumum axis Value.                                                                                                        |
| Max       | Maximum axis value                                                                                                         |
| Step      | Step for axis ticks or grid lines. For time axis the step will increment the time step.                                    |
| Time Step | Step type for time units. Allow values are 'year', 'quarter', 'month', 'day', 'hour', 'minute', 'second' or 'millisecond'. |
| ZoomMin   | Axis minumum to use, if chart is zoomed. This value will be filled automatically, if axis is zoomed using the mouse.       |
| ZoomMax   | Axis maximum to use, if chart is zoomed. This value will be filled automatically, if axis is zoomed using the mouse.       |

**Return Value**

TRUE.

**Example**

| Function          | Result | Comment                                                 |
|-------------------|--------|---------------------------------------------------------|
| =AXIS(0, 200, 50) | TRUE   | Scales the axis from 0 to 200 using a step of 50 units. |
