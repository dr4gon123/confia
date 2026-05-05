# config dlp dictionary

Configure dictionaries used by DLP blocking.

## Syntax

```
config dlp dictionary
    Description: Configure dictionaries used by DLP blocking.
    edit <name>
        set comment {var-string}
        config entries
            Description: DLP dictionary entries.
            edit <id>
                set type {string}
                set pattern {string}
                set ignore-case [enable|disable]
                set repeat [enable|disable]
                set status [enable|disable]
                set comment {var-string}
            next
        end
        set match-around [enable|disable]
        set match-type [match-all|match-any]
        set uuid {uuid}
    next
end
```

## Parameters

+--------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| Parameter    | Description                       | Type               | Size               | Default                              |
+==============+===================================+====================+====================+======================================+
| comment      | Optional comments.                | var-string         | Maximum length:    |                                      |
|              |                                   |                    | 255                |                                      |
+--------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| match-around | Enable/disable match-around       | option             | \-                 | disable                              |
|              | support.                          |                    |                    |                                      |
+--------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|              | +-------------+--------------------------------------------------------+                                           |
|              | | Option      | Description                                            |                                           |
|              | +=============+========================================================+                                           |
|              | | *enable*    | Enable match-around support.                           |                                           |
|              | +-------------+--------------------------------------------------------+                                           |
|              | | *disable*   | Disable match-around support.                          |                                           |
|              | +-------------+--------------------------------------------------------+                                           |
+--------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| match-type   | Logical relation between entries. | option             | \-                 | match-any                            |
+--------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|              | +-------------+--------------------------------------------------------+                                           |
|              | | Option      | Description                                            |                                           |
|              | +=============+========================================================+                                           |
|              | | *match-all* | Match all entries.                                     |                                           |
|              | +-------------+--------------------------------------------------------+                                           |
|              | | *match-any* | Match any entries.                                     |                                           |
|              | +-------------+--------------------------------------------------------+                                           |
+--------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| name         | Name of table containing the      | string             | Maximum length: 35 |                                      |
|              | dictionary.                       |                    |                    |                                      |
+--------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| uuid         | Universally Unique Identifier     | uuid               | Not Specified      | 00000000-0000-0000-0000-000000000000 |
|              | (UUID; automatically assigned but |                    |                    |                                      |
|              | can be manually reset).           |                    |                    |                                      |
+--------------+-----------------------------------+--------------------+--------------------+--------------------------------------+

