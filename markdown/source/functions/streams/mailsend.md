# MAIL.SEND

Send a mail using the given `producer` and parameters. You can use the
`Function Wizard <functionwizard>` for this function.

**Syntax**

=MAIL.SEND(Producer, Message, Subject, TO, CC, BCC, Attachments )

**Arguments**

| Name        | Description                                    |
|-------------|------------------------------------------------|
| Producer    | Mail Producer to use for sending mail.         |
| Message     | Simple text used as content of the mail        |
| Subject     | Simple text                                    |
| TO          | Single mail address or range of mail adresses. |
| CC          | Single mail address or range of mail adresses. |
| BCC         | Single mail address or range of mail adresses. |
| Attachments | Range of Attachments, see example below.       |

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
<td>=MAIL.SEND("Mail Produer", "Message", "Subject", "<a href="mailto:user@example.org">user@example.org</a>")</td>
<td>TRUE</td>
<td>Send a mail with the content "Message" and the subject "Subject" to "<a href="mailto:user@example.org">user@example.org</a>" using the "Mail Producer"</td>
</tr>
<tr class="even">
<td>=MAIL.SEND("Mail Producer", "Message", "Subject", A1:B2, "<a href="mailto:user2@example.org">user2@example.org</a>", "<a href="mailto:user3@example.org">user3@example.org</a>")</td>
<td>TRUE</td>
<td>Send a mail with the content "Message" and the subject "Subject" to all mail addresses in the A1:B2 range and with "<a href="mailto:user2@example.org">user2@example.org</a>" in CC and "<a href="mailto:user3@example.org">user3@example.org</a>" in BCC using the "Mail Producer".</td>
</tr>
<tr class="odd">
<td><p>=MAIL.SEND("Mail Prodcuer", "Message", "Subject", "<a href="mailto:user@example.org">user@example.org</a>", , , <span class="blue">A3:D4</span>)</p>
<div class="line-block"></div></td>
<td><p>TRUE</p></td>
<td><p>Send a mail with two attachments. The first attachment is text file name "file.txt" with "A text" as content. The second attachment is an image named "image.jpeg" with the base64 value of the image as content. The encoding defaults to "utf-8" and could be omitted for "file.txt". The "Content-Type" column is optional and not required in most cases since the Content-Type will be determined from the file extension.</p></td>
</tr>
</tbody>
</table>
