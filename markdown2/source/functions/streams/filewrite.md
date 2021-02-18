# FILE.WRITE

Write a given range as comma separeted values to a file. You can use the
`Function Wizard <functionwizard>` for this function. The mounted root
path is set in the .YML file. E.g.: <span
class="title-ref">C:rootfolder:/filefeeder</span> Add /filefeeder to the
"Root Directory" field in the Connector to connect it to the root
folder.

**Syntax**

=FILE.WRITE(`Producer`, Range, Filename, \[Directory, Mode, Separator\])

**Arguments**

| Name      | Description                                                                                                                                      |
|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| Producer  | File Producer to use for writing the file.                                                                                                       |
| Range     | The range to write to a file. Can also be a single value.                                                                                        |
| Filename  | Name of the file that is written.                                                                                                                |
| Directory | Optional. The directory of the file that is written. Defaults to the root directory of the File Producer.                                        |
| Mode      | Optional. Has to be "create" or "append". Defaults to "append". "create" replaces an existing file with the same name, "append" appends instead. |
| Separator | Optional. Separator to use when writing range to file. Defaults to ",".                                                                          |

**Return Value**

TRUE, if successful.

**Examples**

<table>
<colgroup>
<col style="width: 45%" />
<col style="width: 15%" />
<col style="width: 40%" />
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
<td>=FILE.WRITE("File Producer", "Message", "file.csv", "directory")</td>
<td>TRUE</td>
<td>Write the text "Message" to the file located at "{rootDirectory}/directory/file.csv" using the "File Producer"</td>
</tr>
<tr class="even">
<td><p>=FILE.WRITE("File Producer", A2:C3, "file.csv", ,"create", ";")</p>
<blockquote>
<p><img src="/images/FILE.WRITE.PNG" alt="FILE.WRITE" /></p>
</blockquote></td>
<td><p>TRUE</p></td>
<td><p>Writes the content of the range A2:C3 to the fiel located at "{rootDirectory}/file.csv" using ";" as separator and replacing an already existing file with the same name. The resulting content of the file is:</p>
<pre><code>Example1;Example2;Example3
Example4;Example5;Example6</code></pre></td>
</tr>
</tbody>
</table>
