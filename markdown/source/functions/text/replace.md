# REPLACE

Replaces part of a string value, based on the number of specified
characters, with a different text.

**Syntax**

=REPLACE(OldText, StartPos, NumChars, NewText)

**Arguments**

| Name     | Description                                                  |
|----------|--------------------------------------------------------------|
| OldText  | String in which to replace characters.                       |
| StartAt  | Character position in OldText at which replace starts.       |
| NumChars | Number of characters from StartAt to be replaced by NewText. |
| NewText  | The text which will replace specified characters in OldText. |

**Return Value**

The replaced Text.

**Example**

| Function                                   | Result             |
|--------------------------------------------|--------------------|
| =REPLACE("Replace me now", 12, 3, "later") | "Replace me later" |