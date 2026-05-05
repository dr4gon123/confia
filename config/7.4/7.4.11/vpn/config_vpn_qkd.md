# config vpn qkd

Configure Quantum Key Distribution servers

## Syntax

```
config vpn qkd
    Description: Configure Quantum Key Distribution servers
    edit <name>
        set certificate <name1>, <name2>, ...
        set comment {var-string}
        set id {string}
        set peer {string}
        set port {integer}
        set server {string}
    next
end
```

## Parameters

+-------------+-----------------------------------+------------+---------+---------+
| Parameter   | Description                       | Type       | Size    | Default |
+=============+===================================+============+=========+=========+
| certificate | Names of up to 4 certificates to  | string     | Maximum |         |
| `<name>`    | offer to the KME.                 |            | length: |         |
|             |                                   |            | 79      |         |
|             | Certificate name.                 |            |         |         |
+-------------+-----------------------------------+------------+---------+---------+
| comment     | Comment.                          | var-string | Maximum |         |
|             |                                   |            | length: |         |
|             |                                   |            | 255     |         |
+-------------+-----------------------------------+------------+---------+---------+
| id          | Quantum Key Distribution ID       | string     | Maximum |         |
|             | assigned by the KME.              |            | length: |         |
|             |                                   |            | 291     |         |
+-------------+-----------------------------------+------------+---------+---------+
| name        | Quantum Key Distribution          | string     | Maximum |         |
|             | configuration name.               |            | length: |         |
|             |                                   |            | 35      |         |
+-------------+-----------------------------------+------------+---------+---------+
| peer        | Authenticate Quantum Key          | string     | Maximum |         |
|             | Device\'s certificate with the    |            | length: |         |
|             | peer/peergrp.                     |            | 35      |         |
+-------------+-----------------------------------+------------+---------+---------+
| port        | Port to connect to on the KME.    | integer    | Minimum | 0       |
|             |                                   |            | value:  |         |
|             |                                   |            | 1       |         |
|             |                                   |            | Maximum |         |
|             |                                   |            | value:  |         |
|             |                                   |            | 65535   |         |
+-------------+-----------------------------------+------------+---------+---------+
| server      | IPv4, IPv6 or DNS address of the  | string     | Maximum |         |
|             | KME.                              |            | length: |         |
|             |                                   |            | 63      |         |
+-------------+-----------------------------------+------------+---------+---------+

