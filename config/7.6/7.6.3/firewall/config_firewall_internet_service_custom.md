# config firewall internet-service-custom

Configure custom Internet Services.

## Syntax

```
config firewall internet-service-custom
    Description: Configure custom Internet Services.
    edit <name>
        set comment {var-string}
        config entry
            Description: Entries added to the Internet Service database and custom database.
            edit <id>
                set addr-mode [ipv4|ipv6]
                set dst <name1>, <name2>, ...
                set dst6 <name1>, <name2>, ...
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
        set reputation {integer}
    next
end
```

## Parameters

+------------+-----------------------------------+------------+------------+---------+
| Parameter  | Description                       | Type       | Size       | Default |
+============+===================================+============+============+=========+
| comment    | Comment.                          | var-string | Maximum    |         |
|            |                                   |            | length:    |         |
|            |                                   |            | 255        |         |
+------------+-----------------------------------+------------+------------+---------+
| name       | Internet Service name.            | string     | Maximum    |         |
|            |                                   |            | length: 63 |         |
+------------+-----------------------------------+------------+------------+---------+
| reputation | Reputation level of the custom    | integer    | Minimum    | 3       |
|            | Internet Service.                 |            | value: 0   |         |
|            |                                   |            | Maximum    |         |
|            |                                   |            | value:     |         |
|            |                                   |            | 4294967295 |         |
+------------+-----------------------------------+------------+------------+---------+

