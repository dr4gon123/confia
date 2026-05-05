# config wireless-controller qos-profile

Configure WiFi quality of service (QoS) profiles.

## Syntax

```
config wireless-controller qos-profile
    Description: Configure WiFi quality of service (QoS) profiles.
    edit <name>
        set bandwidth-admission-control [enable|disable]
        set bandwidth-capacity {integer}
        set burst [enable|disable]
        set call-admission-control [enable|disable]
        set call-capacity {integer}
        set comment {string}
        set downlink {integer}
        set downlink-sta {integer}
        set dscp-wmm-be <id1>, <id2>, ...
        set dscp-wmm-bk <id1>, <id2>, ...
        set dscp-wmm-mapping [enable|disable]
        set dscp-wmm-vi <id1>, <id2>, ...
        set dscp-wmm-vo <id1>, <id2>, ...
        set uplink {integer}
        set uplink-sta {integer}
        set wmm [enable|disable]
        set wmm-be-dscp {integer}
        set wmm-bk-dscp {integer}
        set wmm-dscp-marking [enable|disable]
        set wmm-uapsd [enable|disable]
        set wmm-vi-dscp {integer}
        set wmm-vo-dscp {integer}
    next
end
```

## Parameters

+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter                   | Description                       | Type               | Size               | Default            |
+=============================+===================================+====================+====================+====================+
| bandwidth-admission-control | Enable/disable WMM bandwidth      | option             | \-                 | disable            |
|                             | admission control.                |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable WMM bandwidth admission control.                |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable WMM bandwidth admission control.               |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| bandwidth-capacity          | Maximum bandwidth capacity        | integer            | Minimum value: 1   | 2000               |
|                             | allowed.                          |                    | Maximum value:     |                    |
|                             |                                   |                    | 600000             |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| burst                       | Enable/disable client rate burst. | option             | \-                 | disable            |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable client rate burst.                              |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable client rate burst.                             |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| call-admission-control      | Enable/disable WMM call admission | option             | \-                 | disable            |
|                             | control.                          |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable WMM call admission control.                     |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable WMM call admission control.                    |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| call-capacity               | Maximum number of Voice over      | integer            | Minimum value: 0   | 10                 |
|                             | WLAN.                             |                    | Maximum value: 60  |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| comment                     | Comment.                          | string             | Maximum length: 63 |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| downlink                    | Maximum downlink bandwidth for    | integer            | Minimum value: 0   | 0                  |
|                             | Virtual Access Points.            |                    | Maximum value:     |                    |
|                             |                                   |                    | 2097152            |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| downlink-sta                | Maximum downlink bandwidth for    | integer            | Minimum value: 0   | 0                  |
|                             | clients.                          |                    | Maximum value:     |                    |
|                             |                                   |                    | 2097152            |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| dscp-wmm-be `<id>`          | DSCP mapping for best effort      | integer            | Minimum value: 0   |                    |
|                             | access (default = 0 24).          |                    | Maximum value: 63  |                    |
|                             |                                   |                    |                    |                    |
|                             | DSCP WMM mapping numbers (0 -     |                    |                    |                    |
|                             | 63).                              |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| dscp-wmm-bk `<id>`          | DSCP mapping for background       | integer            | Minimum value: 0   |                    |
|                             | access (default = 8 16).          |                    | Maximum value: 63  |                    |
|                             |                                   |                    |                    |                    |
|                             | DSCP WMM mapping numbers (0 -     |                    |                    |                    |
|                             | 63).                              |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| dscp-wmm-mapping            | Enable/disable Differentiated     | option             | \-                 | disable            |
|                             | Services Code Point (DSCP)        |                    |                    |                    |
|                             | mapping.                          |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable Differentiated Services Code Point (DSCP)       |                         |
|                             | |             | mapping.                                               |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable Differentiated Services Code Point (DSCP)      |                         |
|                             | |             | mapping.                                               |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| dscp-wmm-vi `<id>`          | DSCP mapping for video access     | integer            | Minimum value: 0   |                    |
|                             | (default = 32 40).                |                    | Maximum value: 63  |                    |
|                             |                                   |                    |                    |                    |
|                             | DSCP WMM mapping numbers (0 -     |                    |                    |                    |
|                             | 63).                              |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| dscp-wmm-vo `<id>`          | DSCP mapping for voice access     | integer            | Minimum value: 0   |                    |
|                             | (default = 48 56).                |                    | Maximum value: 63  |                    |
|                             |                                   |                    |                    |                    |
|                             | DSCP WMM mapping numbers (0 -     |                    |                    |                    |
|                             | 63).                              |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| name                        | WiFi QoS profile name.            | string             | Maximum length: 35 |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| uplink                      | Maximum uplink bandwidth for      | integer            | Minimum value: 0   | 0                  |
|                             | Virtual Access Points.            |                    | Maximum value:     |                    |
|                             |                                   |                    | 2097152            |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| uplink-sta                  | Maximum uplink bandwidth for      | integer            | Minimum value: 0   | 0                  |
|                             | clients.                          |                    | Maximum value:     |                    |
|                             |                                   |                    | 2097152            |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| wmm                         | Enable/disable WiFi multi-media   | option             | \-                 | enable             |
|                             | (WMM) control.                    |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable WiFi multi-media (WMM) control.                 |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable WiFi multi-media (WMM) control.                |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| wmm-be-dscp                 | DSCP marking for best effort      | integer            | Minimum value: 0   | 0                  |
|                             | access.                           |                    | Maximum value: 63  |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| wmm-bk-dscp                 | DSCP marking for background       | integer            | Minimum value: 0   | 8                  |
|                             | access.                           |                    | Maximum value: 63  |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| wmm-dscp-marking            | Enable/disable WMM Differentiated | option             | \-                 | disable            |
|                             | Services Code Point (DSCP)        |                    |                    |                    |
|                             | marking.                          |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable WMM Differentiated Services Code Point (DSCP)   |                         |
|                             | |             | marking.                                               |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable WMM Differentiated Services Code Point (DSCP)  |                         |
|                             | |             | marking.                                               |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| wmm-uapsd                   | Enable/disable WMM Unscheduled    | option             | \-                 | enable             |
|                             | Automatic Power Save Delivery     |                    |                    |                    |
|                             | (U-APSD) power save mode.         |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable WMM Unscheduled Automatic Power Save Delivery   |                         |
|                             | |             | (U-APSD) power save mode.                              |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable WMM Unscheduled Automatic Power Save Delivery  |                         |
|                             | |             | (U-APSD) power save mode.                              |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| wmm-vi-dscp                 | DSCP marking for video access.    | integer            | Minimum value: 0   | 32                 |
|                             |                                   |                    | Maximum value: 63  |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| wmm-vo-dscp                 | DSCP marking for voice access.    | integer            | Minimum value: 0   | 48                 |
|                             |                                   |                    | Maximum value: 63  |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+

