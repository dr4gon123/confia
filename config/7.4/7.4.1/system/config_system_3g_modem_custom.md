# config system 3g-modem custom

3G MODEM custom.

## Syntax

```
config system 3g-modem custom
    Description: 3G MODEM custom.
    edit <id>
        set class-id {user}
        set init-string {string}
        set model {string}
        set modeswitch-string {string}
        set product-id {user}
        set vendor {string}
        set vendor-id {user}
    next
end
```

## Parameters

+-------------------+-----------------------------------+---------+------------+---------+
| Parameter         | Description                       | Type    | Size       | Default |
+===================+===================================+=========+============+=========+
| class-id          | USB interface class in            | user    | Not        |         |
|                   | hexadecimal format (00-ff).       |         | Specified  |         |
+-------------------+-----------------------------------+---------+------------+---------+
| id                | ID.                               | integer | Minimum    | 0       |
|                   |                                   |         | value: 0   |         |
|                   |                                   |         | Maximum    |         |
|                   |                                   |         | value:     |         |
|                   |                                   |         | 4294967295 |         |
+-------------------+-----------------------------------+---------+------------+---------+
| init-string       | Init string in hexadecimal format | string  | Maximum    |         |
|                   | (even length).                    |         | length:    |         |
|                   |                                   |         | 127        |         |
+-------------------+-----------------------------------+---------+------------+---------+
| model             | MODEM model name.                 | string  | Maximum    |         |
|                   |                                   |         | length: 35 |         |
+-------------------+-----------------------------------+---------+------------+---------+
| modeswitch-string | USB modeswitch arguments. For     | string  | Maximum    |         |
|                   | example: \'-v 1410 -p 9030 -V     |         | length:    |         |
|                   | 1410 -P 9032 -u 3\'.              |         | 127        |         |
+-------------------+-----------------------------------+---------+------------+---------+
| product-id        | USB product ID in hexadecimal     | user    | Not        |         |
|                   | format (0000-ffff).               |         | Specified  |         |
+-------------------+-----------------------------------+---------+------------+---------+
| vendor            | MODEM vendor name.                | string  | Maximum    |         |
|                   |                                   |         | length: 35 |         |
+-------------------+-----------------------------------+---------+------------+---------+
| vendor-id         | USB vendor ID in hexadecimal      | user    | Not        |         |
|                   | format (0000-ffff).               |         | Specified  |         |
+-------------------+-----------------------------------+---------+------------+---------+

