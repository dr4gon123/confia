# config dlp data-type

Configure predefined data type used by DLP blocking.

## Syntax

```
config dlp data-type
    Description: Configure predefined data type used by DLP blocking.
    edit <name>
        set comment {var-string}
        set look-ahead {integer}
        set look-back {integer}
        set match-around {string}
        set pattern {string}
        set transform {string}
        set verify {string}
        set verify-transformed-pattern [enable|disable]
    next
end
```

## Parameters

+----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter                  | Description                       | Type               | Size               | Default            |
+============================+===================================+====================+====================+====================+
| comment                    | Optional comments.                | var-string         | Maximum length:    |                    |
|                            |                                   |                    | 255                |                    |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| look-ahead                 | Number of characters to obtain in | integer            | Minimum value: 1   | 1                  |
|                            | advance for verification.         |                    | Maximum value: 255 |                    |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| look-back                  | Number of characters required to  | integer            | Minimum value: 1   | 1                  |
|                            | save for verification.            |                    | Maximum value: 255 |                    |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| match-around               | Dictionary to check whether it    | string             | Maximum length: 35 |                    |
|                            | has a match around (Only support  |                    |                    |                    |
|                            | match-any and basic types, no     |                    |                    |                    |
|                            | repeat supported).                |                    |                    |                    |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| name                       | Name of table containing the data | string             | Maximum length: 35 |                    |
|                            | type.                             |                    |                    |                    |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| pattern                    | Regular expression pattern string | string             | Maximum length:    |                    |
|                            | without look around.              |                    | 255                |                    |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| transform                  | Template to transform user input  | string             | Maximum length:    |                    |
|                            | to a pattern using capture group  |                    | 255                |                    |
|                            | from \'pattern\'.                 |                    |                    |                    |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| verify                     | Regular expression pattern string | string             | Maximum length:    |                    |
|                            | used to verify the data type.     |                    | 255                |                    |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| verify-transformed-pattern | Enable/disable verification for   | option             | \-                 | disable            |
|                            | transformed pattern.              |                    |                    |                    |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                            | +-------------+--------------------------------------------------------+                         |
|                            | | Option      | Description                                            |                         |
|                            | +=============+========================================================+                         |
|                            | | *enable*    | Enable verification for transformed pattern.           |                         |
|                            | +-------------+--------------------------------------------------------+                         |
|                            | | *disable*   | Disable verification for transformed pattern.          |                         |
|                            | +-------------+--------------------------------------------------------+                         |
+----------------------------+--------------------------------------------------------------------------------------------------+

