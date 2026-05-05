# config log custom-field

Configure custom log fields.

## Syntax

```
config log custom-field
    Description: Configure custom log fields.
    edit <id>
        set name {string}
        set value {string}
    next
end
```

## Parameters

+-----------+-----------------------------------+--------+---------+---------+
| Parameter | Description                       | Type   | Size    | Default |
+===========+===================================+========+=========+=========+
| id        | Field ID string.                  | string | Maximum |         |
|           |                                   |        | length: |         |
|           |                                   |        | 35      |         |
+-----------+-----------------------------------+--------+---------+---------+
| name      | Field name (max: 15 characters).  | string | Maximum |         |
|           |                                   |        | length: |         |
|           |                                   |        | 15      |         |
+-----------+-----------------------------------+--------+---------+---------+
| value     | Field value (max: 15 characters). | string | Maximum |         |
|           |                                   |        | length: |         |
|           |                                   |        | 15      |         |
+-----------+-----------------------------------+--------+---------+---------+

