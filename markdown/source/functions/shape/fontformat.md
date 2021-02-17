# FONTFORMAT

Create a font format description from the given arguments.

**Syntax**

FONTFORMAT(Name, Size\[, Style, Color, HorizontalAlignment\])

**Arguments**

| Name                | Description                                                                     |
|---------------------|---------------------------------------------------------------------------------|
| Name                | Name of font to use.                                                            |
| Size                | Size of font in pt.                                                             |
| Style               | Optional. Style of font. Allowed values are 0 (normal), 1 (bold) and 2 (italic) |
| Color               | Optional. Hexadecimal color value.                                              |
| HorizontalAlignment | 0, 1 or 2 changes the alignment of the text to left, center or right.           |

**Return Value**

JSON String, which defines the font format and can be used in drawing
functions.

**Example**

| Function                  | Result | Comment                                          |
|---------------------------|--------|--------------------------------------------------|
| FONTFORMAT("Verdana", 10) |        | Use Verdana font family and a font size of 10pt. |
