# config wireless-controller timers

Configure CAPWAP timers.

## Syntax

```
config wireless-controller timers
    Description: Configure CAPWAP timers.
    set ap-reboot-wait-interval1 {integer}
    set ap-reboot-wait-interval2 {integer}
    set ap-reboot-wait-time {string}
    set auth-timeout {integer}
    set ble-device-cleanup {integer}
    set ble-scan-report-intv {integer}
    set client-idle-rehome-timeout {integer}
    set client-idle-timeout {integer}
    set discovery-interval {integer}
    set drma-interval {integer}
    set echo-interval {integer}
    set fake-ap-log {integer}
    set ipsec-intf-cleanup {integer}
    set nat-session-keep-alive {integer}
    set radio-stats-interval {integer}
    set rogue-ap-cleanup {integer}
    set rogue-ap-log {integer}
    set rogue-sta-cleanup {integer}
    set sta-cap-cleanup {integer}
    set sta-capability-interval {integer}
    set sta-locate-timer {integer}
    set sta-offline-cleanup {integer}
    set sta-offline-ip2mac-cleanup {integer}
    set sta-stats-interval {integer}
    set vap-stats-interval {integer}
    set wids-entry-cleanup {integer}
end
```

## Parameters

+----------------------------+-----------------------------------+---------+------------+---------+
| Parameter                  | Description                       | Type    | Size       | Default |
+============================+===================================+=========+============+=========+
| ap-reboot-wait-interval1   | Time in minutes to wait before AP | integer | Minimum    | 0       |
|                            | reboots when there is no          |         | value: 5   |         |
|                            | controller detected (5 - 65535,   |         | Maximum    |         |
|                            | default = 0, 0 for no reboot).    |         | value:     |         |
|                            |                                   |         | 65535      |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| ap-reboot-wait-interval2   | Time in minutes to wait before AP | integer | Minimum    | 0       |
|                            | reboots when there is no          |         | value: 5   |         |
|                            | controller detected and           |         | Maximum    |         |
|                            | standalone SSIDs are pushed to    |         | value:     |         |
|                            | the AP in the previous session    |         | 65535      |         |
|                            | (5 - 65535, default = 0, 0 for no |         |            |         |
|                            | reboot).                          |         |            |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| ap-reboot-wait-time        | Time to reboot the AP when there  | string  | Maximum    |         |
|                            | is no controller detected and     |         | length: 7  |         |
|                            | standalone SSIDs are pushed to    |         |            |         |
|                            | the AP in the previous session,   |         |            |         |
|                            | format hh:mm.                     |         |            |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| auth-timeout               | Time after which a client is      | integer | Minimum    | 5       |
|                            | considered failed in RADIUS       |         | value: 5   |         |
|                            | authentication and times out (5 - |         | Maximum    |         |
|                            | 30 sec, default = 5).             |         | value: 30  |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| ble-device-cleanup         | Time period in minutes to keep    | integer | Minimum    | 60      |
|                            | BLE device after it is gone       |         | value: 0   |         |
|                            | (default = 60).                   |         | Maximum    |         |
|                            |                                   |         | value:     |         |
|                            |                                   |         | 4294967295 |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| ble-scan-report-intv       | Time between running Bluetooth    | integer | Minimum    | 30      |
|                            | Low Energy (BLE) reports (10 -    |         | value: 10  |         |
|                            | 3600 sec, default = 30).          |         | Maximum    |         |
|                            |                                   |         | value:     |         |
|                            |                                   |         | 3600       |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| client-idle-rehome-timeout | Time after which a client is      | integer | Minimum    | 20      |
|                            | considered idle and disconnected  |         | value: 2   |         |
|                            | from the home controller (2 -     |         | Maximum    |         |
|                            | 3600 sec, default = 20, 0 for no  |         | value:     |         |
|                            | timeout).                         |         | 3600       |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| client-idle-timeout        | Time after which a client is      | integer | Minimum    | 300     |
|                            | considered idle and times out     |         | value: 20  |         |
|                            | (20 - 3600 sec, default = 300, 0  |         | Maximum    |         |
|                            | for no timeout).                  |         | value:     |         |
|                            |                                   |         | 3600       |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| discovery-interval         | Time between discovery requests   | integer | Minimum    | 5       |
|                            | (2 - 180 sec, default = 5).       |         | value: 2   |         |
|                            |                                   |         | Maximum    |         |
|                            |                                   |         | value: 180 |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| drma-interval              | Dynamic radio mode assignment     | integer | Minimum    | 60      |
|                            | (DRMA) schedule interval in       |         | value: 1   |         |
|                            | minutes (1 - 1440, default = 60). |         | Maximum    |         |
|                            |                                   |         | value:     |         |
|                            |                                   |         | 1440       |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| echo-interval              | Time between echo requests sent   | integer | Minimum    | 30      |
|                            | by the managed WTP, AP, or        |         | value: 1   |         |
|                            | FortiAP (1 - 255 sec, default =   |         | Maximum    |         |
|                            | 30).                              |         | value: 255 |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| fake-ap-log                | Time between recording logs about | integer | Minimum    | 1       |
|                            | fake APs if periodic fake AP      |         | value: 1   |         |
|                            | logging is configured (1 - 1440   |         | Maximum    |         |
|                            | min, default = 1).                |         | value:     |         |
|                            |                                   |         | 1440       |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| ipsec-intf-cleanup         | Time period to keep IPsec VPN     | integer | Minimum    | 120     |
|                            | interfaces up after WTP sessions  |         | value: 30  |         |
|                            | are disconnected (30 - 3600 sec,  |         | Maximum    |         |
|                            | default = 120).                   |         | value:     |         |
|                            |                                   |         | 3600       |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| nat-session-keep-alive     | Maximal time in seconds between   | integer | Minimum    | 0       |
|                            | control requests sent by the      |         | value: 0   |         |
|                            | managed WTP, AP, or FortiAP (0 -  |         | Maximum    |         |
|                            | 255 sec, default = 0).            |         | value: 255 |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| radio-stats-interval       | Time between running radio        | integer | Minimum    | 15      |
|                            | reports (1 - 255 sec, default =   |         | value: 1   |         |
|                            | 15).                              |         | Maximum    |         |
|                            |                                   |         | value: 255 |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| rogue-ap-cleanup           | Time period in minutes to keep    | integer | Minimum    | 0       |
|                            | rogue AP after it is gone         |         | value: 0   |         |
|                            | (default = 0).                    |         | Maximum    |         |
|                            |                                   |         | value:     |         |
|                            |                                   |         | 4294967295 |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| rogue-ap-log               | Time between logging rogue AP     | integer | Minimum    | 0       |
|                            | messages if periodic rogue AP     |         | value: 0   |         |
|                            | logging is configured (0 - 1440   |         | Maximum    |         |
|                            | min, default = 0).                |         | value:     |         |
|                            |                                   |         | 1440       |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| rogue-sta-cleanup          | Time period in minutes to keep    | integer | Minimum    | 0       |
|                            | rogue station after it is gone    |         | value: 0   |         |
|                            | (default = 0).                    |         | Maximum    |         |
|                            |                                   |         | value:     |         |
|                            |                                   |         | 4294967295 |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| sta-cap-cleanup            | Time period in minutes to keep    | integer | Minimum    | 0       |
|                            | station capability data after it  |         | value: 0   |         |
|                            | is gone (default = 0).            |         | Maximum    |         |
|                            |                                   |         | value:     |         |
|                            |                                   |         | 4294967295 |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| sta-capability-interval    | Time between running station      | integer | Minimum    | 30      |
|                            | capability reports (1 - 255 sec,  |         | value: 1   |         |
|                            | default = 30).                    |         | Maximum    |         |
|                            |                                   |         | value: 255 |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| sta-locate-timer           | Time between running client       | integer | Minimum    | 1800    |
|                            | presence flushes to remove        |         | value: 0   |         |
|                            | clients that are listed but no    |         | Maximum    |         |
|                            | longer present (0 - 86400 sec,    |         | value:     |         |
|                            | default = 1800).                  |         | 86400      |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| sta-offline-cleanup        | Time period in seconds to keep    | integer | Minimum    | 300     |
|                            | station offline data after it is  |         | value: 0   |         |
|                            | gone (default = 300).             |         | Maximum    |         |
|                            |                                   |         | value:     |         |
|                            |                                   |         | 4294967295 |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| sta-offline-ip2mac-cleanup | Time period in seconds to keep    | integer | Minimum    | 300     |
|                            | station offline Ip2mac data after |         | value: 0   |         |
|                            | it is gone (default = 300).       |         | Maximum    |         |
|                            |                                   |         | value:     |         |
|                            |                                   |         | 4294967295 |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| sta-stats-interval         | Time between running client       | integer | Minimum    | 10      |
|                            | (station) reports (1 - 255 sec,   |         | value: 1   |         |
|                            | default = 10).                    |         | Maximum    |         |
|                            |                                   |         | value: 255 |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| vap-stats-interval         | Time between running Virtual      | integer | Minimum    | 15      |
|                            | Access Point (VAP) reports (1 -   |         | value: 1   |         |
|                            | 255 sec, default = 15).           |         | Maximum    |         |
|                            |                                   |         | value: 255 |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| wids-entry-cleanup         | Time period in minutes to keep    | integer | Minimum    | 0       |
|                            | wids entry after it is gone       |         | value: 0   |         |
|                            | (default = 0).                    |         | Maximum    |         |
|                            |                                   |         | value:     |         |
|                            |                                   |         | 4294967295 |         |
+----------------------------+-----------------------------------+---------+------------+---------+

