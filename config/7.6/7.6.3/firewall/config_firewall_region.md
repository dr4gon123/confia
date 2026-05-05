# config firewall region

Define region table. Read-only.

## Syntax

```
config firewall region
    Description: Define region table. Read-only.
    edit <id>
        set city <id1>, <id2>, ...
        set name {string}
    next
end
```

## Parameters

+-----------+-----------------------------------+---------+---------+---------+
| Parameter | Description                       | Type    | Size    | Default |
+===========+===================================+=========+=========+=========+
| city      | City ID list.                     | integer | Minimum |         |
| `<id>`    |                                   |         | value:  |         |
|           | City ID.                          |         | 0       |         |
|           |                                   |         | Maximum |         |
|           |                                   |         | value:  |         |
|           |                                   |         | 65535   |         |
+-----------+-----------------------------------+---------+---------+---------+
| id        | Region ID.                        | integer | Minimum | 0       |
|           |                                   |         | value:  |         |
|           |                                   |         | 0       |         |
|           |                                   |         | Maximum |         |
|           |                                   |         | value:  |         |
|           |                                   |         | 65535   |         |
+-----------+-----------------------------------+---------+---------+---------+
| name      | Region name.                      | string  | Maximum |         |
|           |                                   |         | length: |         |
|           |                                   |         | 63      |         |
+-----------+-----------------------------------+---------+---------+---------+

