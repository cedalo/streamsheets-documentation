# WEBPAGE

Creates a webpage at the given URL. This uses a special REST feeder
internally.

**Syntax**

=WEBPAGE(URL, HTML, Refresh)

**Arguments**

| Name    | Description                                                                        |
|---------|------------------------------------------------------------------------------------|
| URL     | A URL suffix which is appended to the base url provided by internally used feeder. |
| HTML    | A String which defines the webpage to create.                                      |
| Refresh | The http refresh rate in seconds                                                   |

**Return Value**

TRUE on success or error code otherwise.

**Example**

We assume that the used REST feeder provides following base URL:
`https://dev.cedalo.com/rest/v1.0/webpages`

| Function                                                                                                     | Result | Comment                                                                                                                              |
|--------------------------------------------------------------------------------------------------------------|--------|--------------------------------------------------------------------------------------------------------------------------------------|
| =WEBPAGE("test1/test2", "&lt;html&gt;&lt;body&gt; &lt;h1&gt;HELLO&lt;/h1&gt; &lt;/body&gt;&lt;/html&gt;", 5) | TRUE   | Creates a webpage with a single *HELLO* title. The webpage is accessable at: `https://dev.cedalo.com/rest/v1.0/webpages/test1/test2` |
