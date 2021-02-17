# FLOAT2BIN

Converts a floating point number to binary. Floating point numbers are
represented as a 32bit-IEEE-754 number.

**Syntax**

=FLOAT2BIN(Number)

**Arguments**

| Name   | Description                           |
|--------|---------------------------------------|
| Number | The floating point number to convert. |

**Return Value**

The binary number or a \#NUM! error if given number is not a valid
floating point number.

**Example**

| Function          | Result                           | Comment                                 |
|-------------------|----------------------------------|-----------------------------------------|
| =FLOAT2BIN(2.567) | 01000000001001000100100110111010 | converts floating point 2.567 to binary |
