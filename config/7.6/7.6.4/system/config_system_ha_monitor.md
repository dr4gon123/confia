# config system ha-monitor

Configure HA monitor.

## Syntax

```
config system ha-monitor
    Description: Configure HA monitor.
    set monitor-vlan [enable|disable]
    set vlan-hb-interval {integer}
    set vlan-hb-lost-threshold {integer}
end
```

## Parameters

+------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter              | Description                       | Type               | Size               | Default            |
+========================+===================================+====================+====================+====================+
| monitor-vlan           | Enable/disable monitor VLAN       | option             | \-                 | disable            |
|                        | interfaces.                       |                    |                    |                    |
+------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                        | +-------------+--------------------------------------------------------+                         |
|                        | | Option      | Description                                            |                         |
|                        | +=============+========================================================+                         |
|                        | | *enable*    | Enable monitor VLAN interfaces.                        |                         |
|                        | +-------------+--------------------------------------------------------+                         |
|                        | | *disable*   | Disable monitor VLAN interfaces.                       |                         |
|                        | +-------------+--------------------------------------------------------+                         |
+------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| vlan-hb-interval       | Configure heartbeat interval      | integer            | Minimum value: 1   | 5                  |
|                        | (seconds).                        |                    | Maximum value: 30  |                    |
+------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| vlan-hb-lost-threshold | VLAN lost heartbeat threshold     | integer            | Minimum value: 1   | 3                  |
|                        | (1 - 60).                         |                    | Maximum value: 60  |                    |
+------------------------+-----------------------------------+--------------------+--------------------+--------------------+

