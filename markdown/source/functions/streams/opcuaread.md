# OPCUA.READ

![star](/images/star.svg) This is a [Streamsheets
Premium](https://cedalo.com/download/) feature.

Reads a value from an `OPC UA` Server.You can use the
`Function Wizard <functionwizard>` for this function. Click
`here<opcuafunctions>` for a more detailed tutorial on opcua functions.

**Syntax**

=OPCUA.READ(`Producer`, Node, Target\[,ResultKeys, Timeout\])

**Arguments**

| Name       | Description                                                                                                       |
|------------|-------------------------------------------------------------------------------------------------------------------|
| Producer   | Producer to use for publishing.                                                                                   |
| Node       | Path of the node to read or node id.                                                                              |
| Target     | Target of the result of the write operation. Can be either `INBOX <inboxf>`(), `OUTBOX`("MsgID") or a cell range. |
| ResultKeys | Optional. Limit the result to the specified `JSON` Keys.                                                          |
| Timeout    | Optional. The time to wait for an answer. When left empty a 20 second timeout is being used.                      |

**Return Value**

The function OPCUA.READ always returns a unique random request ID, which
can be used with `requestinfo` to check the state of the request.

**Examples**

| Function                                                                                 | Result         | Comment                                                                                            |
|------------------------------------------------------------------------------------------|----------------|----------------------------------------------------------------------------------------------------|
| =OPCUA.READ("OPCUA Producer", "/Objects/1:Machines/1:H1mrblX0X/name",`INBOX <inboxf>`()) | The request ID | This reads the name of the machine with the id "H1mrblX0X" and places the result into the `inbox`. |
