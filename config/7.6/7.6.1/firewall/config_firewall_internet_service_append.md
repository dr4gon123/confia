# config firewall internet-service-append

Configure additional port mappings for Internet Services.

## Syntax

```
config firewall internet-service-append
    Description: Configure additional port mappings for Internet Services.
    set addr-mode [ipv4|ipv6|...]
    set append-port {integer}
    set match-port {integer}
end
```

## Parameters

+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter   | Description                       | Type               | Size               | Default            |
+=============+===================================+====================+====================+====================+
| addr-mode   | Address mode (IPv4 or IPv6).      | option             | \-                 | ipv4               |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
|             | +-------------+--------------------------------------------------------+                         |
|             | | Option      | Description                                            |                         |
|             | +=============+========================================================+                         |
|             | | *ipv4*      | IPv4 mode.                                             |                         |
|             | +-------------+--------------------------------------------------------+                         |
|             | | *ipv6*      | IPv6 mode.                                             |                         |
|             | +-------------+--------------------------------------------------------+                         |
|             | | *both*      | Both IPv4 and IPv6 mode.                               |                         |
|             | +-------------+--------------------------------------------------------+                         |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| append-port | Appending TCP/UDP/SCTP            | integer            | Minimum value: 0   | 0                  |
|             | destination port (1 to 65535).    |                    | Maximum value:     |                    |
|             |                                   |                    | 65535              |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| match-port  | Matching TCP/UDP/SCTP destination | integer            | Minimum value: 0   | 0                  |
|             | port (0 to 65535, 0 means any     |                    | Maximum value:     |                    |
|             | port).                            |                    | 65535              |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+

