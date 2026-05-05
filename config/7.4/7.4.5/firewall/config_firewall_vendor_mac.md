# config firewall vendor-mac

Show vendor and the MAC address they have. Read-only.

## Syntax

```
config firewall vendor-mac
    Description: Show vendor and the MAC address they have. Read-only.
    edit <id>
        set mac-number {integer}
        set name {string}
        set obsolete {integer}
    next
end
```

## Parameters

+------------+-----------------------------------+---------+------------+---------+
| Parameter  | Description                       | Type    | Size       | Default |
+============+===================================+=========+============+=========+
| id         | Vendor ID. Read-only.             | integer | Minimum    | 0       |
|            |                                   |         | value: 0   |         |
|            |                                   |         | Maximum    |         |
|            |                                   |         | value:     |         |
|            |                                   |         | 4294967295 |         |
+------------+-----------------------------------+---------+------------+---------+
| mac-number | Total number of MAC addresses.    | integer | Minimum    | 0       |
|            | Read-only.                        |         | value: 0   |         |
|            |                                   |         | Maximum    |         |
|            |                                   |         | value:     |         |
|            |                                   |         | 4294967295 |         |
+------------+-----------------------------------+---------+------------+---------+
| name       | Vendor name. Read-only.           | string  | Maximum    |         |
|            |                                   |         | length: 63 |         |
+------------+-----------------------------------+---------+------------+---------+
| obsolete   | Indicates whether the Vendor ID   | integer | Minimum    | 0       |
|            | can be used. Read-only.           |         | value: 0   |         |
|            |                                   |         | Maximum    |         |
|            |                                   |         | value: 255 |         |
+------------+-----------------------------------+---------+------------+---------+

