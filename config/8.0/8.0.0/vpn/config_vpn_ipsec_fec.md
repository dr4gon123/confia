# config vpn ipsec fec

Configure Forward Error Correction (FEC) mapping profiles.

## Syntax

```
config vpn ipsec fec
    Description: Configure Forward Error Correction (FEC) mapping profiles.
    edit <name>
        config mappings
            Description: FEC redundancy mapping table.
            edit <seqno>
                set bandwidth-bi-threshold {integer}
                set bandwidth-bi-threshold-negate [enable|disable]
                set bandwidth-down-threshold {integer}
                set bandwidth-down-threshold-negate [enable|disable]
                set bandwidth-up-threshold {integer}
                set bandwidth-up-threshold-negate [enable|disable]
                set base {integer}
                set latency-threshold {integer}
                set latency-threshold-negate [enable|disable]
                set packet-loss-threshold {integer}
                set packet-loss-threshold-negate [enable|disable]
                set redundant {integer}
                config tos
                    Description: FEC redundancy mapping table for specific type of service (TOS).
                    edit <seqno>
                        set base {integer}
                        set redundant {integer}
                        set tos {user}
                        set tos-mask {user}
                    next
                end
            next
        end
    next
end
```

## Parameters

+-----------+-----------------------------------+--------+---------+---------+
| Parameter | Description                       | Type   | Size    | Default |
+===========+===================================+========+=========+=========+
| name      | Profile name.                     | string | Maximum |         |
|           |                                   |        | length: |         |
|           |                                   |        | 35      |         |
+-----------+-----------------------------------+--------+---------+---------+

