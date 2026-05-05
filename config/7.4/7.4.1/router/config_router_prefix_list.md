# config router prefix-list

Configure IPv4 prefix lists.

## Syntax

```
config router prefix-list
    Description: Configure IPv4 prefix lists.
    edit <name>
        set comments {string}
        config rule
            Description: IPv4 prefix list rule.
            edit <id>
                set action [permit|deny]
                set prefix {user}
                set ge {integer}
                set le {integer}
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

