# config dlp sensor

Configure sensors used by DLP blocking.

## Syntax

```
config dlp sensor
    Description: Configure sensors used by DLP blocking.
    edit <name>
        set comment {var-string}
        config entries
            Description: DLP sensor entries.
            edit <id>
                set dictionary {string}
                set count {integer}
                set status [enable|disable]
            next
        end
        set eval {string}
        set match-type [match-all|match-any|...]
    next
end
```

## Parameters

+------------+-----------------------------------+---------------------+---------------------+---------------------+
| Parameter  | Description                       | Type                | Size                | Default             |
+============+===================================+=====================+=====================+=====================+
| comment    | Optional comments.                | var-string          | Maximum length: 255 |                     |
+------------+-----------------------------------+---------------------+---------------------+---------------------+
| eval       | Expression to evaluate.           | string              | Maximum length: 255 |                     |
+------------+-----------------------------------+---------------------+---------------------+---------------------+
| match-type | Logical relation between entries. | option              | \-                  | match-any           |
+------------+-----------------------------------+---------------------+---------------------+---------------------+
|            | +--------------+--------------------------------------------------------+                           |
|            | | Option       | Description                                            |                           |
|            | +==============+========================================================+                           |
|            | | *match-all*  | Match all entries.                                     |                           |
|            | +--------------+--------------------------------------------------------+                           |
|            | | *match-any*  | Match any entries.                                     |                           |
|            | +--------------+--------------------------------------------------------+                           |
|            | | *match-eval* | Match an expression evaluation.                        |                           |
|            | +--------------+--------------------------------------------------------+                           |
+------------+-----------------------------------+---------------------+---------------------+---------------------+
| name       | Name of table containing the      | string              | Maximum length: 35  |                     |
|            | sensor.                           |                     |                     |                     |
+------------+-----------------------------------+---------------------+---------------------+---------------------+

