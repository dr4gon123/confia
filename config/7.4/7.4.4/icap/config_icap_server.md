# config icap server

Configure ICAP servers.

## Syntax

```
config icap server
    Description: Configure ICAP servers.
    edit <name>
        set addr-type [ip4|ip6|...]
        set fqdn {string}
        set healthcheck [disable|enable]
        set healthcheck-service {string}
        set ip-address {ipv4-address-any}
        set ip6-address {ipv6-address}
        set max-connections {integer}
        set port {integer}
        set secure [disable|enable]
        set ssl-cert {string}
    next
end
```

## Parameters

+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter           | Description                       | Type               | Size               | Default            |
+=====================+===================================+====================+====================+====================+
| addr-type           | Address type of the remote ICAP   | option             | \-                 | ip4                |
|                     | server: IPv4, IPv6 or FQDN.       |                    |                    |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | Option      | Description                                            |                         |
|                     | +=============+========================================================+                         |
|                     | | *ip4*       | Use an IPv4 address for the remote ICAP server.        |                         |
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | *ip6*       | Use an IPv6 address for the remote ICAP server.        |                         |
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | *fqdn*      | Use the FQDN for the forwarding proxy server.          |                         |
|                     | +-------------+--------------------------------------------------------+                         |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| fqdn                | ICAP remote server Fully          | string             | Maximum length:    |                    |
|                     | Qualified Domain Name (FQDN).     |                    | 255                |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| healthcheck         | Enable/disable ICAP remote server | option             | \-                 | disable            |
|                     | health checking. Attempts to      |                    |                    |                    |
|                     | connect to the remote ICAP server |                    |                    |                    |
|                     | to verify that the server is      |                    |                    |                    |
|                     | operating normally.               |                    |                    |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | Option      | Description                                            |                         |
|                     | +=============+========================================================+                         |
|                     | | *disable*   | Disable health checking.                               |                         |
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | *enable*    | Enable health checking.                                |                         |
|                     | +-------------+--------------------------------------------------------+                         |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| healthcheck-service | ICAP Service name to use for      | string             | Maximum length:    |                    |
|                     | health checks.                    |                    | 127                |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ip-address          | IPv4 address of the ICAP server.  | ipv4-address-any   | Not Specified      | 0.0.0.0            |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ip6-address         | IPv6 address of the ICAP server.  | ipv6-address       | Not Specified      | ::                 |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| max-connections     | Maximum number of concurrent      | integer            | Minimum value: 0   | 100                |
|                     | connections to ICAP server. Must  |                    | Maximum value:     |                    |
|                     | not be less than                  |                    | 4294967295         |                    |
|                     | wad-worker-count.                 |                    |                    |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| name                | Server name.                      | string             | Maximum length: 63 |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| port                | ICAP server port.                 | integer            | Minimum value: 1   | 1344               |
|                     |                                   |                    | Maximum value:     |                    |
|                     |                                   |                    | 65535              |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| secure              | Enable/disable secure connection  | option             | \-                 | disable            |
|                     | to ICAP server.                   |                    |                    |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | Option      | Description                                            |                         |
|                     | +=============+========================================================+                         |
|                     | | *disable*   | Disable connection to secure ICAP server.              |                         |
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | *enable*    | Enable connection to secure ICAP server.               |                         |
|                     | +-------------+--------------------------------------------------------+                         |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ssl-cert            | CA certificate name.              | string             | Maximum length: 79 |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+

