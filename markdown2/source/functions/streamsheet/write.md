# WRITE

Adds the key and value to a `JSON` object in the outbox. The path to the
key will be created as needed.

**Syntax**

=WRITE(Key, Value, Type, TTL)

**Arguments**

| Name  | Description                                                                                                                                                                                                |
|-------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Key   | A key to a data item, that should be written. The key is usually created by using the `OUTBOXMETADATA` or `OUTBOXDATA` utility functions. The key consists of the path to the item within the JSON object. |
| Value | Value to assign to key.                                                                                                                                                                                    |
| Type  | Optional. Type of Value. Allowed types are String, Number, Boolean, Array, Dictionary. The type defines the color of the cell.                                                                             |
| TTL   | Optional. The "time to live" period in seconds. If the specified period expires the corresponding message will be removed from the outbox. Default is indefinit.                                           |

**Return Value**

The last part of the key of the data value to write.

**Example**

| Function                                                                                                          | Result                                            | Comment                                                                                                                                               |
|-------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| =WRITE(`OUTBOXDATA`("Message","Customer", "Name"), "Maier", "String")                                             | Outbox Message:                                   | Example to write a value to a JSON object in the outbox.                                                                                              |
| =WRITE(`OUTBOXDATA`("Message","Units"),READ(INBOXDATA(,,"Units"))) Inbox Message: ![ArrayIn](/images/ArrayIn.PNG) | Outbox Message: ![ArrayOut](/images/ArrayOut.PNG) | You can also direct data from the Inbox into the Outbox. In this example the "Units" array from the Inbox is automatically transfered to the Outbox.  |
| =WRITE(OUTBOXDATA("Message","Output",-1),JSON(J22:K24),)                                                          | ![inc](/images/increment.PNG)                     | Pro tipp: If you want to automatically create an array, use -1 as the last OUTBOXDATA() parameter. This way the array will increment starting from 0. |
