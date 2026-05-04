# config switch-controller network-monitor-settings

Configure network monitor settings.

## Syntax

```
config switch-controller network-monitor-settings
    Description: Configure network monitor settings.
    set network-monitoring [enable|disable]
end
```

## Parameters

+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter          | Description                       | Type               | Size               | Default            |
+====================+===================================+====================+====================+====================+
| network-monitoring | Enable/disable passive gathering  | option             | \-                 | disable            |
|                    | of information by FortiSwitch     |                    |                    |                    |
|                    | units concerning other network    |                    |                    |                    |
|                    | devices.                          |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | Option      | Description                                            |                         |
|                    | +=============+========================================================+                         |
|                    | | *enable*    | Enable network monitoring on FortiSwitch.              |                         |
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | *disable*   | Disable network monitoring on FortiSwitch.             |                         |
|                    | +-------------+--------------------------------------------------------+                         |
+--------------------+--------------------------------------------------------------------------------------------------+

