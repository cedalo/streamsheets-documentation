# SLEEP

Pauses sheet processing for a specified amount of time.

**Syntax**

=SLEEP(seconds)

**Arguments**

Sleep period in seconds. Note: if seconds is less then 1ms, i.e. &lt;
0.001, calling SLEEP function has no effect.

**Return Value**

TRUE

**Example**

| Function    | Comment                                       |
|-------------|-----------------------------------------------|
| =SLEEP(2)   | Pauses sheet processing for 2 seconds.        |
| =SLEEP(0.1) | Pauses sheet processing for 100 milliseconds. |
