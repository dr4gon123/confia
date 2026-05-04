# config system resource-limits

Configure resource limits.

## Syntax

```
config system resource-limits
    Description: Configure resource limits.
    set custom-service {integer}
    set dialup-tunnel {integer}
    set firewall-address {integer}
    set firewall-addrgrp {integer}
    set firewall-policy {integer}
    set ipsec-phase1 {integer}
    set ipsec-phase1-interface {integer}
    set ipsec-phase2 {integer}
    set ipsec-phase2-interface {integer}
    set log-disk-quota {integer}
    set onetime-schedule {integer}
    set proxy {integer}
    set recurring-schedule {integer}
    set service-group {integer}
    set session {integer}
    set sslvpn {integer}
    set user {integer}
    set user-group {integer}
end
```

## Parameters

+------------------------+-----------------------------------+---------+------------+---------+
| Parameter              | Description                       | Type    | Size       | Default |
+========================+===================================+=========+============+=========+
| custom-service         | Maximum number of firewall custom | integer | Minimum    |         |
|                        | services.                         |         | value: 0   |         |
|                        |                                   |         | Maximum    |         |
|                        |                                   |         | value:     |         |
|                        |                                   |         | 4294967295 |         |
+------------------------+-----------------------------------+---------+------------+---------+
| dialup-tunnel          | Maximum number of dial-up         | integer | Minimum    |         |
|                        | tunnels.                          |         | value: 0   |         |
|                        |                                   |         | Maximum    |         |
|                        |                                   |         | value:     |         |
|                        |                                   |         | 4294967295 |         |
+------------------------+-----------------------------------+---------+------------+---------+
| firewall-address       | Maximum number of firewall        | integer | Minimum    |         |
|                        | addresses (IPv4, IPv6,            |         | value: 0   |         |
|                        | multicast).                       |         | Maximum    |         |
|                        |                                   |         | value:     |         |
|                        |                                   |         | 4294967295 |         |
+------------------------+-----------------------------------+---------+------------+---------+
| firewall-addrgrp       | Maximum number of firewall        | integer | Minimum    |         |
|                        | address groups (IPv4, IPv6).      |         | value: 0   |         |
|                        |                                   |         | Maximum    |         |
|                        |                                   |         | value:     |         |
|                        |                                   |         | 4294967295 |         |
+------------------------+-----------------------------------+---------+------------+---------+
| firewall-policy        | Maximum number of firewall        | integer | Minimum    |         |
|                        | policies (policy, DoS-policy4,    |         | value: 0   |         |
|                        | DoS-policy6, multicast).          |         | Maximum    |         |
|                        |                                   |         | value:     |         |
|                        |                                   |         | 4294967295 |         |
+------------------------+-----------------------------------+---------+------------+---------+
| ipsec-phase1           | Maximum number of VPN IPsec       | integer | Minimum    |         |
|                        | phase1 tunnels.                   |         | value: 0   |         |
|                        |                                   |         | Maximum    |         |
|                        |                                   |         | value:     |         |
|                        |                                   |         | 4294967295 |         |
+------------------------+-----------------------------------+---------+------------+---------+
| ipsec-phase1-interface | Maximum number of VPN IPsec       | integer | Minimum    |         |
|                        | phase1 interface tunnels.         |         | value: 0   |         |
|                        |                                   |         | Maximum    |         |
|                        |                                   |         | value:     |         |
|                        |                                   |         | 4294967295 |         |
+------------------------+-----------------------------------+---------+------------+---------+
| ipsec-phase2           | Maximum number of VPN IPsec       | integer | Minimum    |         |
|                        | phase2 tunnels.                   |         | value: 0   |         |
|                        |                                   |         | Maximum    |         |
|                        |                                   |         | value:     |         |
|                        |                                   |         | 4294967295 |         |
+------------------------+-----------------------------------+---------+------------+---------+
| ipsec-phase2-interface | Maximum number of VPN IPsec       | integer | Minimum    |         |
|                        | phase2 interface tunnels.         |         | value: 0   |         |
|                        |                                   |         | Maximum    |         |
|                        |                                   |         | value:     |         |
|                        |                                   |         | 4294967295 |         |
+------------------------+-----------------------------------+---------+------------+---------+
| log-disk-quota         | Log disk quota in megabytes (MB). | integer | Minimum    | 0       |
|                        |                                   |         | value: 0   |         |
|                        |                                   |         | Maximum    |         |
|                        |                                   |         | value:     |         |
|                        |                                   |         | 4294967295 |         |
|                        |                                   |         | \*\*       |         |
+------------------------+-----------------------------------+---------+------------+---------+
| onetime-schedule       | Maximum number of firewall        | integer | Minimum    |         |
|                        | one-time schedules.               |         | value: 0   |         |
|                        |                                   |         | Maximum    |         |
|                        |                                   |         | value:     |         |
|                        |                                   |         | 4294967295 |         |
+------------------------+-----------------------------------+---------+------------+---------+
| proxy                  | Maximum number of concurrent      | integer | Minimum    |         |
|                        | proxy users.                      |         | value: 0   |         |
|                        |                                   |         | Maximum    |         |
|                        |                                   |         | value:     |         |
|                        |                                   |         | 4294967295 |         |
+------------------------+-----------------------------------+---------+------------+---------+
| recurring-schedule     | Maximum number of firewall        | integer | Minimum    |         |
|                        | recurring schedules.              |         | value: 0   |         |
|                        |                                   |         | Maximum    |         |
|                        |                                   |         | value:     |         |
|                        |                                   |         | 4294967295 |         |
+------------------------+-----------------------------------+---------+------------+---------+
| service-group          | Maximum number of firewall        | integer | Minimum    |         |
|                        | service groups.                   |         | value: 0   |         |
|                        |                                   |         | Maximum    |         |
|                        |                                   |         | value:     |         |
|                        |                                   |         | 4294967295 |         |
+------------------------+-----------------------------------+---------+------------+---------+
| session                | Maximum number of sessions.       | integer | Minimum    |         |
|                        |                                   |         | value: 0   |         |
|                        |                                   |         | Maximum    |         |
|                        |                                   |         | value:     |         |
|                        |                                   |         | 4294967295 |         |
+------------------------+-----------------------------------+---------+------------+---------+
| sslvpn                 | Maximum number of SSL-VPN.        | integer | Minimum    |         |
|                        |                                   |         | value: 0   |         |
|                        |                                   |         | Maximum    |         |
|                        |                                   |         | value:     |         |
|                        |                                   |         | 4294967295 |         |
+------------------------+-----------------------------------+---------+------------+---------+
| user                   | Maximum number of local users.    | integer | Minimum    |         |
|                        |                                   |         | value: 0   |         |
|                        |                                   |         | Maximum    |         |
|                        |                                   |         | value:     |         |
|                        |                                   |         | 4294967295 |         |
+------------------------+-----------------------------------+---------+------------+---------+
| user-group             | Maximum number of user groups.    | integer | Minimum    |         |
|                        |                                   |         | value: 0   |         |
|                        |                                   |         | Maximum    |         |
|                        |                                   |         | value:     |         |
|                        |                                   |         | 4294967295 |         |
+------------------------+-----------------------------------+---------+------------+---------+

