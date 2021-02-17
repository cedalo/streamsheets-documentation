# DICTIONARY

Creates a `JSON` Object using the given keys and values.

**Syntax**

DICTIONARY(Range\[, Horizontal\])

**Arguments**

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 80%" />
</colgroup>
<thead>
<tr class="header">
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Range</td>
<td><div class="line-block">Range providing the source data, that will be used for the JSON.<br />
The left or top cells will feed the keys and the bottom or right the values.</div></td>
</tr>
<tr class="even">
<td>Horizontal</td>
<td>Optional. FALSE, if keys are aligned vertical (Default), TRUE if horizontal.</td>
</tr>
</tbody>
</table>

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
<td><div class="line-block">=<code class="interpreted-text" role="ref">WRITE</code>(<code class="interpreted-text" role="ref">OUTBOXDATA</code>("Message", "NewItem"), DICTIONARY(<span class="blue">A2:B5</span>), "Dictionary")<br />
<br />
</div></td>
<td><p>Appending an object to a message. The message content will look as follows</p>
<blockquote>
<div class="line-block"><img src="/images/DICTIONARY2.PNG" alt="DICTIONARY2" /></div>
</blockquote></td>
</tr>
<tr class="even">
<td><div class="line-block">=<code class="interpreted-text" role="ref">WRITE</code>(<code class="interpreted-text" role="ref">OUTBOXDATA</code>("Message", "NewItem"), DICTIONARY(<span class="blue">A2:B5</span>), "Dictionary"<br />
<br />
<img src="/images/DICTIONARY3.PNG" alt="DICTIONARY3" /></div></td>
<td><div class="line-block">Adding a table with the dictionary function to the outbox.<br />
<br />
<img src="/images/DICTIONARY4.PNG" alt="DICTIONARY4" /></div></td>
</tr>
</tbody>
</table>
