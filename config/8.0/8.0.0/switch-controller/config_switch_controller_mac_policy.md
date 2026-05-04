# config switch-controller mac-policy

Configure MAC policy to be applied on the managed FortiSwitch devices through NAC device.

## Syntax

```
config switch-controller mac-policy
    Description: Configure MAC policy to be applied on the managed FortiSwitch devices through NAC device.
    edit <name>
        set bounce-port-duration {integer}
        set bounce-port-link [disable|enable]
        set count [disable|enable]
        set description {string}
        set fortilink {string}
        set poe-reset [disable|enable]
        set traffic-policy {string}
        set vlan {string}
    next
end
```

## Parameters

+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter            | Description                       | Type               | Size               | Default            |
+======================+===================================+====================+====================+====================+
| bounce-port-duration | Bounce duration in seconds of a   | integer            | Minimum value: 1   | 5                  |
|                      | switch port where this mac-policy |                    | Maximum value: 30  |                    |
|                      | is applied.                       |                    |                    |                    |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| bounce-port-link     | Enable/disable bouncing           | option             | \-                 | enable             |
|                      | (administratively bring the link  |                    |                    |                    |
|                      | down, up) of a switch port where  |                    |                    |                    |
|                      | this mac-policy is applied.       |                    |                    |                    |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                      | +-------------+--------------------------------------------------------+                         |
|                      | | Option      | Description                                            |                         |
|                      | +=============+========================================================+                         |
|                      | | *disable*   | Disable bouncing (administratively bring the link      |                         |
|                      | |             | down, up) of a switch port where this mac-policy is    |                         |
|                      | |             | applied.                                               |                         |
|                      | +-------------+--------------------------------------------------------+                         |
|                      | | *enable*    | Enable bouncing (administratively bring the link down, |                         |
|                      | |             | up) of a switch port where this mac-policy is applied. |                         |
|                      | +-------------+--------------------------------------------------------+                         |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| count                | Enable/disable packet count on    | option             | \-                 | disable            |
|                      | the NAC device.                   |                    |                    |                    |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                      | +-------------+--------------------------------------------------------+                         |
|                      | | Option      | Description                                            |                         |
|                      | +=============+========================================================+                         |
|                      | | *disable*   | Enable packet count on the NAC device.                 |                         |
|                      | +-------------+--------------------------------------------------------+                         |
|                      | | *enable*    | Disable packet count on the NAC device.                |                         |
|                      | +-------------+--------------------------------------------------------+                         |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| description          | Description for the MAC policy.   | string             | Maximum length: 63 |                    |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| fortilink            | FortiLink interface for which     | string             | Maximum length: 15 |                    |
|                      | this MAC policy belongs to.       |                    |                    |                    |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| name                 | MAC policy name.                  | string             | Maximum length: 63 |                    |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| poe-reset            | Enable/disable POE reset of a     | option             | \-                 | disable            |
|                      | switch port where this mac-policy |                    |                    |                    |
|                      | is applied.                       |                    |                    |                    |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                      | +-------------+--------------------------------------------------------+                         |
|                      | | Option      | Description                                            |                         |
|                      | +=============+========================================================+                         |
|                      | | *disable*   | Disable POE reset of a switch port where this          |                         |
|                      | |             | mac-policy is applied.                                 |                         |
|                      | +-------------+--------------------------------------------------------+                         |
|                      | | *enable*    | Enable POE reset of a switch port where this           |                         |
|                      | |             | mac-policy is applied.                                 |                         |
|                      | +-------------+--------------------------------------------------------+                         |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| traffic-policy       | Traffic policy to be applied when | string             | Maximum length: 63 |                    |
|                      | using this MAC policy.            |                    |                    |                    |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| vlan                 | Ingress traffic VLAN assignment   | string             | Maximum length: 15 |                    |
|                      | for the MAC address matching this |                    |                    |                    |
|                      | MAC policy.                       |                    |                    |                    |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+

