# config videofilter youtube-channel-filter

Configure YouTube channel filter.

## Syntax

```
config videofilter youtube-channel-filter
    Description: Configure YouTube channel filter.
    edit <id>
        set comment {var-string}
        config entries
            Description: YouTube filter entries.
            edit <id>
                set comment {var-string}
                set action [allow|monitor|...]
                set channel-id {string}
            next
        end
        set log [enable|disable]
        set name {string}
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
| log       | Enable/disable logging.           | option             | \-                 | enable             |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
|           | +-------------+--------------------------------------------------------+                         |
|           | | Option      | Description                                            |                         |
|           | +=============+========================================================+                         |
|           | | *enable*    | Enable logging.                                        |                         |
|           | +-------------+--------------------------------------------------------+                         |
|           | | *disable*   | Disable logging.                                       |                         |
|           | +-------------+--------------------------------------------------------+                         |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| name      | Name.                             | string             | Maximum length: 35 |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+

