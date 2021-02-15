CRYPTO.HASH
-----------------------------

Creates an hash value for given text. The used hash algorithm can be optionally specified. For a list of supported
hash algorithms please refere to :ref:`Hash Algorithms<hashes>`.

**Syntax**

=CRYPTO.HASH(Text [, Algorithm])

**Arguments**

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - Text
     - A text to create hash value for.
   * - Algorithm
     - Optional. The hash algorithm to use. Defaults to "sha256"

**Return Value**

The hash value if no error occurred, otherwise an :ref:`error <error>` value.

**Example**

.. list-table::
   :widths: 25 30 45
   :header-rows: 1

   * - Function
     - Result
     - Comment
   * - =CRYPTO.HASH("hello")
     - 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824
     - By default "sha256" is used.
   * - =CRYPTO.HASH("hello","md5")
     - 5d41402abc4b2a76b9719d911017c592
     - Same text as before but creates an hash using "md5" algorithm.
