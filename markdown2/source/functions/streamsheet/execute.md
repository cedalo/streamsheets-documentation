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

| Return FALSE                                                                                                                                                                         |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **IF executed Sheet:** **1.** Streamsheetsettings "Repeat calculation endlessly until =`RETURN`() is executed" is not checked and **2.** There is no new message in the `INBOX`.     |
| **IF executed Sheet:** **1.** Streamsheetsettings "Repeat calculation endlessly until =`RETURN`() is executed" is checked and **2.** RETURN(FALSE) was calculated in executed Sheet. |

| Return TRUE                                                                                                                                                                         |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **IF executed Sheet:** **1.** Streamsheetsettings "Repeat calculation endlessly until =`RETURN`() is executed" is not checked. **2.** There is a new message in the INBOX.          |
| **IF executed Sheet:** **1.** Streamsheetsettings "Repeat calculation endlessly until =`RETURN`() is executed" is checked and **2.** RETURN(TRUE) was calculated in executed Sheet. |

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
<td><p><strong>IF executed Sheet:</strong> <strong>1.</strong> Streamsheetsettings "Repeat calculation endlessly until =<code class="interpreted-text" role="ref">RETURN</code>() is executed" is checked. <strong>2.</strong> no return value is generated</p>
<p>To get a return the executed sheet needs to calculate a=<code class="interpreted-text" role="ref">RETURN</code>() function.</p></td>
</tr>
</tbody>
</table>

| Return \#INVALID\_PARAM\_1.                                 |
|-------------------------------------------------------------|
| **IF executed Sheet:** is not set to calculcate on execute. |

**NOTE:** if the execution of the triggered StreamSheet is stopped via
the `return` function, its result is returned instead.

**Example**

| Function       | Result | Comment                                                        |
|----------------|--------|----------------------------------------------------------------|
| =EXECUTE("S2") | TRUE   | Triggers the calculation of a second Streamsheet, called "S2". |
