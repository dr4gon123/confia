# config user peergrp

Configure peer groups.

## Syntax

```
config user peergrp
    Description: Configure peer groups.
    edit <name>
        set member <name1>, <name2>, ...
    next
end
```

## Parameters

+-----------+-----------------------------------+--------+---------+---------+
| Parameter | Description                       | Type   | Size    | Default |
+===========+===================================+========+=========+=========+
| member    | Peer group members.               | string | Maximum |         |
| `<name>`  |                                   |        | length: |         |
|           | Peer group member name.           |        | 35      |         |
+-----------+-----------------------------------+--------+---------+---------+
| name      | Peer group name.                  | string | Maximum |         |
|           |                                   |        | length: |         |
|           |                                   |        | 35      |         |
+-----------+-----------------------------------+--------+---------+---------+

