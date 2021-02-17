# DAY

Returns the day of the month of the date value.

**Syntax**

=DAY(DateValue\[,Round\])

**Arguments**

| Name      | Description                                                                                                                                                                                                                                                |
|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DateValue | Insert a valid timestamp format or a cell referenz to a timestamp. A timestamp consists out of two numbers. The number to the left of the decimal define the days since 01.01.1900. The number to the right of the decimal define the fraction of the day. |
| Round     | Optional. Defines if value should be rounded. Default is true.                                                                                                                                                                                             |

**Return Value**

Day of month evaluated from date value.

**Example**

| Function                  | Result | Comment                                               |
|---------------------------|--------|-------------------------------------------------------|
| =DAY(43238)               | 18     | The given date value represents the 18th of May, 2018 |
| =DAY(43930.999999, true)  | 10     | Rounded to 10                                         |
| =DAY(43930.999999, false) | 9      | Same input value as before but no rounding applied    |
