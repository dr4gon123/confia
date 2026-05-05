# config emailfilter mheader

Configure AntiSpam MIME header.

## Syntax

```
config emailfilter mheader
    Description: Configure AntiSpam MIME header.
    edit <id>
        set comment {var-string}
        config entries
            Description: Spam filter mime header content.
            edit <id>
                set action [spam|clear]
                set fieldbody {string}
                set fieldname {string}
                set pattern-type [wildcard|regexp]
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

