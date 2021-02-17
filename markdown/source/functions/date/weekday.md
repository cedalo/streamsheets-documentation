# WEEKDAY

Returns the weekday in form of a number (1 (sunday) - 7 (saturday)) of
the date value.

**Syntax**

=WEEKDAY(DateValue\[,Round\])

**Arguments**

| Name      | Description                                                                                                                                  |
|-----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| DateValue | The number to the left of the decimal define the days since 1.1.1900. The number to the right of the decimal define the fraction of the day. |
| Round     | Optional. Defines if value should be rounded. Default is true.                                                                               |

**Return Value**

Weekday evaluated from date value. Counting from 1, representing sunday,
to 7, representing saturday.

**Example**

| Function                      | Result | Comment                                                                    |
|-------------------------------|--------|----------------------------------------------------------------------------|
| =WEEKDAY(43238)               | 6      | The given date value represents the 18th of May, 2018, which was a friday. |
| =WEEKDAY(43930.999999, true)  | 6      | Rounded to 6                                                               |
| =WEEKDAY(43930.999999, false) | 5      | Same input value as before but no rounding applied                         |
