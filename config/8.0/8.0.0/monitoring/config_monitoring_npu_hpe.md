# config monitoring npu-hpe

Configure npu-hpe status monitoring.

## Syntax

```
config monitoring npu-hpe
    Description: Configure npu-hpe status monitoring.
    set interval {integer}
    set multipliers {user}
    set status [enable|disable]
end
```

## Parameters

+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter   | Description                       | Type               | Size               | Default            |
+=============+===================================+====================+====================+====================+
| interval    | HPE status check interval (1 - 60 | integer            | Minimum value: 1   | 1                  |
|             | seconds, default = 1 second).     |                    | Maximum value: 60  |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| multipliers | HPE type interval multipliers (12 | user               | Not Specified      |                    |
|             | integers from \<1\> to \<255\>,   |                    |                    |                    |
|             | default = 4, 4, 4, 4, 8, 8, 8, 8, |                    |                    |                    |
|             | 8, 8, 8, 8). An event log is      |                    |                    |                    |
|             | generated after every (interval   |                    |                    |                    |
|             | \* multiplier)seconds as          |                    |                    |                    |
|             | configured for any HPE type when  |                    |                    |                    |
|             | drops occur for that HPE type. An |                    |                    |                    |
|             | attack log is generated after     |                    |                    |                    |
|             | every (4 \* multiplier) number of |                    |                    |                    |
|             | continuous event logs.            |                    |                    |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| status      | Enable/disable HPE status         | option             | \-                 | disable            |
|             | monitoring.                       |                    |                    |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
|             | +-------------+--------------------------------------------------------+                         |
|             | | Option      | Description                                            |                         |
|             | +=============+========================================================+                         |
|             | | *enable*    | Enable setting.                                        |                         |
|             | +-------------+--------------------------------------------------------+                         |
|             | | *disable*   | Disable setting.                                       |                         |
|             | +-------------+--------------------------------------------------------+                         |
+-------------+--------------------------------------------------------------------------------------------------+

