# config user fsso

Configure Fortinet Single Sign On (FSSO) agents.

## Syntax

```
config user fsso
    Description: Configure Fortinet Single Sign On (FSSO) agents.
    edit <name>
        set group-poll-interval {integer}
        set interface {string}
        set interface-select-method [auto|sdwan|...]
        set ldap-poll [enable|disable]
        set ldap-poll-filter {string}
        set ldap-poll-interval {integer}
        set ldap-server {string}
        set logon-timeout {integer}
        set password {password}
        set password2 {password}
        set password3 {password}
        set password4 {password}
        set password5 {password}
        set port {integer}
        set port2 {integer}
        set port3 {integer}
        set port4 {integer}
        set port5 {integer}
        set server {string}
        set server2 {string}
        set server3 {string}
        set server4 {string}
        set server5 {string}
        set sni {string}
        set source-ip {ipv4-address}
        set source-ip6 {ipv6-address}
        set ssl [enable|disable]
        set ssl-server-host-ip-check [enable|disable]
        set ssl-trusted-cert {string}
        set type [default|fortinac]
        set user-info-server {string}
        set vrf-select {integer}
    next
end
```

## Parameters

+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
| Parameter                | Description                       | Type               | Size               | Default                |
+==========================+===================================+====================+====================+========================+
| group-poll-interval      | Interval in minutes within to     | integer            | Minimum value: 1   | 0                      |
|                          | fetch groups from FSSO server, or |                    | Maximum value:     |                        |
|                          | unset to disable.                 |                    | 2880               |                        |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
| interface                | Specify outgoing interface to     | string             | Maximum length: 15 |                        |
|                          | reach server.                     |                    |                    |                        |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
| interface-select-method  | Specify how to select outgoing    | option             | \-                 | auto                   |
|                          | interface to reach server.        |                    |                    |                        |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
|                          | +-------------+--------------------------------------------------------+                             |
|                          | | Option      | Description                                            |                             |
|                          | +=============+========================================================+                             |
|                          | | *auto*      | Set outgoing interface automatically.                  |                             |
|                          | +-------------+--------------------------------------------------------+                             |
|                          | | *sdwan*     | Set outgoing interface by SD-WAN or policy routing     |                             |
|                          | |             | rules.                                                 |                             |
|                          | +-------------+--------------------------------------------------------+                             |
|                          | | *specify*   | Set outgoing interface manually.                       |                             |
|                          | +-------------+--------------------------------------------------------+                             |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
| ldap-poll                | Enable/disable automatic fetching | option             | \-                 | disable                |
|                          | of groups from LDAP server.       |                    |                    |                        |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
|                          | +-------------+--------------------------------------------------------+                             |
|                          | | Option      | Description                                            |                             |
|                          | +=============+========================================================+                             |
|                          | | *enable*    | Enable automatic fetching of groups from LDAP server.  |                             |
|                          | +-------------+--------------------------------------------------------+                             |
|                          | | *disable*   | Disable automatic fetching of groups from LDAP server. |                             |
|                          | +-------------+--------------------------------------------------------+                             |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
| ldap-poll-filter         | Filter used to fetch groups.      | string             | Maximum length:    | (objectCategory=group) |
|                          |                                   |                    | 2047               |                        |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
| ldap-poll-interval       | Interval in minutes within to     | integer            | Minimum value: 1   | 180                    |
|                          | fetch groups from LDAP server.    |                    | Maximum value:     |                        |
|                          |                                   |                    | 2880               |                        |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
| ldap-server              | LDAP server to get group          | string             | Maximum length: 35 |                        |
|                          | information.                      |                    |                    |                        |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
| logon-timeout            | Interval in minutes to keep       | integer            | Minimum value: 1   | 5                      |
|                          | logons after FSSO server down.    |                    | Maximum value:     |                        |
|                          |                                   |                    | 2880               |                        |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
| name                     | Name.                             | string             | Maximum length: 35 |                        |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
| password                 | Password of the first FSSO        | password           | Not Specified      |                        |
|                          | collector agent.                  |                    |                    |                        |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
| password2                | Password of the second FSSO       | password           | Not Specified      |                        |
|                          | collector agent.                  |                    |                    |                        |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
| password3                | Password of the third FSSO        | password           | Not Specified      |                        |
|                          | collector agent.                  |                    |                    |                        |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
| password4                | Password of the fourth FSSO       | password           | Not Specified      |                        |
|                          | collector agent.                  |                    |                    |                        |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
| password5                | Password of the fifth FSSO        | password           | Not Specified      |                        |
|                          | collector agent.                  |                    |                    |                        |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
| port                     | Port of the first FSSO collector  | integer            | Minimum value: 1   | 8000                   |
|                          | agent.                            |                    | Maximum value:     |                        |
|                          |                                   |                    | 65535              |                        |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
| port2                    | Port of the second FSSO collector | integer            | Minimum value: 1   | 8000                   |
|                          | agent.                            |                    | Maximum value:     |                        |
|                          |                                   |                    | 65535              |                        |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
| port3                    | Port of the third FSSO collector  | integer            | Minimum value: 1   | 8000                   |
|                          | agent.                            |                    | Maximum value:     |                        |
|                          |                                   |                    | 65535              |                        |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
| port4                    | Port of the fourth FSSO collector | integer            | Minimum value: 1   | 8000                   |
|                          | agent.                            |                    | Maximum value:     |                        |
|                          |                                   |                    | 65535              |                        |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
| port5                    | Port of the fifth FSSO collector  | integer            | Minimum value: 1   | 8000                   |
|                          | agent.                            |                    | Maximum value:     |                        |
|                          |                                   |                    | 65535              |                        |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
| server                   | Domain name or IP address of the  | string             | Maximum length: 63 |                        |
|                          | first FSSO collector agent.       |                    |                    |                        |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
| server2                  | Domain name or IP address of the  | string             | Maximum length: 63 |                        |
|                          | second FSSO collector agent.      |                    |                    |                        |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
| server3                  | Domain name or IP address of the  | string             | Maximum length: 63 |                        |
|                          | third FSSO collector agent.       |                    |                    |                        |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
| server4                  | Domain name or IP address of the  | string             | Maximum length: 63 |                        |
|                          | fourth FSSO collector agent.      |                    |                    |                        |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
| server5                  | Domain name or IP address of the  | string             | Maximum length: 63 |                        |
|                          | fifth FSSO collector agent.       |                    |                    |                        |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
| sni                      | Server Name Indication.           | string             | Maximum length:    |                        |
|                          |                                   |                    | 255                |                        |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
| source-ip                | Source IP for communications to   | ipv4-address       | Not Specified      | 0.0.0.0                |
|                          | FSSO agent.                       |                    |                    |                        |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
| source-ip6               | IPv6 source for communications to | ipv6-address       | Not Specified      | ::                     |
|                          | FSSO agent.                       |                    |                    |                        |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
| ssl                      | Enable/disable use of SSL.        | option             | \-                 | disable                |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
|                          | +-------------+--------------------------------------------------------+                             |
|                          | | Option      | Description                                            |                             |
|                          | +=============+========================================================+                             |
|                          | | *enable*    | Enable use of SSL.                                     |                             |
|                          | +-------------+--------------------------------------------------------+                             |
|                          | | *disable*   | Disable use of SSL.                                    |                             |
|                          | +-------------+--------------------------------------------------------+                             |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
| ssl-server-host-ip-check | Enable/disable server host/IP     | option             | \-                 | disable                |
|                          | verification.                     |                    |                    |                        |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
|                          | +-------------+--------------------------------------------------------+                             |
|                          | | Option      | Description                                            |                             |
|                          | +=============+========================================================+                             |
|                          | | *enable*    | Enable server host/IP verification.                    |                             |
|                          | +-------------+--------------------------------------------------------+                             |
|                          | | *disable*   | Disable server host/IP verification.                   |                             |
|                          | +-------------+--------------------------------------------------------+                             |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
| ssl-trusted-cert         | Trusted server certificate or CA  | string             | Maximum length: 79 |                        |
|                          | certificate.                      |                    |                    |                        |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
| type                     | Server type.                      | option             | \-                 | default                |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
|                          | +-------------+--------------------------------------------------------+                             |
|                          | | Option      | Description                                            |                             |
|                          | +=============+========================================================+                             |
|                          | | *default*   | All other unspecified types of servers.                |                             |
|                          | +-------------+--------------------------------------------------------+                             |
|                          | | *fortinac*  | FortiNAC server.                                       |                             |
|                          | +-------------+--------------------------------------------------------+                             |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
| user-info-server         | LDAP server to get user           | string             | Maximum length: 35 |                        |
|                          | information.                      |                    |                    |                        |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+
| vrf-select               | VRF ID used for connection to     | integer            | Minimum value: 0   | 0                      |
|                          | server.                           |                    | Maximum value: 511 |                        |
+--------------------------+-----------------------------------+--------------------+--------------------+------------------------+

