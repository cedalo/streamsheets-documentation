# HTTP.RESPOND

![star](/images/star.svg) This is a [Streamsheets
Premium](https://cedalo.com/download/) feature.

Sends either arbitrary `JSON` data or a message from the outbox to
specified `Producer`. Usually this function is used to respond to a
previously received *request*-message. You can use the
`Function Wizard <functionwizard>` for this function.

**Syntax**

=HTTP.RESPOND(`Consumer`, RequestId, Body, \[StatusCode, Headers\])

**Arguments**

| Name       | Description                                                            |
|------------|------------------------------------------------------------------------|
| Consumer   | Name of the Consumer to use for sending respond.                       |
| RequestId  | The *requestId* as provided by a previously received *request*-message |
| Body       | Data to send as response.                                              |
| StatusCode | Optional. Defaults to 200. HTTP status code of the response.           |
| Headers    | Optional. Headers of the response.                                     |

**Return Value**

TRUE on success or `error code <error>` otherwise.

**Example**

We assume that a *request*-message was received and that it provides a
*requestId* which we store to cell B1 by using the `read` function as
follows: `READ(INBOXMETADATA(,,"requestId"), B1, "String")`

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 10%" />
<col style="width: 40%" />
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
<td>=HTTP.RESPOND("Rest", B1, <code class="interpreted-text" role="ref">DICTIONARY</code>(A3:C5))</td>
<td>TRUE</td>
<td>Sends the JSON data provided by the <code class="interpreted-text" role="ref">dictionary</code> function to the Consumer named <em>Rest</em> using the <em>requestId</em> in B1</td>
</tr>
<tr class="even">
<td><p>=HTTP.RESPOND("Rest", B1, "Not Found", 404,<span class="blue">A2:B2</span>)</p>
<blockquote>

</blockquote></td>
<td><p>TRUE</p></td>
<td><p>Responds to the request corresponding to <em>requestId</em> with the body "Not Found", status code "404" and the header "Content-Type: text/plain".</p></td>
</tr>
</tbody>
</table>
