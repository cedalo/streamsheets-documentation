GETCYCLETIME
-----------------------------

Returns the current cycle time. The Cycle Time
is an overall setting in an :term:`App <App>` that applies to each Streamsheet within the App.
It generally defines how long the system pauses between calculation cycles (in ms).

**Syntax**

=GETCYCLETIME()

**Arguments**

None.

**Return Value**

Current cycle time in milliseconds.

**Example**

.. list-table::
   :widths: 45 10 45
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =GETCYCLETIME()
     - 1000
     - The App is calculating every second.

