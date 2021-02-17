# GETCYCLE

Returns the Streamsheet steps done in repeat-calculation mode.

<div class="note">

<div class="title">

Note

</div>

this function is only valid for Streamsheets which settings are defined
to calculate repeatedly. If this is not the case this function always
returns 1.

</div>

To get the number of times a Streamsheet was processed refer to
`getstep` and to get the steps for a Streamsheet which was repeatedly
triggered by `execute` refer to `repeatindex`

**Syntax**

=GETCYCLE()

**Arguments**

None.

**Return Value**

Steps done in repeat-calculation mode or 1 if Streamsheet mode is
different.

**Example**

| Function    | Result |
|-------------|--------|
| =GETCYCLE() | 2      |
