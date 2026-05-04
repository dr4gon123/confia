# config firewall internet-service-extension

Configure Internet Services Extension.

## Syntax

```
config firewall internet-service-extension
    Description: Configure Internet Services Extension.
    edit <id>
        set comment {var-string}
        config disable-entry
            Description: Disable entries in the Internet Service database.
            edit <id>
                set addr-mode [ipv4|ipv6]
                set protocol {integer}
                config port-range
                    Description: Port ranges in the disable entry.
                    edit <id>
                        set start-port {integer}
                        set end-port {integer}
                    next
                end
                config ip-range
                    Description: IPv4 ranges in the disable entry.
                    edit <id>
                        set start-ip {ipv4-address-any}
                        set end-ip {ipv4-address-any}
                    next
                end
                config ip6-range
                    Description: IPv6 ranges in the disable entry.
                    edit <id>
                        set start-ip6 {ipv6-address}
                        set end-ip6 {ipv6-address}
                    next
                end
            next
        end
        config entry
            Description: Entries added to the Internet Service extension database.
            edit <id>
                set addr-mode [ipv4|ipv6]
                set protocol {integer}
                config port-range
                    Description: Port ranges in the custom entry.
                    edit <id>
                        set start-port {integer}
                        set end-port {integer}
                    next
                end
                set dst <name1>, <name2>, ...
                set dst6 <name1>, <name2>, ...
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

