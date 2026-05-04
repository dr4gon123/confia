# config switch-controller stp-instance

Configure FortiSwitch multiple spanning tree protocol (MSTP) instances.

## Syntax

```
config switch-controller stp-instance
    Description: Configure FortiSwitch multiple spanning tree protocol (MSTP) instances.
    edit <id>
        set vlan-range <vlan-name1>, <vlan-name2>, ...
    next
end
```

## Parameters

+---------------+-----------------------------------+--------+---------+---------+
| Parameter     | Description                       | Type   | Size    | Default |
+===============+===================================+========+=========+=========+
| id            | Instance ID.                      | string | Maximum |         |
|               |                                   |        | length: |         |
|               |                                   |        | 2       |         |
+---------------+-----------------------------------+--------+---------+---------+
| vlan-range    | Configure VLAN range for STP      | string | Maximum |         |
| `<vlan-name>` | instance.                         |        | length: |         |
|               |                                   |        | 79      |         |
|               | VLAN name.                        |        |         |         |
+---------------+-----------------------------------+--------+---------+---------+

