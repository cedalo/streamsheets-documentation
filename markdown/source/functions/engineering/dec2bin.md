# DEC2BIN

Converts a decimal number to binary.

**Syntax**

=DEC2BIN(Number, \[Places\])

**Arguments**

| Name   | Description                                                                                                                      |
|--------|----------------------------------------------------------------------------------------------------------------------------------|
| Number | The decimal number to convert.                                                                                                   |
| Places | Optional. The number of characters to use for returned value. If value has less characters then it is padded with leading zeros. |

**Return Value**

The binary number or a \#NUM! error if given number is not a valid
decimal number. The \#VALUE! error is returned if specified places is
nonnumeric or negative.

**Example**

| Function       | Result | Comment                                        |
|----------------|--------|------------------------------------------------|
| =DEC2BIN(9)    | 1001   | converts decimal 9 to binary                   |
| =DEC2BIN(9, 6) | 001001 | converts decimal 9 to binary with 6 characters |
