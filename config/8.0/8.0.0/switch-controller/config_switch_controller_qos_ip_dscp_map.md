# config switch-controller qos ip-dscp-map

Configure FortiSwitch QoS IP precedence/DSCP.

## Syntax

```
config switch-controller qos ip-dscp-map
    Description: Configure FortiSwitch QoS IP precedence/DSCP.
    edit <name>
        set description {string}
        config map
            Description: Maps between IP-DSCP value to COS queue.
            edit <name>
                set cos-queue {integer}
                set diffserv {option1}, {option2}, ...
                set ip-precedence {option1}, {option2}, ...
                set value {user}
            next
        end
    next
end
```

## Parameters

+-------------+-----------------------------------+--------+---------+---------+
| Parameter   | Description                       | Type   | Size    | Default |
+=============+===================================+========+=========+=========+
| description | Description of the ip-dscp map    | string | Maximum |         |
|             | name.                             |        | length: |         |
|             |                                   |        | 63      |         |
+-------------+-----------------------------------+--------+---------+---------+
| name        | Dscp map name.                    | string | Maximum |         |
|             |                                   |        | length: |         |
|             |                                   |        | 63      |         |
+-------------+-----------------------------------+--------+---------+---------+

