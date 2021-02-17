# INDIRECT

Returns the value of the reference specified by a text string.

**Syntax**

=INDIRECT(Ref\_Text, \[R1C1\_Style\])

**Arguments**

| Name        | Description                                                                                            |
|-------------|--------------------------------------------------------------------------------------------------------|
| Ref\_Text   | A textual representation of a cell reference, cell range reference or a named cell.                    |
| R1C1\_Style | Optional. If set to FALSE the given Ref\_Text is interpreted as R1C1-style reference. Default is TRUE. |

**Return Value**

The value at specified reference or \#REF! if reference could not be
created.

**Example**

| Function            | Result | Comment                                                                          |
|---------------------|--------|----------------------------------------------------------------------------------|
| =INDIRECT("A1")     | 10     | Returns the value of cell A1                                                     |
| =INDIRECT("A" & A5) | 42     | Assuming that A5 contains the value 4 the result represents the value of cell A4 |
