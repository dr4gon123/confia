# config router bfd6

Configure IPv6 BFD.

## Syntax

```
config router bfd6
    Description: Configure IPv6 BFD.
    config multihop-template
        Description: BFD IPv6 multi-hop template table.
        edit <id>
            set src {ipv6-network}
            set dst {ipv6-network}
            set bfd-desired-min-tx {integer}
            set bfd-required-min-rx {integer}
            set bfd-detect-mult {integer}
            set auth-mode [none|md5]
            set md5-key {password}
        next
    end
    config neighbor
        Description: Configure neighbor of IPv6 BFD.
        edit <ip6-address>
            set interface {string}
        next
    end
end
```

## Parameters

+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter           | Description                       | Type               | Size               | Default            |
+=====================+===================================+====================+====================+====================+
| id                  | ID.                               | integer            | Minimum value: 0   | 0                  |
|                     |                                   |                    | Maximum value:     |                    |
|                     |                                   |                    | 4294967295         |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| src                 | Source prefix.                    | ipv6-network       | Not Specified      | ::/0               |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| dst                 | Destination prefix.               | ipv6-network       | Not Specified      | ::/0               |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| bfd-desired-min-tx  | BFD desired minimal transmit      | integer            | Minimum value: 100 | 250                |
|                     | interval (milliseconds).          |                    | Maximum value:     |                    |
|                     |                                   |                    | 30000              |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| bfd-required-min-rx | BFD required minimal receive      | integer            | Minimum value: 100 | 250                |
|                     | interval (milliseconds).          |                    | Maximum value:     |                    |
|                     |                                   |                    | 30000              |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| bfd-detect-mult     | BFD detection multiplier.         | integer            | Minimum value: 3   | 3                  |
|                     |                                   |                    | Maximum value: 50  |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| auth-mode           | Authentication mode.              | option             | \-                 | none               |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | Option      | Description                                            |                         |
|                     | +=============+========================================================+                         |
|                     | | *none*      | None.                                                  |                         |
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | *md5*       | Meticulous MD5 mode.                                   |                         |
|                     | +-------------+--------------------------------------------------------+                         |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| md5-key             | MD5 key of key ID 1.              | password           | Not Specified      |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+

