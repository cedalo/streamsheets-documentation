# INBOX

Creates a key to reference an `inbox` item. This key is used in
functions like `DELETE` to identify messages inside an inbox.

**Syntax**

=INBOX(`Streamsheet`, Message)

**Arguments**

| Name        | Description                                                                                                  |
|-------------|--------------------------------------------------------------------------------------------------------------|
| Streamsheet | Optional. Define the Streamsheet to retrieve message data from. If empty the affiliated Streamsheet is used. |
| Message     | Optional. ID of Message to identify. If left empty, the current message in the inbox is used.                |

**Return Value**

Key for the inbox item.

**Example**

| Function     | Result     | Comment                                                                              |
|--------------|------------|--------------------------------------------------------------------------------------|
| =INBOX("S1") | \[S1\]\[\] | Returns an identifier that can be used in other Streamsheet functions like `DELETE`. |
