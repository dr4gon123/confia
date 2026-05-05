# config videofilter keyword

Configure video filter keywords.

## Syntax

```
config videofilter keyword
    Description: Configure video filter keywords.
    edit <id>
        set comment {var-string}
        set match [or|and]
        set name {string}
        config word
            Description: List of keywords.
            edit <name>
                set comment {var-string}
                set pattern-type [wildcard|regex]
                set status [enable|disable]
            next
        end
    next
end
```

## Parameters

+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter | Description                       | Type               | Size               | Default            |
+===========+===================================+====================+====================+====================+
| comment   | Comment.                          | var-string         | Maximum length:    |                    |
|           |                                   |                    | 255                |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| id        | ID.                               | integer            | Minimum value: 0   | 0                  |
|           |                                   |                    | Maximum value:     |                    |
|           |                                   |                    | 4294967295         |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| match     | Keyword matching logic.           | option             | \-                 | or                 |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
|           | +-------------+--------------------------------------------------------+                         |
|           | | Option      | Description                                            |                         |
|           | +=============+========================================================+                         |
|           | | *or*        | Match any keyword.                                     |                         |
|           | +-------------+--------------------------------------------------------+                         |
|           | | *and*       | Match all keywords.                                    |                         |
|           | +-------------+--------------------------------------------------------+                         |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| name      | Name.                             | string             | Maximum length: 35 |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+

