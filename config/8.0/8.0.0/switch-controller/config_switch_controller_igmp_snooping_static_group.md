# config switch-controller igmp-snooping-static-group

Configure FortiSwitch IGMP snooping static group settings.

## Syntax

```
config switch-controller igmp-snooping-static-group
    Description: Configure FortiSwitch IGMP snooping static group settings.
    edit <name>
        set description {string}
        set ignore-reports [disable|enable]
        set mcast-addr {ipv4-address-multicast}
        config ports
            Description: Configure static group in switches.
            edit <id>
                set ports <igmp-port-name1>, <igmp-port-name2>, ...
                set switch-id {string}
            next
        end
        set vlan {string}
    next
end
```

## Parameters

+----------------+-----------------------------------+------------------------+--------------------+--------------------+
| Parameter      | Description                       | Type                   | Size               | Default            |
+================+===================================+========================+====================+====================+
| description    | IGMP snooping static group        | string                 | Maximum length: 35 |                    |
|                | description.                      |                        |                    |                    |
+----------------+-----------------------------------+------------------------+--------------------+--------------------+
| ignore-reports | Enable/disable this               | option                 | \-                 | disable            |
|                | ignore-reports.                   |                        |                    |                    |
+----------------+-----------------------------------+------------------------+--------------------+--------------------+
|                | +-------------+--------------------------------------------------------+                             |
|                | | Option      | Description                                            |                             |
|                | +=============+========================================================+                             |
|                | | *disable*   | Disable to ignore all IGMP membership reports received |                             |
|                | |             | for this group.                                        |                             |
|                | +-------------+--------------------------------------------------------+                             |
|                | | *enable*    | Enable to ignore all IGMP membership reports received  |                             |
|                | |             | for this group.                                        |                             |
|                | +-------------+--------------------------------------------------------+                             |
+----------------+-----------------------------------+------------------------+--------------------+--------------------+
| mcast-addr     | IGMP snooping static group        | ipv4-address-multicast | Not Specified      | 0.0.0.0            |
|                | multicast IP.                     |                        |                    |                    |
+----------------+-----------------------------------+------------------------+--------------------+--------------------+
| name           | IGMP snooping static group name.  | string                 | Maximum length: 35 |                    |
+----------------+-----------------------------------+------------------------+--------------------+--------------------+
| vlan           | VLAN name.                        | string                 | Maximum length: 15 |                    |
+----------------+-----------------------------------+------------------------+--------------------+--------------------+

