.. _kafkapublish:

KAFKA.PUBLISH
-----------------------------

        


Publishes either a message or an arbitrary value using a specifiedbProducer and topic. To reference a message from the
outbox use the outbox function and to reference a message from the inbox use INBOX. You can use the Function Wizard for this function. 


**Syntax**

=KAFKA.PUBLISH(Producer, Message, Topic)

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - Producer
     - Producer to use for publishing.
   * - Message
     - Either an existing message from the outbox a :term:`JSON` or a primitive value to publish.
   * - Topic
     - Topic the message is published to.

**Return Value**

TRUE, if successful.

**Examples**

.. list-table::
   :widths: 45 15 40
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =KAFKA.PUBLISH("Kafka Producer", "Message", "test")
     - TRUE
     - This publishes the string value "Message" using the "Kafka Producer" to the topic "test"
