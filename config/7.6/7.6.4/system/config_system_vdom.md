# config system vdom

Configure virtual domain.

## Syntax

```
config system vdom
    Description: Configure virtual domain.
    edit <name>
        set flag {integer}
        set short-name {string}
        set vcluster-id {integer}
    next
end
```

## Parameters

+-------------+-----------------------------------+---------+------------+---------+
| Parameter   | Description                       | Type    | Size       | Default |
+=============+===================================+=========+============+=========+
| flag        | Flag.                             | integer | Minimum    | 0       |
|             |                                   |         | value: 0   |         |
|             |                                   |         | Maximum    |         |
|             |                                   |         | value:     |         |
|             |                                   |         | 4294967295 |         |
+-------------+-----------------------------------+---------+------------+---------+
| name        | VDOM name.                        | string  | Maximum    |         |
|             |                                   |         | length: 31 |         |
+-------------+-----------------------------------+---------+------------+---------+
| short-name  | VDOM short name.                  | string  | Maximum    |         |
|             |                                   |         | length: 11 |         |
+-------------+-----------------------------------+---------+------------+---------+
| vcluster-id | Virtual cluster ID (0 -           | integer | Minimum    | 0       |
|             | 4294967295).                      |         | value: 0   |         |
|             |                                   |         | Maximum    |         |
|             |                                   |         | value:     |         |
|             |                                   |         | 4294967295 |         |
+-------------+-----------------------------------+---------+------------+---------+

