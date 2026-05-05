# config webfilter content

Configure Web filter banned word table.

## Syntax

```
config webfilter content
    Description: Configure Web filter banned word table.
    edit <id>
        set comment {var-string}
        config entries
            Description: Configure banned word entries.
            edit <name>
                set action [block|exempt]
                set pattern-type [wildcard|regexp]
                set score {integer}
                set status [enable|disable]
            next
        end
        set name {string}
    next
end
```

## Parameters

+-----------+-----------------------------------+------------+------------+---------+
| Parameter | Description                       | Type       | Size       | Default |
+===========+===================================+============+============+=========+
| comment   | Optional comments.                | var-string | Maximum    |         |
|           |                                   |            | length:    |         |
|           |                                   |            | 255        |         |
+-----------+-----------------------------------+------------+------------+---------+
| id        | ID.                               | integer    | Minimum    | 0       |
|           |                                   |            | value: 0   |         |
|           |                                   |            | Maximum    |         |
|           |                                   |            | value:     |         |
|           |                                   |            | 4294967295 |         |
+-----------+-----------------------------------+------------+------------+---------+
| name      | Name of table.                    | string     | Maximum    |         |
|           |                                   |            | length: 63 |         |
+-----------+-----------------------------------+------------+------------+---------+

