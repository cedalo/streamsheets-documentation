# FIND

Finds text within a string value (case-sensitive).

**Syntax**

=FIND(Text, WithinText\[, FromPos\])

**Arguments**

| Name       | Description                                                                                          |
|------------|------------------------------------------------------------------------------------------------------|
| Text       | A string value to look for.                                                                          |
| WithinText | A string value to look in.                                                                           |
| FromPos    | Optional. A start position which specifies the first character to start the search at. Default is 1. |

**Return Value**

Returns the place where to find the searched character in the string.

**Example**

| Function                      | Result |
|-------------------------------|--------|
| =FIND("of", "Tip of the day") | 5      |
