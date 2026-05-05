# config ips settings

Configure IPS VDOM parameter.

## Syntax

```
config ips settings
    Description: Configure IPS VDOM parameter.
    set ha-session-pickup [connectivity|security]
    set ips-packet-quota {integer}
    set packet-log-history {integer}
    set packet-log-memory {integer}
    set packet-log-post-attack {integer}
    set proxy-inline-ips [disable|enable]
end
```

## Parameters

+------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| Parameter              | Description                       | Type                  | Size                  | Default               |
+========================+===================================+=======================+=======================+=======================+
| ha-session-pickup      | IPS HA failover session pickup    | option                | \-                    | connectivity          |
|                        | preference.                       |                       |                       |                       |
+------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                        | +----------------+--------------------------------------------------------+                               |
|                        | | Option         | Description                                            |                               |
|                        | +================+========================================================+                               |
|                        | | *connectivity* | Prefer session continuity.                             |                               |
|                        | +----------------+--------------------------------------------------------+                               |
|                        | | *security*     | Prefer session complete security.                      |                               |
|                        | +----------------+--------------------------------------------------------+                               |
+------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| ips-packet-quota       | Maximum amount of disk space in   | integer               | Minimum value: 0      | 0                     |
|                        | MB for logged packets when        |                       | Maximum value:        |                       |
|                        | logging to disk. Range depends on |                       | 4294967295            |                       |
|                        | disk size.                        |                       |                       |                       |
+------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| packet-log-history     | Number of packets to capture      | integer               | Minimum value: 1      | 1                     |
|                        | before and including the one in   |                       | Maximum value: 255    |                       |
|                        | which the IPS signature is        |                       |                       |                       |
|                        | detected (1 - 255).               |                       |                       |                       |
+------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| packet-log-memory      | Maximum memory can be used by     | integer               | Minimum value: 64     | 256                   |
|                        | packet log (64 - 8192 kB).        |                       | Maximum value: 8192   |                       |
+------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| packet-log-post-attack | Number of packets to log after    | integer               | Minimum value: 0      | 0                     |
|                        | the IPS signature is detected     |                       | Maximum value: 255    |                       |
|                        | (0 - 255).                        |                       |                       |                       |
+------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| proxy-inline-ips       | Enable/disable proxy-mode policy  | option                | \-                    | enable                |
|                        | inline IPS support.               |                       |                       |                       |
+------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                        | +-------------+--------------------------------------------------------+                                  |
|                        | | Option      | Description                                            |                                  |
|                        | +=============+========================================================+                                  |
|                        | | *disable*   | Do not allow inline IPS in proxy-mode policy.          |                                  |
|                        | +-------------+--------------------------------------------------------+                                  |
|                        | | *enable*    | Allow inline IPS in proxy-mode policy.                 |                                  |
|                        | +-------------+--------------------------------------------------------+                                  |
+------------------------+-----------------------------------------------------------------------------------------------------------+

