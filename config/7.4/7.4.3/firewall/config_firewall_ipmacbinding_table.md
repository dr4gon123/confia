# config firewall ipmacbinding table

Configure IP to MAC address pairs in the IP/MAC binding table.

## Syntax

```
config firewall ipmacbinding table
    Description: Configure IP to MAC address pairs in the IP/MAC binding table.
    edit <seq-num>
        set ip {ipv4-address}
        set mac {mac-address}
        set name {string}
        set status [enable|disable]
    next
end
```

## Parameters

+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter | Description                       | Type               | Size               | Default            |
+===========+===================================+====================+====================+====================+
| ip        | IPv4 address portion of the pair  | ipv4-address       | Not Specified      | 0.0.0.0            |
|           | (format: xxx.xxx.xxx.xxx).        |                    |                    |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| mac       | MAC address portion of the pair   | mac-address        | Not Specified      | 00:00:00:00:00:00  |
|           | (format = xx:xx:xx:xx:xx:xx in    |                    |                    |                    |
|           | hexadecimal).                     |                    |                    |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| name      | Name of the pair.                 | string             | Maximum length: 35 | noname             |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| seq-num   | Entry number.                     | integer            | Minimum value: 0   | 0                  |
|           |                                   |                    | Maximum value:     |                    |
|           |                                   |                    | 4294967295         |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| status    | Enable/disable this IP-mac        | option             | \-                 | disable            |
|           | binding pair.                     |                    |                    |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
|           | +-------------+--------------------------------------------------------+                         |
|           | | Option      | Description                                            |                         |
|           | +=============+========================================================+                         |
|           | | *enable*    | Enable this IP-mac binding pair.                       |                         |
|           | +-------------+--------------------------------------------------------+                         |
|           | | *disable*   | Disable this IP-mac binding pair.                      |                         |
|           | +-------------+--------------------------------------------------------+                         |
+-----------+--------------------------------------------------------------------------------------------------+

