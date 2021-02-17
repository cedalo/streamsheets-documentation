# RESPOND

Sends either arbitrary `JSON` data or a message to specified producer.
Usually this function is used to respond to a previously received
*request*-message. A *request*-message must provide a `requestId`
property within its *Metadata* object.

**Syntax**

=RESPOND(MessageOrJSON, `Producer`, requestId)

**Arguments**

| Name          | Description                                                            |
|---------------|------------------------------------------------------------------------|
| MessageOrJSON | Data to send as response.                                              |
| Producer      | Name of the Producer to use for sending respond.                       |
| requestId     | The *requestId* as provided by a previously received *request*-message |

**Return Value**

TRUE on success or error code otherwise.

**Example**

We assume that a *request*-message was received and that it provides a
*requestId* which we store to cell B1 by using the `read` function as
follows: `READ(INBOXMETADATA(,,"requestId"), B1, "String")`

| Function                                  | Result | Comment                                                                                                            |
|-------------------------------------------|--------|--------------------------------------------------------------------------------------------------------------------|
| =RESPOND(`OUTBOX`("Message"), "Rest", B1) | TRUE   | Sends the message with id *Message* from the outbox to the producer named *Rest* using the *requestId* in B1       |
| RESPOND(`DICTIONARY`(A3:C5), "Rest", B1)  | TRUE   | Sends the JSON data provided by the `dictionary` function to the producer named *Rest* using the *requestId* in B1 |
