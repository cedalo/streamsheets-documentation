.. _outbox:

OUTBOX
-----------------------------

Creates a key to reference an outbox message. This key is used in functions like :ref:`DELETE` to identify messages
inside an outbox.

**Syntax**

=OUTBOX(Message)

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - Message
     - Optional. ID of Message to identify. If left empty, the current message in the outbox is used.

**Return Value**

A key to identify message.

**Example**

.. list-table::
   :widths: 45 15 40
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =OUTBOX("Message")
     - [Message]
     - Returns an identifier that can be used in other Streamsheet functions like :ref:`DELETE`.


