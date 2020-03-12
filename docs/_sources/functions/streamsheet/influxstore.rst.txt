INFLUX.STORE
---------------------------

.. |star| image:: /images/star.svg
        

|star| This is a `Streamsheets Professional <https://cedalo.com/download/>`_ feature.

Performs a STORE query on your Influx database. You can use the :ref:`Function Wizard <functionwizard>` for this function. 


**Syntax**

=\ :term:`INFLUX`\ .STORE(:term:`Producer`, Measurement, Values-JSON [, Tags-JSON, Target, Duration, Timeout])

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - Producer
     - Producer to use for querying. The database name is configured in the affiliated :term:`Connector`.
   * - Measurement
     - Name of the measurement to store values to. Note: its fully qualified name will be written to target range, if provided.
   * - Values
     - A JSON with key/value pairs to store.
   * - Tags
     - Optional.A JSON with key/value pairs to tag stored values.
   * - Target
     - Optional. Defines a cell range to show the query result (key/value-pairs). Currently only the fully qualified measurement name is returned.
   * - Duration
     - Optional. Defines how long stored values should be kept. Duration is a number plus a time unit. Valid units are  "ms" for milliseconds, "s" for second, "m" for minute, "h" for hour, "d" for day and "w" for week. To specifiy infinity use "INF". Defaults to 1h.
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
   * - =INFLUX.STORE("Producer", "measures", { v1: "hello" },,D1:E1)
     - TRUE
     - Stores "hello" under v1 to "measures". Its fully qualified name ("1h.measures") will be written to cell E1.
