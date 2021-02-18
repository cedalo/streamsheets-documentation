# MATCH

Returns a relative position number of a matching cell inside a specified
cell range.

**Syntax**

=MATCH(Value, SearchRange \[, Type\])

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
<td>value</td>
<td>Value to search for.</td>
</tr>
<tr class="even">
<td>SearchRange</td>
<td>A cell range to search in.</td>
</tr>
<tr class="odd">
<td><p>Type</p></td>
<td><p>Optional. Search type with the following options:</p>
<p>1: (Default) Find the largest value in cell range which is less than or equal to specified value. Table must be in ascending order. 0: Find the first value which match exactly specified value. Here the wildcards ? and * are supported. -1: Find the smallest value in cell range which is greater or equal to specified value. Table must be in descending order.</p></td>
</tr>
</tbody>
</table>

**Return Value**

Returns relative position of in cell-range for given value or
`#NA <error>` if no match is found.

**Example**

<table>
<colgroup>
<col style="width: 45%" />
<col style="width: 10%" />
<col style="width: 45%" />
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
<td><ol type="1">
<li>=MATCH(4,<span class="red">B2:B4</span>, 0)</li>
<li>=MATCH(2,<span class="blue">A2:B2</span>, 0)</li>
</ol>
<p><img src="/images/MATCH.PNG" alt="MATCH" /></p></td>
<td><ol type="1">
<li>--&gt; 2</li>
<li>--&gt; 1</li>
</ol></td>
<td><p>The index of the cell with the searched value is returned.</p></td>
</tr>
</tbody>
</table>
