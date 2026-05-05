# config system speed-test-setting

Configure speed test setting.

## Syntax

```
config system speed-test-setting
    Description: Configure speed test setting.
    set latency-threshold {integer}
    set multiple-tcp-stream {integer}
end
```

## Parameters

+---------------------+-----------------------------------+---------+---------+---------+
| Parameter           | Description                       | Type    | Size    | Default |
+=====================+===================================+=========+=========+=========+
| latency-threshold   | Speed test latency threshold in   | integer | Minimum | 60      |
|                     | milliseconds for the Auto mode.   |         | value:  |         |
|                     | If the latency exceeds this       |         | 0       |         |
|                     | threshold, the speed test will    |         | Maximum |         |
|                     | use the UDP protocol; otherwise,  |         | value:  |         |
|                     | it will use the TCP protocol.     |         | 2000    |         |
+---------------------+-----------------------------------+---------+---------+---------+
| multiple-tcp-stream | Number of parallel client streams | integer | Minimum | 4       |
|                     | for the TCP protocol to run       |         | value:  |         |
|                     | during the speed test.            |         | 1       |         |
|                     |                                   |         | Maximum |         |
|                     |                                   |         | value:  |         |
|                     |                                   |         | 64      |         |
+---------------------+-----------------------------------+---------+---------+---------+

