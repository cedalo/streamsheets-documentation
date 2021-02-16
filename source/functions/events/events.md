# EVENTS

Assign a function, that will be executed, if a selected event occurs on
the object/shape. Add the EVENTS() function to a shape in the \"Events\"
parameter.

**Syntax**

=EVENTS(\[EventHandler1,EventHandler2,\...\])

**Arguments**

+-------------+--------------------------------------------------------+
| Name        | Description                                            |
+=============+========================================================+
| Event       | | Eventhandler defining the event and the action to be |
| Handler1..N |   executed. Valid handlers are:                        |
|             | |                                                      |
|             | | `onclick`{.interpreted-text role="ref"}              |
|             | | `ondoubleclick`{.interpreted-text role="ref"}        |
|             | | `onmousedown`{.interpreted-text role="ref"}          |
|             | | `onmouseup`{.interpreted-text role="ref"}            |
|             | | `onvaluechange`{.interpreted-text role="ref"}        |
+-------------+--------------------------------------------------------+

**Return Value**

TRUE.

**Example**

  -----------------------------------------------------------------------
  Function                                              Comment
  ----------------------------------------------------- -----------------
  =DRAW.RECTANGLE(\"ID1\", \"\", \"Rect1\", 1000, 1000, If the user
  3000, 3000,,,, EVENTS(ONCLICK(DELETECELLS(A1:C1)))    clicks on the
                                                        rectangle the
                                                        cell range A1:C1
                                                        will be deleted.

  -----------------------------------------------------------------------
