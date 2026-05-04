# config switch-controller fortilink-settings

Configure integrated FortiLink settings for FortiSwitch.

## Syntax

```
config switch-controller fortilink-settings
    Description: Configure integrated FortiLink settings for FortiSwitch.
    edit <name>
        set access-vlan-mode [legacy|fail-open|...]
        set admin-policy {string}
        set fortilink {string}
        set inactive-timer {integer}
        set link-down-flush [disable|enable]
        config nac-ports
            Description: NAC specific configuration.
            set lan-segment [enabled|disabled]
            set member-change {integer}
            set nac-lan-interface {string}
            set nac-segment-vlans <vlan-name1>, <vlan-name2>, ...
            set onboarding-vlan {string}
            set parent-key {string}
        end
    next
end
```

## Parameters

+------------------+-----------------------------------+---------------------+---------------------+---------------------+
| Parameter        | Description                       | Type                | Size                | Default             |
+==================+===================================+=====================+=====================+=====================+
| access-vlan-mode | Intra VLAN traffic behavior with  | option              | \-                  | legacy              |
|                  | loss of connection to the         |                     |                     |                     |
|                  | FortiGate.                        |                     |                     |                     |
+------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                  | +--------------+--------------------------------------------------------+                           |
|                  | | Option       | Description                                            |                           |
|                  | +==============+========================================================+                           |
|                  | | *legacy*     | Backward compatible behavior.                          |                           |
|                  | +--------------+--------------------------------------------------------+                           |
|                  | | *fail-open*  | When connection to FortiGate is lost, traffic on the   |                           |
|                  | |              | VLAN may continue directly between end points.         |                           |
|                  | +--------------+--------------------------------------------------------+                           |
|                  | | *fail-close* | When connection to FortiGate is lost, traffic between  |                           |
|                  | |              | endpoints on the VLAN is blocked.                      |                           |
|                  | +--------------+--------------------------------------------------------+                           |
+------------------+-----------------------------------+---------------------+---------------------+---------------------+
| admin-policy \*  | FortiSwitch\'s admin              | string              | Maximum length: 31  |                     |
|                  | security-policy applied to all    |                     |                     |                     |
|                  | switch on this Fortilink          |                     |                     |                     |
|                  | interface.                        |                     |                     |                     |
+------------------+-----------------------------------+---------------------+---------------------+---------------------+
| fortilink        | FortiLink interface to which this | string              | Maximum length: 15  |                     |
|                  | fortilink-setting belongs.        |                     |                     |                     |
+------------------+-----------------------------------+---------------------+---------------------+---------------------+
| inactive-timer   | Time interval(minutes) to be      | integer             | Minimum value: 1    | 15                  |
|                  | included in the inactive devices  |                     | Maximum value: 1440 |                     |
|                  | expiry calculation (mac age-out + |                     |                     |                     |
|                  | inactive-time + periodic scan     |                     |                     |                     |
|                  | interval).                        |                     |                     |                     |
+------------------+-----------------------------------+---------------------+---------------------+---------------------+
| link-down-flush  | Clear NAC and dynamic devices on  | option              | \-                  | enable              |
|                  | switch ports on link down event.  |                     |                     |                     |
+------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                  | +-------------+--------------------------------------------------------+                            |
|                  | | Option      | Description                                            |                            |
|                  | +=============+========================================================+                            |
|                  | | *disable*   | Disable clearing NAC and dynamic devices on a switch   |                            |
|                  | |             | port when link down event happens.                     |                            |
|                  | +-------------+--------------------------------------------------------+                            |
|                  | | *enable*    | Enable clearing NAC and dynamic devices on a switch    |                            |
|                  | |             | port when link down event happens.                     |                            |
|                  | +-------------+--------------------------------------------------------+                            |
+------------------+-----------------------------------+---------------------+---------------------+---------------------+
| name             | FortiLink settings name.          | string              | Maximum length: 35  |                     |
+------------------+-----------------------------------+---------------------+---------------------+---------------------+

