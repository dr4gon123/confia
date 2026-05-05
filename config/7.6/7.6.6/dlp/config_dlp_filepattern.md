# config dlp filepattern

Configure file patterns used by DLP blocking.

## Syntax

```
config dlp filepattern
    Description: Configure file patterns used by DLP blocking.
    edit <id>
        set comment {var-string}
        config entries
            Description: Configure file patterns used by DLP blocking.
            edit <pattern>
                set file-type [7z|arj|...]
                set filter-type [pattern|type]
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
| name      | Name of table containing the file | string     | Maximum    |         |
|           | pattern list.                     |            | length: 63 |         |
+-----------+-----------------------------------+------------+------------+---------+

