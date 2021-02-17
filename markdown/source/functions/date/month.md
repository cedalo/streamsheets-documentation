# MONTH

Returns the month of the date value.

**Syntax**

=MONTH(DateValue\[,Round\])

**Arguments**

| Name      | Description                                                                                                                                                                                                                                                |
|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DateValue | Insert a valid timestamp format or a cell referenz to a timestamp. A timestamp consists out of two numbers. The number to the left of the decimal define the days since 01.01.1900. The number to the right of the decimal define the fraction of the day. |
| Round     | Optional. Defines if value should be rounded. Default is true.                                                                                                                                                                                             |

**Return Value**

=Month evaluated from date value.

**Example**

| Function                      | Result | Comment                                               |
|-------------------------------|--------|-------------------------------------------------------|
| =MONTH(43238)                 | 5      | The given date value represents the 18th of May, 2018 |
| =MONTH(39447.99999422, true)  | 1      | Rounded to 1                                          |
| =MONTH(39447.99999422, false) | 12     | Same input value as before but no rounding applied    |
