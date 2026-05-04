# config aws vpce

Configure AWS VPC configuration.

## Syntax

```
config aws vpce
    Description: Configure AWS VPC configuration.
    edit <id>
        set endpoint-id {string}
        set name {string}
        set vdom {string}
    next
end
```

## Parameters

+-------------+-----------------------------------+---------+------------+---------+
| Parameter   | Description                       | Type    | Size       | Default |
+=============+===================================+=========+============+=========+
| endpoint-id | VPC endpoint ID.                  | string  | Maximum    |         |
|             |                                   |         | length: 32 |         |
+-------------+-----------------------------------+---------+------------+---------+
| id          | Entry ID.                         | integer | Minimum    | 0       |
|             |                                   |         | value: 0   |         |
|             |                                   |         | Maximum    |         |
|             |                                   |         | value:     |         |
|             |                                   |         | 4294967295 |         |
+-------------+-----------------------------------+---------+------------+---------+
| name        | VPC endpoint name.                | string  | Maximum    |         |
|             |                                   |         | length: 63 |         |
+-------------+-----------------------------------+---------+------------+---------+
| vdom        | VDOM name.                        | string  | Maximum    |         |
|             |                                   |         | length: 31 |         |
+-------------+-----------------------------------+---------+------------+---------+

