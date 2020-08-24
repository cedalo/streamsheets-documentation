.. _outboxmetadata:

OUTBOXMETADATA
-----------------------------

Creates a :term:`JSON` key from the given values or range to retrieve metadata from within a message. This function is
normally used in the :ref:`READ` function. OUTBOXMETADATA retrieves values from the Metadata section of an outbox message.

**Syntax**

=OUTBOXMETADATA(MessageID, ValuesOrRange)

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - MessageID
     - ID of the message to retrieve data from. If left empty, the current message in the inbox is used.
   * - ValuesOrRange
     - Optional. A list of values or a range of cells describing the path to the element path within a JSON structure.

**Return Value**

A string key to retrieve metadata from a message.

**Example**

.. list-table::
   :widths: 45 10 45
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =OUTBOXMETADATA("out1", "arrivalTime")
     - [out1][arrivalTime]
     - Returns an identifier that can be used in other Streamsheet functions like :ref:`READ`.
   * - =\ :ref:`READ`\ (OUTBOXMETADATA("out1","arrivalTime"),C11,"Number")
     - arrivalTime
     - The READ function returns the last part of the JSON Path. The value of the Message at the given path will be
       pushed into cell C11. Here we retrieve the arrival time of a message, which is a default Metadata field added
       to each message.


