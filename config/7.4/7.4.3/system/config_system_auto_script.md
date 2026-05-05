# config system auto-script

Configure auto script.

## Syntax

```
config system auto-script
    Description: Configure auto script.
    edit <name>
        set interval {integer}
        set output-size {integer}
        set repeat {integer}
        set script {var-string}
        set start [manual|auto]
        set timeout {integer}
    next
end
```

## Parameters

+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter   | Description                       | Type               | Size               | Default            |
+=============+===================================+====================+====================+====================+
| interval    | Repeat interval in seconds.       | integer            | Minimum value: 0   | 0                  |
|             |                                   |                    | Maximum value:     |                    |
|             |                                   |                    | 31557600           |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| name        | Auto script name.                 | string             | Maximum length: 35 |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| output-size | Number of megabytes to limit      | integer            | Minimum value: 10  | 10                 |
|             | script output to.                 |                    | Maximum value:     |                    |
|             |                                   |                    | 1024               |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| repeat      | Number of times to repeat this    | integer            | Minimum value: 0   | 1                  |
|             | script (0 = infinite).            |                    | Maximum value:     |                    |
|             |                                   |                    | 65535              |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| script      | List of FortiOS CLI commands to   | var-string         | Maximum length:    |                    |
|             | repeat.                           |                    | 1023               |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| start       | Script starting mode.             | option             | \-                 | manual             |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
|             | +-------------+--------------------------------------------------------+                         |
|             | | Option      | Description                                            |                         |
|             | +=============+========================================================+                         |
|             | | *manual*    | Starting manually.                                     |                         |
|             | +-------------+--------------------------------------------------------+                         |
|             | | *auto*      | Starting automatically.                                |                         |
|             | +-------------+--------------------------------------------------------+                         |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| timeout     | Maximum running time for this     | integer            | Minimum value: 0   | 0                  |
|             | script in seconds (0 = no         |                    | Maximum value: 300 |                    |
|             | timeout).                         |                    |                    |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+

