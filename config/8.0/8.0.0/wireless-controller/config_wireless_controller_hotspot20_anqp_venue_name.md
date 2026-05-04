# config wireless-controller hotspot20 anqp-venue-name

Configure venue name duple.

## Syntax

```
config wireless-controller hotspot20 anqp-venue-name
    Description: Configure venue name duple.
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
| name      | Name of venue name duple.         | string | Maximum |         |
|           |                                   |        | length: |         |
|           |                                   |        | 35      |         |
+-----------+-----------------------------------+--------+---------+---------+

