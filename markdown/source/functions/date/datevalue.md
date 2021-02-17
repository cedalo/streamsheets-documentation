# DATEVALUE

Converts date given as text to a serial number.

**Syntax**

=DATEVALUE(DateText)

**Arguments**

| Name     | Description             |
|----------|-------------------------|
| DateText | Date string to convert. |

**Return Value**

The corresponding serial number defining the amount of days since
01.01.1900.

**Example**

| Function                | Result | Comment                                                                                                                                        |
|-------------------------|--------|------------------------------------------------------------------------------------------------------------------------------------------------|
| =DATEVALUE("18.5.2018") | 43238  | The number to the left of the decimal define the days since 01.01.1900. The number to the right of the decimal define the fraction of the day. |
