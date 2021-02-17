# KAFKA.PUBLISH

Publishes either a message or an arbitrary value using a specified
`Producer` and topic. To reference a message from the outbox use the
`outbox` function and to reference a message from the inbox use
`INBOX <inboxf>`. You can use the `Function Wizard <functionwizard>` for
this function.

**Syntax**

=`KAFKA`.PUBLISH(Producer, Message, Topic)

**Arguments**

| Name     | Description                                                                          |
|----------|--------------------------------------------------------------------------------------|
| Producer | Producer to use for publishing.                                                      |
| Message  | Either an existing message from the outbox a `JSON` or a primitive value to publish. |
| Topic    | Topic the message is published to.                                                   |

**Return Value**

TRUE, if successful.

**Examples**

| Function                                            | Result | Comment                                                                                  |
|-----------------------------------------------------|--------|------------------------------------------------------------------------------------------|
| =KAFKA.PUBLISH("Kafka Producer", "Message", "test") | TRUE   | This publishes the string value "Message" using the "Kafka Producer" to the topic "test" |
