# config system ipv6-neighbor-cache

Configure IPv6 neighbor cache table.

## Syntax

```
config system ipv6-neighbor-cache
    Description: Configure IPv6 neighbor cache table.
    edit <id>
        set interface {string}
        set ipv6 {ipv6-address}
        set mac {mac-address}
    next
end
```

## Parameters

+-----------+-------------------------------------------+--------------+------------+-------------------+
| Parameter | Description                               | Type         | Size       | Default           |
+===========+===========================================+==============+============+===================+
| id        | Unique integer ID of the entry.           | integer      | Minimum    | 0                 |
|           |                                           |              | value: 0   |                   |
|           |                                           |              | Maximum    |                   |
|           |                                           |              | value:     |                   |
|           |                                           |              | 4294967295 |                   |
+-----------+-------------------------------------------+--------------+------------+-------------------+
| interface | Select the associated interface name from | string       | Maximum    |                   |
|           | available options.                        |              | length: 15 |                   |
+-----------+-------------------------------------------+--------------+------------+-------------------+
| ipv6      | IPv6 address (format:                     | ipv6-address | Not        | ::                |
|           | xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx). |              | Specified  |                   |
+-----------+-------------------------------------------+--------------+------------+-------------------+
| mac       | MAC address (format: xx:xx:xx:xx:xx:xx).  | mac-address  | Not        | 00:00:00:00:00:00 |
|           |                                           |              | Specified  |                   |
+-----------+-------------------------------------------+--------------+------------+-------------------+

