# config user domain-controller

Configure domain controller entries.

## Syntax

```
config user domain-controller
    Description: Configure domain controller entries.
    edit <name>
        set ad-mode [none|ds|...]
        set adlds-dn {string}
        set adlds-ip-address {ipv4-address}
        set adlds-ip6 {ipv6-address}
        set adlds-port {integer}
        set change-detection [enable|disable]
        set change-detection-period {integer}
        set dns-srv-lookup [enable|disable]
        set domain-name {string}
        config extra-server
            Description: Extra servers.
            edit <id>
                set ip-address {ipv4-address}
                set port {integer}
                set source-ip-address {ipv4-address}
                set source-port {integer}
            next
        end
        set hostname {string}
        set interface {string}
        set interface-select-method [auto|sdwan|...]
        set ip-address {ipv4-address}
        set ip6 {ipv6-address}
        set ldap-server <name1>, <name2>, ...
        set password {password}
        set port {integer}
        set replication-port {integer}
        set source-ip-address {ipv4-address}
        set source-ip6 {ipv6-address}
        set source-port {integer}
        set username {string}
    next
end
```

## Parameters

+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter               | Description                       | Type               | Size               | Default            |
+=========================+===================================+====================+====================+====================+
| ad-mode                 | Set Active Directory mode.        | option             | \-                 | none               |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | Option      | Description                                            |                         |
|                         | +=============+========================================================+                         |
|                         | | *none*      | The server is not configured as an Active Directory    |                         |
|                         | |             | Domain Server (AD DS).                                 |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *ds*        | The server is configured as an Active Directory Domain |                         |
|                         | |             | Server (AD DS).                                        |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *lds*       | The server is an Active Directory Lightweight Domain   |                         |
|                         | |             | Server (AD LDS).                                       |                         |
|                         | +-------------+--------------------------------------------------------+                         |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| adlds-dn                | AD LDS distinguished name.        | string             | Maximum length:    |                    |
|                         |                                   |                    | 255                |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| adlds-ip-address        | AD LDS IPv4 address.              | ipv4-address       | Not Specified      | 0.0.0.0            |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| adlds-ip6               | AD LDS IPv6 address.              | ipv6-address       | Not Specified      | ::                 |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| adlds-port              | Port number of AD LDS service     | integer            | Minimum value: 0   | 389                |
|                         | (default = 389).                  |                    | Maximum value:     |                    |
|                         |                                   |                    | 65535              |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| change-detection        | Enable/disable detection of a     | option             | \-                 | disable            |
|                         | configuration change in the       |                    |                    |                    |
|                         | Active Directory server.          |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | Option      | Description                                            |                         |
|                         | +=============+========================================================+                         |
|                         | | *enable*    | Enable detection of a configuration change in the      |                         |
|                         | |             | Active Directory server.                               |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *disable*   | Disable detection of a configuration change in the     |                         |
|                         | |             | Active Directory server.                               |                         |
|                         | +-------------+--------------------------------------------------------+                         |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| change-detection-period | Minutes to detect a configuration | integer            | Minimum value: 5   | 60                 |
|                         | change in the Active Directory    |                    | Maximum value:     |                    |
|                         | server (5 - 10080 minutes (7      |                    | 10080              |                    |
|                         | days), default = 60).             |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| dns-srv-lookup          | Enable/disable DNS service        | option             | \-                 | disable            |
|                         | lookup.                           |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | Option      | Description                                            |                         |
|                         | +=============+========================================================+                         |
|                         | | *enable*    | Enable DNS service lookup.                             |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *disable*   | Disable DNS service lookup.                            |                         |
|                         | +-------------+--------------------------------------------------------+                         |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| domain-name             | Domain DNS name.                  | string             | Maximum length:    |                    |
|                         |                                   |                    | 255                |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| hostname                | Hostname of the server to connect | string             | Maximum length:    |                    |
|                         | to.                               |                    | 255                |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| interface               | Specify outgoing interface to     | string             | Maximum length: 15 |                    |
|                         | reach server.                     |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| interface-select-method | Specify how to select outgoing    | option             | \-                 | auto               |
|                         | interface to reach server.        |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | Option      | Description                                            |                         |
|                         | +=============+========================================================+                         |
|                         | | *auto*      | Set outgoing interface automatically.                  |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *sdwan*     | Set outgoing interface by SD-WAN or policy routing     |                         |
|                         | |             | rules.                                                 |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *specify*   | Set outgoing interface manually.                       |                         |
|                         | +-------------+--------------------------------------------------------+                         |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ip-address              | Domain controller IPv4 address.   | ipv4-address       | Not Specified      | 0.0.0.0            |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ip6                     | Domain controller IPv6 address.   | ipv6-address       | Not Specified      | ::                 |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ldap-server `<name>`    | LDAP server name(s).              | string             | Maximum length: 79 |                    |
|                         |                                   |                    |                    |                    |
|                         | LDAP server name.                 |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| name                    | Domain controller entry name.     | string             | Maximum length: 35 |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| password                | Password for specified username.  | password           | Not Specified      |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| port                    | Port to be used for communication | integer            | Minimum value: 0   | 445                |
|                         | with the domain controller        |                    | Maximum value:     |                    |
|                         | (default = 445).                  |                    | 65535              |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| replication-port        | Port to be used for communication | integer            | Minimum value: 0   | 0                  |
|                         | with the domain controller for    |                    | Maximum value:     |                    |
|                         | replication service. Port number  |                    | 65535              |                    |
|                         | 0 indicates automatic discovery.  |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| source-ip-address       | FortiGate IPv4 address to be used | ipv4-address       | Not Specified      | 0.0.0.0            |
|                         | for communication with the domain |                    |                    |                    |
|                         | controller.                       |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| source-ip6              | FortiGate IPv6 address to be used | ipv6-address       | Not Specified      | ::                 |
|                         | for communication with the domain |                    |                    |                    |
|                         | controller.                       |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| source-port             | Source port to be used for        | integer            | Minimum value: 0   | 0                  |
|                         | communication with the domain     |                    | Maximum value:     |                    |
|                         | controller.                       |                    | 65535              |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| username                | User name to sign in with. Must   | string             | Maximum length: 64 |                    |
|                         | have proper permissions for       |                    |                    |                    |
|                         | service.                          |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+

