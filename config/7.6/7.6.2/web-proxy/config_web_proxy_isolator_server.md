# config web-proxy isolator-server

Configure forward-server addresses.

## Syntax

```
config web-proxy isolator-server
    Description: Configure forward-server addresses.
    edit <name>
        set addr-type [ip|ipv6|...]
        set comment {string}
        set fqdn {string}
        set interface {string}
        set interface-select-method [sdwan|specify]
        set ip {ipv4-address-any}
        set ipv6 {ipv6-address}
        set port {integer}
        set vrf-select {integer}
    next
end
```

## Parameters

+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter               | Description                       | Type               | Size               | Default            |
+=========================+===================================+====================+====================+====================+
| addr-type               | Address type of the forwarding    | option             | \-                 | ip                 |
|                         | proxy server: IP or FQDN.         |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | Option      | Description                                            |                         |
|                         | +=============+========================================================+                         |
|                         | | *ip*        | Use an IPv4 address for the forwarding proxy server.   |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *ipv6*      | Use an IPv6 address for the forwarding proxy server.   |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *fqdn*      | Use the FQDN for the forwarding proxy server.          |                         |
|                         | +-------------+--------------------------------------------------------+                         |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| comment                 | Comment.                          | string             | Maximum length: 63 |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| fqdn                    | Forward server Fully Qualified    | string             | Maximum length:    |                    |
|                         | Domain Name (FQDN).               |                    | 255                |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| interface               | Specify outgoing interface to     | string             | Maximum length: 15 |                    |
|                         | reach server.                     |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| interface-select-method | Specify how to select outgoing    | option             | \-                 | sdwan              |
|                         | interface to reach server.        |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | Option      | Description                                            |                         |
|                         | +=============+========================================================+                         |
|                         | | *sdwan*     | Set outgoing interface by SD-WAN or policy routing     |                         |
|                         | |             | rules.                                                 |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *specify*   | Set outgoing interface manually.                       |                         |
|                         | +-------------+--------------------------------------------------------+                         |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ip                      | Forward proxy server IP address.  | ipv4-address-any   | Not Specified      | 0.0.0.0            |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ipv6                    | Forward proxy server IPv6         | ipv6-address       | Not Specified      | ::                 |
|                         | address.                          |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| name                    | Server name.                      | string             | Maximum length: 63 |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| port                    | Port number that the forwarding   | integer            | Minimum value: 1   | 3128               |
|                         | server expects to receive HTTP    |                    | Maximum value:     |                    |
|                         | sessions on (1 - 65535, default = |                    | 65535              |                    |
|                         | 3128).                            |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| vrf-select              | VRF ID used for connection to     | integer            | Minimum value: 0   | -1                 |
|                         | server.                           |                    | Maximum value: 511 |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+

