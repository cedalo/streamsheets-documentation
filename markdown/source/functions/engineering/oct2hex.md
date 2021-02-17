# OCT2HEX

Converts an octal number to hexadecimal.

**Syntax**

=OCT2HEX(Number, \[Places\])

**Arguments**

| Name   | Description                                                                                                                      |
|--------|----------------------------------------------------------------------------------------------------------------------------------|
| Number | The octal number to convert.                                                                                                     |
| Places | Optional. The number of characters to use for returned value. If value has less characters then it is padded with leading zeros. |

**Return Value**

The hexadecimal number or a \#NUM! error if given number is not a valid
octal number. The \#VALUE! error is returned if specified places is
nonnumeric or negative.

**Example**

| Function         | Result | Comment                                             |
|------------------|--------|-----------------------------------------------------|
| =OCT2HEX(100)    | 40     | converts octal 100 to hexadecimal                   |
| =OCT2HEX(100, 4) | 0040   | converts octal 100 to hexadecimal with 4 characters |
