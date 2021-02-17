# FORECAST

Calculates a future Y value for a given X value based on existing
values.

**Syntax**

=FORECAST(X,Known\_Ys, Known\_Xs)

**Arguments**

| Name      | Description                                                                                         |
|-----------|-----------------------------------------------------------------------------------------------------|
| X         | Number for which a value should be predicted. Passing non numeric values results in \#VALUE! error. |
| Known\_Ys | A cell range which defines the dependent y numbers. No number values are ignored.                   |
| Known\_Xs | A cell range which defines the dependent x numbers. No number values are ignored.                   |

**Return Value**

A number representing the predicted Y value for given X value.

**Example**

| Function                   | Result     | Comment                                                                                         |
|----------------------------|------------|-------------------------------------------------------------------------------------------------|
| =FORECAST(30,A2:A6,B2:B6)  | 10.607253' | with cell values A2: 6, A3: 7, A4: 9, A5: 15, A6: 21 and B2: 20, B3: 28, B4: 31, B5: 38, B6: 40 |
| =FORECAST(30,A7:A12,B2:B6) | \#NA!      | no y values                                                                                     |
