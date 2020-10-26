TIMESCALE.SHOW_TABLES
---------------------------

.. |star| image:: /images/star.svg
        

|star| This is a `Streamsheets Professional <https://cedalo.com/download/>`_ feature.

Shows all table in the timescaledb. 

.. note::
    As of right now, the timescale functions work with the internal timescaledb. Leave the Producer parameter empty and the connection is setup. We are working on allowing further timescale connections.


**Syntax**

=TIMESCALE.SHOW_TABLES(Stream, Target)

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - Stream
     - Stream to use for querying. The database name is configured in the affiliated :term:`Connector`.
   * - Target
     - Defines the target displaying the response.
   
**Return Value**

TRUE, if successful.

**Examples**

.. list-table::
   :widths: 45 15 40
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =TIMESCALE.SHOW_TABLES("Producer", INBOX())
     - TRUE
     - The response of the query will be shown in the inbox of the Streamsheet. 
