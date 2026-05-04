# config log custom-field

Configure custom log fields.

## Syntax

```
config log custom-field
    Description: Configure custom log fields.
    edit <id>
        set fabric-force-sync [enable|disable]
        set fabric-object [enable|disable]
        set fabric-object-source [member|local|...]
        set name {string}
        set uuid {uuid}
        set value {string}
    next
end
```

## Parameters

+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| Parameter            | Description                       | Type               | Size               | Default                              |
+======================+===================================+====================+====================+======================================+
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
| id                   | Field ID string.                  | string             | Maximum length: 35 |                                      |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| name                 | Field name (max: 15 characters).  | string             | Maximum length: 15 |                                      |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| uuid \*              | Universally Unique Identifier     | uuid               | Not Specified      | 00000000-0000-0000-0000-000000000000 |
|                      | (UUID; automatically assigned but |                    |                    |                                      |
|                      | can be manually reset).           |                    |                    |                                      |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| value                | Field value (max: 15 characters). | string             | Maximum length: 15 |                                      |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+

