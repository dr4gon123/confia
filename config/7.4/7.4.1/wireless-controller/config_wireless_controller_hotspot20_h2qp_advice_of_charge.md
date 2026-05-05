# config wireless-controller hotspot20 h2qp-advice-of-charge

Configure advice of charge.

## Syntax

```
config wireless-controller hotspot20 h2qp-advice-of-charge
    Description: Configure advice of charge.
    edit <name>
        config aoc-list
            Description: AOC list.
            edit <name>
                set type [time-based|volume-based|...]
                set nai-realm-encoding {string}
                set nai-realm {string}
                config plan-info
                    Description: Plan info.
                    edit <name>
                        set lang {string}
                        set currency {string}
                        set info-file {string}
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
| name      | Plan name.                        | string | Maximum |         |
|           |                                   |        | length: |         |
|           |                                   |        | 35      |         |
+-----------+-----------------------------------+--------+---------+---------+

