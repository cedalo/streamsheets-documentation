# STACKUPSERT

The STACKUPSERT function is like a combination of `stackadd` and
`stackfind`, i.e. it can add and update matching cell values from a
given SourceRange. Like STACKADD cell values are copied from SourceRange
to a specified StackRange if they are not already contained, otherwise
they are updated. Anaolog to STACKFIND, a CriteriaRange is used to
determine the cell values to copy or update. Updating is done either by
replacing the cell value or by using a simple text based arithmetic
rule, like "+1" or by specifing an arbitrary formula.

**Syntax**

=STACKUPSERT(StackRange, SourceRange, CriteriaRange \[, AddIfNotFound,
Direction, Unique, TargetRange\])

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
<td>StackRange</td>
<td><div class="line-block">Cell range, to copy SourceRange cells to or to update matching cells. The first row of the StackRange always contains the cell labels and remains unchanged.</div></td>
</tr>
<tr class="even">
<td>SourceRange</td>
<td><div class="line-block">Cell range, where the source data or update rules are taken from. Analog to StackRange the first row contains the cell labels and remains unchanged.</div></td>
</tr>
<tr class="odd">
<td>CriteriaRange</td>
<td><div class="line-block">The CriteriaRange has at least 2 rows, the first one is the labels row with labels also found in StackRange and SourceRange (not necessarily all and maybe not in the same order!), the second to nth row contain filter settings.<br />
Note: criteria values can start with a comparison-operator like, &gt;, &gt;=, &lt;, &lt;=, = or &lt;&gt;<br />
Settings in the same row are combined using AND, multiple rows are OR.</div></td>
</tr>
<tr class="even">
<td>AddIfNotFound</td>
<td><div class="line-block">Optional. If a matching source row is not found in StackRange it will be added. Specify FALSE to prevent this behaviour.<br />
Defaults to TRUE.</div></td>
</tr>
<tr class="odd">
<td>Direction</td>
<td><div class="line-block">Optional. If you set Direction to TRUE the new data is added behind the last empty row on the StackRange.<br />
If the StackRange is full, the first row (after the columns row) is dropped from the stack and all rows move up to make room for the new data in the last row. Analog, if Direction is set to FALSE rows are added at top of the stack and dropped from the bottom.<br />
By default Direction is TRUE.</div></td>
</tr>
<tr class="even">
<td>Unique</td>
<td><div class="line-block">Optional. If set to TRUE equal rows are updated or added only once to StackRange. Two rows are equal if they have same value in each column.<br />
Unique defaults to FALSE.</div></td>
</tr>
<tr class="odd">
<td>TargetRange</td>
<td><div class="line-block">Optional. If TargetRange is specified and if a row has to be dropped, the row is copied to the TargetRange.<br />
TargetRange must have two rows, the first row has labels also found in StackRange (not necessarily all and maybe not in the same order!). The dropped values are copied to the matching columns in the TargetRange. If no row is dropped, the values in the second row of TargetRange are blanked out.<br />
<strong>Important:</strong> Before copying to the TargetRange all existing values in TargetRange are deleted (not the labels row!)</div></td>
</tr>
</tbody>
</table>

**Update Rules**

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 80%" />
</colgroup>
<thead>
<tr class="header">
<th>Function</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>+</td>
<td><div class="line-block">Add specified number to current value in matching StackRange cell</div></td>
</tr>
<tr class="even">
<td>-</td>
<td><div class="line-block">Subtract specified number from current value in matching StackRange cell</div></td>
</tr>
<tr class="odd">
<td>=</td>
<td><div class="line-block">Specifies initial value of matching StackRange cell. Applied only on first add.</div></td>
</tr>
<tr class="even">
<td>formula</td>
<td><div class="line-block">its also possible to use any sheet formula to update matching StackRange cell.<br />
<strong>Note:</strong> if formula references cells from SourceRange which uses text arithmetic it is fully ok if formula returns an error value.</div></td>
</tr>
</tbody>
</table>

**Return Value**

TRUE, if no error occurred, otherwise an `error <error>` value.

**Example** Below examples assumes following SourceRange:

|     | A          | B        | C     | D    | E                     |
|-----|------------|----------|-------|------|-----------------------|
| 4   | ItemNumber | Quantity | Price | VAT  | Total                 |
| 5   | 1234       | +1       | =23   | 0.19 | =B5 \* C5 \* (1 + D5) |

<table>
<colgroup>
<col style="width: 30%" />
<col style="width: 70%" />
</colgroup>
<thead>
<tr class="header">
<th>Function</th>
<th>Result</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>=STACKUPSERT(A1:E3,A5:E5,A4:A5)</td>
<td><div class="line-block">After calling STACKUPSERT the first time the row in A1 will contains following values:<br />
1234, 1, 23, 0.19, 27.37<br />
i.e. Quantity is initialized with 1 and Price with 23 and the Total value is 27.37 which was calculated by specified formula.</div></td>
</tr>
<tr class="even">
<td>=STACKUPSERT(A1:E3,A5:E5,A4:A5)</td>
<td><div class="line-block">Calling STACKUPSERT again will update the row in A1 to following values:<br />
1234, 2, 23, 0.19, 54.74<br />
i.e. +1 is used to update Quantity. The Price remains unchanged since it already exists. And again the Total value is calculated by a formula and results to 54.74.</div></td>
</tr>
</tbody>
</table>
