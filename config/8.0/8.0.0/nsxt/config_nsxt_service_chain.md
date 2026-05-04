# config nsxt service-chain

Configure NSX-T service chain.

## Syntax

```
config nsxt service-chain
    Description: Configure NSX-T service chain.
    edit <id>
        set name {string}
        config service-index
            Description: Configure service index.
            edit <id>
                set name {string}
                set reverse-index {integer}
                set vd {string}
            next
        end
    next
end
```

## Parameters

+-----------+-----------------------------------+---------+---------+---------+
| Parameter | Description                       | Type    | Size    | Default |
+===========+===================================+=========+=========+=========+
| id        | Chain ID.                         | integer | Minimum | 0       |
|           |                                   |         | value:  |         |
|           |                                   |         | 0       |         |
|           |                                   |         | Maximum |         |
|           |                                   |         | value:  |         |
|           |                                   |         | 1023    |         |
+-----------+-----------------------------------+---------+---------+---------+
| name      | Chain name.                       | string  | Maximum |         |
|           |                                   |         | length: |         |
|           |                                   |         | 63      |         |
+-----------+-----------------------------------+---------+---------+---------+

