# config firewall internet-service-botnet

Show Internet Service botnet.

## Syntax

```
config firewall internet-service-botnet
    Description: Show Internet Service botnet.
    edit <id>
        set name {string}
    next
end
```

## Parameters

+-----------+-----------------------------------+---------+------------+---------+
| Parameter | Description                       | Type    | Size       | Default |
+===========+===================================+=========+============+=========+
| id        | Internet Service Botnet ID.       | integer | Minimum    | 0       |
|           |                                   |         | value: 0   |         |
|           |                                   |         | Maximum    |         |
|           |                                   |         | value:     |         |
|           |                                   |         | 4294967295 |         |
+-----------+-----------------------------------+---------+------------+---------+
| name      | Internet Service Botnet name.     | string  | Maximum    |         |
|           |                                   |         | length: 63 |         |
+-----------+-----------------------------------+---------+------------+---------+

