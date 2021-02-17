.. _array:
.. |ARRAY1| image:: /images/ARRAY1.PNG
        :scale: 40%
.. |ARRAY2| image:: /images/ARRAY2.PNG 
        :scale: 50%   
        :align: middle 

.. |nested| image:: /images/nested.PNG 

.. |nestedout| image:: /images/nestedout.PNG 


.. role:: blue 
.. role:: red

ARRAY
-----------------------------

This function can be used to efficiently add
array items to a message.
Creates a :term:`JSON` array entry using the given keys and values. If the range
has one row or column, one array entry for each cell is created. If
there are two columns or rows, a nested array (array containing a
subarray) will be created. Note that if both nest and flat parameters are set to true one can use :ref:`range` instead.

**Syntax**

=ARRAY(Range, [Nest], [Flat])

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - Range
     - Source Range to retrieve data from
   * - Nest
     - Optional. Direction on how to nest items, if range has more than one row or column. FALSE to nest by column and TRUE to nest by row. Default is TRUE.
   * - Flat
     - Optional. If this Argument is supplied (any value works!) the returned Array is always nested, even if only one row or column is specified.  If Argument is missing than the returned array is only nested if there are more than one row or column.




**Return Value**

Comma separated list of array items.

**Example**

.. list-table::
   :widths: 50 30 50
   :header-rows: 1

   * - Function
     - Outbox Result
     - Comment
   * -  =\ :ref:`WRITE`\ (:ref:`OUTBOXDATA`\ ("Message", "NewItem"),ARRAY(:blue:`A2:B5`, FALSE), "Array")
        with the following cell content:

        |ARRAY1|

     -  |ARRAY2|

     -  Appending an array to a message. Since Nest is set to FALSE, the array
        items are created by columns leading to two array entries. The two
        entries contain the elements from the rows top to bottom. The message content will look as follows
   * -  =\ :ref:`WRITE`\ (:ref:`OUTBOXDATA`\ ("Message","NewItem"),ARRAY(:blue:`A2:A5`,FALSE),"Array")
        =\ :ref:`WRITE`\ (:ref:`OUTBOXDATA`\ ("Message","NewItem2"),ARRAY(:red:`B2:B5`,FALSE,TRUE),"Array")

        |nested|

     - |nestedout|
     - Example usage of the nested parameter. 


.. tip::
      If you want to create an Outbox array step by step, you can use "-1" as last outboxdata path to automatically add a new array element to the existing outbox message. =WRITE(OUTBOXDATA("Message";"data";-1);JSON(B1:C5);)
      
        

      
        
       

