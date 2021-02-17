# OPCUA.VARIABLES

![star](/images/star.svg) This is a [Streamsheets
Professional](https://cedalo.com/download/) feature.

Creates variables on an `OPC UA` Server. You are able to create singel
or multiple variables and if needed arrange them in a folder structure.
Click `here<opcuafunctions>` for a more detailed tutorial on opcua
functions.

> <div class="note">
>
> <div class="title">
>
> Note
>
> </div>
>
> Before using OPCUA.VARIABLES() enable OPCUA Server in Stream Machine
> settings. Only one OPCUA.VARIABLES() per Streamsheet possible. Always
> use a parent element in the OPCUA.JSON() Range.
>
> </div>

**Syntax**

=OPCUA.VARIABLES(Range)

**Arguments**

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 80%" />
</colgroup>
<thead>
<tr class="header">
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Range</td>
<td><div class="line-block">An OPCUA.<code class="interpreted-text" role="term">JSON</code> range covering the variables and folders, which should be hosted by the OPCUA Server.<br />
OPCUA Variables have the following parameters (2 optional): key, value, [datatype, typedefinition].<br />
Datatype example: "String", "Int32" etc.<br />
Typedefinition example: "folder" "variable" etc.</div></td>
</tr>
</tbody>
</table>

**Return Value**

The OPCUA.VARIABLES function always switch to blue, if the inserted
range is accepted. Otherwise to red with an `error code <error>`.

**Examples**

| Function                           | Result | Comment                                                                                                                                                                                                                            |
|------------------------------------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| =OPCUA.VARIABLES(OPCUA.JSON(A1:B7) | "TRUE" | The two rows are needed to define the variable name and its value. The amount of columns is flexible, depending on the amount and structure of the variables needed. The Range will automatically assume a structure and settings. |
