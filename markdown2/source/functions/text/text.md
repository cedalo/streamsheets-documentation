# TEXT

Formats a number and converts it to text.

**Syntax**

=TEXT(Number,FormatString,\[Locale\])

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
<td>Number</td>
<td>A number value to format and convert.</td>
</tr>
<tr class="even">
<td><p>FormatString</p></td>
<td><p>A format string. Example format strings are:</p>
<p>"$#,##.00" currency with a thousands separator and 2 decimals "MM/DD/YY" Date in format month/day/year, like 03/14/18 "DDDD" Day of week, like Monday "H:MM AM/PM" time, like 1:29 PM "0.0%" percentage, like 28.5% "# ?/?" fraction, like 4 1/3 "0.00E+00" scientific notation, like 1.22E+07 "0000000" add leading zeros, like 0001234</p></td>
</tr>
<tr class="odd">
<td>Locale</td>
<td>Optional. An locale code. Currently only “en” and “de” are supported. Defaults to current App locale.</td>
</tr>
</tbody>
</table>

**Return Value**

A formatted string representation of given number value.

**Example**

| Function                   | Result                                                 |
|----------------------------|--------------------------------------------------------|
| =TEXT(3456, "\#,\#\#0.00") | 3,456.00 (assuming the App language is set to english) |
