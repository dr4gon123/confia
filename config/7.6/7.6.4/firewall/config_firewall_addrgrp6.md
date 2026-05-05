# config firewall addrgrp6

Configure IPv6 address groups.

## Syntax

```
config firewall addrgrp6
    Description: Configure IPv6 address groups.
    edit <name>
        set color {integer}
        set comment {var-string}
        set exclude [enable|disable]
        set exclude-member <name1>, <name2>, ...
        set fabric-object [enable|disable]
        set member <name1>, <name2>, ...
        config tagging
            Description: Config object tagging.
            edit <name>
                set category {string}
                set tags <name1>, <name2>, ...
            next
        end
        set uuid {uuid}
    next
end
```

## Parameters

+----------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| Parameter      | Description                       | Type               | Size               | Default                              |
+================+===================================+====================+====================+======================================+
| color          | Integer value to determine the    | integer            | Minimum value: 0   | 0                                    |
|                | color of the icon in the GUI (1 - |                    | Maximum value: 32  |                                      |
|                | 32, default = 0, which sets the   |                    |                    |                                      |
|                | value to 1).                      |                    |                    |                                      |
+----------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| comment        | Comment.                          | var-string         | Maximum length:    |                                      |
|                |                                   |                    | 255                |                                      |
+----------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| exclude        | Enable/disable address6           | option             | \-                 | disable                              |
|                | exclusion.                        |                    |                    |                                      |
+----------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                | +-------------+--------------------------------------------------------+                                           |
|                | | Option      | Description                                            |                                           |
|                | +=============+========================================================+                                           |
|                | | *enable*    | Enable address6 exclusion.                             |                                           |
|                | +-------------+--------------------------------------------------------+                                           |
|                | | *disable*   | Disable address6 exclusion.                            |                                           |
|                | +-------------+--------------------------------------------------------+                                           |
+----------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| exclude-member | Address6 exclusion member.        | string             | Maximum length: 79 |                                      |
| `<name>`       |                                   |                    |                    |                                      |
|                | Address6 name.                    |                    |                    |                                      |
+----------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| fabric-object  | Security Fabric global object     | option             | \-                 | disable                              |
|                | setting.                          |                    |                    |                                      |
+----------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                | +-------------+--------------------------------------------------------+                                           |
|                | | Option      | Description                                            |                                           |
|                | +=============+========================================================+                                           |
|                | | *enable*    | Object is set as a security fabric-wide global object. |                                           |
|                | +-------------+--------------------------------------------------------+                                           |
|                | | *disable*   | Object is local to this security fabric member.        |                                           |
|                | +-------------+--------------------------------------------------------+                                           |
+----------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| member         | Address objects contained within  | string             | Maximum length: 79 |                                      |
| `<name>`       | the group.                        |                    |                    |                                      |
|                |                                   |                    |                    |                                      |
|                | Address6/addrgrp6 name.           |                    |                    |                                      |
+----------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| name           | IPv6 address group name.          | string             | Maximum length: 79 |                                      |
+----------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| uuid           | Universally Unique Identifier     | uuid               | Not Specified      | 00000000-0000-0000-0000-000000000000 |
|                | (UUID; automatically assigned but |                    |                    |                                      |
|                | can be manually reset).           |                    |                    |                                      |
+----------------+-----------------------------------+--------------------+--------------------+--------------------------------------+

