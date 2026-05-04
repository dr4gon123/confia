# config switch-controller ptp interface-policy

PTP interface-policy configuration.

## Syntax

```
config switch-controller ptp interface-policy
    Description: PTP interface-policy configuration.
    edit <name>
        set description {string}
        set vlan {string}
        set vlan-pri {integer}
    next
end
```

## Parameters

+-------------+-----------------------------------+---------+---------+---------+
| Parameter   | Description                       | Type    | Size    | Default |
+=============+===================================+=========+=========+=========+
| description | Description.                      | string  | Maximum |         |
|             |                                   |         | length: |         |
|             |                                   |         | 63      |         |
+-------------+-----------------------------------+---------+---------+---------+
| name        | Policy name.                      | string  | Maximum |         |
|             |                                   |         | length: |         |
|             |                                   |         | 63      |         |
+-------------+-----------------------------------+---------+---------+---------+
| vlan        | PTP VLAN.                         | string  | Maximum |         |
|             |                                   |         | length: |         |
|             |                                   |         | 15      |         |
+-------------+-----------------------------------+---------+---------+---------+
| vlan-pri    | Configure PTP VLAN priority (0 -  | integer | Minimum | 4       |
|             | 7, default = 4).                  |         | value:  |         |
|             |                                   |         | 0       |         |
|             |                                   |         | Maximum |         |
|             |                                   |         | value:  |         |
|             |                                   |         | 7       |         |
+-------------+-----------------------------------+---------+---------+---------+

