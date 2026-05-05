# config firewall proxy-addrgrp

Configure web proxy address group.

## Syntax

```
config firewall proxy-addrgrp
    Description: Configure web proxy address group.
    edit <name>
        set color {integer}
        set comment {var-string}
        set member <name1>, <name2>, ...
        config tagging
            Description: Config object tagging.
            edit <name>
                set category {string}
                set tags <name1>, <name2>, ...
            next
        end
        set type [src|dst]
        set uuid {uuid}
    next
end
```

## Parameters

+-----------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| Parameter | Description                       | Type               | Size               | Default                              |
+===========+===================================+====================+====================+======================================+
| color     | Integer value to determine the    | integer            | Minimum value: 0   | 0                                    |
|           | color of the icon in the GUI.     |                    | Maximum value: 32  |                                      |
+-----------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| comment   | Optional comments.                | var-string         | Maximum length:    |                                      |
|           |                                   |                    | 255                |                                      |
+-----------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| member    | Members of address group.         | string             | Maximum length: 79 |                                      |
| `<name>`  |                                   |                    |                    |                                      |
|           | Address name.                     |                    |                    |                                      |
+-----------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| name      | Address group name.               | string             | Maximum length: 79 |                                      |
+-----------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| type      | Source or destination address     | option             | \-                 | src                                  |
|           | group type.                       |                    |                    |                                      |
+-----------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|           | +-------------+--------------------------------------------------------+                                           |
|           | | Option      | Description                                            |                                           |
|           | +=============+========================================================+                                           |
|           | | *src*       | Source group.                                          |                                           |
|           | +-------------+--------------------------------------------------------+                                           |
|           | | *dst*       | Destination group.                                     |                                           |
|           | +-------------+--------------------------------------------------------+                                           |
+-----------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| uuid      | Universally Unique Identifier     | uuid               | Not Specified      | 00000000-0000-0000-0000-000000000000 |
|           | (UUID; automatically assigned but |                    |                    |                                      |
|           | can be manually reset).           |                    |                    |                                      |
+-----------+-----------------------------------+--------------------+--------------------+--------------------------------------+

