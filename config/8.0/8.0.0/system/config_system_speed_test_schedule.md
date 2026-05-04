# config system speed-test-schedule

Speed test schedule for each interface.

## Syntax

```
config system speed-test-schedule
    Description: Speed test schedule for each interface.
    edit <interface>
        set ctrl-port {integer}
        set diffserv {user}
        set dynamic-server [disable|enable]
        set expected-inbandwidth-maximum {integer}
        set expected-inbandwidth-minimum {integer}
        set expected-outbandwidth-maximum {integer}
        set expected-outbandwidth-minimum {integer}
        set legacy-server-mode [disable|enable]
        set mode [UDP|TCP|...]
        set retries {integer}
        set retry-pause {integer}
        set schedules <name1>, <name2>, ...
        set server-name {string}
        set server-port {integer}
        set status [disable|enable]
        set update-bandwidth-limit-unit [value|percentage]
        set update-inbandwidth [disable|enable]
        set update-inbandwidth-maximum {integer}
        set update-inbandwidth-minimum {integer}
        set update-interface-shaping [disable|enable]
        set update-outbandwidth [disable|enable]
        set update-outbandwidth-maximum {integer}
        set update-outbandwidth-minimum {integer}
        set update-shaper [disable|local|...]
    next
end
```

## Parameters

+-------------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| Parameter                     | Description                       | Type                | Size                | Default             |
+===============================+===================================+=====================+=====================+=====================+
| ctrl-port                     | Port of the controller to get     | integer             | Minimum value: 1    | 5200                |
|                               | access token.                     |                     | Maximum value:      |                     |
|                               |                                   |                     | 65535               |                     |
+-------------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| diffserv                      | DSCP used for speed test.         | user                | Not Specified       |                     |
+-------------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| dynamic-server                | Enable/disable dynamic server     | option              | \-                  | disable             |
|                               | option.                           |                     |                     |                     |
+-------------------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                               | +-------------+--------------------------------------------------------+                            |
|                               | | Option      | Description                                            |                            |
|                               | +=============+========================================================+                            |
|                               | | *disable*   | Disable dynamic server.                                |                            |
|                               | +-------------+--------------------------------------------------------+                            |
|                               | | *enable*    | Enable dynamic server. The speed test server will be   |                            |
|                               | |             | found automatically.                                   |                            |
|                               | +-------------+--------------------------------------------------------+                            |
+-------------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| expected-inbandwidth-maximum  | Set the maximum inbandwidth       | integer             | Minimum value: 0    | 0                   |
| \*                            | threshold for applying speedtest  |                     | Maximum value:      |                     |
|                               | results on shaping-profile.       |                     | 16776000            |                     |
+-------------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| expected-inbandwidth-minimum  | Set the minimum inbandwidth       | integer             | Minimum value: 0    | 0                   |
| \*                            | threshold for applying speedtest  |                     | Maximum value:      |                     |
|                               | results on shaping-profile.       |                     | 16776000            |                     |
+-------------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| expected-outbandwidth-maximum | Set the maximum outbandwidth      | integer             | Minimum value: 0    | 0                   |
| \*                            | threshold for applying speedtest  |                     | Maximum value:      |                     |
|                               | results on shaping-profile.       |                     | 16776000            |                     |
+-------------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| expected-outbandwidth-minimum | Set the minimum outbandwidth      | integer             | Minimum value: 0    | 0                   |
| \*                            | threshold for applying speedtest  |                     | Maximum value:      |                     |
|                               | results on shaping-profile.       |                     | 16776000            |                     |
+-------------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| interface                     | Interface name.                   | string              | Maximum length: 35  |                     |
+-------------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| legacy-server-mode \*         | Legacy test server selection.     | option              | \-                  | disable             |
+-------------------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                               | +-------------+--------------------------------------------------------+                            |
|                               | | Option      | Description                                            |                            |
|                               | +=============+========================================================+                            |
|                               | | *disable*   | Disable legacy server selection mode.                  |                            |
|                               | +-------------+--------------------------------------------------------+                            |
|                               | | *enable*    | Enable legacy server selection mode.                   |                            |
|                               | +-------------+--------------------------------------------------------+                            |
+-------------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| mode                          | Protocol Auto(default), TCP or    | option              | \-                  | Auto                |
|                               | UDP used for speed test.          |                     |                     |                     |
+-------------------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                               | +-------------+--------------------------------------------------------+                            |
|                               | | Option      | Description                                            |                            |
|                               | +=============+========================================================+                            |
|                               | | *UDP*       | Protocol UDP for speed test.                           |                            |
|                               | +-------------+--------------------------------------------------------+                            |
|                               | | *TCP*       | Protocol TCP for speed test.                           |                            |
|                               | +-------------+--------------------------------------------------------+                            |
|                               | | *Auto*      | Dynamically selects TCP or UDP based on the speed test |                            |
|                               | |             | setting                                                |                            |
|                               | +-------------+--------------------------------------------------------+                            |
+-------------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| retries \*                    | Maximum number of times the       | integer             | Minimum value: 1    | 5                   |
|                               | FortiGate unit will attempt to    |                     | Maximum value: 10   |                     |
|                               | contact the same server before    |                     |                     |                     |
|                               | considering the speed test has    |                     |                     |                     |
|                               | failed (1 - 10, default = 5).     |                     |                     |                     |
+-------------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| retry-pause \*                | Number of seconds the FortiGate   | integer             | Minimum value: 60   | 300                 |
|                               | pauses between successive speed   |                     | Maximum value: 3600 |                     |
|                               | tests before trying a different   |                     |                     |                     |
|                               | server (60 - 3600, default =      |                     |                     |                     |
|                               | 300).                             |                     |                     |                     |
+-------------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| schedules `<name>`            | Schedules for the interface.      | string              | Maximum length: 31  |                     |
|                               |                                   |                     |                     |                     |
|                               | Name of a firewall recurring      |                     |                     |                     |
|                               | schedule.                         |                     |                     |                     |
+-------------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| server-name                   | Speed test server name.           | string              | Maximum length: 35  |                     |
+-------------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| server-port                   | Port of the server to run speed   | integer             | Minimum value: 1    | 5201                |
|                               | test.                             |                     | Maximum value:      |                     |
|                               |                                   |                     | 65535               |                     |
+-------------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| status                        | Enable/disable scheduled speed    | option              | \-                  | enable              |
|                               | test.                             |                     |                     |                     |
+-------------------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                               | +-------------+--------------------------------------------------------+                            |
|                               | | Option      | Description                                            |                            |
|                               | +=============+========================================================+                            |
|                               | | *disable*   | Disable scheduled speed test.                          |                            |
|                               | +-------------+--------------------------------------------------------+                            |
|                               | | *enable*    | Enable scheduled speed test.                           |                            |
|                               | +-------------+--------------------------------------------------------+                            |
+-------------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| update-bandwidth-limit-unit   | Set the update bandwidth limits   | option              | \-                  | value               |
| \*                            | by values in kbps or percentages  |                     |                     |                     |
|                               | of interface\'s bandwidth.        |                     |                     |                     |
+-------------------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                               | +--------------+--------------------------------------------------------+                           |
|                               | | Option       | Description                                            |                           |
|                               | +==============+========================================================+                           |
|                               | | *value*      | Set the update bandwidth limits by values in kbps.     |                           |
|                               | +--------------+--------------------------------------------------------+                           |
|                               | | *percentage* | Set the update bandwidth limits by percentages of the  |                           |
|                               | |              | interface\'s in/outbandwidth.                          |                           |
|                               | +--------------+--------------------------------------------------------+                           |
+-------------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| update-inbandwidth \*         | Enable/disable bypassing          | option              | \-                  | disable             |
|                               | interface\'s inbound bandwidth    |                     |                     |                     |
|                               | setting.                          |                     |                     |                     |
+-------------------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                               | +-------------+--------------------------------------------------------+                            |
|                               | | Option      | Description                                            |                            |
|                               | +=============+========================================================+                            |
|                               | | *disable*   | Honor interface\'s inbandwidth shaping.                |                            |
|                               | +-------------+--------------------------------------------------------+                            |
|                               | | *enable*    | Ignore interface\'s inbandwidth shaping.               |                            |
|                               | +-------------+--------------------------------------------------------+                            |
+-------------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| update-inbandwidth-maximum    | Maximum downloading bandwidth     | integer             | Minimum value: 0    | 0                   |
|                               | (kbps) or percentage of the       |                     | Maximum value:      |                     |
|                               | interface\'s inbandwidth to be    |                     | 16776000            |                     |
|                               | used in shaping.                  |                     |                     |                     |
+-------------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| update-inbandwidth-minimum    | Minimum downloading bandwidth     | integer             | Minimum value: 0    | 0                   |
|                               | (kbps) or percentage of the       |                     | Maximum value:      |                     |
|                               | interface\'s inbandwidth to be    |                     | 16776000            |                     |
|                               | used in shaping.                  |                     |                     |                     |
+-------------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| update-interface-shaping \*   | Enable/disable using the          | option              | \-                  | disable             |
|                               | speedtest results as reference    |                     |                     |                     |
|                               | for interface shaping (overriding |                     |                     |                     |
|                               | configured in/outbandwidth).      |                     |                     |                     |
+-------------------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                               | +-------------+--------------------------------------------------------+                            |
|                               | | Option      | Description                                            |                            |
|                               | +=============+========================================================+                            |
|                               | | *disable*   | Disable updating interface shaping.                    |                            |
|                               | +-------------+--------------------------------------------------------+                            |
|                               | | *enable*    | Enable updating interface shaping.                     |                            |
|                               | +-------------+--------------------------------------------------------+                            |
+-------------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| update-outbandwidth \*        | Enable/disable bypassing          | option              | \-                  | disable             |
|                               | interface\'s outbound bandwidth   |                     |                     |                     |
|                               | setting.                          |                     |                     |                     |
+-------------------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                               | +-------------+--------------------------------------------------------+                            |
|                               | | Option      | Description                                            |                            |
|                               | +=============+========================================================+                            |
|                               | | *disable*   | Honor interface\'s outbandwidth shaping.               |                            |
|                               | +-------------+--------------------------------------------------------+                            |
|                               | | *enable*    | Ignore updating interface\'s outbandwidth shaping.     |                            |
|                               | +-------------+--------------------------------------------------------+                            |
+-------------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| update-outbandwidth-maximum   | Maximum uploading bandwidth       | integer             | Minimum value: 0    | 0                   |
|                               | (kbps) or percentage of the       |                     | Maximum value:      |                     |
|                               | interface\'s outbandwidth to be   |                     | 16776000            |                     |
|                               | used in shaping.                  |                     |                     |                     |
+-------------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| update-outbandwidth-minimum   | Minimum uploading bandwidth       | integer             | Minimum value: 0    | 0                   |
|                               | (kbps) or percentage of the       |                     | Maximum value:      |                     |
|                               | interface\'s outbandwidth to be   |                     | 16776000            |                     |
|                               | used in shaping.                  |                     |                     |                     |
+-------------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| update-shaper \*              | Set egress shaper based on the    | option              | \-                  | disable             |
|                               | test result.                      |                     |                     |                     |
+-------------------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                               | +-------------+--------------------------------------------------------+                            |
|                               | | Option      | Description                                            |                            |
|                               | +=============+========================================================+                            |
|                               | | *disable*   | Disable updating egress shaper.                        |                            |
|                               | +-------------+--------------------------------------------------------+                            |
|                               | | *local*     | Update local-side egress shaper.                       |                            |
|                               | +-------------+--------------------------------------------------------+                            |
|                               | | *remote*    | Update remote-side egress shaper.                      |                            |
|                               | +-------------+--------------------------------------------------------+                            |
|                               | | *both*      | Update both local-side and remote-side egress shaper.  |                            |
|                               | +-------------+--------------------------------------------------------+                            |
+-------------------------------+-----------------------------------------------------------------------------------------------------+

