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
|                     | milliseconds (0 - 2000, default = |         | value:  |         |
|                     | 60) for the Auto mode. If the     |         | 0       |         |
|                     | latency exceeds this threshold,   |         | Maximum |         |
|                     | the speed test will use the UDP   |         | value:  |         |
|                     | protocol; otherwise, it will use  |         | 2000    |         |
|                     | the TCP protocol.                 |         |         |         |
+---------------------+-----------------------------------+---------+---------+---------+
| multiple-tcp-stream | Number of parallel client streams | integer | Minimum | 4       |
|                     | (1 - 64, default = 4) for the TCP |         | value:  |         |
|                     | protocol to run during the speed  |         | 1       |         |
|                     | test.                             |         | Maximum |         |
|                     |                                   |         | value:  |         |
|                     |                                   |         | 64      |         |
+---------------------+-----------------------------------+---------+---------+---------+

