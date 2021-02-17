# CHAR

Returns the character represented by given number.

**Syntax**

=CHAR(Number, \[CharacterSet\])

**Arguments**

| Name         | Description                                                                                                                                                                                                   |
|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Number       | A number between 1 and 255 which specifies the character to return.                                                                                                                                           |
| CharacterSet | Optional. A string which specifies the character set to use for converting the number. Only the 'ansi' alias 'cp1252' set is currently supported. If no character-set is specified 'ansi' is used by default. |

**Return Value**

The character as specified by given number.

**Example**

| Function           | Result |
|--------------------|--------|
| =CHAR(65)          | A      |
| =CHAR(128)         | €      |
| =CHAR(128, "ansi") | €      |
