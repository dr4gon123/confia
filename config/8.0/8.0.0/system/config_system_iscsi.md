# config system iscsi

Configure system iSCSI.

## Syntax

```
config system iscsi
    Description: Configure system iSCSI.
    edit <name>
        set ip {ipv4-address}
        set iqn {string}
        set port {integer}
    next
end
```

## Parameters

+-----------+-----------------------------------+--------------+-----------+---------+
| Parameter | Description                       | Type         | Size      | Default |
+===========+===================================+==============+===========+=========+
| ip        | iSCSI IP address.                 | ipv4-address | Not       | 0.0.0.0 |
|           |                                   |              | Specified |         |
+-----------+-----------------------------------+--------------+-----------+---------+
| iqn       | iSCSI qualified name.             | string       | Maximum   |         |
|           |                                   |              | length:   |         |
|           |                                   |              | 127       |         |
+-----------+-----------------------------------+--------------+-----------+---------+
| name      | iSCSI name.                       | string       | Maximum   |         |
|           |                                   |              | length:   |         |
|           |                                   |              | 35        |         |
+-----------+-----------------------------------+--------------+-----------+---------+
| port      | iSCSI port number.                | integer      | Minimum   | 3260    |
|           |                                   |              | value: 1  |         |
|           |                                   |              | Maximum   |         |
|           |                                   |              | value:    |         |
|           |                                   |              | 65535     |         |
+-----------+-----------------------------------+--------------+-----------+---------+

