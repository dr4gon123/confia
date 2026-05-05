# config firewall internet-service-list

Internet Service list. Read-only.

## Syntax

```
config firewall internet-service-list
    Description: Internet Service list. Read-only.
    edit <id>
        set name {string}
    next
end
```

## Parameters

+-----------+-----------------------------------+---------+------------+---------+
| Parameter | Description                       | Type    | Size       | Default |
+===========+===================================+=========+============+=========+
| id        | Internet Service category ID.     | integer | Minimum    | 0       |
|           |                                   |         | value: 0   |         |
|           |                                   |         | Maximum    |         |
|           |                                   |         | value:     |         |
|           |                                   |         | 4294967295 |         |
+-----------+-----------------------------------+---------+------------+---------+
| name      | Internet Service category name.   | string  | Maximum    |         |
|           |                                   |         | length: 63 |         |
+-----------+-----------------------------------+---------+------------+---------+

