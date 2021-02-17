# FEEDINBOX

This function feeds the `inbox` of a `Streamsheet` within the same
`App`. The Streamsheet Settings must be set to "On Data Arrival", to
trigger the calculation. This way a dependent Streamsheet can be
triggered in two different ways. Either using the FEEDINBOX() function,
which leads to an "asynchronous" call, since the message is just added
to the inbox and waits for the next step. Or using `EXECUTE`(), which
will lead to a direct execution (synchronous).

**Syntax**

=FEEDINBOX(`JSON`, Target)

**Arguments**

| Name   | Description                                                                                               |
|--------|-----------------------------------------------------------------------------------------------------------|
| JSON   | A key to a json object, defined by `JSON`, `DICTIONARY`, `READ`, `SUBTREE`, `INBOX <inboxf>` or `OUTBOX`. |
| Target | A location sheet name where the JSON will be placed in the inbox.                                         |

**Return Value**

TRUE, if successful.

**Example**

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Function</th>
<th>Comment</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><div class="line-block">=FEEDINBOX(<code class="interpreted-text" role="ref">DICTIONARY</code>(<span class="blue">A2:B5</span>), "S1")<br />
<br />
<img src="/images/FEEDINBOX1.PNG" alt="FEEDINBOX1" /></div></td>
<td><p>Appending an object to a message. The message content will look as follows</p>
<div class="line-block"><img src="/images/FEEDINBOX2.PNG" alt="FEEDINBOX2" /></div></td>
</tr>
</tbody>
</table>
