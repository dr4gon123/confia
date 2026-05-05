# config wireless-controller hotspot20 qos-map

Configure QoS map set.

## Syntax

```
config wireless-controller hotspot20 qos-map
    Description: Configure QoS map set.
    edit <name>
        config dscp-except
            Description: Differentiated Services Code Point (DSCP) exceptions.
            edit <index>
                set dscp {integer}
                set up {integer}
            next
        end
        config dscp-range
            Description: Differentiated Services Code Point (DSCP) ranges.
            edit <index>
                set high {integer}
                set low {integer}
                set up {integer}
            next
        end
    next
end
```

## Parameters

+-----------+-----------------------------------+--------+---------+---------+
| Parameter | Description                       | Type   | Size    | Default |
+===========+===================================+========+=========+=========+
| name      | QOS-MAP name.                     | string | Maximum |         |
|           |                                   |        | length: |         |
|           |                                   |        | 35      |         |
+-----------+-----------------------------------+--------+---------+---------+

