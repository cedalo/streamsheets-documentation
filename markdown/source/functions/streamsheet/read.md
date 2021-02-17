# READ

Reads the values from a `JSON` object using the given key. Mainly used
to read `inbox` `payload`s.

**Syntax**

=READ(Key, TargetCell, Type\[, Direction, ErrorOnMissing\])

**Arguments**

| Name                | Description                                                                                                                                                                                                                                                                                                                                                                                      |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Key                 | A key to a data item, that should be read. The key is usually created by using utility functions like `INBOXDATA`, `INBOXMETADATA`, `OUTBOXMETADATA` or `OUTBOXDATA`. The key consists of the path to the item within the JSON object. Each path element is surrounded by brackets, Depending on the used utility function, you can retrieve data from different sources (e.g. Inbox or Outbox). |
| TargetCell or Range | Optional. Target cell or range to write the resulting value into.                                                                                                                                                                                                                                                                                                                                |
| Type                | Optional. Type of Value. Allowed types are String, Number, Bool/Boolean, Array, Dictionary, Json or Jsonroot. The type defines the color of the target cell. Defaults to Json.                                                                                                                                                                                                                   |
| Direction           | Optional. Specify TRUE to align keys vertically for type ARRAY, JSON or JSONROOT and horizontally for type DICTIONARY or RANGE. Defaults to TRUE.                                                                                                                                                                                                                                                |
| ErrorOnMissing      | Optional. If this is set to TRUE \#NA! will be returned if no data is available. If set to FALSE last read value will be returned or a default value if none was read before. Default is FALSE.                                                                                                                                                                                                  |

**Return Value**

The last part of the key of the data value to be retrieved.

**Example**

<table>
<colgroup>
<col style="width: 36%" />
<col style="width: 32%" />
<col style="width: 32%" />
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
<td>=READ(<code class="interpreted-text" role="ref">INBOXDATA</code>("", "", "Customer"), B1, "String")</td>
<td>Customer</td>
<td>Example to read a value from a JSON object from the inbox of the current Streamsheet and transfer it into cell B1.</td>
</tr>
<tr class="even">
<td>=READ(<code class="interpreted-text" role="ref">INBOXDATA</code>("", "", "Customer", "Name"), C2, "String",,TRUE)</td>
<td><code class="interpreted-text" role="ref">#NA! &lt;error&gt;</code></td>
<td>Returns error code if customer name is not available because last parameter is to TRUE.</td>
</tr>
<tr class="odd">
<td>=READ(<code class="interpreted-text" role="ref">INBOXDATA</code>(,,"Products","0"),F19:J25,"Dictionary",,TRUE)</td>
<td><div class="line-block"><img src="/images/Read.png" alt="Read" /><br />
Read function with target range.</div></td>
<td>Example to read a whole table with the help of the DICTIONARY() function and a target range.</td>
</tr>
</tbody>
</table>
