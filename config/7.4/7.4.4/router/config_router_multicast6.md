# config router multicast6

Configure IPv6 multicast.

## Syntax

```
config router multicast6
    Description: Configure IPv6 multicast.
    config interface
        Description: Protocol Independent Multicast (PIM) interfaces.
        edit <name>
            set hello-interval {integer}
            set hello-holdtime {integer}
        next
    end
    set multicast-pmtu [enable|disable]
    set multicast-routing [enable|disable]
    config pim-sm-global
        Description: PIM sparse-mode global settings.
        set register-rate-limit {integer}
        config rp-address
            Description: Statically configured RP addresses.
            edit <id>
                set ip6-address {ipv6-address}
            next
        end
    end
end
```

## Parameters

+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter         | Description                       | Type               | Size               | Default            |
+===================+===================================+====================+====================+====================+
| multicast-pmtu    | Enable/disable PMTU for IPv6      | option             | \-                 | disable            |
|                   | multicast.                        |                    |                    |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                   | +-------------+--------------------------------------------------------+                         |
|                   | | Option      | Description                                            |                         |
|                   | +=============+========================================================+                         |
|                   | | *enable*    | Enable PMTU for IPv6 multicast.                        |                         |
|                   | +-------------+--------------------------------------------------------+                         |
|                   | | *disable*   | Disable PMTU for IPv6 multicast.                       |                         |
|                   | +-------------+--------------------------------------------------------+                         |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| multicast-routing | Enable/disable IPv6 multicast     | option             | \-                 | disable            |
|                   | routing.                          |                    |                    |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                   | +-------------+--------------------------------------------------------+                         |
|                   | | Option      | Description                                            |                         |
|                   | +=============+========================================================+                         |
|                   | | *enable*    | Enable IPv6 multicast routing.                         |                         |
|                   | +-------------+--------------------------------------------------------+                         |
|                   | | *disable*   | Disable IPv6 multicast routing.                        |                         |
|                   | +-------------+--------------------------------------------------------+                         |
+-------------------+--------------------------------------------------------------------------------------------------+

