.. _openurl:

OPENURL
-----------------------------

Opens any given URL. The given URL needs to start with http/https

.. Note:: OPENURL only works in an :ref:`Event<events>`


**Syntax**

OPENURL(URL,TAB)

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - URL
     - URL to open
   * - TAB
     - TRUE or FALSE. Decides if URL will be opened in new TAB or same TAB. Default = TRUE.

**Return Value**

TRUE

**Example**

.. list-table::
   :widths: 45 10 45
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - OPENURL("https://cedalo.com/")
     - TRUE
     - Opens the cedalo.com page in another Tab.