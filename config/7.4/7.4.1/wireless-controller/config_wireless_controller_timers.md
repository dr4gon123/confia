# config wireless-controller timers

Configure CAPWAP timers.

## Syntax

```
config wireless-controller timers
    Description: Configure CAPWAP timers.
    set auth-timeout {integer}
    set ble-scan-report-intv {integer}
    set client-idle-rehome-timeout {integer}
    set client-idle-timeout {integer}
    set discovery-interval {integer}
    set drma-interval {integer}
    set echo-interval {integer}
    set fake-ap-log {integer}
    set ipsec-intf-cleanup {integer}
    set radio-stats-interval {integer}
    set rogue-ap-cleanup {integer}
    set rogue-ap-log {integer}
    set sta-capability-interval {integer}
    set sta-locate-timer {integer}
    set sta-stats-interval {integer}
    set vap-stats-interval {integer}
end
```

## Parameters

+----------------------------+-----------------------------------+---------+------------+---------+
| Parameter                  | Description                       | Type    | Size       | Default |
+============================+===================================+=========+============+=========+
| auth-timeout               | Time after which a client is      | integer | Minimum    | 5       |
|                            | considered failed in RADIUS       |         | value: 5   |         |
|                            | authentication and times out.     |         | Maximum    |         |
|                            |                                   |         | value: 30  |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| ble-scan-report-intv       | Time between running Bluetooth    | integer | Minimum    | 30      |
|                            | Low Energy.                       |         | value: 10  |         |
|                            |                                   |         | Maximum    |         |
|                            |                                   |         | value:     |         |
|                            |                                   |         | 3600       |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| client-idle-rehome-timeout | Time after which a client is      | integer | Minimum    | 20      |
|                            | considered idle and disconnected  |         | value: 2   |         |
|                            | from the home controller.         |         | Maximum    |         |
|                            |                                   |         | value:     |         |
|                            |                                   |         | 3600       |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| client-idle-timeout        | Time after which a client is      | integer | Minimum    | 300     |
|                            | considered idle and times out.    |         | value: 20  |         |
|                            |                                   |         | Maximum    |         |
|                            |                                   |         | value:     |         |
|                            |                                   |         | 3600       |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| discovery-interval         | Time between discovery requests.  | integer | Minimum    | 5       |
|                            |                                   |         | value: 2   |         |
|                            |                                   |         | Maximum    |         |
|                            |                                   |         | value: 180 |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| drma-interval              | Dynamic radio mode assignment.    | integer | Minimum    | 60      |
|                            |                                   |         | value: 1   |         |
|                            |                                   |         | Maximum    |         |
|                            |                                   |         | value:     |         |
|                            |                                   |         | 1440       |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| echo-interval              | Time between echo requests sent   | integer | Minimum    | 30      |
|                            | by the managed WTP, AP, or        |         | value: 1   |         |
|                            | FortiAP.                          |         | Maximum    |         |
|                            |                                   |         | value: 255 |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| fake-ap-log                | Time between recording logs about | integer | Minimum    | 1       |
|                            | fake APs if periodic fake AP      |         | value: 1   |         |
|                            | logging is configured.            |         | Maximum    |         |
|                            |                                   |         | value:     |         |
|                            |                                   |         | 1440       |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| ipsec-intf-cleanup         | Time period to keep IPsec VPN     | integer | Minimum    | 120     |
|                            | interfaces up after WTP sessions  |         | value: 30  |         |
|                            | are disconnected.                 |         | Maximum    |         |
|                            |                                   |         | value:     |         |
|                            |                                   |         | 3600       |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| radio-stats-interval       | Time between running radio        | integer | Minimum    | 15      |
|                            | reports.                          |         | value: 1   |         |
|                            |                                   |         | Maximum    |         |
|                            |                                   |         | value: 255 |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| rogue-ap-cleanup           | Time period in minutes to keep    | integer | Minimum    | 0       |
|                            | rogue AP after it is gone.        |         | value: 0   |         |
|                            |                                   |         | Maximum    |         |
|                            |                                   |         | value:     |         |
|                            |                                   |         | 4294967295 |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| rogue-ap-log               | Time between logging rogue AP     | integer | Minimum    | 0       |
|                            | messages if periodic rogue AP     |         | value: 0   |         |
|                            | logging is configured.            |         | Maximum    |         |
|                            |                                   |         | value:     |         |
|                            |                                   |         | 1440       |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| sta-capability-interval    | Time between running station      | integer | Minimum    | 30      |
|                            | capability reports.               |         | value: 1   |         |
|                            |                                   |         | Maximum    |         |
|                            |                                   |         | value: 255 |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| sta-locate-timer           | Time between running client       | integer | Minimum    | 1800    |
|                            | presence flushes to remove        |         | value: 0   |         |
|                            | clients that are listed but no    |         | Maximum    |         |
|                            | longer present.                   |         | value:     |         |
|                            |                                   |         | 86400      |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| sta-stats-interval         | Time between running client.      | integer | Minimum    | 1       |
|                            |                                   |         | value: 1   |         |
|                            |                                   |         | Maximum    |         |
|                            |                                   |         | value: 255 |         |
+----------------------------+-----------------------------------+---------+------------+---------+
| vap-stats-interval         | Time between running Virtual      | integer | Minimum    | 15      |
|                            | Access Point.                     |         | value: 1   |         |
|                            |                                   |         | Maximum    |         |
|                            |                                   |         | value: 255 |         |
+----------------------------+-----------------------------------+---------+------------+---------+

