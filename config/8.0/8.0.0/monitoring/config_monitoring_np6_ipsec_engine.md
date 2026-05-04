# config monitoring np6-ipsec-engine

Configure NP6 IPsec engine status monitoring.

## Syntax

```
config monitoring np6-ipsec-engine
    Description: Configure NP6 IPsec engine status monitoring.
    set interval {integer}
    set status [enable|disable]
    set threshold {user}
end
```

## Parameters

+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter | Description                       | Type               | Size               | Default            |
+===========+===================================+====================+====================+====================+
| interval  | IPsec engine status check         | integer            | Minimum value: 1   | 1                  |
|           | interval (1 - 60 seconds, default |                    | Maximum value: 60  |                    |
|           | = 1).                             |                    |                    |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| status    | Enable/disable NP6 IPsec engine   | option             | \-                 | disable            |
|           | status monitoring.                |                    |                    |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
|           | +-------------+--------------------------------------------------------+                         |
|           | | Option      | Description                                            |                         |
|           | +=============+========================================================+                         |
|           | | *enable*    | Enable setting.                                        |                         |
|           | +-------------+--------------------------------------------------------+                         |
|           | | *disable*   | Disable setting.                                       |                         |
|           | +-------------+--------------------------------------------------------+                         |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| threshold | IPsec engine status check         | user               | Not Specified      |                    |
|           | threshold (x x x x x x x x, 8     |                    |                    |                    |
|           | integers from \<1\> to \<255\>,   |                    |                    |                    |
|           | default = 15 15 12 12 8 8 5 5).   |                    |                    |                    |
|           | Example: Log is generated if      |                    |                    |                    |
|           | IPsec engine 0 is busy each of    |                    |                    |                    |
|           | every 15 consecutive interval     |                    |                    |                    |
|           | checks.                           |                    |                    |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+

