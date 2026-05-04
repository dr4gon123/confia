# config firewall internet-service-addition

Configure Internet Services Addition.

## Syntax

```
config firewall internet-service-addition
    Description: Configure Internet Services Addition.
    edit <id>
        set comment {var-string}
        config entry
            Description: Entries added to the Internet Service addition database.
            edit <id>
                set addr-mode [ipv4|ipv6]
                config port-range
                    Description: Port ranges in the custom entry.
                    edit <id>
                        set end-port {integer}
                        set start-port {integer}
                    next
                end
                set protocol {integer}
            next
        end
    next
end
```

## Parameters

+-----------+-----------------------------------+------------+------------+---------+
| Parameter | Description                       | Type       | Size       | Default |
+===========+===================================+============+============+=========+
| comment   | Comment.                          | var-string | Maximum    |         |
|           |                                   |            | length:    |         |
|           |                                   |            | 255        |         |
+-----------+-----------------------------------+------------+------------+---------+
| id        | Internet Service ID in the        | integer    | Minimum    | 0       |
|           | Internet Service database.        |            | value: 0   |         |
|           |                                   |            | Maximum    |         |
|           |                                   |            | value:     |         |
|           |                                   |            | 4294967295 |         |
+-----------+-----------------------------------+------------+------------+---------+

