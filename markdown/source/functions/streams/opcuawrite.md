# OPCUA.WRITE

![star](/images/star.svg) This is a [Streamsheets
Premium](https://cedalo.com/download/) feature.

Sends a write request of a value to an `OPC UA` Server. The Server will
respond, if the write was successful or not. You can use the
`Function Wizard <functionwizard>` for this function. Click
`here<opcuafunctions>` for a more detailed tutorial on opcua functions.

**Syntax**

=OPCUA.WRITE(`Producer`, Node, ValueJSON, Target\[,ResultKeys,
Timeout\])

**Arguments**

| Name       | Description                                                                                                       |
|------------|-------------------------------------------------------------------------------------------------------------------|
| Producer   | Producer to use for publishing.                                                                                   |
| Node       | Path of the node to write to or node id.                                                                          |
| ValueJSON  | `JSON` with a "value" and a "dataType" field containing the value to write and the data type of the value.        |
| Target     | Target of the result of the write operation. Can be either `INBOX <inboxf>`(), `OUTBOX`("MsgID") or a cell range. |
| ResultKeys | Optional. Limit the result to the specified JSON Keys                                                             |
| Timeout    | Optional. The time to wait for an answer. When left empty a 20 second timeout is being used.                      |

**Return Value**

The function OPCUA.WRITE always returns a unique random request ID,
which can be used with `requestinfo` to check the state of the request.

**Examples**

<table>
<colgroup>
<col style="width: 52%" />
<col style="width: 13%" />
<col style="width: 34%" />
</colgroup>
<thead>
<tr class="header">
<th>Function</th>
<th>Result</th>
<th>Comment</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><div class="line-block">=OPCUA.WRITE("OPCUA Producer","/Objects/1:Machines/<br />
1:H1mrblX0X/name",JSON(<span class="blue">A2:B3</span>), <code class="interpreted-text" role="ref">INBOX &lt;inboxf&gt;</code>())<br />
</div></td>
<td>The request ID</td>
<td>This sets the name of the machine with the id "H1mrblX0X" to "New Name". The result of the operation, either confirmation or any error is placed into the <code class="interpreted-text" role="ref">INBOX</code>.</td>
</tr>
</tbody>
</table>
