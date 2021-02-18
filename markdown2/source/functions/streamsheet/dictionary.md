# DICTIONARY

Creates a `JSON` Object using the given keys and values.

**Syntax**

DICTIONARY(Range\[, Horizontal\])

**Arguments**

| Name       | Description                                                                                                                                   |
|------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| Range      | Range providing the source data, that will be used for the JSON. The left or top cells will feed the keys and the bottom or right the values. |
| Horizontal | Optional. FALSE, if keys are aligned vertical (Default), TRUE if horizontal.                                                                  |

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
<th>Result</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>=<code class="interpreted-text" role="ref">WRITE</code>(<code class="interpreted-text" role="ref">OUTBOXDATA</code>("Message", "NewItem"), DICTIONARY(<span class="blue">A2:B5</span>), "Dictionary")</p></td>
<td><p>Appending an object to a message. The message content will look as follows</p>
<blockquote>
<p><img src="/images/DICTIONARY2.PNG" alt="DICTIONARY2" /></p>
</blockquote></td>
</tr>
<tr class="even">
<td><p>=<code class="interpreted-text" role="ref">WRITE</code>(<code class="interpreted-text" role="ref">OUTBOXDATA</code>("Message", "NewItem"), DICTIONARY(<span class="blue">A2:B5</span>), "Dictionary"</p>
<p><img src="/images/DICTIONARY3.PNG" alt="DICTIONARY3" /></p></td>
<td><p>Adding a table with the dictionary function to the outbox.</p>
<p><img src="/images/DICTIONARY4.PNG" alt="DICTIONARY4" /></p></td>
</tr>
</tbody>
</table>
