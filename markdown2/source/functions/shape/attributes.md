# ATTRIBUTES

Create an attribute description to assign attributes to a graphical
object.

**Syntax**

=ATTRIBUTES(Visible, Container, Clip, Selectable)

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
<td>Visible</td>
<td>Optional. Defines object as visible or not (Default: true). Be careful, using this flag, as a hidden item is not selectable any more and the function defining the object is not accessible any more. It is advised to use a reference to a cell assigning this flag to be able to make the object visible again.</td>
</tr>
<tr class="even">
<td><p>Container</p></td>
<td><p>Optional. This defines, if an object can contain other objects and how they are scaled:</p>
<p>'none': Object does not accept children from UI actions. 'top': Coordinates are scaled from top left and accepts child objects (default). 1000 units represent 1 cm. 'bottom': Coordinates are scaled from bottom left and accepts child objects. 1000 units represent 1 cm. 'scale': Coordinates range from 0 to 10000, where 0,0 is the top left corner and 10000,10000 the bottom right corner and accepts child objects.</p></td>
</tr>
<tr class="odd">
<td>Clip</td>
<td>Optional. Defines object to clip contained items, displaying or not displaying items, which reach out of the area of this object.</td>
</tr>
<tr class="even">
<td>Selectable</td>
<td>Optional. Defines object to be selectable or not. (Default: true). Be careful, using this flag, as a not selectable item is obviously not selectable any more and the function defining the object is not accessible any more. It is advised to use a reference to a cell assigning this flag to be able to reset the flag.</td>
</tr>
</tbody>
</table>

**Return Value**

JSON String to describe attributes.

**Example**

| Function                                                                           | Comment                        |
|------------------------------------------------------------------------------------|--------------------------------|
| =DRAW.RECTANGLE("ID1", "", "Rect1", 1000, 1000, 3000, 3000,,,ATTRIBUTES(FALSE))    | Hides the object.              |
| =DRAW.RECTANGLE("ID1", "", "Rect1", 1000, 1000, 3000, 3000,,,ATTRIBUTES(,,,FALSE)) | Makes the object unselectable. |
