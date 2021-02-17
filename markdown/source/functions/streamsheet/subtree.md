# SUBTREE

Extracts a sub tree from the current message.

**Syntax**

=SUBTREE(TopElement\[, IncludeElementKey\])

**Arguments**

| Name              | Description                                                                                     |
|-------------------|-------------------------------------------------------------------------------------------------|
| TopElement        | Path to the parent element from where to extract the sub tree.                                  |
| IncludeElementKey | Optional flag which indicates if key of requested element should be included. Default is FALSE. |

**Return Value**

The return value contains the `JSON` Object and is only usable within
other functions. See sample below.

**Example**

<table>
<colgroup>
<col style="width: 35%" />
<col style="width: 11%" />
<col style="width: 52%" />
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
<td><div class="line-block">=<code class="interpreted-text" role="ref">WRITE</code>(<code class="interpreted-text" role="ref">OUTBOXDATA</code>("Message","Kundenname"),<br />
SUBTREE(<code class="interpreted-text" role="ref">INBOXDATA</code>(,,"Kundenname")),"Dictionary")</div></td>
<td>Kundenname</td>
<td>Excerpts the items below "Kundenname" from the <code class="interpreted-text" role="ref">inbox</code> and copies them to a message in the outbox. All child elements are copied as well.</td>
</tr>
<tr class="even">
<td>=SUBTREE(<code class="interpreted-text" role="ref">INBOXDATA</code>(,,"Kundenname"), TRUE)</td>
<td>{ "Kundenname": {content of element Kundenname} }</td>
<td>Extracts items below "Kundenname" from the inbox and retuns a JSON object with "Kundenname" property which contains those items.</td>
</tr>
</tbody>
</table>
