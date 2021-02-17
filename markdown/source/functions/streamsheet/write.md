# WRITE

Adds the key and value to a `JSON` object in the outbox. The path to the
key will be created as needed.

**Syntax**

=WRITE(Key, Value, Type, TTL)

**Arguments**

| Name  | Description                                                                                                                                                                                                |
|-------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Key   | A key to a data item, that should be written. The key is usually created by using the `OUTBOXMETADATA` or `OUTBOXDATA` utility functions. The key consists of the path to the item within the JSON object. |
| Value | Value to assign to key.                                                                                                                                                                                    |
| Type  | Optional. Type of Value. Allowed types are String, Number, Boolean, Array, Dictionary. The type defines the color of the cell.                                                                             |
| TTL   | Optional. The "time to live" period in seconds. If the specified period expires the corresponding message will be removed from the outbox. Default is indefinit.                                           |

**Return Value**

The last part of the key of the data value to write.

**Example**

<table>
<colgroup>
<col style="width: 39%" />
<col style="width: 34%" />
<col style="width: 26%" />
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
<td><div class="line-block">=WRITE(<code class="interpreted-text" role="ref">OUTBOXDATA</code>("Message","Customer", "Name"), "Maier", "String")</div></td>
<td><div class="line-block">Outbox Message:<br />
</div></td>
<td><div class="line-block">Example to write a value to a JSON object in the outbox.</div></td>
</tr>
<tr class="even">
<td><div class="line-block">=WRITE(<code class="interpreted-text" role="ref">OUTBOXDATA</code>("Message","Units"),READ(INBOXDATA(,,"Units")))<br />
Inbox Message:<br />
<img src="/images/ArrayIn.PNG" alt="ArrayIn" /></div></td>
<td><div class="line-block">Outbox Message:<br />
<img src="/images/ArrayOut.PNG" alt="ArrayOut" /></div></td>
<td>You can also direct data from the Inbox into the Outbox. In this example the "Units" array from the Inbox is automatically transfered to the Outbox.</td>
</tr>
<tr class="odd">
<td><div class="line-block">=WRITE(OUTBOXDATA("Message","Output",-1),JSON(J22:K24),)</div></td>
<td><div class="line-block"><img src="/images/increment.PNG" alt="inc" /></div></td>
<td><div class="line-block">Pro tipp: If you want to automatically create an array, use -1 as the last OUTBOXDATA() parameter. This way the array will increment starting from 0.</div></td>
</tr>
</tbody>
</table>
