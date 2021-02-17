# AWAIT

Pauses sheet calculation until all specified requests resolve. Please
refer to `AWAIT.ONE <awaitone>` too.

**Syntax**

=AWAIT(CellReference1, ...CellReferenceN)

**Arguments**

| Name                            | Description                                                                   |
|---------------------------------|-------------------------------------------------------------------------------|
| CellReference1...CellReferenceN | A list of cell-references or cell-ranges containing the requests to wait for. |

**Return Value**

TRUE or an error if a cell reference is not valid.

**Example**

| Function          | Comment                                                                   |
|-------------------|---------------------------------------------------------------------------|
| AWAIT(A1)         | Waits for the request in A1 to resolve                                    |
| AWAIT(A1, C4, F8) | Waits for all requests to resolve                                         |
| AWAIT(A1, B2:C3)  | Waits for the request in A1 and all requests in spcefied range to resolve |
