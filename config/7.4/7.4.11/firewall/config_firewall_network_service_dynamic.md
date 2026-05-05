# config firewall network-service-dynamic

Configure Dynamic Network Services.

## Syntax

```
config firewall network-service-dynamic
    Description: Configure Dynamic Network Services.
    edit <name>
        set comment {var-string}
        set filter {var-string}
        set sdn {string}
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
| filter    | Match criteria filter.            | var-string | Maximum |         |
|           |                                   |            | length: |         |
|           |                                   |            | 2047    |         |
+-----------+-----------------------------------+------------+---------+---------+
| name      | Dynamic Network Service name.     | string     | Maximum |         |
|           |                                   |            | length: |         |
|           |                                   |            | 63      |         |
+-----------+-----------------------------------+------------+---------+---------+
| sdn       | SDN connector name.               | string     | Maximum |         |
|           |                                   |            | length: |         |
|           |                                   |            | 35      |         |
+-----------+-----------------------------------+------------+---------+---------+

