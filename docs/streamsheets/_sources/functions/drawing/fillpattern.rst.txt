.. _fillpattern:

FILLPATTERN
------------

Create a fill format description for a pattern fill using a given image.

**Syntax**

FILLPATTERN(Image[, Style])

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - Image
     - Image URL or URI

**Return Value**

JSON String, which defines the fill format and can be used in drawing functions.

**Example**

.. list-table::
   :widths: 45 10 45
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - FILLPATTERN("http://www.somesite.com/someimage.png")
     -
     - Draw an image pattern

TODO result JSON
