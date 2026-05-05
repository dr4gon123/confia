# config firewall internet-service-subapp

Show Internet Service sub app ID.

## Syntax

```
config firewall internet-service-subapp
    Description: Show Internet Service sub app ID.
    edit <id>
        set sub-app <id1>, <id2>, ...
    next
end
```

## Parameters

+-----------+-----------------------------------+---------+------------+---------+
| Parameter | Description                       | Type    | Size       | Default |
+===========+===================================+=========+============+=========+
| id        | Internet Service main ID.         | integer | Minimum    | 0       |
|           |                                   |         | value: 0   |         |
|           |                                   |         | Maximum    |         |
|           |                                   |         | value:     |         |
|           |                                   |         | 4294967295 |         |
+-----------+-----------------------------------+---------+------------+---------+
| sub-app   | Subapp number list.               | integer | Minimum    |         |
| `<id>`    |                                   |         | value: 0   |         |
|           | Subapp ID.                        |         | Maximum    |         |
|           |                                   |         | value:     |         |
|           |                                   |         | 4294967295 |         |
+-----------+-----------------------------------+---------+------------+---------+

