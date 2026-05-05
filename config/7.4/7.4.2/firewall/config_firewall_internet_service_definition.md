# config firewall internet-service-definition

Configure Internet Service definition.

## Syntax

```
config firewall internet-service-definition
    Description: Configure Internet Service definition.
    edit <id>
        config entry
            Description: Protocol and port information in an Internet Service entry.
            edit <seq-num>
                set category-id {integer}
                set name {string}
                set protocol {integer}
                config port-range
                    Description: Port ranges in the definition entry.
                    edit <id>
                        set start-port {integer}
                        set end-port {integer}
                    next
                end
            next
        end
    next
end
```

## Parameters

+-----------+-----------------------------------+---------+------------+---------+
| Parameter | Description                       | Type    | Size       | Default |
+===========+===================================+=========+============+=========+
| id        | Internet Service application list | integer | Minimum    | 0       |
|           | ID.                               |         | value: 0   |         |
|           |                                   |         | Maximum    |         |
|           |                                   |         | value:     |         |
|           |                                   |         | 4294967295 |         |
+-----------+-----------------------------------+---------+------------+---------+

