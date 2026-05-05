# config waf sub-class

Hidden table for datasource.

## Syntax

```
config waf sub-class
    Description: Hidden table for datasource.
    edit <id>
        set name {string}
    next
end
```

## Parameters

+-----------+-----------------------------------+---------+------------+---------+
| Parameter | Description                       | Type    | Size       | Default |
+===========+===================================+=========+============+=========+
| id        | Signature subclass ID.            | integer | Minimum    | 0       |
|           |                                   |         | value: 0   |         |
|           |                                   |         | Maximum    |         |
|           |                                   |         | value:     |         |
|           |                                   |         | 4294967295 |         |
+-----------+-----------------------------------+---------+------------+---------+
| name      | Signature subclass name.          | string  | Maximum    |         |
|           |                                   |         | length:    |         |
|           |                                   |         | 127        |         |
+-----------+-----------------------------------+---------+------------+---------+

