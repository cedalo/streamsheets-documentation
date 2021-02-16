CRYPTO.HMAC
-----------------------------

Creates an hash based authentication code (HMAC) for given text and secret. The used hash algorithm can be optionally specified. 
For a list of supported hash algorithms please refere to :ref:`Hash Algorithms<hashes>`.

**Syntax**

=CRYPTO.HMAC(Text, Secret [, Algorithm])

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - Text
     - A text to create hash value for.
   * - Secret
     - A text used as key to generate the cryptographic HMAC hash.
   * - Algorithm
     - Optional. The hash algorithm to use. Defaults to "sha256"

**Return Value**

The hmac value if no error occurred, otherwise an :ref:`error <error>` value.

**Example**

.. list-table::
   :widths: 40 25 35
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =CRYPTO.HMAC("hello", "top secret")
     - a28f6aee6a27565bf1b868da1947c35147039fe6482b35d3b8fdeb9592e42e99
     - By default "sha256" is used.
   * - =CRYPTO.HMAC("hello", "top secret", "md5")
     - 9ffaf5da07c95deaa000729cd65fefea
     - Same text and secret as before but creates an hmac using "md5" algorithm.
