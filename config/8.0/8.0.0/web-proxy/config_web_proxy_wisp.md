# config web-proxy wisp

Configure Websense Integrated Services Protocol (WISP) servers.

## Syntax

```
config web-proxy wisp
    Description: Configure Websense Integrated Services Protocol (WISP) servers.
    edit <name>
        set comment {var-string}
        set fabric-force-sync [enable|disable]
        set fabric-object [enable|disable]
        set fabric-object-source [member|local|...]
        set max-connections {integer}
        set outgoing-ip {ipv4-address-any}
        set server-ip {ipv4-address-any}
        set server-port {integer}
        set timeout {integer}
        set uuid {uuid}
    next
end
```

## Parameters

+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| Parameter            | Description                       | Type               | Size               | Default                              |
+======================+===================================+====================+====================+======================================+
| comment              | Comment.                          | var-string         | Maximum length:    |                                      |
|                      |                                   |                    | 255                |                                      |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| fabric-force-sync \* | Enable/disable forced             | option             | \-                 | disable                              |
|                      | synchronization of configuration  |                    |                    |                                      |
|                      | objects from the root FortiGate   |                    |                    |                                      |
|                      | unit to the downstream devices.   |                    |                    |                                      |
|                      | Configuration conflict check is   |                    |                    |                                      |
|                      | skipped.                          |                    |                    |                                      |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                      | +-------------+--------------------------------------------------------+                                           |
|                      | | Option      | Description                                            |                                           |
|                      | +=============+========================================================+                                           |
|                      | | *enable*    | Enable forced synchronization of configuration objects |                                           |
|                      | |             | from the root FortiGate unit to the downstream         |                                           |
|                      | |             | devices.                                               |                                           |
|                      | +-------------+--------------------------------------------------------+                                           |
|                      | | *disable*   | Disable forced synchronization of configuration        |                                           |
|                      | |             | objects from the root FortiGate unit to the downstream |                                           |
|                      | |             | devices.                                               |                                           |
|                      | +-------------+--------------------------------------------------------+                                           |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| fabric-object \*     | Security Fabric global object     | option             | \-                 | disable                              |
|                      | setting.                          |                    |                    |                                      |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                      | +-------------+--------------------------------------------------------+                                           |
|                      | | Option      | Description                                            |                                           |
|                      | +=============+========================================================+                                           |
|                      | | *enable*    | Object is set as a security fabric-wide global object. |                                           |
|                      | +-------------+--------------------------------------------------------+                                           |
|                      | | *disable*   | Object is local to this security fabric member.        |                                           |
|                      | +-------------+--------------------------------------------------------+                                           |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| fabric-object-source | Source of truth for fabric        | option             | \-                 | root                                 |
| \*                   | object.                           |                    |                    |                                      |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                      | +-------------+--------------------------------------------------------+                                           |
|                      | | Option      | Description                                            |                                           |
|                      | +=============+========================================================+                                           |
|                      | | *member*    | Source of truth for this object is a non-root member   |                                           |
|                      | |             | of fabric.                                             |                                           |
|                      | +-------------+--------------------------------------------------------+                                           |
|                      | | *local*     | Source of truth for this object is this security       |                                           |
|                      | |             | fabric member.                                         |                                           |
|                      | +-------------+--------------------------------------------------------+                                           |
|                      | | *root*      | Source of truth for this object is the root of the     |                                           |
|                      | |             | fabric.                                                |                                           |
|                      | +-------------+--------------------------------------------------------+                                           |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| max-connections      | Maximum number of web proxy WISP  | integer            | Minimum value: 4   | 64                                   |
|                      | connections (4 - 4096, default =  |                    | Maximum value:     |                                      |
|                      | 64).                              |                    | 4096               |                                      |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| name                 | Server name.                      | string             | Maximum length: 35 |                                      |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| outgoing-ip          | WISP outgoing IP address.         | ipv4-address-any   | Not Specified      | 0.0.0.0                              |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| server-ip            | WISP server IP address.           | ipv4-address-any   | Not Specified      | 0.0.0.0                              |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| server-port          | WISP server port (1 - 65535,      | integer            | Minimum value: 1   | 15868                                |
|                      | default = 15868).                 |                    | Maximum value:     |                                      |
|                      |                                   |                    | 65535              |                                      |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| timeout              | Period of time before WISP        | integer            | Minimum value: 1   | 5                                    |
|                      | requests time out (1 - 15 sec,    |                    | Maximum value: 15  |                                      |
|                      | default = 5).                     |                    |                    |                                      |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| uuid \*              | Universally Unique Identifier     | uuid               | Not Specified      | 00000000-0000-0000-0000-000000000000 |
|                      | (UUID; automatically assigned but |                    |                    |                                      |
|                      | can be manually reset).           |                    |                    |                                      |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+

