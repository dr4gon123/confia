# config firewall internet-service-sld

Internet Service Second Level Domain.

## Syntax

```
config firewall internet-service-sld
    Description: Internet Service Second Level Domain.
    edit <id>
        set name {string}
    next
end
```

## Parameters

+-----------+-----------------------------------+---------+------------+---------+
| Parameter | Description                       | Type    | Size       | Default |
+===========+===================================+=========+============+=========+
| id        | Second Level Domain ID.           | integer | Minimum    | 0       |
|           |                                   |         | value: 0   |         |
|           |                                   |         | Maximum    |         |
|           |                                   |         | value:     |         |
|           |                                   |         | 4294967295 |         |
+-----------+-----------------------------------+---------+------------+---------+
| name      | Second Level Domain name.         | string  | Maximum    |         |
|           |                                   |         | length: 63 |         |
+-----------+-----------------------------------+---------+------------+---------+

