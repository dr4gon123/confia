# config router prefix-list6

Configure IPv6 prefix lists.

## Syntax

```
config router prefix-list6
    Description: Configure IPv6 prefix lists.
    edit <name>
        set comments {string}
        config rule
            Description: IPv6 prefix list rule.
            edit <id>
                set action [permit|deny]
                set prefix6 {user}
                set ge {integer}
                set le {integer}
                set flags {integer}
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

