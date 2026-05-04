# config switch-controller dynamic-port-policy

Configure Dynamic port policy to be applied on the managed FortiSwitch ports through DPP device.

## Syntax

```
config switch-controller dynamic-port-policy
    Description: Configure Dynamic port policy to be applied on the managed FortiSwitch ports through DPP device.
    edit <name>
        set description {string}
        set fortilink {string}
        config policy
            Description: Port policies with matching criteria and actions.
            edit <name>
                set 802-1x {string}
                set bounce-port-duration {integer}
                set bounce-port-link [disable|enable]
                set category [device|interface-tag]
                set description {string}
                set family {string}
                set host {string}
                set hw-vendor {string}
                set interface-tags <tag-name1>, <tag-name2>, ...
                set lldp-profile {string}
                set mac {string}
                set match-period {integer}
                set match-remove [default|link-down]
                set match-type [dynamic|override]
                set poe-reset [disable|enable]
                set qos-policy {string}
                set status [enable|disable]
                set type {string}
                set vlan-policy {string}
            next
        end
    next
end
```

## Parameters

+-------------+-----------------------------------+--------+---------+---------+
| Parameter   | Description                       | Type   | Size    | Default |
+=============+===================================+========+=========+=========+
| description | Description for the Dynamic port  | string | Maximum |         |
|             | policy.                           |        | length: |         |
|             |                                   |        | 63      |         |
+-------------+-----------------------------------+--------+---------+---------+
| fortilink   | FortiLink interface for which     | string | Maximum |         |
|             | this Dynamic port policy belongs  |        | length: |         |
|             | to.                               |        | 15      |         |
+-------------+-----------------------------------+--------+---------+---------+
| name        | Dynamic port policy name.         | string | Maximum |         |
|             |                                   |        | length: |         |
|             |                                   |        | 63      |         |
+-------------+-----------------------------------+--------+---------+---------+

