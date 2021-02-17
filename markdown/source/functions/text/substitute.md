# SUBSTITUTE

Substitutes a text string with a new text.

**Syntax**

=SUBSTITUTE(Text, OldText, NewText\[, Occurrence\])

**Arguments**

| Name       | Description                                                                                                                               |
|------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| Text       | Text for which to substitute characters.                                                                                                  |
| OldText    | The text to be replaced.                                                                                                                  |
| NewText    | The text which will replace specified OldText.                                                                                            |
| Occurrence | Optional. Specifies which occurrence of OldText to be replaced by NewText. If not specified every occurrence of OldText will be replaced. |

**Return Value**

A string value with replaced text.

**Example**

| Function                                      | Result             |
|-----------------------------------------------|--------------------|
| =SUBSTITUTE("Replace me now", "now", "later") | "Replace me later" |
