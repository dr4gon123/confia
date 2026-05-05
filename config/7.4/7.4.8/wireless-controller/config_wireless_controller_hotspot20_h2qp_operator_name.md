# config wireless-controller hotspot20 h2qp-operator-name

Configure operator friendly name.

## Syntax

```
config wireless-controller hotspot20 h2qp-operator-name
    Description: Configure operator friendly name.
    edit <name>
        config value-list
            Description: Name list.
            edit <index>
                set lang {string}
                set value {string}
            next
        end
    next
end
```

## Parameters

+-----------+-----------------------------------+--------+---------+---------+
| Parameter | Description                       | Type   | Size    | Default |
+===========+===================================+========+=========+=========+
| name      | Friendly name ID.                 | string | Maximum |         |
|           |                                   |        | length: |         |
|           |                                   |        | 35      |         |
+-----------+-----------------------------------+--------+---------+---------+

