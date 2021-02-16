# WRITE

Adds the key and value to a `JSON`{.interpreted-text role="term"} object
in the outbox. The path to the key will be created as needed.

**Syntax**

=WRITE(Key, Value, Type, TTL)

**Arguments**

  -----------------------------------------------------------------------
  Name           Description
  -------------- --------------------------------------------------------
  Key            A key to a data item, that should be written. The key is
                 usually created by using the
                 `OUTBOXMETADATA`{.interpreted-text role="ref"} or
                 `OUTBOXDATA`{.interpreted-text role="ref"} utility
                 functions. The key consists of the path to the item
                 within the JSON object.

  Value          Value to assign to key.

  Type           Optional. Type of Value. Allowed types are String,
                 Number, Boolean, Array, Dictionary. The type defines the
                 color of the cell.

  TTL            Optional. The \"time to live\" period in seconds. If the
                 specified period expires the corresponding message will
                 be removed from the outbox. Default is indefinit.
  -----------------------------------------------------------------------

**Return Value**

The last part of the key of the data value to write.

**Example**

+---------------------------+------------------------+-----------------+
| Function                  | Result                 | Comment         |
+===========================+========================+=================+
| | =WRITE(`OUTB            | | Outbox Message:      | | Example to    |
| OXDATA`{.interpreted-text | |                      |   write a value |
|   role="ref"}(            |                        |   to a JSON     |
| \"Message\",\"Customer\", |                        |   object in the |
|   \"Name\"), \"Maier\",   |                        |   outbox.       |
|   \"String\")             |                        |                 |
+---------------------------+------------------------+-----------------+
| | =WRITE(`OUTB            | | Outbox Message:      | You can also    |
| OXDATA`{.interpreted-text | | ![ArrayOut]          | direct data     |
|   role="ref"}(\"          | (/images/ArrayOut.PNG) | from the Inbox  |
| Message\",\"Units\"),READ |                        | into the        |
| (INBOXDATA(,,\"Units\"))) |                        | Outbox. In this |
| | Inbox Message:          |                        | example the     |
| | ![Arra                  |                        | \"Units\" array |
| yIn](/images/ArrayIn.PNG) |                        | from the Inbox  |
|                           |                        | is              |
|                           |                        | automatically   |
|                           |                        | transfered to   |
|                           |                        | the Outbox.     |
+---------------------------+------------------------+-----------------+
| | =WRITE(OUT              | | ![inc](              | | Pro tipp: If  |
| BOXDATA(\"Message\",\"Out | /images/increment.PNG) |   you want to   |
| put\",-1),JSON(J22:K24),) |                        |   automatically |
|                           |                        |   create an     |
|                           |                        |   array, use -1 |
|                           |                        |   as the last   |
|                           |                        |   OUTBOXDATA()  |
|                           |                        |   parameter.    |
|                           |                        |   This way the  |
|                           |                        |   array will    |
|                           |                        |   increment     |
|                           |                        |   starting from |
|                           |                        |   0.            |
+---------------------------+------------------------+-----------------+
