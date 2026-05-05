# config router multicast-flow

Configure multicast-flow.

## Syntax

```
config router multicast-flow
    Description: Configure multicast-flow.
    edit <name>
        set comments {string}
        config flows
            Description: Multicast-flow entries.
            edit <id>
                set group-addr {ipv4-address-any}
                set source-addr {ipv4-address-any}
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

