# config user adgrp

Configure FSSO groups.

## Syntax

```
config user adgrp
    Description: Configure FSSO groups.
    edit <name>
        set connector-source {string}
        set id {integer}
        set server-name {string}
    next
end
```

## Parameters

+------------------+-----------------------------------+---------+------------+---------+
| Parameter        | Description                       | Type    | Size       | Default |
+==================+===================================+=========+============+=========+
| connector-source | FSSO connector source.            | string  | Maximum    |         |
|                  |                                   |         | length: 35 |         |
+------------------+-----------------------------------+---------+------------+---------+
| id               | Group ID.                         | integer | Minimum    | 0       |
|                  |                                   |         | value: 0   |         |
|                  |                                   |         | Maximum    |         |
|                  |                                   |         | value:     |         |
|                  |                                   |         | 4294967295 |         |
+------------------+-----------------------------------+---------+------------+---------+
| name             | Name.                             | string  | Maximum    |         |
|                  |                                   |         | length:    |         |
|                  |                                   |         | 511        |         |
+------------------+-----------------------------------+---------+------------+---------+
| server-name      | FSSO agent name.                  | string  | Maximum    |         |
|                  |                                   |         | length: 35 |         |
+------------------+-----------------------------------+---------+------------+---------+

