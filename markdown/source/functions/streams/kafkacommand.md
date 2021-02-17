# KAFKA.COMMAND

Allows KSQL commands to be used. You can use the
`Function Wizard <functionwizard>` for this function.

**Syntax**

=`KAFKA`.COMMAND(`Producer`, Command, Target \[, Timeout\])

**Arguments**

| Name     | Description                                                                                                       |
|----------|-------------------------------------------------------------------------------------------------------------------|
| Producer | Producer to use.                                                                                                  |
| Command  | Any command allowed in KSQL table.                                                                                |
| Target   | Target to show the result of the command operation. Can be either `INBOX <inboxf>`(), `OUTBOX`() or a cell range. |
| Timeout  | Optional. The time to wait for an answer. When left empty a 20 second timeout is being used.                      |

**Return Value**

TRUE, if successful.

**Examples**

| Function                                                                                                                                                                             | Result | Comment                                                  |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|----------------------------------------------------------|
| =KAFKA.COMMAND("Kafka Producer", "CREATE TABLE ksqltable201 (random BIGINT, type VARCHAR) WITH (kafka\_topic='cedalo', value\_format='`JSON`', key = 'random')", `INBOX <inboxf>`()) | TRUE   | A KSQL table will be created with the name ksqltable201. |
