# EXECUTE

Triggers the recalculation of another `Streamsheet`. The executed Sheet
will only be executed if Streamsheet settings of executed Sheet allow
execution. Calculate Streamsheet "On Execute".

**Syntax**

=EXECUTE(Streamsheet \[, Repeat, `JSON`, Selector\])

**Arguments**

| Name        | Description                                                                                                       |
|-------------|-------------------------------------------------------------------------------------------------------------------|
| Streamsheet | Name of Streamsheet to trigger. (Put the name of the Streamsheet in quotes e.g. "S1")                             |
| Repeat      | Optional. Number of repetitions. If larger than 1 (Default), the execute function will be executed multiple times |
| JSON        | Optional. JSON to use as message data to process, when executing.                                                 |
| Selector    | Optional. Selector to use when selecting a message from the inbox for processing.                                 |

**Return Value**

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Return FALSE</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><div class="line-block"><strong>IF executed Sheet:</strong><br />
<strong>1.</strong> Streamsheetsettings "Repeat calculation endlessly until =<code class="interpreted-text" role="ref">RETURN</code>() is executed" is not checked and<br />
<strong>2.</strong> There is no new message in the <code class="interpreted-text" role="ref">INBOX</code>.</div></td>
</tr>
<tr class="even">
<td><div class="line-block"><strong>IF executed Sheet:</strong><br />
<strong>1.</strong> Streamsheetsettings "Repeat calculation endlessly until =<code class="interpreted-text" role="ref">RETURN</code>() is executed" is checked and<br />
<strong>2.</strong> RETURN(FALSE) was calculated in executed Sheet.</div></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Return TRUE</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><div class="line-block"><strong>IF executed Sheet:</strong><br />
<strong>1.</strong> Streamsheetsettings "Repeat calculation endlessly until =<code class="interpreted-text" role="ref">RETURN</code>() is executed" is not checked.<br />
<strong>2.</strong> There is a new message in the INBOX.</div></td>
</tr>
<tr class="even">
<td><div class="line-block"><strong>IF executed Sheet:</strong><br />
<strong>1.</strong> Streamsheetsettings "Repeat calculation endlessly until =<code class="interpreted-text" role="ref">RETURN</code>() is executed" is checked and<br />
<strong>2.</strong> RETURN(TRUE) was calculated in executed Sheet.</div></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Return #NA. The Stream Sheet is paused until a value is returned.</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><div class="line-block"><strong>IF executed Sheet:</strong><br />
<strong>1.</strong> Streamsheetsettings "Repeat calculation endlessly until =<code class="interpreted-text" role="ref">RETURN</code>() is executed" is checked.<br />
<strong>2.</strong> no return value is generated<br />
<br />
To get a return the executed sheet needs to calculate a=<code class="interpreted-text" role="ref">RETURN</code>() function.</div></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Return #INVALID_PARAM_1.</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><div class="line-block"><strong>IF executed Sheet:</strong><br />
is not set to calculcate on execute.</div></td>
</tr>
</tbody>
</table>

**NOTE:** if the execution of the triggered StreamSheet is stopped via
the `return` function, its result is returned instead.

**Example**

| Function       | Result | Comment                                                        |
|----------------|--------|----------------------------------------------------------------|
| =EXECUTE("S2") | TRUE   | Triggers the calculation of a second Streamsheet, called "S2". |
