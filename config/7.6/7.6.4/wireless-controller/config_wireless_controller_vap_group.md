# config wireless-controller vap-group

Configure virtual Access Point (VAP) groups.

## Syntax

```
config wireless-controller vap-group
    Description: Configure virtual Access Point (VAP) groups.
    edit <name>
        set comment {var-string}
        set vaps <name1>, <name2>, ...
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
| name      | Group Name.                       | string     | Maximum |         |
|           |                                   |            | length: |         |
|           |                                   |            | 35      |         |
+-----------+-----------------------------------+------------+---------+---------+
| vaps      | List of SSIDs to be included in   | string     | Maximum |         |
| `<name>`  | the VAP group.                    |            | length: |         |
|           |                                   |            | 35      |         |
|           | VAP name.                         |            |         |         |
+-----------+-----------------------------------+------------+---------+---------+

