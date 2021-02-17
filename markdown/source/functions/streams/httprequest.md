# HTTP.REQUEST

Create an https request. The result, of the request, if any, will be
added to the `inbox` of the given target `sheet <Streamsheet>`. You can
use the `Function Wizard <functionwizard>` for this function.

**Syntax**

=HTTP.REQUEST(`Producer`, Path, Method, Target, \[ResultKeys\],
\[Body\], \[Headers\], \[Timeout\])

**Arguments**

| Name       | Description                                                                  |
|------------|------------------------------------------------------------------------------|
| Producer   | Producer to use for submitting the HTTP.request.                             |
| Path       | Path extending the base URL of the connector.                                |
| Method     | HTTP method of the request.                                                  |
| Target     | INBOX(), OUTBOX("MsgID") or a cell range where the result will be placed.    |
| ResultKeys | Optional. Limit the result to the specified `JSON` Keys                      |
| Body       | Optional. Data to use as the body of the HTTP request.                       |
| Headers    | Optional. Headers of the HTTP request.                                       |
| Timeout    | Optional. Number of ms after the request times out and an error is returned. |

**Return Value**

The function HTTP.REQUEST() always returns a unique random request ID,
which is automatically generated when the service is called.

**Example**

<table>
<colgroup>
<col style="width: 45%" />
<col style="width: 10%" />
<col style="width: 45%" />
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
<td>=HTTP.REQUEST("Rest", "/path", "GET", <code class="interpreted-text" role="ref">INBOX &lt;inboxf&gt;</code>())</td>
<td>generated Request id</td>
<td>This makes a GET request to "${baseURL}/path" and writes the result to the <code class="interpreted-text" role="ref">inbox</code>.</td>
</tr>
<tr class="even">
<td><p>=HTTP.REQUEST("Rest", "/path", "POST", <code class="interpreted-text" role="ref">INBOX &lt;inboxf&gt;</code>("S2"),, "hello",<span class="blue">A2:B3</span>)</p>
<div class="line-block"></div></td>
<td><p>generated Request id</p></td>
<td><p>This makes a POST request to "${baseURL}/path" with "hello" as body and "Content-Type: text/plain" and "Custom-Header: example" as headers. The response is placed in the <code class="interpreted-text" role="ref">inbox</code> of S2.</p></td>
</tr>
</tbody>
</table>
