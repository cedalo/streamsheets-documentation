# ARRAY

This function can be used to efficiently add array items to a message.
Creates a `JSON` array entry using the given keys and values. If the
range has one row or column, one array entry for each cell is created.
If there are two columns or rows, a nested array (array containing a
subarray) will be created. Note that if both nest and flat parameters
are set to true one can use `range` instead.

**Syntax**

=ARRAY(Range, \[Nest\], \[Flat\])

**Arguments**

| Name  | Description                                                                                                                                                                                                                                         |
|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Range | Source Range to retrieve data from                                                                                                                                                                                                                  |
| Nest  | Optional. Direction on how to nest items, if range has more than one row or column. FALSE to nest by column and TRUE to nest by row. Default is TRUE.                                                                                               |
| Flat  | Optional. If this Argument is supplied (any value works!) the returned Array is always nested, even if only one row or column is specified. If Argument is missing than the returned array is only nested if there are more than one row or column. |

**Return Value**

Comma separated list of array items.

**Example**

<table>
<colgroup>
<col style="width: 38%" />
<col style="width: 23%" />
<col style="width: 38%" />
</colgroup>
<thead>
<tr class="header">
<th>Function</th>
<th>Outbox Result</th>
<th>Comment</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><div class="line-block">=<code class="interpreted-text" role="ref">WRITE</code>(<code class="interpreted-text" role="ref">OUTBOXDATA</code>("Message", "NewItem"),ARRAY(<span class="blue">A2:B5</span>, FALSE), "Array")<br />
with the following cell content:</div>
<div class="line-block"></div></td>
<td><div class="line-block"><img src="/images/ARRAY2.PNG" class="align-middle" alt="ARRAY2" /></div></td>
<td><div class="line-block">Appending an array to a message. Since Nest is set to FALSE, the array items are created by columns leading to two array entries. The two entries contain the elements from the rows top to bottom. The message content will look as follows</div></td>
</tr>
<tr class="even">
<td><div class="line-block">=<code class="interpreted-text" role="ref">WRITE</code>(<code class="interpreted-text" role="ref">OUTBOXDATA</code>("Message","NewItem"),ARRAY(<span class="blue">A2:A5</span>,FALSE),"Array")<br />
=<code class="interpreted-text" role="ref">WRITE</code>(<code class="interpreted-text" role="ref">OUTBOXDATA</code>("Message","NewItem2"),ARRAY(<span class="red">B2:B5</span>,FALSE,TRUE),"Array")</div>
<div class="line-block"><img src="/images/nested.PNG" alt="nested" /></div></td>
<td><img src="/images/nestedout.PNG" alt="nestedout" /></td>
<td>Example usage of the nested parameter.</td>
</tr>
</tbody>
</table>

<div class="tip">

<div class="title">

Tip

</div>

If you want to create an Outbox array step by step, you can use "-1" as
last outboxdata path to automatically add a new array element to the
existing outbox message.
=WRITE(OUTBOXDATA("Message";"data";-1);JSON(B1:C5);)

</div>
