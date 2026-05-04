# config waf main-class

Hidden table for datasource.

## Syntax

```
config waf main-class
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
| id        | Main signature class ID.          | integer | Minimum    | 0       |
|           |                                   |         | value: 0   |         |
|           |                                   |         | Maximum    |         |
|           |                                   |         | value:     |         |
|           |                                   |         | 4294967295 |         |
+-----------+-----------------------------------+---------+------------+---------+
| name      | Main signature class name.        | string  | Maximum    |         |
|           |                                   |         | length:    |         |
|           |                                   |         | 127        |         |
+-----------+-----------------------------------+---------+------------+---------+

