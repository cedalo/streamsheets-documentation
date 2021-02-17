# OPCUA.RESPOND

![star](/images/star.svg) This is a [Streamsheets
Premium](https://cedalo.com/download/) feature.

Sends a response directly, i.e. without any Consumer, to an `OPC UA`
service. The data to be send can be either arbitrary `JSON` data or a
message from the outbox or `inbox`. Usually this function is used to
respond to a previously received *request*-message. Click
`here<opcuafunctions>` for a more detailed tutorial on opcua functions.

<div class="note">

<div class="title">

Note

</div>

A *request*-message must provide a `requestId` property within its
*Metadata* object.

</div>

**Syntax**

=OPCUA.RESPOND(requestId, MessageOrJSON)

**Arguments**

| Name          | Description                                                            |
|---------------|------------------------------------------------------------------------|
| requestId     | The *requestId* as provided by a previously received *request*-message |
| MessageOrJSON | Data to send as response.                                              |

**Return Value**

Color switch to blue on success. Otherwise to red with an
`error code <error>`.

**Example**

We assume that a *request*-message was received and that it provides a
*requestId* which we store to cell B1 by using the `read` function as
follows: `READ(INBOXMETADATA(,,"requestId"), B1, "String")`

| Function                                | Result | Comment                                                                                                 |
|-----------------------------------------|--------|---------------------------------------------------------------------------------------------------------|
| =OPCUA.RESPOND(B1, `OUTBOX`("Message")) | TRUE   | Sends the message with id *Message* from the outbox to an OPCUA Service using the *requestId* in B1     |
| =OPCUA.RESPOND(B1, `DICTIONARY`(A3:C5)) | TRUE   | Sends the JSON data provided by the Dictionary function to an OPCUA Service using the *requestId* in B1 |
