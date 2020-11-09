.. _opcuavariables:

OPCUA.VARIABLES
-----------------------------

.. |star| image:: /images/star.svg
        

|star| This is a `Streamsheets Professional <https://cedalo.com/download/>`_ feature.

Creates variables on an :term:`OPC UA` Server. You are able to create singel or multiple variables and if needed arrange them in a folder structure.
Click :ref:`here<opcuafunctions>` for a more detailed tutorial on opcua functions. 
 
 .. note:: Before using OPCUA.VARIABLES() enable OPCUA Server in Stream Machine settings. Only one OPCUA.VARIABLES() per Streamsheet possible. Always use a parent element in the OPCUA.JSON() Range.

**Syntax**

=OPCUA.VARIABLES(Range)

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - Range
     - | An OPCUA.\ :term:`JSON` range covering the variables and folders, which should be hosted by the OPCUA Server.
       | OPCUA Variables have the following parameters (2 optional): key, value, [datatype, typedefinition].
       | Datatype example: "String", "Int32" etc.
       | Typedefinition example: "folder" "variable" etc.


   

**Return Value**

The OPCUA.VARIABLES function always switch to blue, if the inserted range is accepted. Otherwise to red with an :ref:`error code <error>`.

**Examples**

.. list-table::
   :widths: 45 15 40
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =OPCUA.VARIABLES(OPCUA.JSON(A1:B7)
     - "TRUE"
     - The two rows are needed to define the variable name and its value. The amount of columns is flexible, depending on the amount and structure of the variables needed. The Range will automatically assume a structure and settings.