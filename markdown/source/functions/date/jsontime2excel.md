# JSONTIME2EXCEL

Converts an ISO 8601 date string to a serial number.

**Syntax**

=`JSON`TIME2EXCEL(text)

**Arguments**

| Name | Description                                                           |
|------|-----------------------------------------------------------------------|
| text | An ISO 8601 date string of following format: YYYY-MM-DDThh:mm:ss.sssZ |

**Return Value**

A serial number representing the specified date string.

**Example**

| Function                                  | Result             | Comment                              |
|-------------------------------------------|--------------------|--------------------------------------|
| =JSONTIME2EXCEL(2012-04-23T18:25:43.511Z) | 15453.767864710648 | The given ISO date as serial number. |
