# config wireless-controller hotspot20 anqp-venue-url

Configure venue URL.

## Syntax

```
config wireless-controller hotspot20 anqp-venue-url
    Description: Configure venue URL.
    edit <name>
        config value-list
            Description: URL list.
            edit <index>
                set number {integer}
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
| name      | Name of venue url.                | string | Maximum |         |
|           |                                   |        | length: |         |
|           |                                   |        | 35      |         |
+-----------+-----------------------------------+--------+---------+---------+

