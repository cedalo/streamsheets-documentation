# GETSTEP

Returns the current Streamsheet step.

<div class="note">

<div class="title">

Note

</div>

A Streamsheet step is increased only if the Streamsheet is processed,
which is not necessarily the case on each App step.

</div>

To get the steps for an App refer to `getmachinestep` and to get the
steps for Streamsheets which are repeatedly triggered by `execute` refer
to `repeatindex`.

**Syntax**

=GETSTEP(\[`Streamsheet`\])

**Arguments**

| Name        | Description                                                                                                    |
|-------------|----------------------------------------------------------------------------------------------------------------|
| Streamsheet | Optional. Define the Streamsheet to retrieve step count from. If not specified affiliated Streamsheet is used. |

**Return Value**

Current Streamsheet step.

**Example**

| Function       | Result |
|----------------|--------|
| =GETSTEP()     | 1      |
| =GETSTEP("S2") | 1      |
