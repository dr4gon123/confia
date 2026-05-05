# config firewall city

Define city table. Read-only.

## Syntax

```
config firewall city
    Description: Define city table. Read-only.
    edit <id>
        set name {string}
    next
end
```

## Parameters

+-----------+-----------------------------------+---------+---------+---------+
| Parameter | Description                       | Type    | Size    | Default |
+===========+===================================+=========+=========+=========+
| id        | City ID.                          | integer | Minimum | 0       |
|           |                                   |         | value:  |         |
|           |                                   |         | 0       |         |
|           |                                   |         | Maximum |         |
|           |                                   |         | value:  |         |
|           |                                   |         | 65535   |         |
+-----------+-----------------------------------+---------+---------+---------+
| name      | City name.                        | string  | Maximum |         |
|           |                                   |         | length: |         |
|           |                                   |         | 63      |         |
+-----------+-----------------------------------+---------+---------+---------+

