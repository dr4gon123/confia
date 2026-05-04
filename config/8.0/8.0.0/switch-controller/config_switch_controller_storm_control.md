# config switch-controller storm-control

Configure FortiSwitch storm control.

## Syntax

```
config switch-controller storm-control
    Description: Configure FortiSwitch storm control.
    set broadcast [enable|disable]
    set burst-size-level {integer}
    set rate {integer}
    set unknown-multicast [enable|disable]
    set unknown-unicast [enable|disable]
end
```

## Parameters

+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter         | Description                       | Type               | Size               | Default            |
+===================+===================================+====================+====================+====================+
| broadcast         | Enable/disable storm control to   | option             | \-                 | disable            |
|                   | drop broadcast traffic.           |                    |                    |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                   | +-------------+--------------------------------------------------------+                         |
|                   | | Option      | Description                                            |                         |
|                   | +=============+========================================================+                         |
|                   | | *enable*    | Enable broadcast storm control.                        |                         |
|                   | +-------------+--------------------------------------------------------+                         |
|                   | | *disable*   | Disable broadcast storm control.                       |                         |
|                   | +-------------+--------------------------------------------------------+                         |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| burst-size-level  | Increase level to handle bursty   | integer            | Minimum value: 0   | 0                  |
|                   | traffic (0 - 4, default = 0).     |                    | Maximum value: 4   |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| rate              | Rate in packets per second at     | integer            | Minimum value: 0   | 500                |
|                   | which storm control drops excess  |                    | Maximum value:     |                    |
|                   | traffic(0-10000000, default=500,  |                    | 10000000           |                    |
|                   | drop-all=0).                      |                    |                    |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| unknown-multicast | Enable/disable storm control to   | option             | \-                 | disable            |
|                   | drop unknown multicast traffic.   |                    |                    |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                   | +-------------+--------------------------------------------------------+                         |
|                   | | Option      | Description                                            |                         |
|                   | +=============+========================================================+                         |
|                   | | *enable*    | Enable unknown multicast storm control.                |                         |
|                   | +-------------+--------------------------------------------------------+                         |
|                   | | *disable*   | Disable unknown multicast storm control.               |                         |
|                   | +-------------+--------------------------------------------------------+                         |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| unknown-unicast   | Enable/disable storm control to   | option             | \-                 | disable            |
|                   | drop unknown unicast traffic.     |                    |                    |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                   | +-------------+--------------------------------------------------------+                         |
|                   | | Option      | Description                                            |                         |
|                   | +=============+========================================================+                         |
|                   | | *enable*    | Enable unknown unicast storm control.                  |                         |
|                   | +-------------+--------------------------------------------------------+                         |
|                   | | *disable*   | Disable unknown unicast storm control.                 |                         |
|                   | +-------------+--------------------------------------------------------+                         |
+-------------------+--------------------------------------------------------------------------------------------------+

