# SUBTREE

Extracts a sub tree from the current message.

**Syntax**

=SUBTREE(TopElement\[, IncludeElementKey\])

**Arguments**

| Name              | Description                                                                                     |
|-------------------|-------------------------------------------------------------------------------------------------|
| TopElement        | Path to the parent element from where to extract the sub tree.                                  |
| IncludeElementKey | Optional flag which indicates if key of requested element should be included. Default is FALSE. |

**Return Value**

The return value contains the `JSON` Object and is only usable within
other functions. See sample below.

**Example**

| Function                                                                                          | Result                                            | Comment                                                                                                                                   |
|---------------------------------------------------------------------------------------------------|---------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| =`WRITE`(`OUTBOXDATA`("Message","Kundenname"), SUBTREE(`INBOXDATA`(,,"Kundenname")),"Dictionary") | Kundenname                                        | Excerpts the items below "Kundenname" from the `inbox` and copies them to a message in the outbox. All child elements are copied as well. |
| =SUBTREE(`INBOXDATA`(,,"Kundenname"), TRUE)                                                       | { "Kundenname": {content of element Kundenname} } | Extracts items below "Kundenname" from the inbox and retuns a JSON object with "Kundenname" property which contains those items.          |
