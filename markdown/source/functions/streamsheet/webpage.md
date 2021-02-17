# WEBPAGE

Creates a webpage at the given URL. This uses a special REST feeder
internally.

**Syntax**

=WEBPAGE(URL, HTML, Refresh)

**Arguments**

| Name    | Description                                                                        |
|---------|------------------------------------------------------------------------------------|
| URL     | A URL suffix which is appended to the base url provided by internally used feeder. |
| HTML    | A String which defines the webpage to create.                                      |
| Refresh | The http refresh rate in seconds                                                   |

**Return Value**

TRUE on success or error code otherwise.

**Example**

We assume that the used REST feeder provides following base URL:
`https://dev.cedalo.com/rest/v1.0/webpages`

<table>
<colgroup>
<col style="width: 80%" />
<col style="width: 5%" />
<col style="width: 15%" />
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
<td><div class="line-block">=WEBPAGE("test1/test2",<br />
"&lt;html&gt;&lt;body&gt;<br />
&lt;h1&gt;HELLO&lt;/h1&gt;<br />
&lt;/body&gt;&lt;/html&gt;", 5)</div></td>
<td>TRUE</td>
<td><div class="line-block">Creates a webpage with a single <em>HELLO</em> title.<br />
The webpage is accessable at: <code>https://dev.cedalo.com/rest/v1.0/webpages/test1/test2</code></div></td>
</tr>
</tbody>
</table>
