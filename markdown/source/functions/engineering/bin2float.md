# BIN2FLOAT

Converts a binary number to a floating point number. Floating point
numbers are represented as a 32bit-IEEE-754 number.

**Syntax**

=BIN2FLOAT(Number)

**Arguments**

| Name   | Description                   |
|--------|-------------------------------|
| Number | The binary number to convert. |

**Return Value**

The floating point number or a \#NUM! error if given number is not a
valid binary number.

**Example**

| Function                                       | Result                   | Comment                                                                          |
|------------------------------------------------|--------------------------|----------------------------------------------------------------------------------|
| =BIN2FLOAT("01000000010010010000111111011011") | 3.1415927410125732421875 | converts binary number 01000000010010010000111111011011 to floating point number |
