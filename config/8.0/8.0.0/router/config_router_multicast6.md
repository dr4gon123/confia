# config router multicast6

Configure IPv6 multicast.

## Syntax

```
config router multicast6
    Description: Configure IPv6 multicast.
    config interface
        Description: Protocol Independent Multicast (PIM) interfaces.
        edit <name>
            set hello-holdtime {integer}
            set hello-interval {integer}
            set rp-candidate [enable|disable]
            set rp-candidate-group {string}
            set rp-candidate-interval {integer}
            set rp-candidate-priority {integer}
            set static-group {string}
        next
    end
    set multicast-pmtu [enable|disable]
    set multicast-routing [enable|disable]
    config pim-sm-global
        Description: PIM sparse-mode global settings.
        set bsr-allow-quick-refresh [enable|disable]
        set bsr-candidate [enable|disable]
        set bsr-hash {integer}
        set bsr-interface {string}
        set bsr-priority {integer}
        set cisco-crp-prefix [enable|disable]
        set cisco-ignore-rp-set-priority [enable|disable]
        set pim-use-sdwan [enable|disable]
        set register-rate-limit {integer}
        config rp-address
            Description: Statically configured RP addresses.
            edit <id>
                set group {string}
                set ip6-address {ipv6-address}
            next
        end
        set spt-threshold [enable|disable]
        set spt-threshold-group {string}
    end
    config pim-sm-global-vrf
        Description: per-VRF PIM sparse-mode global settings.
        edit <vrf>
            set bsr-allow-quick-refresh [enable|disable]
            set bsr-candidate [enable|disable]
            set bsr-hash {integer}
            set bsr-interface {string}
            set bsr-priority {integer}
            set cisco-crp-prefix [enable|disable]
            config rp-address
                Description: Statically configured RP addresses.
                edit <id>
                    set group {string}
                    set ip6-address {ipv6-address}
                next
            end
        next
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

