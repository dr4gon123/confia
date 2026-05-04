# config switch-controller switch-interface-tag

Configure switch object tags.

## Syntax

```
config switch-controller switch-interface-tag
    Description: Configure switch object tags.
    edit <name>
    next
end
```

## Parameters

+-----------+-----------------------------------+--------+---------+---------+
| Parameter | Description                       | Type   | Size    | Default |
+===========+===================================+========+=========+=========+
| name      | Tag name.                         | string | Maximum |         |
|           |                                   |        | length: |         |
|           |                                   |        | 63      |         |
+-----------+-----------------------------------+--------+---------+---------+

