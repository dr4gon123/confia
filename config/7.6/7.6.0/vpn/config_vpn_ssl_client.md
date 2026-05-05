# config vpn ssl client

Client.

## Syntax

```
config vpn ssl client
    Description: Client.
    edit <name>
        set certificate {string}
        set class-id {integer}
        set comment {var-string}
        set distance {integer}
        set interface {string}
        set ipv4-subnets {string}
        set ipv6-subnets {string}
        set peer {string}
        set port {integer}
        set priority {integer}
        set psk {password-3}
        set realm {string}
        set server {string}
        set source-ip {string}
        set status [enable|disable]
        set user {string}
    next
end
```

## Parameters

+--------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter    | Description                       | Type               | Size               | Default            |
+==============+===================================+====================+====================+====================+
| certificate  | Certificate to offer to SSL-VPN   | string             | Maximum length: 35 |                    |
|              | server if it requests one.        |                    |                    |                    |
+--------------+-----------------------------------+--------------------+--------------------+--------------------+
| class-id     | Traffic class ID.                 | integer            | Minimum value: 0   | 0                  |
|              |                                   |                    | Maximum value:     |                    |
|              |                                   |                    | 4294967295         |                    |
+--------------+-----------------------------------+--------------------+--------------------+--------------------+
| comment      | Comment.                          | var-string         | Maximum length:    |                    |
|              |                                   |                    | 255                |                    |
+--------------+-----------------------------------+--------------------+--------------------+--------------------+
| distance     | Distance for routes added by      | integer            | Minimum value: 1   | 10                 |
|              | SSL-VPN (1 - 255).                |                    | Maximum value: 255 |                    |
+--------------+-----------------------------------+--------------------+--------------------+--------------------+
| interface    | SSL interface to send/receive     | string             | Maximum length: 15 |                    |
|              | traffic over.                     |                    |                    |                    |
+--------------+-----------------------------------+--------------------+--------------------+--------------------+
| ipv4-subnets | IPv4 subnets that the client is   | string             | Maximum length: 79 |                    |
|              | protecting.                       |                    |                    |                    |
+--------------+-----------------------------------+--------------------+--------------------+--------------------+
| ipv6-subnets | IPv6 subnets that the client is   | string             | Maximum length: 79 |                    |
|              | protecting.                       |                    |                    |                    |
+--------------+-----------------------------------+--------------------+--------------------+--------------------+
| name         | SSL-VPN tunnel name.              | string             | Maximum length: 35 |                    |
+--------------+-----------------------------------+--------------------+--------------------+--------------------+
| peer         | Authenticate peer\'s certificate  | string             | Maximum length: 35 |                    |
|              | with the peer/peergrp.            |                    |                    |                    |
+--------------+-----------------------------------+--------------------+--------------------+--------------------+
| port         | SSL-VPN server port.              | integer            | Minimum value: 1   | 443                |
|              |                                   |                    | Maximum value:     |                    |
|              |                                   |                    | 65535              |                    |
+--------------+-----------------------------------+--------------------+--------------------+--------------------+
| priority     | Priority for routes added by      | integer            | Minimum value: 1   | 1                  |
|              | SSL-VPN (1 - 65535).              |                    | Maximum value:     |                    |
|              |                                   |                    | 65535              |                    |
+--------------+-----------------------------------+--------------------+--------------------+--------------------+
| psk          | Pre-shared secret to authenticate | password-3         | Not Specified      |                    |
|              | with the server (ASCII string or  |                    |                    |                    |
|              | hexadecimal encoded with a        |                    |                    |                    |
|              | leading 0x).                      |                    |                    |                    |
+--------------+-----------------------------------+--------------------+--------------------+--------------------+
| realm        | Realm name configured on SSL-VPN  | string             | Maximum length: 35 |                    |
|              | server.                           |                    |                    |                    |
+--------------+-----------------------------------+--------------------+--------------------+--------------------+
| server       | IPv4, IPv6 or DNS address of the  | string             | Maximum length: 63 |                    |
|              | SSL-VPN server.                   |                    |                    |                    |
+--------------+-----------------------------------+--------------------+--------------------+--------------------+
| source-ip    | IPv4 or IPv6 address to use as a  | string             | Maximum length: 63 |                    |
|              | source for the SSL-VPN connection |                    |                    |                    |
|              | to the server.                    |                    |                    |                    |
+--------------+-----------------------------------+--------------------+--------------------+--------------------+
| status       | Enable/disable this SSL-VPN       | option             | \-                 | enable             |
|              | client configuration.             |                    |                    |                    |
+--------------+-----------------------------------+--------------------+--------------------+--------------------+
|              | +-------------+--------------------------------------------------------+                         |
|              | | Option      | Description                                            |                         |
|              | +=============+========================================================+                         |
|              | | *enable*    | Enable the SSL-VPN configuration.                      |                         |
|              | +-------------+--------------------------------------------------------+                         |
|              | | *disable*   | Disable the SSL-VPN configuration.                     |                         |
|              | +-------------+--------------------------------------------------------+                         |
+--------------+-----------------------------------+--------------------+--------------------+--------------------+
| user         | Username to offer to the peer to  | string             | Maximum length: 35 |                    |
|              | authenticate the client.          |                    |                    |                    |
+--------------+-----------------------------------+--------------------+--------------------+--------------------+

