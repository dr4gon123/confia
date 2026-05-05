# config router access-list6

Configure IPv6 access lists.

## Syntax

```
config router access-list6
    Description: Configure IPv6 access lists.
    edit <name>
        set comments {string}
        config rule
            Description: Rule.
            edit <id>
                set action [permit|deny]
                set exact-match [enable|disable]
                set flags {integer}
                set prefix6 {user}
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

