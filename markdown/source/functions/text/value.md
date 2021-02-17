# VALUE

Converts a textual number representation to a number.

**Syntax**

=VALUE(Text,\[Locale\])

**Arguments**

| Name   | Description                                                                                          |
|--------|------------------------------------------------------------------------------------------------------|
| Text   | A string representing a number value.                                                                |
| Locale | An optional locale code. Currently only "en" and "de" are supported. Defaults to current App locale. |

**Return Value**

A number or \#VALUE! if given Text cannot be converted.

**Example**

| Function              | Result   |
|-----------------------|----------|
| =VALUE("22.45")       | 22.45    |
| =VALUE("22,45", "de") | 22,45    |
| =VALUE("hello", "de") | \#VALUE! |
