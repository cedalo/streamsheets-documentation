# UNICHAR

Returns the character represented by given unicode number.

<div class="note">

<div class="title">

Note

</div>

Unicodes UTF-8 & UTF-16 are supported, so the provided number must be
within 0 - 65535.

</div>

**Syntax**

=UNICHAR(Number)

**Arguments**

| Name   | Description                                                               |
|--------|---------------------------------------------------------------------------|
| Number | An unicode number within 0-65535 which specifies the character to return. |

**Return Value**

The character as specified by given unicode number.

**Example**

| Function       | Result            |
|----------------|-------------------|
| =UNICHAR(65)   | A                 |
| =UNICHAR(8364) | €                 |
| =UNICHAR(0)    | `#VALUE! <error>` |
