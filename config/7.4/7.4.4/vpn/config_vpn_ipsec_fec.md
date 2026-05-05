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
                set base {integer}
                set redundant {integer}
                set packet-loss-threshold {integer}
                set latency-threshold {integer}
                set bandwidth-up-threshold {integer}
                set bandwidth-down-threshold {integer}
                set bandwidth-bi-threshold {integer}
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

