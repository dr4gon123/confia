# config wireless-controller arrp-profile

Configure WiFi Automatic Radio Resource Provisioning (ARRP) profiles.

## Syntax

```
config wireless-controller arrp-profile
    Description: Configure WiFi Automatic Radio Resource Provisioning (ARRP) profiles.
    edit <name>
        set comment {var-string}
        set darrp-optimize {integer}
        set darrp-optimize-schedules <name1>, <name2>, ...
        set include-dfs-channel [enable|disable]
        set include-weather-channel [enable|disable]
        set monitor-period {integer}
        set override-darrp-optimize [enable|disable]
        set selection-period {integer}
        set threshold-ap {integer}
        set threshold-channel-load {integer}
        set threshold-noise-floor {string}
        set threshold-rx-errors {integer}
        set threshold-spectral-rssi {string}
        set threshold-tx-retries {integer}
        set weight-channel-load {integer}
        set weight-dfs-channel {integer}
        set weight-managed-ap {integer}
        set weight-noise-floor {integer}
        set weight-rogue-ap {integer}
        set weight-spectral-rssi {integer}
        set weight-weather-channel {integer}
    next
end
```

## Parameters

+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter                | Description                       | Type               | Size               | Default            |
+==========================+===================================+====================+====================+====================+
| comment                  | Comment.                          | var-string         | Maximum length:    |                    |
|                          |                                   |                    | 255                |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| darrp-optimize           | Time for running Distributed      | integer            | Minimum value: 0   | 86400              |
|                          | Automatic Radio Resource          |                    | Maximum value:     |                    |
|                          | Provisioning (DARRP)              |                    | 86400              |                    |
|                          | optimizations (0 - 86400 sec,     |                    |                    |                    |
|                          | default = 86400, 0 = disable).    |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| darrp-optimize-schedules | Firewall schedules for DARRP      | string             | Maximum length: 35 |                    |
| `<name>`                 | running time. DARRP will run      |                    |                    |                    |
|                          | periodically based on             |                    |                    |                    |
|                          | darrp-optimize within the         |                    |                    |                    |
|                          | schedules. Separate multiple      |                    |                    |                    |
|                          | schedule names with a space.      |                    |                    |                    |
|                          |                                   |                    |                    |                    |
|                          | Schedule name.                    |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| include-dfs-channel      | Enable/disable use of DFS channel | option             | \-                 | enable             |
|                          | in DARRP channel selection phase  |                    |                    |                    |
|                          | 1 (default = disable).            |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                          | +-------------+--------------------------------------------------------+                         |
|                          | | Option      | Description                                            |                         |
|                          | +=============+========================================================+                         |
|                          | | *enable*    | Include DFS channel in darrp channel selection phase   |                         |
|                          | |             | 1.                                                     |                         |
|                          | +-------------+--------------------------------------------------------+                         |
|                          | | *disable*   | Exclude DFS channel in darrp channel selection phase   |                         |
|                          | |             | 1.                                                     |                         |
|                          | +-------------+--------------------------------------------------------+                         |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| include-weather-channel  | Enable/disable use of weather     | option             | \-                 | enable             |
|                          | channel in DARRP channel          |                    |                    |                    |
|                          | selection phase 1 (default =      |                    |                    |                    |
|                          | disable).                         |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                          | +-------------+--------------------------------------------------------+                         |
|                          | | Option      | Description                                            |                         |
|                          | +=============+========================================================+                         |
|                          | | *enable*    | Include weather channel in darrp channel selection     |                         |
|                          | |             | phase 1.                                               |                         |
|                          | +-------------+--------------------------------------------------------+                         |
|                          | | *disable*   | Exclude weather channel in darrp channel selection     |                         |
|                          | |             | phase 1.                                               |                         |
|                          | +-------------+--------------------------------------------------------+                         |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| monitor-period           | Period in seconds to measure      | integer            | Minimum value: 0   | 300                |
|                          | average transmit retries and      |                    | Maximum value:     |                    |
|                          | receive errors (default = 300).   |                    | 65535              |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| name                     | WiFi ARRP profile name.           | string             | Maximum length: 35 |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| override-darrp-optimize  | Enable to override setting        | option             | \-                 | disable            |
|                          | darrp-optimize and                |                    |                    |                    |
|                          | darrp-optimize-schedules (default |                    |                    |                    |
|                          | = disable).                       |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                          | +-------------+--------------------------------------------------------+                         |
|                          | | Option      | Description                                            |                         |
|                          | +=============+========================================================+                         |
|                          | | *enable*    | Override setting darrp-optimize and                    |                         |
|                          | |             | darrp-optimize-schedules.                              |                         |
|                          | +-------------+--------------------------------------------------------+                         |
|                          | | *disable*   | Use setting darrp-optimize and                         |                         |
|                          | |             | darrp-optimize-schedules.                              |                         |
|                          | +-------------+--------------------------------------------------------+                         |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| selection-period         | Period in seconds to measure      | integer            | Minimum value: 0   | 3600               |
|                          | average channel load, noise       |                    | Maximum value:     |                    |
|                          | floor, spectral RSSI (default =   |                    | 65535              |                    |
|                          | 3600).                            |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| threshold-ap             | Threshold to reject channel in    | integer            | Minimum value: 0   | 250                |
|                          | DARRP channel selection phase 1   |                    | Maximum value: 500 |                    |
|                          | due to surrounding APs (0 - 500,  |                    |                    |                    |
|                          | default = 250).                   |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| threshold-channel-load   | Threshold in percentage to reject | integer            | Minimum value: 0   | 60                 |
|                          | channel in DARRP channel          |                    | Maximum value: 100 |                    |
|                          | selection phase 1 due to channel  |                    |                    |                    |
|                          | load (0 - 100, default = 60).     |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| threshold-noise-floor    | Threshold in dBm to reject        | string             | Maximum length: 7  | -85                |
|                          | channel in DARRP channel          |                    |                    |                    |
|                          | selection phase 1 due to noise    |                    |                    |                    |
|                          | floor (-95 to -20, default =      |                    |                    |                    |
|                          | -85).                             |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| threshold-rx-errors      | Threshold in percentage for       | integer            | Minimum value: 0   | 50                 |
|                          | receive errors to trigger channel |                    | Maximum value: 100 |                    |
|                          | reselection in DARRP monitor      |                    |                    |                    |
|                          | stage (0 - 100, default = 50).    |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| threshold-spectral-rssi  | Threshold in dBm to reject        | string             | Maximum length: 7  | -65                |
|                          | channel in DARRP channel          |                    |                    |                    |
|                          | selection phase 1 due to spectral |                    |                    |                    |
|                          | RSSI (-95 to -20, default = -65). |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| threshold-tx-retries     | Threshold in percentage for       | integer            | Minimum value: 0   | 300                |
|                          | transmit retries to trigger       |                    | Maximum value:     |                    |
|                          | channel reselection in DARRP      |                    | 1000               |                    |
|                          | monitor stage (0 - 1000, default  |                    |                    |                    |
|                          | = 300).                           |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| weight-channel-load      | Weight in DARRP channel score     | integer            | Minimum value: 0   | 20                 |
|                          | calculation for channel load (0 - |                    | Maximum value:     |                    |
|                          | 2000, default = 20).              |                    | 2000               |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| weight-dfs-channel       | Weight in DARRP channel score     | integer            | Minimum value: 0   | 0                  |
|                          | calculation for DFS channel (0 -  |                    | Maximum value:     |                    |
|                          | 2000, default = 500).             |                    | 2000               |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| weight-managed-ap        | Weight in DARRP channel score     | integer            | Minimum value: 0   | 50                 |
|                          | calculation for managed APs (0 -  |                    | Maximum value:     |                    |
|                          | 2000, default = 50).              |                    | 2000               |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| weight-noise-floor       | Weight in DARRP channel score     | integer            | Minimum value: 0   | 40                 |
|                          | calculation for noise floor (0 -  |                    | Maximum value:     |                    |
|                          | 2000, default = 40).              |                    | 2000               |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| weight-rogue-ap          | Weight in DARRP channel score     | integer            | Minimum value: 0   | 10                 |
|                          | calculation for rogue APs (0 -    |                    | Maximum value:     |                    |
|                          | 2000, default = 10).              |                    | 2000               |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| weight-spectral-rssi     | Weight in DARRP channel score     | integer            | Minimum value: 0   | 40                 |
|                          | calculation for spectral RSSI     |                    | Maximum value:     |                    |
|                          | (0 - 2000, default = 40).         |                    | 2000               |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| weight-weather-channel   | Weight in DARRP channel score     | integer            | Minimum value: 0   | 0                  |
|                          | calculation for weather channel   |                    | Maximum value:     |                    |
|                          | (0 - 2000, default = 1000).       |                    | 2000               |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+

