.. _timescaleselect:


TIMESCALE.SELECT
---------------------------

.. |star| image:: /images/star.svg
        

|star| This is a `Streamsheets Premium <https://cedalo.com/download/>`_ feature.

Performs a SELECT query on your timescale database. 
Click :ref:`here<timescalefunctions>` for a more detailed tutorial on timemescaledb functions. 

.. note::
    As of right now, the timescale functions work with the internal timescaledb. Leave the Producer parameter empty and the connection is setup. We are working on allowing further timescale connections.


**Syntax**

=TIMESCALE.SELECT(Stream, SelectJSON [, Target, XValue,])

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - Stream
     - Stream to use for querying. The database name is configured in the affiliated :term:`Connector`.
   * - SelectJSON
     - Defines a query using a :term:`JSON` cell range, which contains all clauses to build the SELECT query.
   * - Target
     - Optional. Defines a cell range to show the query result. Might not be necessary if result is visualized by a chart.
   * - XValue
     - Optional. Name of the value which should be used for the x-axis if result is visualized by a chart. Defaults to "time".


**Return Value**

TRUE, if successful.

**Examples**

.. list-table::
   :widths: 45 15 40
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =TIMESCALE.SELECT("Producer", :ref:`JSON`\ (A1:B2), D1:F20)
     - TRUE
     - Assuming passed JSON looks like { select: '*', from: 'measures' } this will return all values currently stored in measurement "measures" and writes them to cell range D1:F20.
