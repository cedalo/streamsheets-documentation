# OUTBOXDATA

Creates a `JSON` key from the given values or range to reference data
from within a message. This function is normally used in the `WRITE`
function. OUTBOXDATA references values from the Data section of a
message.

**Syntax**

=OUTBOXDATA(Message, ValuesOrRange)

**Arguments**

| Name          | Description                                                                                           |
|---------------|-------------------------------------------------------------------------------------------------------|
| Message       | Message to reference data from.                                                                       |
| ValuesOrRange | A list of values or a range of cells describing the path to the element path within a JSON structure. |

**Return Value**

A string key to provide a path within a message.

**Example**

| Function                                                          | Result                          | Comment                                                                                                                                                             |
|-------------------------------------------------------------------|---------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| =OUTBOXDATA("Message, "NewItem")                                  | \[Message\]\[Newitem\]          | Returns an identifier that can be used in other Streamsheet functions like WRITE.                                                                                   |
| =OUTBOXDATA("Message", B1:B2)                                     | \[Message\]\[Customer\]\[Name\] | Here the values within the cell range B1:B2 ("Customer", "Name") will be used to concatenate the JSON path.                                                         |
| =`WRITE`(OUTBOXDATA("Message", "Customer", "Name"), C7, "String") | Name                            | The WRITE function returns the last part of the JSON Path. The value in C7 will be written into the Message at the given JSON Path.                                 |
| =WRITE(OUTBOXDATA("Message","Output",-1),JSON(J22:K24),)          |                                 | Pro tipp: If you want to create an array in the Outbox, use -1 as the last OUTBOXDATA() parameter. This way the array will automatically increment starting from 0. |
