
SERIESTIME
-----------

Defines the data source settings for a chart series based on time series created by TIMEAGGREGATE, TIME.QUERY and INFLUX.QUERY. These functions
create a table with field and values that can be used in the chart series.

**Syntax**

=SERIESTIME(SeriesTitleXValues,SeriesTitleYValues,TimeFunction,XValuesField,YValuesField,RadiusColorValuesField)

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - SeriesTitleXValues
     - Series title to name the series x values field. This title will be used for displaying the tooltip values.
   * - SeriesTitleYValues
     - Series title to name the series y values field. This title will be used for the legend.
   * - TimeFunction
     - Cell containing the function collecting the values.
   * - XValuesField
     - Values to use for the chart categories or X- Values, if it is a Scatter or Bubble Chart.
   * - YValuesField
     - Values to use for the display of bars, pies, lines etc. or Y-Values in a Scatter or Bubble Charts
   * - RadiusOrColorValuesField
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
   * - =SERIESTIME("XLabel", "YLabel", A1, "time", "values")
     - TRUE
     - Retrieves values for a chart series for the series from the function in A1 using the "time" field for X-Values and the "values" field for Y Values.

