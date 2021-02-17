# SPLIT

Splits a given text by using a specified separator and returns the part
at given optional index. If the text does not contain the specified
separator, the complete text is returned.The index parameter is
optional. If not specified, the first part is returned. The Separator
splits a text in parts. 1 returns the first part, 2 the second part, 3
the third and so on.

**Syntax**

=SPLIT(Text, Separator, Index)

**Arguments**

| Name      | Description                                                         |
|-----------|---------------------------------------------------------------------|
| Text      | Text to split.                                                      |
| Separator | Separator used to split text.                                       |
| Index     | Optional. Number which specifies the part to return. Defaults to 1. |

**Return Value**

The part of text at specified index.

**Example**

| Function                            | Result            | Comment                                                          |
|-------------------------------------|-------------------|------------------------------------------------------------------|
| =SPLIT("cedalo/topic", "/", 2)      | topic             | Returns the second part of splitted text.                        |
| =SPLIT("cedalo/topic", "/")         | cedalo            | No index is given so first part is returned by default.          |
| =SPLIT("cedalo/test/topic", "/", 5) | topic             | Index exceeds number of parts, so return last one.               |
| =SPLIT("cedalo/test/topic", "+", 2) | cedalo/test/topic | Separator is not contained within text, so return complete text. |
