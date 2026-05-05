# config vpn kmip-server

KMIP server entry configuration.

## Syntax

```
config vpn kmip-server
    Description: KMIP server entry configuration.
    edit <name>
        set interface {string}
        set interface-select-method [auto|sdwan|...]
        set password {password}
        set server-identity-check [enable|disable]
        config server-list
            Description: KMIP server list.
            edit <id>
                set cert {string}
                set port {integer}
                set server {string}
                set status [enable|disable]
            next
        end
        set source-ip {string}
        set ssl-min-proto-version [default|SSLv3|...]
        set username {string}
        set vrf-select {integer}
    next
end
```

## Parameters

+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter               | Description                       | Type               | Size               | Default            |
+=========================+===================================+====================+====================+====================+
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
| name                    | KMIP server entry name.           | string             | Maximum length: 35 |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| password                | Password to use for connectivity  | password           | Not Specified      |                    |
|                         | to the KMIP server.               |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| server-identity-check   | Enable/disable KMIP server        | option             | \-                 | disable            |
|                         | identity check (verify server     |                    |                    |                    |
|                         | FQDN/IP address against the       |                    |                    |                    |
|                         | server certificate).              |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | Option      | Description                                            |                         |
|                         | +=============+========================================================+                         |
|                         | | *enable*    | Enable server identity check.                          |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *disable*   | Disable server identity check.                         |                         |
|                         | +-------------+--------------------------------------------------------+                         |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| source-ip               | FortiGate IP address to be used   | string             | Maximum length: 63 |                    |
|                         | for communication with the KMIP   |                    |                    |                    |
|                         | server.                           |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ssl-min-proto-version   | Minimum supported protocol        | option             | \-                 | default            |
|                         | version for SSL/TLS connections   |                    |                    |                    |
|                         | (default is to follow system      |                    |                    |                    |
|                         | global setting).                  |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | Option      | Description                                            |                         |
|                         | +=============+========================================================+                         |
|                         | | *default*   | Follow system global setting.                          |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *SSLv3*     | SSLv3.                                                 |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *TLSv1*     | TLSv1.                                                 |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *TLSv1-1*   | TLSv1.1.                                               |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *TLSv1-2*   | TLSv1.2.                                               |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *TLSv1-3*   | TLSv1.3.                                               |                         |
|                         | +-------------+--------------------------------------------------------+                         |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| username                | User name to use for connectivity | string             | Maximum length: 63 |                    |
|                         | to the KMIP server.               |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| vrf-select              | VRF ID used for connection to     | integer            | Minimum value: 0   | 0                  |
|                         | server.                           |                    | Maximum value: 511 |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+

