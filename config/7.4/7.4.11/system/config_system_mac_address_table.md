# config system mac-address-table

Configure MAC address tables.

## Syntax

```
config system mac-address-table
    Description: Configure MAC address tables.
    edit <mac>
        set interface {string}
        set reply-substitute {mac-address}
    next
end
```

## Parameters

+------------------+-----------------------------------+-------------+-----------+-------------------+
| Parameter        | Description                       | Type        | Size      | Default           |
+==================+===================================+=============+===========+===================+
| interface        | Interface name.                   | string      | Maximum   |                   |
|                  |                                   |             | length:   |                   |
|                  |                                   |             | 35        |                   |
+------------------+-----------------------------------+-------------+-----------+-------------------+
| mac              | MAC address.                      | mac-address | Not       | 00:00:00:00:00:00 |
|                  |                                   |             | Specified |                   |
+------------------+-----------------------------------+-------------+-----------+-------------------+
| reply-substitute | New MAC for reply traffic.        | mac-address | Not       | 00:00:00:00:00:00 |
|                  |                                   |             | Specified |                   |
+------------------+-----------------------------------+-------------+-----------+-------------------+

