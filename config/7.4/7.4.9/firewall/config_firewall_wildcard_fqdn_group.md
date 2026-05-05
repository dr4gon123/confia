# config firewall wildcard-fqdn group

Config global Wildcard FQDN address groups.

## Syntax

```
config firewall wildcard-fqdn group
    Description: Config global Wildcard FQDN address groups.
    edit <name>
        set color {integer}
        set comment {var-string}
        set member <name1>, <name2>, ...
        set uuid {uuid}
    next
end
```

## Parameters

+-----------+-----------------------------------+------------+-----------+--------------------------------------+
| Parameter | Description                       | Type       | Size      | Default                              |
+===========+===================================+============+===========+======================================+
| color     | GUI icon color.                   | integer    | Minimum   | 0                                    |
|           |                                   |            | value: 0  |                                      |
|           |                                   |            | Maximum   |                                      |
|           |                                   |            | value: 32 |                                      |
+-----------+-----------------------------------+------------+-----------+--------------------------------------+
| comment   | Comment.                          | var-string | Maximum   |                                      |
|           |                                   |            | length:   |                                      |
|           |                                   |            | 255       |                                      |
+-----------+-----------------------------------+------------+-----------+--------------------------------------+
| member    | Address group members.            | string     | Maximum   |                                      |
| `<name>`  |                                   |            | length:   |                                      |
|           | Address name.                     |            | 79        |                                      |
+-----------+-----------------------------------+------------+-----------+--------------------------------------+
| name      | Address group name.               | string     | Maximum   |                                      |
|           |                                   |            | length:   |                                      |
|           |                                   |            | 79        |                                      |
+-----------+-----------------------------------+------------+-----------+--------------------------------------+
| uuid      | Universally Unique Identifier     | uuid       | Not       | 00000000-0000-0000-0000-000000000000 |
|           | (UUID; automatically assigned but |            | Specified |                                      |
|           | can be manually reset).           |            |           |                                      |
+-----------+-----------------------------------+------------+-----------+--------------------------------------+

