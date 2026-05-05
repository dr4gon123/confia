# config system speed-test-schedule

Speed test schedule for each interface.

## Syntax

```
config system speed-test-schedule
    Description: Speed test schedule for each interface.
    edit <interface>
        set diffserv {user}
        set dynamic-server [disable|enable]
        set mode [UDP|TCP|...]
        set schedules <name1>, <name2>, ...
        set server-name {string}
        set status [disable|enable]
        set update-inbandwidth [disable|enable]
        set update-inbandwidth-maximum {integer}
        set update-inbandwidth-minimum {integer}
        set update-outbandwidth [disable|enable]
        set update-outbandwidth-maximum {integer}
        set update-outbandwidth-minimum {integer}
    next
end
```

## Parameters

+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter                   | Description                       | Type               | Size               | Default            |
+=============================+===================================+====================+====================+====================+
| diffserv                    | DSCP used for speed test.         | user               | Not Specified      |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| dynamic-server              | Enable/disable dynamic server     | option             | \-                 | disable            |
|                             | option.                           |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *disable*   | Disable dynamic server.                                |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *enable*    | Enable dynamic server.The speed test server will be    |                         |
|                             | |             | found automatically.                                   |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| interface                   | Interface name.                   | string             | Maximum length: 35 |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| mode                        | Protocol Auto, TCP or UDP used    | option             | \-                 | Auto               |
|                             | for speed test.                   |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *UDP*       | Protocol UDP for speed test.                           |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *TCP*       | Protocol TCP for speed test.                           |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *Auto*      | Dynamically selects TCP or UDP based on the speed test |                         |
|                             | |             | setting                                                |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| schedules `<name>`          | Schedules for the interface.      | string             | Maximum length: 31 |                    |
|                             |                                   |                    |                    |                    |
|                             | Name of a firewall recurring      |                    |                    |                    |
|                             | schedule.                         |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| server-name                 | Speed test server name.           | string             | Maximum length: 35 |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| status                      | Enable/disable scheduled speed    | option             | \-                 | enable             |
|                             | test.                             |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *disable*   | Disable scheduled speed test.                          |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *enable*    | Enable scheduled speed test.                           |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| update-inbandwidth          | Enable/disable bypassing          | option             | \-                 | disable            |
|                             | interface\'s inbound bandwidth    |                    |                    |                    |
|                             | setting.                          |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *disable*   | Honor interface\'s inbandwidth shaping.                |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *enable*    | Ignore interface\'s inbandwidth shaping.               |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| update-inbandwidth-maximum  | Maximum downloading bandwidth     | integer            | Minimum value: 0   | 0                  |
|                             | (kbps) to be used in a speed      |                    | Maximum value:     |                    |
|                             | test.                             |                    | 16776000           |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| update-inbandwidth-minimum  | Minimum downloading bandwidth     | integer            | Minimum value: 0   | 0                  |
|                             | (kbps) to be considered           |                    | Maximum value:     |                    |
|                             | effective.                        |                    | 16776000           |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| update-outbandwidth         | Enable/disable bypassing          | option             | \-                 | disable            |
|                             | interface\'s outbound bandwidth   |                    |                    |                    |
|                             | setting.                          |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *disable*   | Honor interface\'s outbandwidth shaping.               |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *enable*    | Ignore updating interface\'s outbandwidth shaping.     |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| update-outbandwidth-maximum | Maximum uploading bandwidth       | integer            | Minimum value: 0   | 0                  |
|                             | (kbps) to be used in a speed      |                    | Maximum value:     |                    |
|                             | test.                             |                    | 16776000           |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| update-outbandwidth-minimum | Minimum uploading bandwidth       | integer            | Minimum value: 0   | 0                  |
|                             | (kbps) to be considered           |                    | Maximum value:     |                    |
|                             | effective.                        |                    | 16776000           |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+

