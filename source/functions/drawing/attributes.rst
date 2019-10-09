.. _attributes:

ATTRIBUTES
----------

Create an attribute description to assign attributes to a graphical object.

**Syntax**

=ATTRIBUTES(Visible, Container, Clip, Selectable)

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - Visible
     - Optional. Defines object as visible or not (Default: true). Be careful, using this flag, as a hidden item
       is not selectable any more and the function defining the object is not accessible any more. It is advised to use a
       reference to a cell assigning this flag to be able to make the object visible again.
   * - Container
     - Optional. Defines object to be a container. A container is capable of grouping other objects (Default: true)
   * - Clip
     - Optional. Defines object to clip contained items, displaying or not displaying items, which reach out of the area of this object.
   * - Selectable
     - Optional. Defines object to be selectable or not. (Default: true). Be careful, using this flag, as a not selectable item
       is obviously not selectable any more and the function defining the object is not accessible any more. It is advised to use a
       reference to a cell assigning this flag to be able to reset the flag.

**Return Value**

JSON String to describe attributes.

**Example**

.. list-table::
   :widths: 45 55
   :header-rows: 1

   * - Function
     - Comment
   * - =DRAW.RECTANGLE("ID1", "", "Rect1", 1000, 1000, 3000, 3000,,,ATTRIBUTES(FALSE))
     - Hides the object.
   * - =DRAW.RECTANGLE("ID1", "", "Rect1", 1000, 1000, 3000, 3000,,,ATTRIBUTES(,,,FALSE))
     - Makes the object unselectable.

