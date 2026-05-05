# config emailfilter bword

Configure AntiSpam banned word list.

## Syntax

```
config emailfilter bword
    Description: Configure AntiSpam banned word list.
    edit <id>
        set comment {var-string}
        config entries
            Description: Spam filter banned word.
            edit <id>
                set action [spam|clear]
                set language [western|simch|...]
                set pattern {string}
                set pattern-type [wildcard|regexp]
                set score {integer}
                set status [enable|disable]
                set where [subject|body|...]
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

