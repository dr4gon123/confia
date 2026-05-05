# config wireless-controller access-control-list

Configure WiFi bridge access control list.

## Syntax

```
config wireless-controller access-control-list
    Description: Configure WiFi bridge access control list.
    edit <name>
        set comment {string}
        config layer3-ipv4-rules
            Description: AP ACL layer3 ipv4 rule list.
            edit <rule-id>
                set action [allow|deny]
                set comment {string}
                set dstaddr {user}
                set dstport {integer}
                set protocol {integer}
                set srcaddr {user}
                set srcport {integer}
            next
        end
        config layer3-ipv6-rules
            Description: AP ACL layer3 ipv6 rule list.
            edit <rule-id>
                set action [allow|deny]
                set comment {string}
                set dstaddr {user}
                set dstport {integer}
                set protocol {integer}
                set srcaddr {user}
                set srcport {integer}
            next
        end
    next
end
```

## Parameters

+-----------+-----------------------------------+--------+---------+---------+
| Parameter | Description                       | Type   | Size    | Default |
+===========+===================================+========+=========+=========+
| comment   | Description.                      | string | Maximum |         |
|           |                                   |        | length: |         |
|           |                                   |        | 63      |         |
+-----------+-----------------------------------+--------+---------+---------+
| name      | AP access control list name.      | string | Maximum |         |
|           |                                   |        | length: |         |
|           |                                   |        | 35      |         |
+-----------+-----------------------------------+--------+---------+---------+

