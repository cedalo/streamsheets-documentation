# PRODUCE

Procudes a message using the specified Producer and a `JSON`
configuration. Use json to creat a configuration object or reference an
existing configuration from the outbox using the `outbox` function or
from the `inbox` using `INBOX <inboxf>`.

**Syntax**

=PRODUCE(`Producer`, JSONConfiguration)

**Arguments**

| Name              | Description                                                                                                                                                                              |
|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Producer          | Producer to use for producing.                                                                                                                                                           |
| JSONConfiguration | A JSON that is either an existing message from the outbox or inbox, or created with `JSON` or `DICTIONARY`. A "message" field is required, all other fields depend on the used Prdocuer. |

**Return Value**

TRUE, if successful.

**Examples**

<table>
<colgroup>
<col style="width: 45%" />
<col style="width: 15%" />
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
<td><p>=PRODUCE("<code class="interpreted-text" role="term">MQTT Producer</code>", A1)</p>
<p>Content of A1:</p>
<pre><code>{ &quot;message&quot;: &quot;A Message&quot;, &quot;topic&quot;: &quot;cedalo/test&quot;}</code></pre></td>
<td><p>TRUE</p></td>
<td><p>This publishes the string value "A Message" using the "MQTT Producer" under the topic "cedalo/test".</p></td>
</tr>
<tr class="even">
<td><p>=PRODUCE("File Producer", <code class="interpreted-text" role="ref">JSON</code>(<span class="blue">A2:B3</span>))</p>
<div class="line-block"><img src="/images/PRODUCE.PNG" alt="PRODUCE" /></div></td>
<td><p>TRUE</p></td>
<td><p>This appends "Message" to the file "file.txt" using the "File Producer"</p></td>
</tr>
</tbody>
</table>
