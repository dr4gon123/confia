# config firewall internet-service-fortiguard

Configure FortiGuard Internet Services.

## Syntax

```
config firewall internet-service-fortiguard
    Description: Configure FortiGuard Internet Services.
    edit <name>
        set comment {var-string}
        config entry
            Description: Entries added to the Internet Service FortiGuard database.
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
| name      | Internet Service name.            | string     | Maximum |         |
|           |                                   |            | length: |         |
|           |                                   |            | 63      |         |
+-----------+-----------------------------------+------------+---------+---------+

