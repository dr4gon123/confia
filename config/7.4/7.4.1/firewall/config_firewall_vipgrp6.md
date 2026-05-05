# config firewall vipgrp6

Configure IPv6 virtual IP groups.

## Syntax

```
config firewall vipgrp6
    Description: Configure IPv6 virtual IP groups.
    edit <name>
        set color {integer}
        set comments {var-string}
        set member <name1>, <name2>, ...
        set uuid {uuid}
    next
end
```

## Parameters

+-----------+-----------------------------------+------------+-----------+--------------------------------------+
| Parameter | Description                       | Type       | Size      | Default                              |
+===========+===================================+============+===========+======================================+
| color     | Integer value to determine the    | integer    | Minimum   | 0                                    |
|           | color of the icon in the GUI.     |            | value: 0  |                                      |
|           |                                   |            | Maximum   |                                      |
|           |                                   |            | value: 32 |                                      |
+-----------+-----------------------------------+------------+-----------+--------------------------------------+
| comments  | Comment.                          | var-string | Maximum   |                                      |
|           |                                   |            | length:   |                                      |
|           |                                   |            | 255       |                                      |
+-----------+-----------------------------------+------------+-----------+--------------------------------------+
| member    | Member VIP objects of the group   | string     | Maximum   |                                      |
| `<name>`  | (Separate multiple objects with a |            | length:   |                                      |
|           | space).                           |            | 79        |                                      |
|           |                                   |            |           |                                      |
|           | IPv6 VIP name.                    |            |           |                                      |
+-----------+-----------------------------------+------------+-----------+--------------------------------------+
| name      | IPv6 VIP group name.              | string     | Maximum   |                                      |
|           |                                   |            | length:   |                                      |
|           |                                   |            | 79        |                                      |
+-----------+-----------------------------------+------------+-----------+--------------------------------------+
| uuid      | Universally Unique Identifier     | uuid       | Not       | 00000000-0000-0000-0000-000000000000 |
|           | (UUID; automatically assigned but |            | Specified |                                      |
|           | can be manually reset).           |            |           |                                      |
+-----------+-----------------------------------+------------+-----------+--------------------------------------+

