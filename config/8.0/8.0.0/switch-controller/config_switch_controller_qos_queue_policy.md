# config switch-controller qos queue-policy

Configure FortiSwitch QoS egress queue policy.

## Syntax

```
config switch-controller qos queue-policy
    Description: Configure FortiSwitch QoS egress queue policy.
    edit <name>
        config cos-queue
            Description: COS queue configuration.
            edit <name>
                set description {string}
                set drop-policy [taildrop|weighted-random-early-detection]
                set ecn [disable|enable]
                set max-rate {integer}
                set max-rate-percent {integer}
                set min-rate {integer}
                set min-rate-percent {integer}
                set weight {integer}
            next
        end
        set rate-by [kbps|percent]
        set schedule [strict|round-robin|...]
    next
end
```

## Parameters

+-----------+-----------------------------------+----------------------+----------------------+----------------------+
| Parameter | Description                       | Type                 | Size                 | Default              |
+===========+===================================+======================+======================+======================+
| name      | QoS policy name.                  | string               | Maximum length: 63   |                      |
+-----------+-----------------------------------+----------------------+----------------------+----------------------+
| rate-by   | COS queue rate by kbps or         | option               | \-                   | kbps                 |
|           | percent.                          |                      |                      |                      |
+-----------+-----------------------------------+----------------------+----------------------+----------------------+
|           | +-------------+--------------------------------------------------------+                               |
|           | | Option      | Description                                            |                               |
|           | +=============+========================================================+                               |
|           | | *kbps*      | Rate by kbps.                                          |                               |
|           | +-------------+--------------------------------------------------------+                               |
|           | | *percent*   | Rate by percent.                                       |                               |
|           | +-------------+--------------------------------------------------------+                               |
+-----------+-----------------------------------+----------------------+----------------------+----------------------+
| schedule  | COS queue scheduling.             | option               | \-                   | round-robin          |
+-----------+-----------------------------------+----------------------+----------------------+----------------------+
|           | +---------------+--------------------------------------------------------+                             |
|           | | Option        | Description                                            |                             |
|           | +===============+========================================================+                             |
|           | | *strict*      | Strict scheduling (queue7: highest priority, queue0:   |                             |
|           | |               | lowest priority).                                      |                             |
|           | +---------------+--------------------------------------------------------+                             |
|           | | *round-robin* | Round robin scheduling.                                |                             |
|           | +---------------+--------------------------------------------------------+                             |
|           | | *weighted*    | Weighted round robin scheduling.                       |                             |
|           | +---------------+--------------------------------------------------------+                             |
+-----------+--------------------------------------------------------------------------------------------------------+

