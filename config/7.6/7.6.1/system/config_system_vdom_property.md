# config system vdom-property

Configure VDOM property.

## Syntax

```
config system vdom-property
    Description: Configure VDOM property.
    edit <name>
        set custom-service {user}
        set description {string}
        set dialup-tunnel {user}
        set firewall-address {user}
        set firewall-addrgrp {user}
        set firewall-policy {user}
        set ipsec-phase1 {user}
        set ipsec-phase1-interface {user}
        set ipsec-phase2 {user}
        set ipsec-phase2-interface {user}
        set log-disk-quota {user}
        set onetime-schedule {user}
        set proxy {user}
        set recurring-schedule {user}
        set service-group {user}
        set session {user}
        set snmp-index {integer}
        set sslvpn {user}
        set user {user}
        set user-group {user}
    next
end
```

## Parameters

+------------------------+-----------------------------------+---------+------------+---------+
| Parameter              | Description                       | Type    | Size       | Default |
+========================+===================================+=========+============+=========+
| custom-service         | Maximum guaranteed number of      | user    | Not        |         |
|                        | firewall custom services.         |         | Specified  |         |
+------------------------+-----------------------------------+---------+------------+---------+
| description            | Description.                      | string  | Maximum    |         |
|                        |                                   |         | length:    |         |
|                        |                                   |         | 127        |         |
+------------------------+-----------------------------------+---------+------------+---------+
| dialup-tunnel          | Maximum guaranteed number of      | user    | Not        |         |
|                        | dial-up tunnels.                  |         | Specified  |         |
+------------------------+-----------------------------------+---------+------------+---------+
| firewall-address       | Maximum guaranteed number of      | user    | Not        |         |
|                        | firewall addresses (IPv4, IPv6,   |         | Specified  |         |
|                        | multicast).                       |         |            |         |
+------------------------+-----------------------------------+---------+------------+---------+
| firewall-addrgrp       | Maximum guaranteed number of      | user    | Not        |         |
|                        | firewall address groups (IPv4,    |         | Specified  |         |
|                        | IPv6).                            |         |            |         |
+------------------------+-----------------------------------+---------+------------+---------+
| firewall-policy        | Maximum guaranteed number of      | user    | Not        |         |
|                        | firewall policies (policy,        |         | Specified  |         |
|                        | DoS-policy4, DoS-policy6,         |         |            |         |
|                        | multicast).                       |         |            |         |
+------------------------+-----------------------------------+---------+------------+---------+
| ipsec-phase1           | Maximum guaranteed number of VPN  | user    | Not        |         |
|                        | IPsec phase 1 tunnels.            |         | Specified  |         |
+------------------------+-----------------------------------+---------+------------+---------+
| ipsec-phase1-interface | Maximum guaranteed number of VPN  | user    | Not        |         |
|                        | IPsec phase1 interface tunnels.   |         | Specified  |         |
+------------------------+-----------------------------------+---------+------------+---------+
| ipsec-phase2           | Maximum guaranteed number of VPN  | user    | Not        |         |
|                        | IPsec phase 2 tunnels.            |         | Specified  |         |
+------------------------+-----------------------------------+---------+------------+---------+
| ipsec-phase2-interface | Maximum guaranteed number of VPN  | user    | Not        |         |
|                        | IPsec phase2 interface tunnels.   |         | Specified  |         |
+------------------------+-----------------------------------+---------+------------+---------+
| log-disk-quota         | Log disk quota in megabytes (MB). | user    | Not        |         |
|                        | Range depends on how much disk    |         | Specified  |         |
|                        | space is available.               |         |            |         |
+------------------------+-----------------------------------+---------+------------+---------+
| name                   | VDOM name.                        | string  | Maximum    |         |
|                        |                                   |         | length: 31 |         |
+------------------------+-----------------------------------+---------+------------+---------+
| onetime-schedule       | Maximum guaranteed number of      | user    | Not        |         |
|                        | firewall one-time schedules.      |         | Specified  |         |
+------------------------+-----------------------------------+---------+------------+---------+
| proxy \*               | Maximum guaranteed number of      | user    | Not        |         |
|                        | concurrent proxy users.           |         | Specified  |         |
+------------------------+-----------------------------------+---------+------------+---------+
| recurring-schedule     | Maximum guaranteed number of      | user    | Not        |         |
|                        | firewall recurring schedules.     |         | Specified  |         |
+------------------------+-----------------------------------+---------+------------+---------+
| service-group          | Maximum guaranteed number of      | user    | Not        |         |
|                        | firewall service groups.          |         | Specified  |         |
+------------------------+-----------------------------------+---------+------------+---------+
| session                | Maximum guaranteed number of      | user    | Not        |         |
|                        | sessions.                         |         | Specified  |         |
+------------------------+-----------------------------------+---------+------------+---------+
| snmp-index             | Permanent SNMP Index of the       | integer | Minimum    | 0       |
|                        | virtual domain.                   |         | value: 1   |         |
|                        |                                   |         | Maximum    |         |
|                        |                                   |         | value:     |         |
|                        |                                   |         | 2147483647 |         |
+------------------------+-----------------------------------+---------+------------+---------+
| sslvpn \*              | Maximum guaranteed number of      | user    | Not        |         |
|                        | SSL-VPNs.                         |         | Specified  |         |
+------------------------+-----------------------------------+---------+------------+---------+
| user                   | Maximum guaranteed number of      | user    | Not        |         |
|                        | local users.                      |         | Specified  |         |
+------------------------+-----------------------------------+---------+------------+---------+
| user-group             | Maximum guaranteed number of user | user    | Not        |         |
|                        | groups.                           |         | Specified  |         |
+------------------------+-----------------------------------+---------+------------+---------+

