# config system arp-table

Configure ARP table.

## Syntax

```
config system arp-table
    Description: Configure ARP table.
    edit <id>
        set interface {string}
        set ip {ipv4-address}
        set mac {mac-address}
    next
end
```

## Parameters

+-----------+-----------------------------------+--------------+------------+-------------------+
| Parameter | Description                       | Type         | Size       | Default           |
+===========+===================================+==============+============+===================+
| id        | Unique integer ID of the entry.   | integer      | Minimum    | 0                 |
|           |                                   |              | value: 0   |                   |
|           |                                   |              | Maximum    |                   |
|           |                                   |              | value:     |                   |
|           |                                   |              | 4294967295 |                   |
+-----------+-----------------------------------+--------------+------------+-------------------+
| interface | Interface name.                   | string       | Maximum    |                   |
|           |                                   |              | length: 15 |                   |
+-----------+-----------------------------------+--------------+------------+-------------------+
| ip        | IP address.                       | ipv4-address | Not        | 0.0.0.0           |
|           |                                   |              | Specified  |                   |
+-----------+-----------------------------------+--------------+------------+-------------------+
| mac       | MAC address.                      | mac-address  | Not        | 00:00:00:00:00:00 |
|           |                                   |              | Specified  |                   |
+-----------+-----------------------------------+--------------+------------+-------------------+

