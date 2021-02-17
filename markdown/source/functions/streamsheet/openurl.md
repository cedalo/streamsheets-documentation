# OPENURL

Opens any given URL. The given URL needs to start with http/https

<div class="note">

<div class="title">

Note

</div>

OPENURL only works in an `Event<events>`

</div>

**Syntax**

OPENURL(URL,TAB)

**Arguments**

| Name | Description                                                                          |
|------|--------------------------------------------------------------------------------------|
| URL  | URL to open                                                                          |
| TAB  | TRUE or FALSE. Decides if URL will be opened in new TAB or same TAB. Default = TRUE. |

**Return Value**

TRUE

**Example**

| Function                         | Result | Comment                                   |
|----------------------------------|--------|-------------------------------------------|
| OPENURL("<https://cedalo.com/>") | TRUE   | Opens the cedalo.com page in another Tab. |
