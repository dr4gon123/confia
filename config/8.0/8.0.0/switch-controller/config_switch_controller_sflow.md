# config switch-controller sflow

Configure FortiSwitch sFlow.

## Syntax

```
config switch-controller sflow
    Description: Configure FortiSwitch sFlow.
    set collector-ip {ipv4-address}
    set collector-port {integer}
end
```

## Parameters

+----------------+-----------------------------------+--------------+-----------+---------+
| Parameter      | Description                       | Type         | Size      | Default |
+================+===================================+==============+===========+=========+
| collector-ip   | Collector IP.                     | ipv4-address | Not       | 0.0.0.0 |
|                |                                   |              | Specified |         |
+----------------+-----------------------------------+--------------+-----------+---------+
| collector-port | SFlow collector port (0 - 65535). | integer      | Minimum   | 6343    |
|                |                                   |              | value: 0  |         |
|                |                                   |              | Maximum   |         |
|                |                                   |              | value:    |         |
|                |                                   |              | 65535     |         |
+----------------+-----------------------------------+--------------+-----------+---------+

