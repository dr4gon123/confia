# config firewall internet-service-reputation

Show Internet Service reputation. Read-only.

## Syntax

```
config firewall internet-service-reputation
    Description: Show Internet Service reputation. Read-only.
    edit <id>
        set description {string}
    next
end
```

## Parameters

+-------------+-----------------------------------+---------+------------+---------+
| Parameter   | Description                       | Type    | Size       | Default |
+=============+===================================+=========+============+=========+
| description | Description.                      | string  | Maximum    |         |
|             |                                   |         | length:    |         |
|             |                                   |         | 127        |         |
+-------------+-----------------------------------+---------+------------+---------+
| id          | Internet Service Reputation ID.   | integer | Minimum    | 0       |
|             |                                   |         | value: 0   |         |
|             |                                   |         | Maximum    |         |
|             |                                   |         | value:     |         |
|             |                                   |         | 4294967295 |         |
+-------------+-----------------------------------+---------+------------+---------+

