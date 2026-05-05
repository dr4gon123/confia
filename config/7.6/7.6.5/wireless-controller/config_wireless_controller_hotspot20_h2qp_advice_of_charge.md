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
                set nai-realm {string}
                set nai-realm-encoding {string}
                config plan-info
                    Description: Plan info.
                    edit <name>
                        set currency {string}
                        set info-file {string}
                        set lang {string}
                    next
                end
                set type [time-based|volume-based|...]
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

