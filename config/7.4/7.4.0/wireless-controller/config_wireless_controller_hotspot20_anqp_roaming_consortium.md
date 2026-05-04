# config wireless-controller hotspot20 anqp-roaming-consortium

Configure roaming consortium.

## Syntax

```
config wireless-controller hotspot20 anqp-roaming-consortium
    Description: Configure roaming consortium.
    edit <name>
        config oi-list
            Description: Organization identifier list.
            edit <index>
                set oi {string}
                set comment {string}
            next
        end
    next
end
```

## Parameters

+-----------+-----------------------------------+--------+---------+---------+
| Parameter | Description                       | Type   | Size    | Default |
+===========+===================================+========+=========+=========+
| name      | Roaming consortium name.          | string | Maximum |         |
|           |                                   |        | length: |         |
|           |                                   |        | 35      |         |
+-----------+-----------------------------------+--------+---------+---------+

