# CELLCHART

Draw a chart inside a cell.

**Syntax**

=CELLCHART(DataRange, ChartType, LineColor, FillColor, Marker, Minimum,
Maximum)

**Arguments**

| Name      | Description                                                                                                              |
|-----------|--------------------------------------------------------------------------------------------------------------------------|
| DataRange | Cell Range to retrieve the data for the chart from                                                                       |
| CharrType | Optional. Valid Chart Type. Default is line. Valid values are : line, column, bar, pie, doughnut, bubble, scatter, area. |
| LineColor | Optional. Line Color to use for first series                                                                             |
| FillColor | Optional. Fill Color to use for first series                                                                             |
| Minimum   | Value Axis Minimum                                                                                                       |
| Maximum   | Value Axis Maximum                                                                                                       |

**Return Value**

TRUE, if chart could be created.

**Example**

| Function                 | Result | Comment                           |
|--------------------------|--------|-----------------------------------|
| =CELLCHART(B2:B5, "pie") | TRUE   | Draw a chart in the current cell. |
