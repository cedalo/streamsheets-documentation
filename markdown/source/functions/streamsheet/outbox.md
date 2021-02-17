# OUTBOX

Creates a key to reference an outbox message. This key is used in
functions like `DELETE` to identify messages inside an outbox.

**Syntax**

=OUTBOX(Message)

**Arguments**

| Name    | Description                                                                                    |
|---------|------------------------------------------------------------------------------------------------|
| Message | Optional. ID of Message to identify. If left empty, the current message in the outbox is used. |

**Return Value**

A key to identify message.

**Example**

| Function           | Result      | Comment                                                                              |
|--------------------|-------------|--------------------------------------------------------------------------------------|
| =OUTBOX("Message") | \[Message\] | Returns an identifier that can be used in other Streamsheet functions like `DELETE`. |
