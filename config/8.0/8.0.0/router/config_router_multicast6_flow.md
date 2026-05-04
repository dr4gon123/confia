# config router multicast6-flow

Configure IPv6 multicast-flow.

## Syntax

```
config router multicast6-flow
    Description: Configure IPv6 multicast-flow.
    edit <name>
        set comments {string}
        config flows
            Description: IPv6 multicast-flow entries.
            edit <id>
                set group-addr {ipv6-address}
            next
        end
    next
end
```

## Parameters

+-----------+-----------------------------------+--------+---------+---------+
| Parameter | Description                       | Type   | Size    | Default |
+===========+===================================+========+=========+=========+
| comments  | Comment.                          | string | Maximum |         |
|           |                                   |        | length: |         |
|           |                                   |        | 127     |         |
+-----------+-----------------------------------+--------+---------+---------+
| name      | Name.                             | string | Maximum |         |
|           |                                   |        | length: |         |
|           |                                   |        | 35      |         |
+-----------+-----------------------------------+--------+---------+---------+

