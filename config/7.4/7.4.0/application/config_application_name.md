# config application name

Configure application signatures.

## Syntax

```
config application name
    Description: Configure application signatures.
    edit <name>
        set behavior {user}
        set category {integer}
        set id {integer}
        config metadata
            Description: Meta data.
            edit <id>
                set metaid {integer}
                set valueid {integer}
            next
        end
        config parameters
            Description: Application parameters.
            edit <name>
                set default value {string}
            next
        end
        set popularity {integer}
        set protocol {user}
        set risk {integer}
        set technology {user}
        set vendor {user}
        set weight {integer}
    next
end
```

## Parameters

+------------+-----------------------------------+---------+------------+---------+
| Parameter  | Description                       | Type    | Size       | Default |
+============+===================================+=========+============+=========+
| behavior   | Application behavior.             | user    | Not        |         |
|            |                                   |         | Specified  |         |
+------------+-----------------------------------+---------+------------+---------+
| category   | Application category ID.          | integer | Minimum    | 0       |
|            |                                   |         | value: 0   |         |
|            |                                   |         | Maximum    |         |
|            |                                   |         | value:     |         |
|            |                                   |         | 4294967295 |         |
+------------+-----------------------------------+---------+------------+---------+
| id         | Application ID.                   | integer | Minimum    | 0       |
|            |                                   |         | value: 0   |         |
|            |                                   |         | Maximum    |         |
|            |                                   |         | value:     |         |
|            |                                   |         | 4294967295 |         |
+------------+-----------------------------------+---------+------------+---------+
| name       | Application name.                 | string  | Maximum    |         |
|            |                                   |         | length: 63 |         |
+------------+-----------------------------------+---------+------------+---------+
| popularity | Application popularity.           | integer | Minimum    | 0       |
|            |                                   |         | value: 0   |         |
|            |                                   |         | Maximum    |         |
|            |                                   |         | value: 255 |         |
+------------+-----------------------------------+---------+------------+---------+
| protocol   | Application protocol.             | user    | Not        |         |
|            |                                   |         | Specified  |         |
+------------+-----------------------------------+---------+------------+---------+
| risk       | Application risk.                 | integer | Minimum    | 0       |
|            |                                   |         | value: 0   |         |
|            |                                   |         | Maximum    |         |
|            |                                   |         | value: 255 |         |
+------------+-----------------------------------+---------+------------+---------+
| technology | Application technology.           | user    | Not        |         |
|            |                                   |         | Specified  |         |
+------------+-----------------------------------+---------+------------+---------+
| vendor     | Application vendor.               | user    | Not        |         |
|            |                                   |         | Specified  |         |
+------------+-----------------------------------+---------+------------+---------+
| weight     | Application weight.               | integer | Minimum    | 0       |
|            |                                   |         | value: 0   |         |
|            |                                   |         | Maximum    |         |
|            |                                   |         | value: 255 |         |
+------------+-----------------------------------+---------+------------+---------+

