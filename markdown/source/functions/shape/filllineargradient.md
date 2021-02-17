# FILLLINEARGRADIENT

Create linear gradient description from the given arguments.

**Syntax**

FILLLINEARGRADIENT(StartColor, EndColor, Angle)

**Arguments**

| Name       | Description                                                         |
|------------|---------------------------------------------------------------------|
| StartColor | Hexadecimal color value for color at the beginning of the gradient. |
| EndColor   | Hexadecimal color value for color at the end of the gradient.       |
| Angle      | Optional. Angle in radians Angle for gradient.                      |

**Return Value**

JSON String, which defines the fill format and can be used in drawing
functions.

**Example**

| Function                                             | Result | Comment                                             |
|------------------------------------------------------|--------|-----------------------------------------------------|
| FILLLINEARGRADIENT("\#000000", "\#FFFFFF", PI() / 3) |        | Draw a linear gradient with an angle of 60 degrees. |
