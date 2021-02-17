# EXCEL2JSONTIME

Converts a serial number to an ISO 8601 date of following format:
YYYY-MM-DDThh:mm:ss.sssZ

**Syntax**

=EXCEL2`JSON`TIME(Number)

**Arguments**

| Name   | Description                                                    |
|--------|----------------------------------------------------------------|
| Number | A serial number which contains a complete date representation. |

**Return Value**

An ISO 8601 date string.

**Example**

| Function                            | Result                   | Comment                                                            |
|-------------------------------------|--------------------------|--------------------------------------------------------------------|
| =EXCEL2JSONTIME(15453.767864710648) | 2012-04-23T18:25:43.511Z | The given serial number represents the 23th of April, 2012, 18:24. |
