# config web-proxy forward-server

Configure forward-server addresses.

## Syntax

```
config web-proxy forward-server
    Description: Configure forward-server addresses.
    edit <name>
        set addr-type [ip|ipv6|...]
        set comment {string}
        set fabric-force-sync [enable|disable]
        set fabric-object [enable|disable]
        set fabric-object-source [member|local|...]
        set fqdn {string}
        set healthcheck [disable|enable]
        set interface {string}
        set interface-select-method [sdwan|specify]
        set ip {ipv4-address-any}
        set ipv6 {ipv6-address}
        set masquerade [enable|disable]
        set monitor {string}
        set password {password}
        set port {integer}
        set server-down-option [block|pass]
        set username {string}
        set uuid {uuid}
        set vrf-select {integer}
    next
end
```

## Parameters

+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| Parameter               | Description                       | Type               | Size               | Default                              |
+=========================+===================================+====================+====================+======================================+
| addr-type               | Address type of the forwarding    | option             | \-                 | ip                                   |
|                         | proxy server: IP or FQDN.         |                    |                    |                                      |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                         | +-------------+--------------------------------------------------------+                                           |
|                         | | Option      | Description                                            |                                           |
|                         | +=============+========================================================+                                           |
|                         | | *ip*        | Use an IPv4 address for the forwarding proxy server.   |                                           |
|                         | +-------------+--------------------------------------------------------+                                           |
|                         | | *ipv6*      | Use an IPv6 address for the forwarding proxy server.   |                                           |
|                         | +-------------+--------------------------------------------------------+                                           |
|                         | | *fqdn*      | Use the FQDN for the forwarding proxy server.          |                                           |
|                         | +-------------+--------------------------------------------------------+                                           |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| comment                 | Comment.                          | string             | Maximum length: 63 |                                      |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| fabric-force-sync \*    | Enable/disable forced             | option             | \-                 | disable                              |
|                         | synchronization of configuration  |                    |                    |                                      |
|                         | objects from the root FortiGate   |                    |                    |                                      |
|                         | unit to the downstream devices.   |                    |                    |                                      |
|                         | Configuration conflict check is   |                    |                    |                                      |
|                         | skipped.                          |                    |                    |                                      |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                         | +-------------+--------------------------------------------------------+                                           |
|                         | | Option      | Description                                            |                                           |
|                         | +=============+========================================================+                                           |
|                         | | *enable*    | Enable forced synchronization of configuration objects |                                           |
|                         | |             | from the root FortiGate unit to the downstream         |                                           |
|                         | |             | devices.                                               |                                           |
|                         | +-------------+--------------------------------------------------------+                                           |
|                         | | *disable*   | Disable forced synchronization of configuration        |                                           |
|                         | |             | objects from the root FortiGate unit to the downstream |                                           |
|                         | |             | devices.                                               |                                           |
|                         | +-------------+--------------------------------------------------------+                                           |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| fabric-object \*        | Security Fabric global object     | option             | \-                 | disable                              |
|                         | setting.                          |                    |                    |                                      |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                         | +-------------+--------------------------------------------------------+                                           |
|                         | | Option      | Description                                            |                                           |
|                         | +=============+========================================================+                                           |
|                         | | *enable*    | Object is set as a security fabric-wide global object. |                                           |
|                         | +-------------+--------------------------------------------------------+                                           |
|                         | | *disable*   | Object is local to this security fabric member.        |                                           |
|                         | +-------------+--------------------------------------------------------+                                           |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| fabric-object-source \* | Source of truth for fabric        | option             | \-                 | root                                 |
|                         | object.                           |                    |                    |                                      |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                         | +-------------+--------------------------------------------------------+                                           |
|                         | | Option      | Description                                            |                                           |
|                         | +=============+========================================================+                                           |
|                         | | *member*    | Source of truth for this object is a non-root member   |                                           |
|                         | |             | of fabric.                                             |                                           |
|                         | +-------------+--------------------------------------------------------+                                           |
|                         | | *local*     | Source of truth for this object is this security       |                                           |
|                         | |             | fabric member.                                         |                                           |
|                         | +-------------+--------------------------------------------------------+                                           |
|                         | | *root*      | Source of truth for this object is the root of the     |                                           |
|                         | |             | fabric.                                                |                                           |
|                         | +-------------+--------------------------------------------------------+                                           |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| fqdn                    | Forward server Fully Qualified    | string             | Maximum length:    |                                      |
|                         | Domain Name (FQDN).               |                    | 255                |                                      |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| healthcheck             | Enable/disable forward server     | option             | \-                 | disable                              |
|                         | health checking. Attempts to      |                    |                    |                                      |
|                         | connect through the remote        |                    |                    |                                      |
|                         | forwarding server to a            |                    |                    |                                      |
|                         | destination to verify that the    |                    |                    |                                      |
|                         | forwarding server is operating    |                    |                    |                                      |
|                         | normally.                         |                    |                    |                                      |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                         | +-------------+--------------------------------------------------------+                                           |
|                         | | Option      | Description                                            |                                           |
|                         | +=============+========================================================+                                           |
|                         | | *disable*   | Disable health checking.                               |                                           |
|                         | +-------------+--------------------------------------------------------+                                           |
|                         | | *enable*    | Enable health checking.                                |                                           |
|                         | +-------------+--------------------------------------------------------+                                           |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| interface               | Specify outgoing interface to     | string             | Maximum length: 15 |                                      |
|                         | reach server.                     |                    |                    |                                      |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| interface-select-method | Specify how to select outgoing    | option             | \-                 | sdwan                                |
|                         | interface to reach server.        |                    |                    |                                      |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                         | +-------------+--------------------------------------------------------+                                           |
|                         | | Option      | Description                                            |                                           |
|                         | +=============+========================================================+                                           |
|                         | | *sdwan*     | Set outgoing interface by SD-WAN or policy routing     |                                           |
|                         | |             | rules.                                                 |                                           |
|                         | +-------------+--------------------------------------------------------+                                           |
|                         | | *specify*   | Set outgoing interface manually.                       |                                           |
|                         | +-------------+--------------------------------------------------------+                                           |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| ip                      | Forward proxy server IP address.  | ipv4-address-any   | Not Specified      | 0.0.0.0                              |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| ipv6                    | Forward proxy server IPv6         | ipv6-address       | Not Specified      | ::                                   |
|                         | address.                          |                    |                    |                                      |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| masquerade              | Enable/disable use of the IP      | option             | \-                 | enable                               |
|                         | address of the outgoing interface |                    |                    |                                      |
|                         | as the client IP address (default |                    |                    |                                      |
|                         | = enable)                         |                    |                    |                                      |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                         | +-------------+--------------------------------------------------------+                                           |
|                         | | Option      | Description                                            |                                           |
|                         | +=============+========================================================+                                           |
|                         | | *enable*    | Enable use of the IP address of the outgoing interface |                                           |
|                         | |             | as the client IP address.                              |                                           |
|                         | +-------------+--------------------------------------------------------+                                           |
|                         | | *disable*   | Disable use of the IP address of the outgoing          |                                           |
|                         | |             | interface as the client IP address.                    |                                           |
|                         | +-------------+--------------------------------------------------------+                                           |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| monitor                 | URL for forward server health     | string             | Maximum length:    | www.google.com                       |
|                         | check monitoring (default =       |                    | 255                |                                      |
|                         | www.google.com).                  |                    |                    |                                      |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| name                    | Server name.                      | string             | Maximum length: 63 |                                      |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| password                | HTTP authentication password.     | password           | Not Specified      |                                      |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| port                    | Port number that the forwarding   | integer            | Minimum value: 1   | 3128                                 |
|                         | server expects to receive HTTP    |                    | Maximum value:     |                                      |
|                         | sessions on (1 - 65535, default = |                    | 65535              |                                      |
|                         | 3128).                            |                    |                    |                                      |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| server-down-option      | Action to take when the forward   | option             | \-                 | block                                |
|                         | server is found to be down: block |                    |                    |                                      |
|                         | sessions until the server is back |                    |                    |                                      |
|                         | up or pass sessions to their      |                    |                    |                                      |
|                         | destination.                      |                    |                    |                                      |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                         | +-------------+--------------------------------------------------------+                                           |
|                         | | Option      | Description                                            |                                           |
|                         | +=============+========================================================+                                           |
|                         | | *block*     | Block sessions until the server is back up.            |                                           |
|                         | +-------------+--------------------------------------------------------+                                           |
|                         | | *pass*      | Pass sessions to their destination bypassing the       |                                           |
|                         | |             | forward server.                                        |                                           |
|                         | +-------------+--------------------------------------------------------+                                           |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| username                | HTTP authentication user name.    | string             | Maximum length: 64 |                                      |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| uuid \*                 | Universally Unique Identifier     | uuid               | Not Specified      | 00000000-0000-0000-0000-000000000000 |
|                         | (UUID; automatically assigned but |                    |                    |                                      |
|                         | can be manually reset).           |                    |                    |                                      |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| vrf-select              | VRF ID used for connection to     | integer            | Minimum value: 0   | -1                                   |
|                         | server.                           |                    | Maximum value: 511 |                                      |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+

