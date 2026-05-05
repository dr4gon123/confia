# config firewall internet-service-custom-group

Configure custom Internet Service group.

## Syntax

```
config firewall internet-service-custom-group
    Description: Configure custom Internet Service group.
    edit <name>
        set comment {var-string}
        set member <name1>, <name2>, ...
    next
end
```

## Parameters

+-----------+-----------------------------------+------------+---------+---------+
| Parameter | Description                       | Type       | Size    | Default |
+===========+===================================+============+=========+=========+
| comment   | Comment.                          | var-string | Maximum |         |
|           |                                   |            | length: |         |
|           |                                   |            | 255     |         |
+-----------+-----------------------------------+------------+---------+---------+
| member    | Custom Internet Service group     | string     | Maximum |         |
| `<name>`  | members.                          |            | length: |         |
|           |                                   |            | 79      |         |
|           | Group member name.                |            |         |         |
+-----------+-----------------------------------+------------+---------+---------+
| name      | Custom Internet Service group     | string     | Maximum |         |
|           | name.                             |            | length: |         |
|           |                                   |            | 63      |         |
+-----------+-----------------------------------+------------+---------+---------+

