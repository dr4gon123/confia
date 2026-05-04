# config switch-controller system

Configure system-wide switch controller settings.

## Syntax

```
config switch-controller system
    Description: Configure system-wide switch controller settings.
    set caputp-echo-interval {integer}
    set caputp-max-retransmit {integer}
    set data-sync-interval {integer}
    set dynamic-periodic-interval {integer}
    set iot-holdoff {integer}
    set iot-mac-idle {integer}
    set iot-scan-interval {integer}
    set iot-weight-threshold {integer}
    set nac-periodic-interval {integer}
    set parallel-process {integer}
    set parallel-process-override [disable|enable]
    set tunnel-mode [compatible|moderate|...]
end
```

## Parameters

+---------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| Parameter                 | Description                       | Type                | Size                | Default             |
+===========================+===================================+=====================+=====================+=====================+
| caputp-echo-interval      | Echo interval for the caputp echo | integer             | Minimum value: 8    | 30                  |
|                           | requests from swtp.               |                     | Maximum value: 600  |                     |
+---------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| caputp-max-retransmit     | Maximum retransmission count for  | integer             | Minimum value: 0    | 5                   |
|                           | the caputp tunnel packets.        |                     | Maximum value: 64   |                     |
+---------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| data-sync-interval        | Time interval between collection  | integer             | Minimum value: 30   | 60                  |
|                           | of switch data (30 - 1800 sec,    |                     | Maximum value: 1800 |                     |
|                           | default = 60, 0 = disable).       |                     |                     |                     |
+---------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| dynamic-periodic-interval | Periodic time interval to run     | integer             | Minimum value: 5    | 60                  |
|                           | Dynamic port policy engine (5 -   |                     | Maximum value: 180  |                     |
|                           | 180 sec, default = 60).           |                     |                     |                     |
+---------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| iot-holdoff               | MAC entry\'s creation time. Time  | integer             | Minimum value: 0    | 5                   |
|                           | must be greater than this value   |                     | Maximum value:      |                     |
|                           | for an entry to be created (0 -   |                     | 10080               |                     |
|                           | 10080 mins, default = 5 mins).    |                     |                     |                     |
+---------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| iot-mac-idle              | MAC entry\'s idle time. MAC entry | integer             | Minimum value: 0    | 1440                |
|                           | is removed after this value (0 -  |                     | Maximum value:      |                     |
|                           | 10080 mins, default = 1440 mins). |                     | 10080               |                     |
+---------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| iot-scan-interval         | IoT scan interval (2 - 10080      | integer             | Minimum value: 2    | 60                  |
|                           | mins, default = 60 mins, 0 =      |                     | Maximum value:      |                     |
|                           | disable).                         |                     | 10080               |                     |
+---------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| iot-weight-threshold      | MAC entry\'s confidence value.    | integer             | Minimum value: 0    | 1                   |
|                           | Value is re-queried when below    |                     | Maximum value: 255  |                     |
|                           | this value (default = 1, 0 =      |                     |                     |                     |
|                           | disable).                         |                     |                     |                     |
+---------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| nac-periodic-interval     | Periodic time interval to run NAC | integer             | Minimum value: 5    | 60                  |
|                           | engine (5 - 180 sec, default =    |                     | Maximum value: 180  |                     |
|                           | 60).                              |                     |                     |                     |
+---------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| parallel-process          | Maximum number of parallel        | integer             | Minimum value: 1    | 1                   |
|                           | processes.                        |                     | Maximum value: 128  |                     |
|                           |                                   |                     | \*\*                |                     |
+---------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| parallel-process-override | Enable/disable parallel process   | option              | \-                  | disable             |
|                           | override.                         |                     |                     |                     |
+---------------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                           | +-------------+--------------------------------------------------------+                            |
|                           | | Option      | Description                                            |                            |
|                           | +=============+========================================================+                            |
|                           | | *disable*   | Disable maximum parallel process override.             |                            |
|                           | +-------------+--------------------------------------------------------+                            |
|                           | | *enable*    | Enable maximum parallel process override.              |                            |
|                           | +-------------+--------------------------------------------------------+                            |
+---------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| tunnel-mode               | Configure tunnel mode security    | option              | \-                  | compatible          |
|                           | (default = compatible).           |                     |                     |                     |
+---------------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                           | +--------------+--------------------------------------------------------+                           |
|                           | | Option       | Description                                            |                           |
|                           | +==============+========================================================+                           |
|                           | | *compatible* | Least restrictive. Supports the lowest levels of       |                           |
|                           | |              | security but highest compatibility between all         |                           |
|                           | |              | FortiSwitch and FortiGate devices. 3rd party           |                           |
|                           | |              | certificates permitted.                                |                           |
|                           | +--------------+--------------------------------------------------------+                           |
|                           | | *moderate*   | Moderate level of security. 3rd party certificates     |                           |
|                           | |              | permitted.                                             |                           |
|                           | +--------------+--------------------------------------------------------+                           |
|                           | | *strict*     | Highest level of security requirements. If enabled,    |                           |
|                           | |              | the FortiGate device follows the same security mode    |                           |
|                           | |              | requirements as in FIPS/CC mode.                       |                           |
|                           | +--------------+--------------------------------------------------------+                           |
+---------------------------+-----------------------------------------------------------------------------------------------------+

