# AWAIT.ONE

Pauses sheet calculation until at least one of specified requests
resolves. Please refer to `AWAIT <await>` too.

**Syntax**

=AWAIT.ONE(CellReference1, ...CellReferenceN)

**Arguments**

| Name                            | Description                                                                   |
|---------------------------------|-------------------------------------------------------------------------------|
| CellReference1...CellReferenceN | A list of cell-references or cell-ranges containing the requests to wait for. |

**Return Value**

TRUE or an error if a cell reference is not valid.

**Example**

| Function              | Comment                                                                         |
|-----------------------|---------------------------------------------------------------------------------|
| AWAIT.ONE(A1)         | Waits for the request in A1 to resolve                                          |
| AWAIT.ONE(A1, C4, F8) | Waits for one request to resolve                                                |
| AWAIT.ONE(A1, B2:C3)  | Waits for request in A1 and or one of the requests in spcefied range to resolve |
