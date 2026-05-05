# config system snmp rmon-stat

SNMP Remote Network Monitoring (RMON) Ethernet statistics configuration.

## Syntax

```
config system snmp rmon-stat
    Description: SNMP Remote Network Monitoring (RMON) Ethernet statistics configuration.
    edit <id>
        set owner {string}
        set source {string}
    next
end
```

## Parameters

+-----------+-----------------------------------+---------+------------+---------+
| Parameter | Description                       | Type    | Size       | Default |
+===========+===================================+=========+============+=========+
| id        | RMON Ethernet statistics entry    | integer | Minimum    | 0       |
|           | ID.                               |         | value: 0   |         |
|           |                                   |         | Maximum    |         |
|           |                                   |         | value:     |         |
|           |                                   |         | 4294967295 |         |
+-----------+-----------------------------------+---------+------------+---------+
| owner     | Owner of the Ethernet statistics  | string  | Maximum    |         |
|           | entry.                            |         | length:    |         |
|           |                                   |         | 127        |         |
+-----------+-----------------------------------+---------+------------+---------+
| source    | Data source of the Ethernet       | string  | Maximum    |         |
|           | statistics entry.                 |         | length: 15 |         |
+-----------+-----------------------------------+---------+------------+---------+

