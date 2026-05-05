# config firewall country

Define country table.

## Syntax

```
config firewall country
    Description: Define country table.
    edit <id>
        set name {string}
        set region <id1>, <id2>, ...
    next
end
```

## Parameters

+-----------+-----------------------------------+---------+---------+---------+
| Parameter | Description                       | Type    | Size    | Default |
+===========+===================================+=========+=========+=========+
| id        | Country ID.                       | integer | Minimum | 0       |
|           |                                   |         | value:  |         |
|           |                                   |         | 0       |         |
|           |                                   |         | Maximum |         |
|           |                                   |         | value:  |         |
|           |                                   |         | 65535   |         |
+-----------+-----------------------------------+---------+---------+---------+
| name      | Country name.                     | string  | Maximum |         |
|           |                                   |         | length: |         |
|           |                                   |         | 63      |         |
+-----------+-----------------------------------+---------+---------+---------+
| region    | Region ID list.                   | integer | Minimum |         |
| `<id>`    |                                   |         | value:  |         |
|           | Region ID.                        |         | 0       |         |
|           |                                   |         | Maximum |         |
|           |                                   |         | value:  |         |
|           |                                   |         | 65535   |         |
+-----------+-----------------------------------+---------+---------+---------+

