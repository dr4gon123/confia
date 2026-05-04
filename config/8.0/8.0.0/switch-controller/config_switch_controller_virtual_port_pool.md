# config switch-controller virtual-port-pool

Configure virtual pool.

## Syntax

```
config switch-controller virtual-port-pool
    Description: Configure virtual pool.
    edit <name>
        set description {string}
    next
end
```

## Parameters

+-------------+-----------------------------------+--------+---------+---------+
| Parameter   | Description                       | Type   | Size    | Default |
+=============+===================================+========+=========+=========+
| description | Virtual switch pool description.  | string | Maximum |         |
|             |                                   |        | length: |         |
|             |                                   |        | 63      |         |
+-------------+-----------------------------------+--------+---------+---------+
| name        | Virtual switch pool name.         | string | Maximum |         |
|             |                                   |        | length: |         |
|             |                                   |        | 35      |         |
+-------------+-----------------------------------+--------+---------+---------+

