# config system vin-alarm

Configure vin alarm settings.

## Syntax

```
config system vin-alarm
    Description: Configure vin alarm settings.
    set psu-1-initial-voltage {integer}
    set psu-1-threshold-low-percent {integer}
    set psu-2-initial-voltage {integer}
    set psu-2-threshold-low-percent {integer}
    set status [disable|enable]
end
```

## Parameters

+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter                   | Description                       | Type               | Size               | Default            |
+=============================+===================================+====================+====================+====================+
| psu-1-initial-voltage       | Initial voltage for the first PSU | integer            | Minimum value: 10  | 0                  |
|                             |                                   |                    | Maximum value: 125 |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| psu-1-threshold-low-percent | Percentage threshold at which the | integer            | Minimum value: 1   | 80                 |
|                             | first PSU voltage drops to        |                    | Maximum value: 99  |                    |
|                             | trigger a low voltage alarm       |                    |                    |                    |
|                             | (default = 80)                    |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| psu-2-initial-voltage       | Initial voltage for the second    | integer            | Minimum value: 10  | 0                  |
|                             | PSU                               |                    | Maximum value: 125 |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| psu-2-threshold-low-percent | Percentage threshold at which the | integer            | Minimum value: 1   | 80                 |
|                             | second PSU voltage drops to       |                    | Maximum value: 99  |                    |
|                             | trigger a low voltage alarm       |                    |                    |                    |
|                             | (default = 80)                    |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| status                      | Enable/disable vin alarm.         | option             | \-                 | disable            |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *disable*   | Disable vin alarm.                                     |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *enable*    | Enable vin alarm.                                      |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+--------------------------------------------------------------------------------------------------+

