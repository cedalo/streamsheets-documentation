.. _getmachinestep:

GETMACHINESTEP
-----------------------------

Returns the current step.

The machine step is increased either on each machine cycle, i.e. when a machine runs, or on each manually triggered step,
i.e. if an :term:`App <App>` is stopped or paused. To get the steps for a Streamsheet refer to :ref:`getstep`.

**Syntax**

=GETMACHINESTEP()

**Arguments**

None.

**Return Value**

Current step.

**Example**

.. list-table::
   :widths: 45 10
   :header-rows: 1

   * - Function
     - Result
   * - =GETMACHINESTEP()
     - 1
