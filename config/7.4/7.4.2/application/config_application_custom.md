# config application custom

Configure custom application signatures.

## Syntax

```
config application custom
    Description: Configure custom application signatures.
    edit <tag>
        set behavior {user}
        set category {integer}
        set comment {string}
        set id {integer}
        set protocol {user}
        set signature {var-string}
        set technology {user}
        set vendor {user}
    next
end
```

## Parameters

+------------+-----------------------------------+------------+------------+---------+
| Parameter  | Description                       | Type       | Size       | Default |
+============+===================================+============+============+=========+
| behavior   | Custom application signature      | user       | Not        |         |
|            | behavior.                         |            | Specified  |         |
+------------+-----------------------------------+------------+------------+---------+
| category   | Custom application category ID    | integer    | Minimum    | 0       |
|            | (use ? to view available          |            | value: 0   |         |
|            | options).                         |            | Maximum    |         |
|            |                                   |            | value:     |         |
|            |                                   |            | 4294967295 |         |
+------------+-----------------------------------+------------+------------+---------+
| comment    | Comment.                          | string     | Maximum    |         |
|            |                                   |            | length: 63 |         |
+------------+-----------------------------------+------------+------------+---------+
| id         | Custom application category ID    | integer    | Minimum    | 0       |
|            | (use ? to view available          |            | value: 0   |         |
|            | options).                         |            | Maximum    |         |
|            |                                   |            | value:     |         |
|            |                                   |            | 4294967295 |         |
+------------+-----------------------------------+------------+------------+---------+
| protocol   | Custom application signature      | user       | Not        |         |
|            | protocol.                         |            | Specified  |         |
+------------+-----------------------------------+------------+------------+---------+
| signature  | The text that makes up the actual | var-string | Maximum    |         |
|            | custom application signature.     |            | length:    |         |
|            |                                   |            | 4095       |         |
+------------+-----------------------------------+------------+------------+---------+
| tag        | Signature tag.                    | string     | Maximum    |         |
|            |                                   |            | length: 63 |         |
+------------+-----------------------------------+------------+------------+---------+
| technology | Custom application signature      | user       | Not        |         |
|            | technology.                       |            | Specified  |         |
+------------+-----------------------------------+------------+------------+---------+
| vendor     | Custom application signature      | user       | Not        |         |
|            | vendor.                           |            | Specified  |         |
+------------+-----------------------------------+------------+------------+---------+

