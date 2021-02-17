# OUTBOXDATA

Creates a `JSON` key from the given values or range to reference data
from within a message. This function is normally used in the `WRITE`
function. OUTBOXDATA references values from the Data section of a
message.

**Syntax**

=OUTBOXDATA(Message, ValuesOrRange)

**Arguments**

| Name          | Description                                                                                           |
|---------------|-------------------------------------------------------------------------------------------------------|
| Message       | Message to reference data from.                                                                       |
| ValuesOrRange | A list of values or a range of cells describing the path to the element path within a JSON structure. |

**Return Value**

A string key to provide a path within a message.

**Example**

<table>
<colgroup>
<col style="width: 32%" />
<col style="width: 35%" />
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
<td>=OUTBOXDATA("Message, "NewItem")</td>
<td>[Message][Newitem]</td>
<td>Returns an identifier that can be used in other Streamsheet functions like WRITE.</td>
</tr>
<tr class="even">
<td>=OUTBOXDATA("Message", B1:B2)</td>
<td>[Message][Customer][Name]</td>
<td>Here the values within the cell range B1:B2 ("Customer", "Name") will be used to concatenate the JSON path.</td>
</tr>
<tr class="odd">
<td>=<code class="interpreted-text" role="ref">WRITE</code>(OUTBOXDATA("Message", "Customer", "Name"), C7, "String")</td>
<td>Name</td>
<td>The WRITE function returns the last part of the JSON Path. The value in C7 will be written into the Message at the given JSON Path.</td>
</tr>
<tr class="even">
<td><div class="line-block">=WRITE(OUTBOXDATA("Message","Output",-1),JSON(J22:K24),)</div></td>
<td><div class="line-block"></div></td>
<td><div class="line-block">Pro tipp: If you want to create an array in the Outbox, use -1 as the last OUTBOXDATA() parameter. This way the array will automatically increment starting from 0.</div></td>
</tr>
</tbody>
</table>
