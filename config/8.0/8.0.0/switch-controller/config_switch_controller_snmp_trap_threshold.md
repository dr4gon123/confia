# config switch-controller snmp-trap-threshold

Configure FortiSwitch SNMP trap threshold values globally.

## Syntax

```
config switch-controller snmp-trap-threshold
    Description: Configure FortiSwitch SNMP trap threshold values globally.
    set trap-high-cpu-threshold {integer}
    set trap-log-full-threshold {integer}
    set trap-low-memory-threshold {integer}
end
```

## Parameters

+---------------------------+-----------------------------------+---------+------------+---------+
| Parameter                 | Description                       | Type    | Size       | Default |
+===========================+===================================+=========+============+=========+
| trap-high-cpu-threshold   | CPU usage when trap is sent.      | integer | Minimum    | 80      |
|                           |                                   |         | value: 0   |         |
|                           |                                   |         | Maximum    |         |
|                           |                                   |         | value:     |         |
|                           |                                   |         | 4294967295 |         |
+---------------------------+-----------------------------------+---------+------------+---------+
| trap-log-full-threshold   | Log disk usage when trap is sent. | integer | Minimum    | 90      |
|                           |                                   |         | value: 0   |         |
|                           |                                   |         | Maximum    |         |
|                           |                                   |         | value:     |         |
|                           |                                   |         | 4294967295 |         |
+---------------------------+-----------------------------------+---------+------------+---------+
| trap-low-memory-threshold | Memory usage when trap is sent.   | integer | Minimum    | 80      |
|                           |                                   |         | value: 0   |         |
|                           |                                   |         | Maximum    |         |
|                           |                                   |         | value:     |         |
|                           |                                   |         | 4294967295 |         |
+---------------------------+-----------------------------------+---------+------------+---------+

