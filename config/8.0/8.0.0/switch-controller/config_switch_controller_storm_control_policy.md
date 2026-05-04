# config switch-controller storm-control-policy

Configure FortiSwitch storm control policy to be applied on managed-switch ports.

## Syntax

```
config switch-controller storm-control-policy
    Description: Configure FortiSwitch storm control policy to be applied on managed-switch ports.
    edit <name>
        set broadcast [enable|disable]
        set burst-size-level {integer}
        set description {string}
        set rate {integer}
        set storm-control-mode [global|override|...]
        set unknown-multicast [enable|disable]
        set unknown-unicast [enable|disable]
    next
end
```

## Parameters

+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter          | Description                       | Type               | Size               | Default            |
+====================+===================================+====================+====================+====================+
| broadcast          | Enable/disable storm control to   | option             | \-                 | disable            |
|                    | drop/allow broadcast traffic in   |                    |                    |                    |
|                    | override mode.                    |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | Option      | Description                                            |                         |
|                    | +=============+========================================================+                         |
|                    | | *enable*    | Enable storm control for broadcast traffic to drop     |                         |
|                    | |             | packets which exceed configured rate limits.           |                         |
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | *disable*   | Disable storm control for broadcast traffic to allow   |                         |
|                    | |             | all packets.                                           |                         |
|                    | +-------------+--------------------------------------------------------+                         |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| burst-size-level   | Increase level to handle bursty   | integer            | Minimum value: 0   | 0                  |
|                    | traffic (0 - 4, default = 0).     |                    | Maximum value: 4   |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| description        | Description of the storm control  | string             | Maximum length: 63 |                    |
|                    | policy.                           |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| name               | Storm control policy name.        | string             | Maximum length: 63 |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| rate               | Threshold rate in packets per     | integer            | Minimum value: 0   | 500                |
|                    | second at which storm traffic is  |                    | Maximum value:     |                    |
|                    | controlled in override mode       |                    | 10000000           |                    |
|                    | (default=500, 0 to drop all).     |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| storm-control-mode | Set Storm control mode.           | option             | \-                 | global             |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | Option      | Description                                            |                         |
|                    | +=============+========================================================+                         |
|                    | | *global*    | Apply Global or switch level storm control             |                         |
|                    | |             | configuration.                                         |                         |
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | *override*  | Override global and switch level storm control to use  |                         |
|                    | |             | port level configuration.                              |                         |
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | *disabled*  | Disable storm control on the port entirely overriding  |                         |
|                    | |             | global and switch level storm control.                 |                         |
|                    | +-------------+--------------------------------------------------------+                         |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| unknown-multicast  | Enable/disable storm control to   | option             | \-                 | disable            |
|                    | drop/allow unknown multicast      |                    |                    |                    |
|                    | traffic in override mode.         |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | Option      | Description                                            |                         |
|                    | +=============+========================================================+                         |
|                    | | *enable*    | Enable storm control for unknown multicast traffic to  |                         |
|                    | |             | drop packets which exceed configured rate limits.      |                         |
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | *disable*   | Disable storm control for unknown multicast traffic to |                         |
|                    | |             | allow all packets.                                     |                         |
|                    | +-------------+--------------------------------------------------------+                         |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| unknown-unicast    | Enable/disable storm control to   | option             | \-                 | disable            |
|                    | drop/allow unknown unicast        |                    |                    |                    |
|                    | traffic in override mode.         |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | Option      | Description                                            |                         |
|                    | +=============+========================================================+                         |
|                    | | *enable*    | Enable storm control for unknown unicast traffic to    |                         |
|                    | |             | drop packets which exceed configured rate limits.      |                         |
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | *disable*   | Disable storm control for unknown unicast traffic to   |                         |
|                    | |             | allow all packets.                                     |                         |
|                    | +-------------+--------------------------------------------------------+                         |
+--------------------+--------------------------------------------------------------------------------------------------+

