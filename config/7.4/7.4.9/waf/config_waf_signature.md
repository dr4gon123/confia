# config waf signature

Hidden table for datasource.

## Syntax

```
config waf signature
    Description: Hidden table for datasource.
    edit <id>
        set desc {string}
    next
end
```

## Parameters

+-----------+-----------------------------------+---------+------------+---------+
| Parameter | Description                       | Type    | Size       | Default |
+===========+===================================+=========+============+=========+
| desc      | Signature description.            | string  | Maximum    |         |
|           |                                   |         | length:    |         |
|           |                                   |         | 511        |         |
+-----------+-----------------------------------+---------+------------+---------+
| id        | Signature ID.                     | integer | Minimum    | 0       |
|           |                                   |         | value: 0   |         |
|           |                                   |         | Maximum    |         |
|           |                                   |         | value:     |         |
|           |                                   |         | 4294967295 |         |
+-----------+-----------------------------------+---------+------------+---------+

