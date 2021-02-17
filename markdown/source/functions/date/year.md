# YEAR

Returns the year of the date value.

**Syntax**

=YEAR(DateValue\[,Round\])

**Arguments**

| Name      | Description                                                                                                                                                                                                                                                |
|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DateValue | Insert a valid timestamp format or a cell referenz to a timestamp. A timestamp consists out of two numbers. The number to the left of the decimal define the days since 01.01.1900. The number to the right of the decimal define the fraction of the day. |
| Round     | Optional. Defines if value should be rounded. Default is true.                                                                                                                                                                                             |

**Return Value**

Year evaluated from date value.

**Example**

| Function                     | Result | Comment                                               |
|------------------------------|--------|-------------------------------------------------------|
| =YEAR(43238)                 | 2018   | The given date value represents the 18th of May, 2018 |
| =YEAR(39447.99999422, true)  | 2008   | Rounded to 2008                                       |
| =YEAR(39447.99999422, false) | 2007   | Same input value as before but no rounding applied    |
