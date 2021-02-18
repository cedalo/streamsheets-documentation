.. _httprespond:
.. |REST.RESPOND| image:: /images/REST.RESPOND.PNG
        :scale: 60%
.. role:: blue

.. |star| image:: /images/star.svg
    :scale: 50%


HTTP.RESPOND
-----------------------------

|star| This is a `Streamsheets Premium <https://cedalo.com/download/>`_ feature.

Sends either arbitrary :term:`JSON` data or a message from the outbox to specified Producer. Usually this function is used to
respond to a previously received *request*-message. You can use the Function Wizard for this function. 


**Syntax**

=HTTP.RESPOND(Consumer, RequestId, Body, [StatusCode, Headers])

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - Consumer
     - Name of the Consumer to use for sending respond.
   * - RequestId
     - The *requestId* as provided by a previously received *request*-message
   * - Body
     - Data to send as response.
   * - StatusCode
     - Optional. Defaults to 200. HTTP status code of the response.
   * - Headers
     - Optional. Headers of the response.


**Return Value**

TRUE on success or error code otherwise.

**Example**

We assume that a *request*-message was received and that it provides a *requestId* which we store to cell B1 by using
the read function as follows: ``READ(INBOXMETADATA(,,"requestId"), B1, "String")``

.. list-table::
   :widths: 50 10 40
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =HTTP.RESPOND("Rest", B1, DICTIONARY(A3:C5))
     - TRUE
     - Sends the JSON data provided by the dictionary function to the Consumer named *Rest* using the *requestId* in B1
   * - =HTTP.RESPOND("Rest", B1, "Not Found", 404,\ A2:B2)        |REST.RESPOND|
     - TRUE
     - Responds to the request corresponding to *requestId* with the body "Not Found", status code "404" and the header "Content-Type: text/plain".

