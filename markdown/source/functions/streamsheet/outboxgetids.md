# OUTBOX.GETIDS

Creates a list with IDs of all messages currently available in the
outbox. An optional id filter can be specified to control which IDs to
return.

**Syntax**

=OUTBOX.GETIDS(IdFilterText)

**Arguments**

| Name         | Description                                                                                                                                                          |
|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| IdFilterText | Optional. A text to filter IDs. Excel wildcards like \* and ? are supported. If not specifed the returned list contains the IDs of all messages currently in outbox. |

**Return Value**

A list of message IDs.

**Example**

| Function               | Result                           | Comment                                                                                |
|------------------------|----------------------------------|----------------------------------------------------------------------------------------|
| =OUTBOX.GETIDS()       | \["message.id1", "message.id2"\] | Returns a list with message identifiers that can be used to reference outbox messages. |
| =OUTBOX.GETIDS("?id2") | \["message.id2"\]                | Returns a list with message identifiers that can be used to reference outbox messages. |
