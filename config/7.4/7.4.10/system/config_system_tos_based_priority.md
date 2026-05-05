# config system tos-based-priority

Configure Type of Service (ToS) based priority table to set network traffic priorities.

## Syntax

```
config system tos-based-priority
    Description: Configure Type of Service (ToS) based priority table to set network traffic priorities.
    edit <id>
        set priority [low|medium|...]
        set tos {integer}
    next
end
```

## Parameters

+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter | Description                       | Type               | Size               | Default            |
+===========+===================================+====================+====================+====================+
| id        | Item ID.                          | integer            | Minimum value: 0   | 0                  |
|           |                                   |                    | Maximum value:     |                    |
|           |                                   |                    | 4294967295         |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| priority  | ToS based priority level to low,  | option             | \-                 | high               |
|           | medium or high (these priorities  |                    |                    |                    |
|           | match firewall traffic shaping    |                    |                    |                    |
|           | priorities) (default = medium).   |                    |                    |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
|           | +-------------+--------------------------------------------------------+                         |
|           | | Option      | Description                                            |                         |
|           | +=============+========================================================+                         |
|           | | *low*       | Low priority.                                          |                         |
|           | +-------------+--------------------------------------------------------+                         |
|           | | *medium*    | Medium priority.                                       |                         |
|           | +-------------+--------------------------------------------------------+                         |
|           | | *high*      | High priority.                                         |                         |
|           | +-------------+--------------------------------------------------------+                         |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| tos       | Value of the ToS byte in the IP   | integer            | Minimum value: 0   | 0                  |
|           | datagram header (0-15, 8:         |                    | Maximum value: 15  |                    |
|           | minimize delay, 4: maximize       |                    |                    |                    |
|           | throughput, 2: maximize           |                    |                    |                    |
|           | reliability, 1: minimize monetary |                    |                    |                    |
|           | cost, and 0: default service).    |                    |                    |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+

