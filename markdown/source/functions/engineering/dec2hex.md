# DEC2HEX

Converts a decimal number to hexadecimal.

**Syntax**

=DEC2HEX(Number, \[Places\])

**Arguments**

| Name   | Description                                                                                                                      |
|--------|----------------------------------------------------------------------------------------------------------------------------------|
| Number | The decimal number to convert.                                                                                                   |
| Places | Optional. The number of characters to use for returned value. If value has less characters then it is padded with leading zeros. |

**Return Value**

The hexadecimal number or a \#NUM! error if given number is not a valid
decimal number. The \#VALUE! error is returned if specified places is
nonnumeric or negative.

**Example**

| Function        | Result | Comment                                              |
|-----------------|--------|------------------------------------------------------|
| =DEC2HEX(28)    | 1C     | converts decimal 28 to hexadecimal                   |
| =DEC2HEX(28, 4) | 001C   | converts decimal 28 to hexadecimal with 4 characters |
