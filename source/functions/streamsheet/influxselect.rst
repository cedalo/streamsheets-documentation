INFLUX.SELECT
---------------------------

.. |star| image:: /images/star.svg
        

|star| This is a `Streamsheets Professional <https://cedalo.com/download/>`_ feature.

Performs a SELECT query on your Influx database. You can use the :ref:`Function Wizard <functionwizard>` for this function. 


**Syntax**

=\ :term:`INFLUX`\ .SELECT(:term:`Producer`, JSON [, Target, XValue, Timeout])

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - Producer
     - Producer to use for querying. The database name is configured in the affiliated :term:`Connector`.
   * - JSON
     - Defines a query using a :term:`JSON` cell range, which contains all clauses to build the SELECT query.
   * - Target
     - Optional. Defines a cell range to show the query result. Might not be necessary if result is visualized by a chart.
   * - XValue
     - Optional. Name of the value which should be used for the x-axis if result is visualized by a chart. Defaults to "time".
   * - Timeout
     - Optional. Defines Timeout to perform query. 

**Return Value**

TRUE, if successful.

**Examples**

.. list-table::
   :widths: 45 15 40
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =INFLUX.SELECT("Producer", :ref:`JSON`\ (A1:B2), D1:F20)
     - TRUE
     - Assuming passed JSON looks like { select: '*', from: 'measures' } this will return all values currently stored in measurement "measures" and writes them to cell range D1:F20.
