# FLOAT2HEX

Converts a floating point number to hexadecimal. Floating point numbers
are represented as a 32bit-IEEE-754 number.

**Syntax**

=FLOAT2HEX(Number)

**Arguments**

| Name   | Description                           |
|--------|---------------------------------------|
| Number | The floating point number to convert. |

**Return Value**

The hexadecimal number or a \#NUM! error if given number is not a valid
floating point number.

**Example**

| Function          | Result   | Comment                                      |
|-------------------|----------|----------------------------------------------|
| =FLOAT2HEX(2.567) | 402449BA | converts floating point 2.567 to hexadecimal |
