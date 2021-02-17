# KAFKA.QUERY

Allows KSQL queries to be used. You can use the
`Function Wizard <functionwizard>` for this function.

**Syntax**

=`KAFKA`.QUERY(`Producer`, Query, Target \[, Timeout\])

**Arguments**

| Name     | Description                                                                                                     |
|----------|-----------------------------------------------------------------------------------------------------------------|
| Producer | Producer to use.                                                                                                |
| Query    | Any query allowed on a KSQL table.                                                                              |
| Target   | Target to show the result of the query operation. Can be either `INBOX <inboxf>`(), `OUTBOX`() or a cell range. |
| Timeout  | Optional. The time to wait for an answer. When left empty a 20 second timeout is being used.                    |

**Return Value**

TRUE, if successful.

**Examples**

| Function                                                                          | Result | Comment                                                           |
|-----------------------------------------------------------------------------------|--------|-------------------------------------------------------------------|
| =KAFKA.Query("Kafka Producer", "select \* from ksqltable200", `INBOX <inboxf>`()) | TRUE   | The complete data from ksqltable200 will be shown in the `inbox`. |
