# SEARCH

Return the index of the search text within the text. The search starts
at index.

**Syntax**

=SEARCH(TextToSearch, Text \[, StartAt\])

**Arguments**

| Name         | Description                                                         |
|--------------|---------------------------------------------------------------------|
| TextToSearch | Text to search for. **Note:** wildcards like \* or ? are supported. |
| Text         | Text to search inside.                                              |
| StartAt      | Optional. Character index to start search at. Default is 1.         |

**Return Value**

Position, where the text is found, otherwise \#VALUE.

**Example**

| Function                       | Result |
|--------------------------------|--------|
| =SEARCH("me", "Search me now") | 8      |
| =SEARCH("a\*c", "abc")         | 1      |
