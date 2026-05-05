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
| darrp-optimize           | Time for running Dynamic          | integer            | Minimum value: 0   | 86400              |
|                          | Automatic Radio Resource          |                    | Maximum value:     |                    |
|                          | Provisioning.                     |                    | 86400              |                    |
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
|                          | 1.                                |                    |                    |                    |
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
|                          | selection phase 1.                |                    |                    |                    |
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
|                          | receive errors.                   |                    | 65535              |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| name                     | WiFi ARRP profile name.           | string             | Maximum length: 35 |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| override-darrp-optimize  | Enable to override setting        | option             | \-                 | disable            |
|                          | darrp-optimize and                |                    |                    |                    |
|                          | darrp-optimize-schedules.         |                    |                    |                    |
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
|                          | floor, spectral RSSI.             |                    | 65535              |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| threshold-ap             | Threshold to reject channel in    | integer            | Minimum value: 0   | 250                |
|                          | DARRP channel selection phase 1   |                    | Maximum value: 500 |                    |
|                          | due to surrounding APs.           |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| threshold-channel-load   | Threshold in percentage to reject | integer            | Minimum value: 0   | 60                 |
|                          | channel in DARRP channel          |                    | Maximum value: 100 |                    |
|                          | selection phase 1 due to channel  |                    |                    |                    |
|                          | load.                             |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| threshold-noise-floor    | Threshold in dBm to reject        | string             | Maximum length: 7  | -85                |
|                          | channel in DARRP channel          |                    |                    |                    |
|                          | selection phase 1 due to noise    |                    |                    |                    |
|                          | floor.                            |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| threshold-rx-errors      | Threshold in percentage for       | integer            | Minimum value: 0   | 50                 |
|                          | receive errors to trigger channel |                    | Maximum value: 100 |                    |
|                          | reselection in DARRP monitor      |                    |                    |                    |
|                          | stage.                            |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| threshold-spectral-rssi  | Threshold in dBm to reject        | string             | Maximum length: 7  | -65                |
|                          | channel in DARRP channel          |                    |                    |                    |
|                          | selection phase 1 due to spectral |                    |                    |                    |
|                          | RSSI.                             |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| threshold-tx-retries     | Threshold in percentage for       | integer            | Minimum value: 0   | 300                |
|                          | transmit retries to trigger       |                    | Maximum value:     |                    |
|                          | channel reselection in DARRP      |                    | 1000               |                    |
|                          | monitor stage.                    |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| weight-channel-load      | Weight in DARRP channel score     | integer            | Minimum value: 0   | 20                 |
|                          | calculation for channel load.     |                    | Maximum value:     |                    |
|                          |                                   |                    | 2000               |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| weight-dfs-channel       | Weight in DARRP channel score     | integer            | Minimum value: 0   | 0                  |
|                          | calculation for DFS channel.      |                    | Maximum value:     |                    |
|                          |                                   |                    | 2000               |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| weight-managed-ap        | Weight in DARRP channel score     | integer            | Minimum value: 0   | 50                 |
|                          | calculation for managed APs.      |                    | Maximum value:     |                    |
|                          |                                   |                    | 2000               |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| weight-noise-floor       | Weight in DARRP channel score     | integer            | Minimum value: 0   | 40                 |
|                          | calculation for noise floor.      |                    | Maximum value:     |                    |
|                          |                                   |                    | 2000               |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| weight-rogue-ap          | Weight in DARRP channel score     | integer            | Minimum value: 0   | 10                 |
|                          | calculation for rogue APs.        |                    | Maximum value:     |                    |
|                          |                                   |                    | 2000               |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| weight-spectral-rssi     | Weight in DARRP channel score     | integer            | Minimum value: 0   | 40                 |
|                          | calculation for spectral RSSI.    |                    | Maximum value:     |                    |
|                          |                                   |                    | 2000               |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| weight-weather-channel   | Weight in DARRP channel score     | integer            | Minimum value: 0   | 0                  |
|                          | calculation for weather channel.  |                    | Maximum value:     |                    |
|                          |                                   |                    | 2000               |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+

