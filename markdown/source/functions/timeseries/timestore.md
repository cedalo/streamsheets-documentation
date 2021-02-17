# TIMESTORE

Stores key-value pairs over a specified time period. To query stored
values use `timequery`.

**Syntax**

TIMESTORE(Json, \[Period, TimeSerial, Limit\])

**Arguments**

| Name       | Description                                                                                                                                             |
|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| Json       | A JSON object which contains the key-value pairs to store.                                                                                              |
| Period     | Optional. The time period in seconds over which data is collected. Older data is dropped. Defaults to 60 seconds.                                       |
| TimeSerial | Optional. A serial number to use as key for each stored value. Note: data is always sorted according to its corresponding timestamp. Defaults to `now`. |
| Limit      | Optional. Specifies the maximum number of values stored. If limit is reached the function returns a \#LIMIT error. Defaults to 1000.                    |

**Return Value**

TRUE, if successful.

**Example Sheet**

|     |     |                      |
|-----|-----|----------------------|
|     | A   | B                    |
| 1   | v1  | =A1 + 1              |
| 2   | v2  | =RANDBETWEEN(0, 100) |

**Example**

| Function                           | Comment                                                                                              |
|------------------------------------|------------------------------------------------------------------------------------------------------|
| =TIMESTORE(JSON(A1:B2))            | Stores the values for v1 and v2 on each step.                                                        |
| =TIMESTORE(JSON(A1:B2), 100, , 10) | Same as before but stores only over a period of 100 seconds and limits number of stored values to 10 |

![TS](/images/TS/TS.png)  
*Storing data from Berlin, Paris and London. Now a TIMEQUERY can be used
to access the stored values*
