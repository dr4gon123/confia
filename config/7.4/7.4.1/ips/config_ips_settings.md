# config ips settings

Configure IPS VDOM parameter.

## Syntax

```
config ips settings
    Description: Configure IPS VDOM parameter.
    set ips-packet-quota {integer}
    set packet-log-history {integer}
    set packet-log-memory {integer}
    set packet-log-post-attack {integer}
end
```

## Parameters

+------------------------+-----------------------------------+---------+------------+---------+
| Parameter              | Description                       | Type    | Size       | Default |
+========================+===================================+=========+============+=========+
| ips-packet-quota       | Maximum amount of disk space in   | integer | Minimum    | 0       |
|                        | MB for logged packets when        |         | value: 0   |         |
|                        | logging to disk. Range depends on |         | Maximum    |         |
|                        | disk size.                        |         | value:     |         |
|                        |                                   |         | 4294967295 |         |
+------------------------+-----------------------------------+---------+------------+---------+
| packet-log-history     | Number of packets to capture      | integer | Minimum    | 1       |
|                        | before and including the one in   |         | value: 1   |         |
|                        | which the IPS signature is        |         | Maximum    |         |
|                        | detected.                         |         | value: 255 |         |
+------------------------+-----------------------------------+---------+------------+---------+
| packet-log-memory      | Maximum memory can be used by     | integer | Minimum    | 256     |
|                        | packet log.                       |         | value: 64  |         |
|                        |                                   |         | Maximum    |         |
|                        |                                   |         | value:     |         |
|                        |                                   |         | 8192       |         |
+------------------------+-----------------------------------+---------+------------+---------+
| packet-log-post-attack | Number of packets to log after    | integer | Minimum    | 0       |
|                        | the IPS signature is detected.    |         | value: 0   |         |
|                        |                                   |         | Maximum    |         |
|                        |                                   |         | value: 255 |         |
+------------------------+-----------------------------------+---------+------------+---------+

