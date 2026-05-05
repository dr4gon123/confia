# config application name

Configure application signatures. Read-only.

## Syntax

```
config application name
    Description: Configure application signatures. Read-only.
    edit <name>
        set behavior {user}
        set category {integer}
        set id {integer}
        config metadata
            Description: Meta data. Read-only.
            edit <id>
                set metaid {integer}
                set valueid {integer}
            next
        end
        config parameters
            Description: Application parameters. Read-only.
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
| behavior   | Application behavior. Read-only.  | user    | Not        |         |
|            |                                   |         | Specified  |         |
+------------+-----------------------------------+---------+------------+---------+
| category   | Application category ID.          | integer | Minimum    | 0       |
|            | Read-only.                        |         | value: 0   |         |
|            |                                   |         | Maximum    |         |
|            |                                   |         | value:     |         |
|            |                                   |         | 4294967295 |         |
+------------+-----------------------------------+---------+------------+---------+
| id         | Application ID. Read-only.        | integer | Minimum    | 0       |
|            |                                   |         | value: 0   |         |
|            |                                   |         | Maximum    |         |
|            |                                   |         | value:     |         |
|            |                                   |         | 4294967295 |         |
+------------+-----------------------------------+---------+------------+---------+
| name       | Application name.                 | string  | Maximum    |         |
|            |                                   |         | length: 63 |         |
+------------+-----------------------------------+---------+------------+---------+
| popularity | Application popularity.           | integer | Minimum    | 0       |
|            | Read-only.                        |         | value: 0   |         |
|            |                                   |         | Maximum    |         |
|            |                                   |         | value: 255 |         |
+------------+-----------------------------------+---------+------------+---------+
| protocol   | Application protocol. Read-only.  | user    | Not        |         |
|            |                                   |         | Specified  |         |
+------------+-----------------------------------+---------+------------+---------+
| risk       | Application risk. Read-only.      | integer | Minimum    | 0       |
|            |                                   |         | value: 0   |         |
|            |                                   |         | Maximum    |         |
|            |                                   |         | value: 255 |         |
+------------+-----------------------------------+---------+------------+---------+
| technology | Application technology.           | user    | Not        |         |
|            | Read-only.                        |         | Specified  |         |
+------------+-----------------------------------+---------+------------+---------+
| vendor     | Application vendor. Read-only.    | user    | Not        |         |
|            |                                   |         | Specified  |         |
+------------+-----------------------------------+---------+------------+---------+
| weight     | Application weight. Read-only.    | integer | Minimum    | 0       |
|            |                                   |         | value: 0   |         |
|            |                                   |         | Maximum    |         |
|            |                                   |         | value: 255 |         |
+------------+-----------------------------------+---------+------------+---------+

