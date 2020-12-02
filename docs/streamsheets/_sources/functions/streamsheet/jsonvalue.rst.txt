.. _JSON.VALUE:

JSON.VALUE
-----------------------------

Returns a value from a JSON object. The value to return corresponds to the path specified by given keys.

**Syntax**

=JSON.VALUE(JSON, Key1, Key2, ...)

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - JSON
     - A JSON object to read value from.
   * - Key1...KeyN
     - A list of keys which build up a path within given JSON object.

**Return Value**

The value at specified path or an error if no JSON object is passed or path is invalid.


**Example**
Below examples assumes following text in A1: {"Customer": {"Name": "Peter", "Kids": ["Paul", "Mary"]}}

.. list-table::
   :widths: 40 10 50
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =JSON.VALUE(JSON(A1),"Customer","Name")
     - Peter
     - Value at Customer.Name
   * - =JSON.VALUE(JSON(A1),"Customer","Kids", 1)
     - Mary
     - Value at Customer.Kids[1]
   * - =JSON.VALUE(JSON(A1),"Customer","Kids", "Name")
     - #NA
     - Invalid json path
   