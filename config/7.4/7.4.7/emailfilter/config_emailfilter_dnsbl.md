# config emailfilter dnsbl

Configure AntiSpam DNSBL/ORBL.

## Syntax

```
config emailfilter dnsbl
    Description: Configure AntiSpam DNSBL/ORBL.
    edit <id>
        set comment {var-string}
        config entries
            Description: Spam filter DNSBL and ORBL server.
            edit <id>
                set action [reject|spam]
                set server {string}
                set status [enable|disable]
            next
        end
        set name {string}
    next
end
```

## Parameters

+-----------+-----------------------------------+------------+------------+---------+
| Parameter | Description                       | Type       | Size       | Default |
+===========+===================================+============+============+=========+
| comment   | Optional comments.                | var-string | Maximum    |         |
|           |                                   |            | length:    |         |
|           |                                   |            | 255        |         |
+-----------+-----------------------------------+------------+------------+---------+
| id        | ID.                               | integer    | Minimum    | 0       |
|           |                                   |            | value: 0   |         |
|           |                                   |            | Maximum    |         |
|           |                                   |            | value:     |         |
|           |                                   |            | 4294967295 |         |
+-----------+-----------------------------------+------------+------------+---------+
| name      | Name of table.                    | string     | Maximum    |         |
|           |                                   |            | length: 63 |         |
+-----------+-----------------------------------+------------+------------+---------+

