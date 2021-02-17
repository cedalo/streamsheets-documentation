# FILLPATTERN

Create a fill format description for a pattern fill using a given image.

**Syntax**

FILLPATTERN(Image\[, Style\])

**Arguments**

| Name  | Description      |
|-------|------------------|
| Image | Image URL or URI |

**Return Value**

JSON String, which defines the fill format and can be used in drawing
functions.

**Example**

| Function                                               | Result | Comment               |
|--------------------------------------------------------|--------|-----------------------|
| FILLPATTERN("<http://www.somesite.com/someimage.png>") |        | Draw an image pattern |

TODO result JSON
