# FILLRADIALGRADIENT

Create a radial gradient description from the given arguments.

**Syntax**

FILLRADIALGRADIENT(StartColor,EndColor,XOffset,YOffset)

**Arguments**

| Name       | Description                                                         |
|------------|---------------------------------------------------------------------|
| StartColor | Hexadecimal color value for color at the beginning of the gradient. |
| XOffset    | Relative horizontal position of center of gradient (0 to 100)       |
| YOffset    | Relative vertical position of center of gradient (0 to 100)         |

**Return Value**

JSON String, which defines the fill format and can be used in drawing
functions.

**Example**

| Function                                           | Result | Comment                                                              |
|----------------------------------------------------|--------|----------------------------------------------------------------------|
| FILLRADIALGRADIENT("\#000000", "\#FFFFFF", 50, 50) |        | Draw a radial gradient starting at the center of the drawing object. |