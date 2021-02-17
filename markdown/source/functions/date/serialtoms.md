# SERIALTOMS

Converts the given date to the elapsed milliseconds since 1st of January
1900.

**Syntax**

=SERIALTOMS(Date)

**Arguments**

| Name | Description                                                                                                                                                                                                                                                |
|------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Date | Insert a valid timestamp format or a cell referenz to a timestamp. A timestamp consists out of two numbers. The number to the left of the decimal define the days since 01.01.1900. The number to the right of the decimal define the fraction of the day. |

**Return Value**

Ellapsed milliseconds as a number deducted from the DateValue.

**Example**

| Function                 | Result        | Comment                                                       |
|--------------------------|---------------|---------------------------------------------------------------|
| =SERIALTOMS(37386.97157) | 3230234343334 | The given date value represents the 10th of May, 2002, 23:19. |
