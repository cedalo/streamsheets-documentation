# CHOOSE

Returns the value at the specified index from a list of passed
arguments.

**Syntax**

=CHOOSE(Index, Value1, \[Value2\], ...)

**Arguments**

| Name        | Description                         |
|-------------|-------------------------------------|
| Index       | Index of item to retrieve           |
| Value1      | First value in list                 |
| Value2, ... | Optional. Other values for the list |

**Return Value**

The value at specified index or \#VALUE!.

**Example**

| Function                        | Result  | Comment                      |
|---------------------------------|---------|------------------------------|
| =CHOOSE(2, "German", "English") | English | Index 2 represents "English" |