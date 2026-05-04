# config icap server-group

Configure an ICAP server group consisting of multiple forward servers. Supports failover and load balancing.

## Syntax

```
config icap server-group
    Description: Configure an ICAP server group consisting of multiple forward servers. Supports failover and load balancing.
    edit <name>
        set fabric-force-sync [enable|disable]
        set fabric-object [enable|disable]
        set fabric-object-source [member|local|...]
        set ldb-method [weighted|least-session|...]
        config server-list
            Description: Add ICAP servers to a list to form a server group. Optionally assign weights to each server.
            edit <name>
                set weight {integer}
            next
        end
        set uuid {uuid}
    next
end
```

## Parameters

+----------------------+-----------------------------------+----------------------+----------------------+--------------------------------------+
| Parameter            | Description                       | Type                 | Size                 | Default                              |
+======================+===================================+======================+======================+======================================+
| fabric-force-sync \* | Enable/disable forced             | option               | \-                   | disable                              |
|                      | synchronization of configuration  |                      |                      |                                      |
|                      | objects from the root FortiGate   |                      |                      |                                      |
|                      | unit to the downstream devices.   |                      |                      |                                      |
|                      | Configuration conflict check is   |                      |                      |                                      |
|                      | skipped.                          |                      |                      |                                      |
+----------------------+-----------------------------------+----------------------+----------------------+--------------------------------------+
|                      | +-------------+--------------------------------------------------------+                                               |
|                      | | Option      | Description                                            |                                               |
|                      | +=============+========================================================+                                               |
|                      | | *enable*    | Enable forced synchronization of configuration objects |                                               |
|                      | |             | from the root FortiGate unit to the downstream         |                                               |
|                      | |             | devices.                                               |                                               |
|                      | +-------------+--------------------------------------------------------+                                               |
|                      | | *disable*   | Disable forced synchronization of configuration        |                                               |
|                      | |             | objects from the root FortiGate unit to the downstream |                                               |
|                      | |             | devices.                                               |                                               |
|                      | +-------------+--------------------------------------------------------+                                               |
+----------------------+-----------------------------------+----------------------+----------------------+--------------------------------------+
| fabric-object \*     | Security Fabric global object     | option               | \-                   | disable                              |
|                      | setting.                          |                      |                      |                                      |
+----------------------+-----------------------------------+----------------------+----------------------+--------------------------------------+
|                      | +-------------+--------------------------------------------------------+                                               |
|                      | | Option      | Description                                            |                                               |
|                      | +=============+========================================================+                                               |
|                      | | *enable*    | Object is set as a security fabric-wide global object. |                                               |
|                      | +-------------+--------------------------------------------------------+                                               |
|                      | | *disable*   | Object is local to this security fabric member.        |                                               |
|                      | +-------------+--------------------------------------------------------+                                               |
+----------------------+-----------------------------------+----------------------+----------------------+--------------------------------------+
| fabric-object-source | Source of truth for fabric        | option               | \-                   | root                                 |
| \*                   | object.                           |                      |                      |                                      |
+----------------------+-----------------------------------+----------------------+----------------------+--------------------------------------+
|                      | +-------------+--------------------------------------------------------+                                               |
|                      | | Option      | Description                                            |                                               |
|                      | +=============+========================================================+                                               |
|                      | | *member*    | Source of truth for this object is a non-root member   |                                               |
|                      | |             | of fabric.                                             |                                               |
|                      | +-------------+--------------------------------------------------------+                                               |
|                      | | *local*     | Source of truth for this object is this security       |                                               |
|                      | |             | fabric member.                                         |                                               |
|                      | +-------------+--------------------------------------------------------+                                               |
|                      | | *root*      | Source of truth for this object is the root of the     |                                               |
|                      | |             | fabric.                                                |                                               |
|                      | +-------------+--------------------------------------------------------+                                               |
+----------------------+-----------------------------------+----------------------+----------------------+--------------------------------------+
| ldb-method           | Load balance method.              | option               | \-                   | weighted                             |
+----------------------+-----------------------------------+----------------------+----------------------+--------------------------------------+
|                      | +------------------+--------------------------------------------------------+                                          |
|                      | | Option           | Description                                            |                                          |
|                      | +==================+========================================================+                                          |
|                      | | *weighted*       | Load balance traffic to forward servers based on       |                                          |
|                      | |                  | assigned weights.                                      |                                          |
|                      | +------------------+--------------------------------------------------------+                                          |
|                      | | *least-session*  | Send new sessions to the server with lowest session    |                                          |
|                      | |                  | count.                                                 |                                          |
|                      | +------------------+--------------------------------------------------------+                                          |
|                      | | *active-passive* | Send new sessions to active server with high weight.   |                                          |
|                      | +------------------+--------------------------------------------------------+                                          |
+----------------------+-----------------------------------+----------------------+----------------------+--------------------------------------+
| name                 | Configure an ICAP server group    | string               | Maximum length: 63   |                                      |
|                      | consisting one or multiple        |                      |                      |                                      |
|                      | forward servers. Supports         |                      |                      |                                      |
|                      | failover and load balancing.      |                      |                      |                                      |
+----------------------+-----------------------------------+----------------------+----------------------+--------------------------------------+
| uuid \*              | Universally Unique Identifier     | uuid                 | Not Specified        | 00000000-0000-0000-0000-000000000000 |
|                      | (UUID; automatically assigned but |                      |                      |                                      |
|                      | can be manually reset).           |                      |                      |                                      |
+----------------------+-----------------------------------+----------------------+----------------------+--------------------------------------+

