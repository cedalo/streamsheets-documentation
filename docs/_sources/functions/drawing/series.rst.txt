
SERIES
-----------

Defines the data source settings for a chart series.

**Syntax**

=SERIES(SeriesTitle, CategoriesOrXValues, YValues, RadiusOrColorValues)

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - SeriesTitle
     - Series title to name the series. This title will be used for the legend.
   * - CategoriesOrXValues
     - Values to use for the chart categories or X- Values, if it is a Scatter or Bubble Chart.
   * - YValues
     - Values to use for the display of bars, pies, lines etc.
   * - RadiusOrColorValues
     - Values to use for the radius of bubble charts and for colors in state charts.

**Return Value**

TRUE.

**Example**

.. list-table::
   :widths: 73 7 20
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =SERIES("DataRow", A1:A5, B1:B5)
     - TRUE
     - Retrieves values for a chart series for the series for X-Values from cell range A1:A5 and for Y-Values from B1:B5.

