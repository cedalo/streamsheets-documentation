# DELETE

Delete a message or message content based on the key. The key is
provided by using one of the following functions. `INBOX <inboxf>`,
`OUTBOX`, `INBOXDATA`, `INBOXMETADATA`, `OUTBOXMETADATA`, `OUTBOXDATA`.

**Syntax**

=DELETE(Key)

**Arguments**

| Name | Description                                          |
|------|------------------------------------------------------|
| Key  | Key of the to be deleted message or message content. |

**Return Value**

TRUE, if successful.

**Example**

| Function                                   | Result | Comment                                                                       |
|--------------------------------------------|--------|-------------------------------------------------------------------------------|
| =DELETE(`INBOX <inboxf>`("S1", "Message")) | TRUE   | Message has to be an existing message in the Inbox in a StreamSheet named S1. |
